export default function Dashboard() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white rounded p-4 shadow">
          <h2 className="font-bold">Obras Publicadas</h2>
          <p>12</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h2 className="font-bold">Concursos Participados</h2>
          <p>3</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h2 className="font-bold">Leituras Realizadas</h2>
          <p>48</p>
        </div>
      </div>
    </div>
  );
}
