import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gray-800 text-white shadow">
      <h1 className="text-xl font-bold">ProdForce</h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline hover:text-blue-300">ホーム</Link>
        <Link href="/upload" className="hover:underline hover:text-blue-300">ZIPアップロード</Link>
      </nav>
    </header>
  );
}
