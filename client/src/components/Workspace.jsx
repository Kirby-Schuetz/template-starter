import "../App.css";
import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";

export default function Workspace() {
const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  // state management
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  // initial canvas properties
useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalAlpha = lineOpacity;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctxRef.current = ctx;
}, [lineColor, lineOpacity, lineWidth]);

// event handlers
const startDrawing = (e) => {
  ctxRef.current.beginPath();
  ctxRef.current.moveTo(
    e.nativeEvent.offsetX,
    e.nativeEvent.offsetY
  );
  setIsDrawing(true);
};

const endDrawing = () => {
  ctxRef.current.closePath();
  setIsDrawing(false);
};

const draw = (e) => {
  if (!isDrawing) {
    return;
  }
  ctxRef.current.lineTo(
    e.nativeEvent.offsetX,
    e.nativeEvent.offsetY
  );
  ctxRef.current.stroke();
};

return (
  <div>
    <div className="painting-area">
    <Toolbar
      setLineColor={setLineColor}
      setLineWidth={setLineWidth}
      setLineOpacity={setLineOpacity}
      />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width={`1280px`}
        height={`720px`}
        />
      </div>
      </div>
  );
}