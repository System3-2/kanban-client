import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
        id: number;
        name: string;
        email: string;
        project: Array<any>;
        image: string;
        token: string;
   }
  interface Session {
    token: string;
    user: User;
  }
}
