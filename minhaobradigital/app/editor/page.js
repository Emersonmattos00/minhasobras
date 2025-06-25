import Watermark from "../../components/Watermark";
import FloatingButton from "../../components/FloatingButton";

export default function Editor() {
  return (
    <div className="relative min-h-screen flex flex-col p-4">
      <Watermark />
      <div className="bg-white rounded-2xl p-6 shadow-lg z-10">
        <h1 className="text-2xl font-bold">Editor</h1>
        <textarea
          className="w-full h-64 p-3 border rounded focus:outline-none"
          placeholder="Escreva seu texto..."
        />
      </div>
      <FloatingButton text="Publicar" />
    </div>
  );
}
