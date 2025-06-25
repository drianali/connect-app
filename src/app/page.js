"use client";
import { useEffect } from "react";

import useAuth from "./hooks/useAuth";
import { useRouter } from "next/navigation";
import Auth from "@/components/auth/Auth";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
     if (!loading && user) {
    router.push("/admin/users");
  }
  }, [loading, user]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {loading ? <h1>Loading...</h1> : <Auth />}
    </div>
  );
}
