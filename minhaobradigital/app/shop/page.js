export default function ShopPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold">🛍️ Loja de Livros</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded p-4">Livro 1 - R$29,90</div>
        <div className="bg-white rounded p-4">Livro 2 - R$39,90</div>
        <div className="bg-white rounded p-4">Livro 3 - R$19,90</div>
      </div>
    </main>
  );
}
