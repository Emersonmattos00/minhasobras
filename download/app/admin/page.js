"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Admin() {
  const { data: session, status } = useSession(); // Adicionado
  const router = useRouter(); // Adicionado

  useEffect(() => { // Adicionado
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/login');
    }

    if (status === 'authenticated') {
      // TODO: Implementar a lógica para verificar se o usuário tem o papel de 'admin'
      // Assumindo que a sessão inclui session.user.role
      if (session?.user?.role !== 'admin') {
        router.push('/');
      }
    }
  }, [status, session, router]); // Adicionado

  // REMOVA os arrays staticos usuarios e obras aqui

  if (status === 'loading') { // Adicionado
    return <div className="min-h-screen p-4">Carregando...</div>;
  }

  // Só renderiza o conteúdo se estiver autenticado E for admin // Adicionado
  if (status === 'authenticated' && session?.user?.role === 'admin') { // Adicionado
    return (
      <div className="min-h-screen p-4">
        <h1 className="text-2xl font-bold">Administração</h1>
        {/* TODO: Substituir listas estáticas por dados dinâmicos */}
        <div className="bg-white rounded p-4 mt-4">
          <h2 className="font-bold">Usuários</h2>
          <ul>
            {/* Mapear usuários dinâmicos aqui */}
            {/* {usuarios.map((u) => (...))} */}
          </ul>
        </div>
        <div className="bg-white rounded p-4 mt-4">
          <h2 className="font-bold">Obras</h2>
          <ul>
            {/* Mapear obras dinâmicas aqui */}
            {/* {obras.map((o) => (...))} */}
          </ul>
        </div>
      </div>
    );
  }

  // Retorna null se não estiver carregando, autenticado E admin (redirecionamento já ocorreu) // Adicionado
  return null; // Adicionado
}
