import React, { useRef, useState, useEffect } from "react";
import "./DibujarTablero.css";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("pen"); // Herramienta actual: "pen" o "eraser"

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || tool !== "pen") return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const erase = ({ nativeEvent }) => {
    if (!isDrawing || tool !== "eraser") return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.clearRect(offsetX - 10, offsetY - 10, 20, 20); // Borrar área pequeña
  };

  const handleMouseMove = (e) => {
    if (tool === "pen") {
      draw(e);
    } else if (tool === "eraser") {
      erase(e);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="drawing-container">
      <div className="drawing-toolbar">
        <button
          className={`tool-button ${tool === "pen" ? "active" : ""}`}
          onClick={() => setTool("pen")}
        >
          ✏️ Dibujar
        </button>
        <button
          className={`tool-button ${tool === "eraser" ? "active" : ""}`}
          onClick={() => setTool("eraser")}
        >
          🧹 Borrar
        </button>
        <button className="tool-button clear" onClick={clearCanvas}>
          🗑️ Limpiar
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={handleMouseMove}
        onMouseLeave={finishDrawing}
      />
    </div>
  );
};

export default DrawingCanvas;
