import Link from "next/link";


export default function Home() {

  let linkStyles = "text-cyan-600 underline hover:text-cyan-300"

  return (
    <main>
      <h2> CPRG 306: Web Development 2 - Assignments</h2>
    <ul>
      <li><Link href="./week-2/" className={linkStyles}>Week 2 Assignment</Link></li>
      <li><Link href="./week-3/" className={linkStyles}>Week 3 Assignment</Link></li>
      <li><Link href="./week-4/" className={linkStyles}>Week 4 Assignment</Link></li>
      <li><Link href="./week-5/" className={linkStyles}>Week 5 Assignment</Link></li>
      <li><Link href="./week-6/" className={linkStyles}>Week 6 Assignment</Link></li>
      <li><Link href="./week-7/" className={linkStyles}>Week 7 Assignment</Link></li>
      <li><Link href="./week-8/" className={linkStyles}>Week 8 Assignment</Link></li>
      <li><Link href="./week-9/" className={linkStyles}>Week 9 Assignment</Link></li>
      <li><Link href="./week-10/" className={linkStyles}>Week 10 Assignment</Link></li>
    </ul>
    </main>
  );
}
