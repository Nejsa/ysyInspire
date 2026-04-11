"use client";

import { useEffect, useState } from "react";

export default function CalendarGrid() {
  const [checkedDates, setCheckedDates] = useState([]);

  useEffect(() => {
    async function fetchCheckins() {
      const response = await fetch("/api/checkin");
      const data = await response.json();
      if (data.dates) {
        setCheckedDates(data.dates);
      }
    }
    fetchCheckins();
  }, []);

  function getLast364Days() {
    const days = [];
    for (let i = 363; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date.toISOString().split("T")[0]);
    }
    return days;
  }

  const days = getLast364Days();

  return (
    <div>
      <h2>Din aktivitet</h2>
      <div className="flex flex-wrap gap-1 max-w-xl">
        {days.map((day) => (
          <div
            key={day}
            title={day}
            className={`w-3 h-3 rounded-sm ${
              checkedDates.includes(day) ? "bg-lime-400" : "bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
