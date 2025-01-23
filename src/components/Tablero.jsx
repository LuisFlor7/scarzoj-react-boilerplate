import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaintbrush,
  faEraser,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import tablero from "../Media/Paises/Europa Original Definitivo w Rusia & Kosovo.png";

import "./Tablero.css";

const Tablero = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("pen"); // "pen" or "eraser"
  const navigate = useNavigate();

  useEffect(() => {
    // Configuración inicial del canvas
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;

    // Restaurar contenido guardado
    const savedCanvas = localStorage.getItem("tableroCanvas");
    if (savedCanvas) {
      const image = new Image();
      image.src = savedCanvas;
      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  }, []);

  const saveCanvasToLocalStorage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL();
    localStorage.setItem("tableroCanvas", dataURL);
  };

  const startDrawing = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.nativeEvent.offsetX || e.touches[0].clientX - rect.left;
    const offsetY = e.nativeEvent.offsetY || e.touches[0].clientY - rect.top;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    saveCanvasToLocalStorage();
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.nativeEvent.offsetX || e.touches[0].clientX - rect.left;
    const offsetY = e.nativeEvent.offsetY || e.touches[0].clientY - rect.top;

    if (tool === "pen") {
      contextRef.current.globalCompositeOperation = "source-over"; // Dibujo normal
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    } else if (tool === "eraser") {
      contextRef.current.globalCompositeOperation = "destination-out"; // Borrado
      contextRef.current.arc(offsetX, offsetY, 10, 0, Math.PI * 2, false);
      contextRef.current.fill();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current; // Asegurarse de que 'canvas' está definido
    const preventScroll = (e) => {
      if (e.target === canvas) {
        e.preventDefault();
      }
    };

    // Añade el listener para prevenir scroll
    document.addEventListener("touchmove", preventScroll, { passive: false });

    // Limpia el listener al desmontar el componente
    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const selectTool = (toolName) => {
    setTool(toolName);
    if (toolName === "pen") {
      contextRef.current.strokeStyle = "black";
      contextRef.current.lineWidth = 5;
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("tableroCanvas"); // Eliminar contenido guardado
  };

  return (
    <div
      className="tablero-container"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Botón de volver */}
      <Button
        variant="info"
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "10px",
          zIndex: 3,
          backgroundColor: "#007bff",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white" }} />
      </Button>

      {/* Herramientas */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "10px",
          display: "flex",
          gap: "10px",
          zIndex: 3,
        }}
      >
        <Button
          variant="info"
          onClick={() => selectTool("pen")}
          style={{
            backgroundColor: tool === "pen" ? "#4CAF50" : "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faPaintbrush} /> Dibujar
        </Button>
        <Button
          variant="info"
          onClick={() => selectTool("eraser")}
          style={{
            backgroundColor: tool === "eraser" ? "#FF5722" : "white",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faEraser} /> Borrar
        </Button>
        <Button
          variant="danger"
          onClick={clearCanvas}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Limpiar Todo
        </Button>
      </div>

      {/* Canvas y fondo */}
      <div
        className="image-wrapper"
        style={{
          backgroundImage: `url("${tablero}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={finishDrawing}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: tool === "pen" ? "crosshair" : "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Tablero;
