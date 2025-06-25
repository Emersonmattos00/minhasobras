export default function CancelPage() {
  return (
    <div className="p-4 text-center">
      <h1>Pagamento Cancelado ❌</h1>
      <p>Você não finalizou a compra. Nenhuma cobrança foi feita.</p>
      <a href="/" className="text-blue-500">
        Voltar para a Página Inicial
      </a>
    </div>
  );
}
