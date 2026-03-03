"use client";

import { useState } from "react";

interface ResumeData {
  name: string;
  jobTitle: string;
  experience: string;
  skills: string;
}

interface Props {
  onGenerate: (data: ResumeData) => void;
  isLoading: boolean;
}

export default function ResumeForm({ onGenerate, isLoading }: Props) {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    jobTitle: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold mb-6">Isi Data Resume</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition"
        />

        <textarea
          name="experience"
          placeholder="Pengalaman Kerja"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition min-h-[120px]"
        />

        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition min-h-[100px]"
        />
      </div>

      <button
        onClick={() => onGenerate(formData)}
        disabled={isLoading}
        className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition ${
          isLoading ? "bg-gray-400 cursor-not-allowed text-white" : "bg-black hover:bg-gray-800 text-white"
        }`}
      >
        {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
        {isLoading ? "Generating..." : "Generate Resume"}
      </button>
    </div>
  );
}
