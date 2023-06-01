import React, { CanvasHTMLAttributes, useEffect, useMemo, useRef } from "react";
import "./style.css";
import { useMouseMoveEvent } from "../../hooks/use-mouse-event";

export default function LineDecoration() {
  const isSSR = typeof window === "undefined";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMouseMoveEvent();
  const frameCount = useRef(0);

  const draw = React.useCallback(
    (
      ctx: CanvasRenderingContext2D,
      frameCount: number,
      value: number,
      prevValue: number,
      width: number,
      height: number
    ) => {
      if (!mousePosition) return;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const gap = Math.min(width, height) / 10;
      // const dash = gap / 20;
      const dash = undefined;

      const restX = width % gap;
      const restY = height % gap;
      const countX = Math.ceil(width / gap);
      const countY = Math.ceil(height / gap);

      const x = (frameCount % 5000) / 5000;

      // f: y=-2 x^(2)+2 x
      // https://www.geogebra.org/calculator
      const animation = (-2 * x ** 2 + 2 * x) / 2;

      function getCssVar(variable: string) {
        const style = getComputedStyle(document.body);
        return style.getPropertyValue(variable);
      }

      // const alpha = animation;
      const alpha = 0.2;

      // const gradientRadius = 500 * animation * 2;
      const gradientRadius = 500;

      let radialGradient = mousePosition
        ? ctx.createRadialGradient(
            mousePosition.clientX,
            mousePosition.clientY,
            0,
            mousePosition.clientX,
            mousePosition.clientY,
            gradientRadius
          )
        : undefined;

      radialGradient?.addColorStop(0, getCssVar("--border-color"));
      radialGradient?.addColorStop(1, "transparent");

      function drawLine() {
        ctx.lineWidth = 0.5;

        ctx.strokeStyle = radialGradient
          ? radialGradient
          : getCssVar("--border-color");

        for (let i = 0; i < countX; i++) {
          const x = i * gap + restX / 2;

          ctx.globalAlpha = alpha;

          ctx.beginPath();
          if (dash) ctx.setLineDash([dash]);
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        for (let i = 0; i < countY; i++) {
          const y = i * gap + restY / 2;

          ctx.globalAlpha = alpha;

          ctx.beginPath();
          if (dash) ctx.setLineDash([dash]);
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      drawLine();
    },
    [mousePosition]
  );

  useEffect(() => {
    if (isSSR) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const boundingRect = canvas.getBoundingClientRect();

    const width = (canvas.width = boundingRect.width);
    const height = (canvas.height = boundingRect.height);

    const ctx = canvas.getContext("2d")!;

    let animationFrameId: number;
    let startTime = Date.now();
    let value = 0;

    function render() {
      const frameTime = Date.now();
      frameCount.current++;

      const elapsed = frameTime - startTime;

      const prevValue = value;
      value = (elapsed % 3000) / 3000;

      draw(ctx, frameCount.current, value, prevValue, width, height);
      animationFrameId = window.requestAnimationFrame(render);
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef, mousePosition]);

  return <canvas className="line-decoration-canvas-element" ref={canvasRef} />;
}
