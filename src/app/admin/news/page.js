"use client";

import useSWR from "swr";
import { useState } from "react";
import PostCard from "@/components/post-card";

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);

  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Gagal memuat data</p>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section id="News" className="bg-white w-[85%] flex-1 p-[30px]">
        <input
          type="search"
          placeholder="Cari News"
          className="w-full p-3 border rounded-lg mb-7 text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-col gap-4">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={index}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
