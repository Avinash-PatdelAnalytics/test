// useResizeObserver.ts
import { useEffect, useRef, useState } from "react";

function useResizeObserver(ref: React.RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (!Array.isArray(entries)) return;

      const entry = entries[0];
      if (entry && entry.contentRect) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (ref.current) {
      resizeObserverRef.current.observe(ref.current);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [ref]);
  console.log(dimensions);
  return dimensions;
}

export default useResizeObserver;
