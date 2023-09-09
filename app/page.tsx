'use client'

import { useState } from 'react'
import { Hero, Navbar } from "@/components"

export default function Home () {
  const [isBlurEffectActive, setIsBlurEffectActive] = useState(false);

  const setBlurEffect = (value: boolean) => {
    setIsBlurEffectActive(value);
  };

  return (
    <main>
      <Navbar setBlurEffect={setBlurEffect} />

      <div className={`h-screen w-screen bg-backgroundColor overflow-hidden z-0 ${isBlurEffectActive ? "blur-background" : ""}`}>
        <Hero />
      </div>

    </main>
  )
}
