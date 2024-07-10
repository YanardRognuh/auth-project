"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions";

export default function DashboardContent() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    router.push("/login");
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
        router.push("/login");
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
