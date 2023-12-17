import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "@/constants";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        // console.log({ email, password });
        // console.log({ credentials });
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
            console.log("No user");
            return null;
          } else if (res.status === 404) {
            console.log(`no user found`);
            return null;
          }
          // Assuming the response is JSON, use await to parse it
          const data = await res.json();

          // Log or use the retrieved data
          console.log({ data});

          // Return the data or perform further actions
          return data;
        } catch (error) {
          console.error("Error during API call:", error);
          // Handle the error as needed
          return null;
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
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
