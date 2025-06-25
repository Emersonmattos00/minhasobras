// app/reader/page.tsx
export default function ReaderPage() {
  const textoExemplo = "Esta é uma amostra do texto para destaque e anotação.";
  return (
    <div className="min-h-screen p-4">
      <h2 className="text-2xl font-semibold">Leitura</h2>
      <p className="mt-4">{textoExemplo}</p>
    </div>
  );
}
