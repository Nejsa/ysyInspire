/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      <p>ysyInspire</p>
      <ul>
        <li>
          <a href="/">Hjem</a>
        </li>
        <li>
          <a href="checkin">Check-in</a>
        </li>
        <li>
          <a href="tips">Tips</a>
        </li>
      </ul>
      {session ? (
        <button onClick={() => signOut()}>Logg ut</button>
      ) : (
        <button onClick={() => signIn("google")}>Logg inn med Google</button>
      )}
    </nav>
  );
}
