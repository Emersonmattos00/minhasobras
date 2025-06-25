export default function Preferencias() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Suas Preferências</h1>
      <div className="bg-white rounded p-4 shadow mt-4">
        <h2>Gêneros Favoritos</h2>
        <ul>
          <li>Ficção</li>
          <li>Poesia</li>
        </ul>
      </div>
      <div className="bg-white rounded p-4 shadow mt-4">
        <h2>Recomendações para Você</h2>
        <ul>
          <li>Letras Vivas</li>
          <li>Dom Casmurro</li>
        </ul>
      </div>
    </div>
  );
}
