
import { SignupForm } from "@/components/auth/signupForm";
import type { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Kanban | Signup",
  description: "Signup to your kanban account",
}

const Page = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Page;
