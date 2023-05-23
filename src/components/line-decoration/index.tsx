import React, { CanvasHTMLAttributes, useEffect, useMemo, useRef } from "react";
import "./style.css";

export default function LineDecoration() {
  const isSSR = typeof window === "undefined";

  const canvasRef = useRef<HTMLCanvasElement>(null);

  function draw(
    ctx: CanvasRenderingContext2D,
    frameCount: number,
    value: number,
    prevValue: number,
    width: number,
    height: number
  ) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const gap = Math.min(width, height) / 10;
    const restX = width % gap;
    const restY = height % gap;
    const countX = Math.ceil(width / gap);
    const countY = Math.ceil(height / gap);

    const x = (frameCount % 1000) / 1000;

    // f: y=-2 x^(2)+2 x
    // https://www.geogebra.org/calculator
    const animation = (-2 * x ** 2 + 2 * x) / 2;

    function getCssVar(variable: string) {
      const style = getComputedStyle(document.body);
      return style.getPropertyValue(variable);
    }

    function drawLine() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = getCssVar("--border-color");
      ctx.fillStyle = getCssVar("--border-color");

      for (let i = 0; i < countX; i++) {
        const x = i * gap + restX / 2;

        ctx.globalAlpha = 1 * animation;

        ctx.beginPath();
        ctx.setLineDash([5]);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let i = 0; i < countY; i++) {
        const y = i * gap + restY / 2;

        ctx.globalAlpha = 1 * animation;

        ctx.beginPath();
        ctx.setLineDash([5]);
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    drawLine();
  }

  useEffect(() => {
    if (isSSR) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const boundingRect = canvas.getBoundingClientRect();

    const width = (canvas.width = boundingRect.width);
    const height = (canvas.height = boundingRect.height);

    const ctx = canvas.getContext("2d")!;

    let frameCount = 0;
    let animationFrameId: number;
    let startTime = Date.now();
    let value = 0;

    function render() {
      const frameTime = Date.now();
      frameCount++;

      const elapsed = frameTime - startTime;

      const prevValue = value;
      value = (elapsed % 3000) / 3000;

      draw(ctx, frameCount, value, prevValue, width, height);
      animationFrameId = window.requestAnimationFrame(render);
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  if (isSSR) {
    return <></>;
  }

  return <canvas className="line-decoration-canvas-element" ref={canvasRef} />;
}
