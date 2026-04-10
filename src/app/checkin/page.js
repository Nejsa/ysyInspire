"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CheckIn() {
  const { data: session } = useSession();
  const [status, setStatus] = useState(null);
  console.log("session:", session);

  async function handleCheckin() {
    const response = await fetch("/api/checkin", {
      method: "POST",
    });

    const data = await response.json();

    if (data.message === "checked_in") {
      setStatus("checked_in");
    } else if (data.message === "already_checked_in") {
      setStatus("already_checked_in");
    }
  }

  return (
    <main>
      <h1>Check-in</h1>
      <p>Sjekk inn for å registrere at du har jobbet mot målet ditt i dag.</p>

      {!session ? (
        <p>Du må være innlogget for å sjekke inn.</p>
      ) : status === "checked_in" ? (
        <p>✓ Du har sjekket inn for i dag!</p>
      ) : status === "already_checked_in" ? (
        <p>✓ Du har allerede sjekket inn i dag.</p>
      ) : (
        <button onClick={handleCheckin}>Sjekk inn i dag</button>
      )}
    </main>
  );
}
