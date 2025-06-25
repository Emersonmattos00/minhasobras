export default function Estatisticas() {
  const dados = {
    visitas: 1250,
    cadastros: 300,
    obrasPublicadas: 56,
    vendas: 72,
  };
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Estatísticas</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded p-4 shadow">
          <h2>Visitas</h2>
          <p className="text-3xl font-bold">{dados.visitas}</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h2>Cadastros</h2>
          <p className="text-3xl font-bold">{dados.cadastros}</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h2>Obras Publicadas</h2>
          <p className="text-3xl font-bold">{dados.obrasPublicadas}</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h2>Vendas</h2>
          <p className="text-3xl font-bold">{dados.vendas}</p>
        </div>
      </div>
    </div>
  );
}
