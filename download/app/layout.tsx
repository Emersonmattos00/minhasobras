export default function Layout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-gray-100">
        <div className="watermark" />
        {children}
      </body>
    </html>
  );
}
