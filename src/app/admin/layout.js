"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

import {
  IconDatabase,
  IconLogout2,
  IconNews,
  IconUser,
  IconUserBolt,
  IconUserCog,
} from "@tabler/icons-react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const pathname = usePathname();

  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="navigation"
        className="bg-white p-10 w-[220px] border-r flex flex-col"
      >
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <Toaster position="top-right" />
        <div className="flex flex-col gap-3 mt-15">
          <a
            href="/admin/users"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/users" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconUser /> Users
          </a>
          <a
            href="/admin/roles"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/roles" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconUserCog /> Hak akses
          </a>
          <a
            href="/admin/news"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/news" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconNews /> Berita
          </a>
          <a
            href="/admin/products"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/products"
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            <IconDatabase /> Data Mahasiswa
          </a>
          <Button
            onClick={handleLogout}
            className="p-2.5 flex items-center gap-2 rounded-lg font-bold text-white cursor-pointer"
          >
            <IconLogout2 /> Logout
          </Button>
        </div>
      </section>

      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto"
      >
        <div className="flex flex-col gap-4">{children}</div>
      </section>
    </div>
  );
}
