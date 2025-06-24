'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push("/admin/users")
  }

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <form
        className="w-5xl flex flex-col items-center gap-5 p-5"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-bold text-center">Connect With Us</h1>
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-1/2 p-4 border border-black rounded-md text-base"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-1/2 p-4 border border-black rounded-md text-base"
        />

        <button
          type="submit"
          className="w-1/2 p-4 bg-black text-white font-bold rounded-md text-base cursor-pointer text-center"
        >
          Sign In
        </button>

         <p>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 underline">
            Register
          </a>
        </p>

        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  )
}
