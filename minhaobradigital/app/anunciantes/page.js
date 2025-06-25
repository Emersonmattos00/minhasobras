export default function Anunciantes() {
  const parceiros = [
    { id: 1, nome: "Editora LivroPronto", destaque: true },
    { id: 2, nome: "Café Literário", destaque: false },
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Parceiros Anunciantes</h1>
      <div className="grid gap-4 mt-4">
        {parceiros.map((p) => (
          <div
            key={p.id}
            className={`rounded p-4 ${
              p.destaque ? "bg-yellow-100" : "bg-white"
            } shadow`}
          >
            <h2 className="font-bold">{p.nome}</h2>
            <p>{p.destaque ? "Anunciante Premium" : "Anunciante"}</p>
            <button className="mt-2 bg-yellow-600 text-white rounded-full px-4 py-2 hover:shadow-xl">
              Ver Anúncios
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
