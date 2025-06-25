import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email/Senha",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "exemplo@dominio.com",
        },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; // Retorna null se credenciais incompletas
        }

        // TODO: Fetch user from the database based on credentials.email
        const user = null; // Placeholder: replace with actual user data

        // TODO: Compare credentials.password with the user's hashed password
        const passwordMatch = false; // Placeholder: replace with actual password comparison logic

        if (user && passwordMatch) {
          return { id: user.id, name: user.name, email: user.email }; // Retorna o objeto do usuário se a autenticação for bem-sucedida
        }
        console.error("Authentication failed for email:", credentials.email); // Loga erro para credenciais inválidas
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
