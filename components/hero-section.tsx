"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23374151' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="font-serif font-bold text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
            Crafting Solutions,
            <br />
            <span className="text-indigo-600">One Project at a Time</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about design and technology, I specialize in creating intuitive user experiences that drive
          results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-all hover:scale-105 hover-lift"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-lg transition-all hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-indigo-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  )
}
