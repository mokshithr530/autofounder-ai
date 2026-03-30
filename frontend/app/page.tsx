"use client";

import { useState } from "react";

export default function Home() {
  const [skills, setSkills] = useState("");
  const [time, setTime] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    // For now just mock (AI tomorrow)
    setResult("🚀 Your AI startup will appear here...");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        AutoFounder 🚀
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-md">
        Build, validate, and launch startups using AI in minutes.
      </p>

      {/* Input Card */}
      <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg">

        <input
          type="text"
          placeholder="Your skills (e.g. Python, design)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-white"
        />

        <input
          type="text"
          placeholder="Time per day (e.g. 2 hours)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-white"
        />

        <input
          type="text"
          placeholder="Budget (e.g. ₹2000)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-white"
        />

        <button
          onClick={handleGenerate}
          className="w-full bg-white text-black p-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Generate Startup
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div className="mt-8 bg-zinc-900 p-6 rounded-xl max-w-md w-full border border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Result</h2>
          <p className="text-gray-300 whitespace-pre-line">{result}</p>
        </div>
      )}
    </main>
  );
}