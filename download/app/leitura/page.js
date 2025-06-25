import Watermark from "../../components/Watermark";
import FloatingButton from "../../components/FloatingButton";

export default function Leitura() {
  return (
    <div className="relative min-h-screen flex flex-col p-4">
      <Watermark />
      <div className="bg-white rounded-2xl p-6 shadow-lg z-10">
        <h1 className="text-2xl font-bold">Leitura</h1>
        <p>Exemplo de texto para ler e destacar passagens…</p>
      </div>
      <FloatingButton text="Marcar texto" />
    </div>
  );
}
