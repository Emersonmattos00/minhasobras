import React, { useState } from "react";
import TextHighlight from "./TextHighlight";

export function ReaderLayout({ title, pageText }) {
  const [annotations, setAnnotations] = useState([]);

  const handleHighlightClick = (highlighted) => {
    const note = prompt(`Anotação para "${highlighted}"?`);
    if (note) {
      setAnnotations([...annotations, { text: highlighted, note }]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3]">
      {/* Cabeçalho */}
      <header className="bg-[#f3e9d3] p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>

      {/* Área do texto do livro */}
      <main className="flex-1 p-8 flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl w-full relative">
          <TextHighlight
            text={pageText}
            highlights={["livro", "leitura", "capítulo"]}
            onHighlightClick={handleHighlightClick}
            highlightStyle={{
              backgroundColor: "#ffeaa7",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />

          {/* Botões flutuantes para navegação */}
          <div className="absolute left-4 top-1/2 flex flex-col space-y-4">
            <button className="bg-[#f3e9d3] p-3 rounded-full shadow-lg hover:shadow-2xl">
              ←
            </button>
            <button className="bg-[#f3e9d3] p-3 rounded-full shadow-lg hover:shadow-2xl">
              →
            </button>
          </div>
        </div>
      </main>

      {/* Anotações no rodapé */}
      {annotations.length > 0 && (
        <footer className="bg-[#f9f5ec] p-4">
          <h2 className="font-bold">Anotações</h2>
          <ul className="list-disc pl-5">
            {annotations.map((a, i) => (
              <li key={i}>
                <strong>{a.text}</strong>: {a.note}
              </li>
            ))}
          </ul>
        </footer>
      )}
    </div>
  );
}
