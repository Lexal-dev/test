import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex flex-col items-center h-screen bg-slate-800 text-white text-lg p-12">
      <h1 className="text-3xl mb-12">- HOME -</h1>
      <Link href="/kanto" className="hover:font-bold text-2xl hover:text-green-300">
        Pokédex de kanto
      </Link>
    </main>
  );
}