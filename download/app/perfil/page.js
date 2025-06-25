import Watermark from "../../components/Watermark";

export default function Perfil() {
  return (
    <div className="relative min-h-screen flex flex-col p-4">
      <Watermark />
      <div className="bg-white rounded-2xl p-6 shadow-lg z-10">
        <h1 className="text-2xl font-bold">Perfil</h1>
        <p>Gerencie suas informações e suas obras aqui!</p>
      </div>
    </div>
  );
}
