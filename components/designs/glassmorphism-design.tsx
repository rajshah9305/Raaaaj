"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function GlassmorphismDesign() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-cyan-400/50 rounded-full blur-sm pointer-events-none z-50 transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      ></div>

      <div className="relative z-10 px-8 py-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wide">
              Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-thin">
                Designer
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting tomorrow's digital experiences with cutting-edge technology and visionary design
            </p>
            <div className="flex gap-6 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full backdrop-blur-sm border border-white/20">
                Explore Work
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-sm bg-transparent"
              >
                Contact
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Mastery",
                skills: ["React", "TypeScript", "Next.js", "Tailwind"],
                color: "from-cyan-400 to-blue-500",
              },
              {
                title: "Backend Power",
                skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "Design Vision",
                skills: ["Figma", "UI/UX", "Prototyping", "Branding"],
                color: "from-pink-400 to-red-500",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6 flex items-center justify-center`}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-white/70 bg-white/5 rounded-full px-4 py-2 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-white text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-full h-48 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-white/50 text-6xl">🚀</div>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Neural Commerce</h3>
              <p className="text-white/70 mb-6">
                AI-powered e-commerce platform with predictive analytics and personalized shopping experiences
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">AI/ML</span>
                <span className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full">
                View Project
              </Button>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-full h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-white/50 text-6xl">🌌</div>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Quantum Dashboard</h3>
              <p className="text-white/70 mb-6">
                Real-time data visualization platform with immersive 3D interfaces and holographic displays
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">Three.js</span>
                <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm">WebGL</span>
                <span className="bg-pink-400/20 text-pink-300 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full">
                View Project
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
