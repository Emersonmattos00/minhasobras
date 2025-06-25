"use client";
import { useState } from "react";
import { saveAuthor } from "@/lib/authors";

export default function NewAuthor() {
  const [name, setName] = useState("");

  async function handleSave() {
    await saveAuthor({ name });
    alert("Autor salvo com sucesso!");
  }

  return (
    <div>
      <h1>Cadastrar Autor</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Autor"
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}
