"use client";

import { NextPage } from "next"
import { useState } from "react";

const Home : NextPage = () => {
  let [ count, setCount ] = useState<number>(0);

  const handleClick = () => {
    setCount((oldCount) => oldCount + 1);
    console.log(count);
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-purple-800 to-purple-400">
      <section className="flex flex-col items-center justify-evenly w-80 h-80 rounded shadow bg-white">
        <span className="font-bold text-4xl">{count}</span>
        <button onClick = { handleClick } className="text-xl font-bold bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700 focus:outline-none active:bg-purple-600">
          incrementar
        </button>
      </section>
    </main>
  )
}

export default Home;
