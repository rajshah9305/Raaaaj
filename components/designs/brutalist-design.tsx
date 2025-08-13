"use client"

import { Button } from "@/components/ui/button"

export function BrutalistDesign() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="bg-black text-white p-8 transform -skew-y-1 origin-top-left mb-8">
        <div className="transform skew-y-1">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            CREATIVE
            <br />
            <span className="text-red-500">DEVELOPER</span>
          </h1>
        </div>
      </header>

      <div className="px-8 max-w-7xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-yellow-400 p-8 transform rotate-1 shadow-[8px_8px_0px_0px_#000000] mb-8">
            <h2 className="text-4xl font-black uppercase mb-4 transform -rotate-1">WHO AM I?</h2>
            <p className="text-xl font-bold leading-tight transform -rotate-1">
              I BREAK RULES. I CREATE SOLUTIONS. I MAKE THINGS THAT WORK AND LOOK INCREDIBLE.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="text-5xl font-black uppercase mb-8 text-center">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["REACT", "TYPESCRIPT", "NODE.JS", "PYTHON", "FIGMA", "TAILWIND", "DOCKER", "AWS"].map((skill, index) => (
              <div
                key={skill}
                className={`p-6 font-black text-xl text-center transform ${
                  index % 2 === 0 ? "rotate-2 bg-red-500 text-white" : "-rotate-2 bg-black text-white"
                } shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] transition-all cursor-pointer`}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-5xl font-black uppercase mb-8 text-center transform -rotate-1">PROJECTS</h2>
          <div className="space-y-8">
            <div className="bg-blue-500 text-white p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className="text-3xl font-black uppercase mb-4">E-COMMERCE BEAST</h3>
              <p className="text-xl font-bold mb-4">FULL-STACK SHOPPING PLATFORM THAT CONVERTS</p>
              <div className="flex gap-4">
                <span className="bg-white text-blue-500 px-4 py-2 font-black text-sm">REACT</span>
                <span className="bg-white text-blue-500 px-4 py-2 font-black text-sm">NODE.JS</span>
                <span className="bg-white text-blue-500 px-4 py-2 font-black text-sm">STRIPE</span>
              </div>
            </div>

            <div className="bg-green-500 text-white p-8 transform rotate-1 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className="text-3xl font-black uppercase mb-4">AI DASHBOARD</h3>
              <p className="text-xl font-bold mb-4">REAL-TIME ANALYTICS THAT ACTUALLY WORK</p>
              <div className="flex gap-4">
                <span className="bg-white text-green-500 px-4 py-2 font-black text-sm">PYTHON</span>
                <span className="bg-white text-green-500 px-4 py-2 font-black text-sm">TENSORFLOW</span>
                <span className="bg-white text-green-500 px-4 py-2 font-black text-sm">REACT</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-16">
          <div className="bg-red-500 text-white p-12 transform rotate-2 shadow-[16px_16px_0px_0px_#000000]">
            <h2 className="text-4xl font-black uppercase mb-6 transform -rotate-2">READY TO BUILD?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center transform -rotate-2">
              <Button className="bg-white text-red-500 hover:bg-gray-100 font-black text-xl px-8 py-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] transition-all">
                HIRE ME NOW
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 font-black text-xl px-8 py-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] transition-all">
                SEE MORE WORK
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
