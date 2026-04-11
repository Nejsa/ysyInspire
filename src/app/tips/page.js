const tips = [
  "Sett av minst 2 timer til koding hver dag",
  "Bygg prosjekter du faktisk bryr deg om",
  "Commit kode hver dag, selv om det er lite",
  "Les en jobbannonse om dagen for å forstå markedet",
  "Ikke sammenlign fremgangen din med andre",
];

export default function Tips() {
  return (
    <main>
      <h1>Tips</h1>
      <ul>
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </main>
  );
}
