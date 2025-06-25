export default function AuthorsPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold">✍️ Autores</h1>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white rounded p-4">Autor 1</div>
        <div className="bg-white rounded p-4">Autor 2</div>
        <div className="bg-white rounded p-4">Autor 3</div>
      </div>
    </main>
  );
}
