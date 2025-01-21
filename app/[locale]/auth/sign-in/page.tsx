"use client";
import { signIn } from "next-auth/react";
export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <p
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3001/en/auth/sign-in",
          })
        }
      >
        Sign in with your GitHub account.
      </p>
    </div>
  );
}
