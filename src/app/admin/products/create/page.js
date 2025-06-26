"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CreateProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    NIM: "",
    Nama: "",
    Jurusan: "",
    angkatan: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.NIM || !form.Nama || !form.Jurusan || !form.angkatan) {
      toast.error("Semua field wajib diisi");
      return;
    }

    const payload = {
      NIM: parseInt(form.NIM),
      Nama: form.Nama,
      Jurusan: form.Jurusan,
      angkatan: parseInt(form.angkatan),
    };

    const { error } = await supabase.from("data_mahasiswa").insert([payload]);

    if (error) {
      console.error("Supabase error:", error);
      toast.error("Gagal menambahkan data");
    } else {
      toast.success("Data berhasil ditambahkan!");
      router.push("/admin/products");
    }
  };

  const handleCancel = () => {
    router.push("/admin/products");
  };

  return (
    <div className="w-[85%] ml-20 mt-10">
      <h1 className="text-2xl font-bold mb-6">Tambah Mahasiswa</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded shadow"
      >
        <div>
          <label className="block mb-1 font-semibold">NIM</label>
          <input
            type="number"
            required
            value={form.NIM}
            onChange={(e) => setForm({ ...form, NIM: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan NIM"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Nama</label>
          <input
            type="text"
            required
            value={form.Nama}
            onChange={(e) => setForm({ ...form, Nama: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan Nama"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Jurusan</label>
          <input
            type="text"
            required
            value={form.Jurusan}
            onChange={(e) => setForm({ ...form, Jurusan: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan Jurusan"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Angkatan</label>
          <select
            required
            value={form.angkatan}
            onChange={(e) =>
              setForm({ ...form, angkatan: e.target.value })
            }
            className="w-full border rounded px-3 py-2 bg-white"
          >
            <option value="">-- Pilih Angkatan --</option>
            {Array.from({ length: 11 }, (_, i) => {
              const year = 2015 + i;
              return (
                <option key={year} value={String(year)}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer mr-5"
        >
          Simpan
        </button>
        <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition cursor-pointer"
          >
            Batal
          </button>
      </form>
    </div>
  );
}
