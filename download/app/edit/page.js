"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditPage() {
  const [content, setContent] = useState("");

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">✍️ Editar Livro</h1>
      <ReactQuill
        value={content}
        onChange={setContent}
        className="bg-white rounded mt-4"
      />
    </main>
  );
}
