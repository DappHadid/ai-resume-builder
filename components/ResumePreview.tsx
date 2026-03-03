"use client";

import { useRef } from "react";
import html2pdf from "html2pdf.js";

interface Props {
  name: string;
  jobTitle: string;
  summary: string;
}

export default function ResumePreview({ name, jobTitle, summary }: Props) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const opt = {
      margin: 0.5,
      filename: `${name}-resume.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
    };

    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <div className="space-y-4">
      <div ref={resumeRef} className="card p-10">
        <div className="border-b pb-6 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">{name}</h2>
          <p className="text-gray-600 mt-2 text-lg">{jobTitle}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">{summary}</p>
        </div>
      </div>

      <button onClick={handleDownload} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium">
        Download PDF
      </button>
    </div>
  );
}
