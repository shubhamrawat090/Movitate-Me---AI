"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Movitate Me - AI</h1>
      <p className="text-lg text-gray-600 mb-4">
        Describe your problem, and let me{" "}
        <span className="text-blue-500 font-semibold">motviate you!</span> 🚀
      </p>
      <input
        type="text"
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your struggles here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p className="mt-4 text-lg text-gray-700">
        {message && `You wrote: "${message}"`}
      </p>
    </main>
  );
}
