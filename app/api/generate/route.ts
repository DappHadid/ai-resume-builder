import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, jobTitle, experience, skills } = body;

    const prompt = `
Buatkan professional summary untuk resume berikut:

Nama: ${name}
Job Title: ${jobTitle}
Pengalaman: ${experience}
Skills: ${skills}

Tulis dalam bahasa Indonesia.
Ringkas, profesional, dan menarik.
`;

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        prompt: prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Gagal menghubungi Ollama" }, { status: 500 });
    }

    // ✅ Ambil response dulu
    const data = await response.json();

    if (!data.response) {
      return NextResponse.json({ error: "AI tidak mengembalikan response" }, { status: 500 });
    }

    // ✅ Baru simpan ke database
    await prisma.resume.create({
      data: {
        name,
        jobTitle,
        summary: data.response,
      },
    });

    return NextResponse.json({
      summary: data.response,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: "Terjadi kesalahan di server" }, { status: 500 });
  }
}
