import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  await supabase.from("data_mahasiswa").delete().eq("id", id);
  return NextResponse.redirect(new URL("/admin/products", req.url));
}
