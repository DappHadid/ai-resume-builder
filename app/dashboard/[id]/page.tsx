import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ResumeDetailPage({ params }: Props) {
  const resume = await prisma.resume.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!resume) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">{resume.name}</h1>
          <p className="text-gray-600 mt-1">{resume.jobTitle}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
        </div>

        <p className="text-sm text-gray-400 mt-6">Dibuat pada: {new Date(resume.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
