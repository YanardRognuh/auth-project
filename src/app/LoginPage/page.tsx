import { LoginForm } from "@/components/LoginForm";

export default function loginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-6">Login</h2>
        <LoginForm />
      </div>
    </main>
  );
}
