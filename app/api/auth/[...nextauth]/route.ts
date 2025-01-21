import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.SECRET_KEY,
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      httpOptions: {
        timeout: 100000,
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/[locale]/auth/sign-in",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
