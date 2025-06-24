'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else {
      alert("Check email for confirmation")
      router.push("/login")
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <form
        onSubmit={handleRegister}
        className="w-5xl flex flex-col items-center gap-5 p-5"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

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
          Sign Up
        </button>

        {error && <p className="text-red-600">{error}</p>}

        <p className="text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  )
}
