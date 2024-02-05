import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "@/constants";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const raw = JSON.stringify({
          email: email,
          password: password,
        });
        try {
          const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: raw,
          });
          if (res.status === 400) {
            throw new Error("Something went wrong");
          } else if (res.status === 404) {
            throw new Error("User not found");
          }
          const data = await res.json();

          // console.log({ data });

          return data;
        } catch (error) {
          console.error("Error during API call:", error);
          throw new Error("An error occurred: ");
        }
      },
      type: "credentials",
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // console.log({ url, baseUrl });
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      console.log({ user });

      if (user) {
        //@ts-ignore
        token.name = user.user.name;
        //@ts-ignore
        token.email = user.user.email;
        //@ts-ignore
        token.picture = user.user.avatarUrl;
        //@ts-ignore
        token.id = user.user.id;
        //@ts-ignore
        token.token = user.token;
        token.project = [];
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log({ token });
        //@ts-ignore
      session.user.project = token.project;
        //@ts-ignore
      session.user.token = token.token;
      return {
        ...session,
        ...user,
      };
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
