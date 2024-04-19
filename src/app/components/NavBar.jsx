import Link from 'next/link';
import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <ul className="grid-head flex flex-row gap-8 justify-end p-5 bg-slate-600 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/images">Images</Link>
        </li>
      </ul>
    </nav>
  );
}
