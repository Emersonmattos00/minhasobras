"use client";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleUpload = async () => {
    alert("Simulação de envio! Implemente lógica de salvamento no Firestore.");
  };

  return (
    <div className="p-4">
      <h1>Enviar e Publicar Livro</h1>
      <input
        placeholder="Título do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 block mt-2"
      />
      <input
        placeholder="Autor do livro"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 block mt-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Publicar
      </button>
    </div>
  );
}
