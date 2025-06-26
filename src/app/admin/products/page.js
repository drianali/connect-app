"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function ProductPage() {
  const router = useRouter();
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from("data_mahasiswa").select("*");
    if (!error) setMahasiswa(data);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin hapus data?");
    if (!confirm) return;
    const { error } = await supabase
      .from("data_mahasiswa")
      .delete()
      .eq("id", id);
    if (error) {
      toast.error("Gagal menghapus");
    } else {
      toast.success("Berhasil dihapus");
      fetchData();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 w-[85%] ml-20 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Data Mahasiswa</h1>
        <Link
          href="/admin/products/create"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          + Tambah
        </Link>
      </div>

      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 border-b">NIM</th>
              <th className="px-4 py-3 border-b">Nama</th>
              <th className="px-4 py-3 border-b">Jurusan</th>
              <th className="px-4 py-3 border-b">Angkatan</th>
              <th className="px-4 py-3 border-b text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Tidak ada data.
                </td>
              </tr>
            )}
            {mahasiswa.map((mhs) => (
              <tr
                key={mhs.id}
                className="hover:bg-gray-50 transition-colors border-b"
              >
                <td className="px-4 py-3">{mhs.NIM}</td>
                <td className="px-4 py-3">{mhs.Nama}</td>
                <td className="px-4 py-3">{mhs.Jurusan}</td>
                <td className="px-4 py-3">{mhs.angkatan}</td>
                <td className="px-4 py-3 text-center space-x-2">
                  <Link
                    href={`/admin/products/${mhs.id}/edit`}
                    className="inline-flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition cursor-pointer"
                  >
                    <IconEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(mhs.id)}
                    className="inline-flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition cursor-pointer"
                  >
                    <IconTrash /> Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
