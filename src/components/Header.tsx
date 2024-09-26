'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center p-4 border-b h-16 bg-white z-10">
      {/* Back button */}
      <button className="mr-4" onClick={() => router.back()}>
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dynamic Title */}
      <h1 className="text-xl font-semibold">Selendra Mini App</h1>
    </header>
  )
}