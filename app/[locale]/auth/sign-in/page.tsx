"use client";
import { post } from "@/lib/fetch";
import { signIn } from "next-auth/react";
export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <p
        onClick={() =>
          signIn("github", {
            callbackUrl: window.location.href,
          })
        }
      >
        Sign in with your GitHub account.
      </p>
    </div>
  );
}
