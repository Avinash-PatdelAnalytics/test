import { useEffect, useRef, useState } from 'react';

function useResizeObserver(ref) {
  const [dimensions, setDimensions] = useState(null);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) return;

      const entry = entries[0];
      if (entry && entry.contentRect) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
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

  return dimensions;
}

export default useResizeObserver;
