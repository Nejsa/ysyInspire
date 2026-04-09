"use client";

const quotes = [
  "Hvert avslag bringer deg nærmere det riktige ja-et.",
  "Koden du skriver i dag er beviset du viser i morgen.",
  "En junior som fortsetter å lære, er en senior i utvikling.",
  "Fremgang er ikke alltid synlig — men den skjer.",
  "Du trenger ikke alt på plass. Du trenger bare å starte.",
];

function getTodaysQuote() {
  const today = new Date();
  const dailyNumber = Math.floor(today.getTime() / 86400000);
  return quotes[dailyNumber % quotes.length];
}

export default function Home() {
  const quote = getTodaysQuote();
  return (
    <main>
      <h1>Velkommen til ysyInspire</h1>
      <p>Din daglige motivasjon som en jobbsøker</p>

      <section>
        <h2>Dagens sitat</h2>
        <p>{quote}</p>
      </section>

      <section>
        <h2>Din streak</h2>
        <p>Du har sjekket inn 0 dager på rad</p>
      </section>
    </main>
  );
}
