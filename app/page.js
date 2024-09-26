import Link from "next/link";


export default function Home() {

  let linkStyles = "text-cyan-600 underline hover:text-cyan-300"

  return (
    <main>
      <h2> CPRG 306: Web Development 2 - Assignments</h2>
    <ul>
      <li><Link href="./week-2/" className={linkStyles}>Week 2 Assignment</Link></li>
    </ul>
    </main>
  );
}
