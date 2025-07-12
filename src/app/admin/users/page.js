"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import useSWR from "swr";

export default function UserPages() {
  const [searchTerm, setSearchTerm] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: users,
    error,
    isLoading,
  } = useSWR(`https://jsonplaceholder.typicode.com/users`, fetcher);

  if (isLoading) {
    return <div><p>Loading....</p></div>;
  }
  if (error) {
    return <div><p>Gagal memuat data</p></div>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section id="content" className="bg-white w-[85%] flex-1 p-[30px]">
        <input
          type="search"
          placeholder="Cari User"
          className="w-full p-3 border rounded-lg mb-7 text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-col gap-4">
          {filteredUsers.map((employee, index) => (
            <UserCard
              key={index}
              fullname={employee.name}
              email={employee.email}
              role={employee.phone}
              status={employee.website}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
