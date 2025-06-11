"use client";

import useSWR from "swr";
import { dataUser } from "@/mock/data-user";
import PostCard from "@/components/post-card";

export default function NewsPage() {

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

  console.log(posts);
  return (
    <div>
      <section id="News" className="bg-white w-[85%] flex-1 p-[30px]">
        <input
          type="search"
          placeholder="Cari News"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          {posts.map((employee, index) => (
            <PostCard
              key={index}
              id={employee.id}
              title={employee.title}
              body={employee.body}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
