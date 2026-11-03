import { useCallback, useEffect, useRef, useState } from "react";

export function useImageLoaded(src: string) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = ref.current;
    if (image?.complete && image.naturalWidth > 0) {
      setLoaded(true);
      return;
    }
    setLoaded(false);
  }, [src]);

  const onLoad = useCallback(() => setLoaded(true), []);
  const onError = useCallback(() => setLoaded(true), []);

  return { ref, loaded, onLoad, onError };
}
