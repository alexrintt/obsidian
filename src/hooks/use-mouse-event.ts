import * as React from "react";

export function useMouseMoveEvent(): MouseEvent | undefined {
  const [mousePosition, setMousePosition] = React.useState<MouseEvent>();

  React.useEffect(() => {
    function trackMousePosition(e: MouseEvent) {
      // [mousePosition, setMousePosition].current = e;
      setMousePosition(e);
    }

    if (typeof window === "undefined") {
      return;
    }

    document.addEventListener("mousemove", trackMousePosition);

    return () => document.removeEventListener("mousemove", trackMousePosition);
  }, []);

  return mousePosition;
}
