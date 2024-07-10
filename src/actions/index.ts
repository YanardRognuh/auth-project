"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginData = {
  username: string;
  password: string;
};

export async function login(data: LoginData) {
  if (data.username === "admin" && data.password === "password") {
    cookies().set("auth-token", "your-auth-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30,
      path: "/",
    });

    redirect("/dashboard");
  }

  throw new Error("Invalid credentials");
}

export async function logout() {
  cookies().delete("auth-token");
  redirect("/>login");
}
