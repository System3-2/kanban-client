import { LoginForm } from "@/components/auth/loginForm";
import type { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Kanban | Login",
  description: "Login to your kanban account",
}

const Page = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Page;
