import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DashboardPage() {
  const resumes = await prisma.resume.findMany({
    orderBy: { createdAt: "desc" },
  });

  type ResumeType = (typeof resumes)[number];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Resume History 📄</h1>
        <p className="text-gray-600">Semua resume yang pernah kamu generate.</p>
      </div>

      {resumes.length === 0 && <div className="card p-6 text-gray-600">Belum ada resume yang dibuat.</div>}

      <div className="space-y-6">
        {resumes.map((resume: ResumeType) => (
          <Link key={resume.id} href={`/dashboard/${resume.id}`}>
            <div className="card p-6 hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-bold">{resume.name}</h2>
              <p className="text-gray-500 mb-3">{resume.jobTitle}</p>

              <p className="text-gray-700 line-clamp-3 mb-4">{resume.summary}</p>

              <p className="text-sm text-gray-400">{new Date(resume.createdAt).toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
