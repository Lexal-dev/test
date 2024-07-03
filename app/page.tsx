import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex flex-col items-center h-screen bg-slate-800 text-white text-lg p-12">
      <h1 className="text-3xl mb-12">Bonjour Next.js</h1>
      <p>Déploiement effectué</p>
      <Link href="/api/test" className="font-bold text-2xl hover:text-green-300">
        [ API TEST ]
      </Link>
      <Link href="/api/kanto" className="font-bold text-2xl hover:text-green-300">
        [ API KANTO ]
      </Link>
    </main>
  );
}