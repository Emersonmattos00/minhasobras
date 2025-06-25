export default function Loja() {
  const livros = [
    {
      id: 1,
      titulo: "Letras Vivas",
      autor: "Emerson José de Mello Mattos",
      preco: "R$29,90",
    },
    {
      id: 2,
      titulo: "A Arte de Escrever",
      autor: "Clarice Lispector",
      preco: "R$39,90",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Loja de Livros</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {livros.map((livro) => (
          <div
            key={livro.id}
            className="bg-white rounded p-4 shadow flex flex-col"
          >
            <h2 className="font-bold">{livro.titulo}</h2>
            <p>{livro.autor}</p>
            <span className="font-bold text-green-600">{livro.preco}</span>
            <button className="mt-2 bg-yellow-600 text-white rounded-full px-4 py-2 hover:shadow-xl">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
