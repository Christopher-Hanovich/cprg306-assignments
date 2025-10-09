import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p className="mb-2 text-center">
        <Link href="/week-2">Week 2</Link>
      </p>
      <p className="mb-2 text-center">
        <Link href="/week-3">Week 3</Link>
      </p>
      <p className="mb-2 text-center">
        <Link href="/week-4">Week 4</Link>
      </p>
      <p className="mb-2 text-center">
        <Link href="/week-5">Week 5</Link>
      </p>
    </main>
  );
}
