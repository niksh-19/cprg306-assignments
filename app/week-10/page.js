"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn(); 
    } catch (error) {
      console.error("Error during sign-in:", error);
    } 
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during sign-out:", error)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <header>
        <h1 className="text-4xl font-bold text-center mb-8">Shopping List App</h1>
      </header>
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-xl mb-4">Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})</p>
          <div className="mb-4">
            <img src={user.photoURL} alt="User profile" className="w-20 h-20 rounded-full mx-auto" />
          </div>
          <div className="mb-4">
            <Link href="/week-10/shopping-list" className="text-lg hover:underline">
              Continue to your Shopping List
            </Link>
          </div>
          <button
            type="button"
            className="text-lg text-white bg-red-600 hover:bg-red-700 rounded px-4 py-2 mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <button
            type="button"
            className="text-lg text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 mt-4"
            onClick={handleSignIn}
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
