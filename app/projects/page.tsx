import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '../../utils/constants';

export const metadata = {
  title: 'Projects — A. Badusha',
  description: 'All projects and repositories by A. Badusha',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">All Projects</h1>
        <p className="text-muted mt-2">A curated list of repositories and projects.</p>
        <div className="mt-4">
          <a
            href="https://github.com/badusha0201?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block px-4 py-2 bg-blue-600 text-slate-100 rounded-lg shadow hover:bg-blue-500"
          >
            View on GitHub
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p) => (
          <article key={p.id} className="bg-white/5 backdrop-blur rounded-xl p-4 flex flex-col gap-4">
            <div className="relative h-40 w-full bg-neutral-800 rounded-md overflow-hidden flex items-center justify-center">
              <Image src={p.image} alt={p.title} fill className="object-contain" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted mt-2">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech?.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded-md">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Link href={p.github} target="_blank" className="px-3 py-1 bg-slate-700 rounded-md text-sm hover:bg-slate-600">
                GitHub
              </Link>
              {p.demo && (
                <Link href={p.demo} target="_blank" className="px-3 py-1 bg-slate-700 rounded-md text-sm hover:bg-slate-600">
                  Demo
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
