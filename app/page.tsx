"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="relative grid md:grid-cols-2 gap-16 items-center py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <h1 className="text-6xl font-bold leading-tight">
            Resume Modern
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Dengan AI</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Buat resume profesional dalam hitungan detik. Didukung AI, cloud storage, dan desain modern.
          </p>

          <div className="flex gap-4">
            <Link href="/resume" className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-lg">
              Mulai Gratis
            </Link>

            <Link href="/dashboard" className="px-8 py-4 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Lihat Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop"
            alt="Resume workspace"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-24 space-y-16 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600">Semua yang kamu butuhkan untuk tampil profesional.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤖",
              title: "AI Smart Writing",
              desc: "Generate summary profesional otomatis.",
            },
            {
              icon: "⚡",
              title: "Super Fast",
              desc: "Proses instan tanpa ribet.",
            },
            {
              icon: "☁️",
              title: "Cloud Saved",
              desc: "Resume tersimpan dan bisa diakses kapan saja.",
            },
          ].map((feature, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="card p-10 space-y-4 transition">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto card p-12 space-y-6">
          <p className="text-lg text-gray-700 italic">"AI Resume Builder membantu saya mendapatkan interview pertama saya hanya dalam 2 minggu!"</p>
          <p className="font-semibold">— Daffa, Fullstack Developer</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Siap Upgrade Kariermu?</h2>
        <p className="mb-8 text-white/80">Mulai buat resume profesional hari ini.</p>
        <Link href="/resume" className="bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
          Buat Resume Sekarang
        </Link>
      </section>
    </div>
  );
}
