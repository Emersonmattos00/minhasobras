"use client";
export default function BookPage({ children }) {
  return (
    <div
      className="relative p-6"
      style={{
        backgroundImage: "url('/imagens/imagem.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "1",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
