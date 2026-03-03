"use client";

import { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

export default function ResumePage() {
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (data: any) => {
    try {
      setIsLoading(true);
      setGeneratedSummary("");

      setName(data.name);
      setJobTitle(data.jobTitle);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setGeneratedSummary(result.summary);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat generate.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">AI Resume Builder 🚀</h1>
        <p className="text-gray-600">Buat resume profesional dalam hitungan detik dengan AI.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ResumeForm onGenerate={handleGenerate} isLoading={isLoading} />

        {generatedSummary && <ResumePreview name={name} jobTitle={jobTitle} summary={generatedSummary} />}
      </div>
    </div>
  );
}
