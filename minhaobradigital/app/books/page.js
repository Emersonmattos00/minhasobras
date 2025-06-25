"use client";
import { useState, useEffect } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw new Error(`Error fetching books: ${response.statusText}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch books:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="p-4">
      <h1>Biblioteca</h1>
      {isLoading && <p>Carregando livros...</p>}
      {error && <p>Erro ao carregar livros: {error.message}</p>}
      {!isLoading && !error && books.length > 0 && (
        <ul>
          {books.map((book, idx) => (
            <li key={idx}>
              <strong>{book.title}</strong> - {book.author}
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !error && books.length === 0 && <p>Nenhum livro encontrado.</p>}
    </div>
  );
}
