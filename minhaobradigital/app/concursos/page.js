import { useState, useEffect } from 'react';
import { getContests } from '../lib/contests'; // Ajuste o caminho conforme necessário

export default function Concursos() {
  const [concursos, setConcursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContests() {
      try {
        const contestsData = await getContests();
        setConcursos(contestsData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchContests();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Concursos Literários</h1>
      <ul className="mt-4 space-y-4">
        {isLoading && <p>Carregando concursos...</p>}
        {error && <p className="text-red-500">Erro ao carregar concursos: {error.message}</p>}
        {concursos.map((concurso) => (
          <li key={concurso.id} className="bg-white rounded p-4 shadow">
            <h2 className="font-bold">{concurso.titulo}</h2>
            <p>{concurso.premio}</p>
            <button className="mt-2 bg-yellow-600 text-white rounded-full px-4 py-2 hover:shadow-xl">
              Participar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
