import { useEffect, useRef, useState } from "react";

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float y = 1.0 - uv.y;
  float light = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float drift = sin(uTime * 0.07 + fi * 1.4) * 0.07;
    float origin = 0.12 + fi * 0.15 + drift;
    float beam = abs(uv.x - origin - y * (0.12 + fi * 0.015));
    float ray = smoothstep(0.075, 0.0, beam);
    float falloff = pow(y, 0.7);
    float shimmer = 0.7 + 0.3 * sin(y * 16.0 - uTime * 0.32 + fi);
    light += ray * falloff * shimmer;
  }
  vec3 deep = vec3(0.015, 0.04, 0.055);
  vec3 rayColor = vec3(0.55, 0.82, 0.86);
  vec3 color = deep + rayColor * light * 0.18;
  gl_FragColor = vec4(color, clamp(light * 0.28, 0.0, 0.45));
}
`;

export function LightRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERT);
    const fragment = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "uResolution");
    const time = gl.getUniformLocation(program, "uTime");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let frame = 0;
    let visible = document.visibilityState === "visible";
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    const draw = (now: number) => {
      if (visible) {
        gl.uniform2f(resolution, canvas.width, canvas.height);
        gl.uniform1f(time, now * 0.001);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
