"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth";

export default function DashboardContent() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    router.push("/LoginPage");
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/check-auth");
        if (!response.ok) {
          throw new Error("Not authenticated");
        }
        setIsLoading(false);
      } catch (error) {
        toast.error("Your session has expired. Please log in again.");
        router.push("/LoginPage");
      }
    }

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Button onClick={handleLogout} className="mt-4">
        Logout
      </Button>
    </div>
  );
}
