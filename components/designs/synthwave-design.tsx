"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function SynthwaveDesign() {
  const [glitchText, setGlitchText] = useState("CREATIVE DEVELOPER")

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const originalText = "CREATIVE DEVELOPER"

    const glitchInterval = setInterval(() => {
      let glitched = ""
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }
      setGlitchText(glitched)

      setTimeout(() => setGlitchText(originalText), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Neon Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {glitchText}
              </h1>
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto max-w-md animate-pulse"></div>
            </div>

            <p className="text-xl md:text-2xl text-cyan-300 mb-12 font-mono tracking-wider">
              &gt; BUILDING THE FUTURE, ONE PIXEL AT A TIME_
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-bold border-2 border-pink-400 shadow-[0_0_20px_rgba(255,20,147,0.5)] hover:shadow-[0_0_30px_rgba(255,20,147,0.8)] transition-all">
                ENTER THE MATRIX
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all bg-transparent"
              >
                DOWNLOAD DATA
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              &gt; SYSTEM CAPABILITIES_
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "FRONTEND.EXE",
                  skills: ["React.js", "TypeScript", "Next.js", "Tailwind"],
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  title: "BACKEND.SYS",
                  skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
                  color: "from-pink-400 to-purple-500",
                },
                {
                  title: "DESIGN.APP",
                  skills: ["Figma", "UI/UX", "3D Design", "Animation"],
                  color: "from-purple-400 to-pink-500",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-black/50 border-2 border-cyan-400/30 p-6 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <h3 className="text-xl font-bold text-cyan-300 font-mono">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <span className="text-pink-400 mr-2 font-mono">&gt;</span>
                        <span className="text-white font-mono text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              &gt; PROJECT_ARCHIVE.ZIP_
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-400/30 p-8 hover:border-pink-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div
                    className="w-6 h-6 bg-pink-400 mr-3"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <h3 className="text-2xl font-bold text-pink-300 font-mono">NEON_COMMERCE.EXE</h3>
                </div>
                <p className="text-cyan-200 mb-6 font-mono text-sm leading-relaxed">
                  &gt; Cyberpunk e-commerce platform with holographic product displays and neural payment processing
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-pink-400/20 text-pink-300 px-3 py-1 text-xs font-mono border border-pink-400/30">
                    REACT
                  </span>
                  <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 text-xs font-mono border border-cyan-400/30">
                    NODE.JS
                  </span>
                  <span className="bg-purple-400/20 text-purple-300 px-3 py-1 text-xs font-mono border border-purple-400/30">
                    STRIPE
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-mono text-sm border border-pink-400/50">
                  EXECUTE_PROJECT &gt;
                </Button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/30 p-8 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div
                    className="w-6 h-6 bg-cyan-400 mr-3"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <h3 className="text-2xl font-bold text-cyan-300 font-mono">NEURAL_DASH.SYS</h3>
                </div>
                <p className="text-pink-200 mb-6 font-mono text-sm leading-relaxed">
                  &gt; AI-powered analytics dashboard with real-time data streams and predictive algorithms
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 text-xs font-mono border border-cyan-400/30">
                    PYTHON
                  </span>
                  <span className="bg-pink-400/20 text-pink-300 px-3 py-1 text-xs font-mono border border-pink-400/30">
                    TENSORFLOW
                  </span>
                  <span className="bg-purple-400/20 text-purple-300 px-3 py-1 text-xs font-mono border border-purple-400/30">
                    D3.JS
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-mono text-sm border border-cyan-400/50">
                  EXECUTE_PROJECT &gt;
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
              &gt; INITIATE_CONTACT.EXE_
            </h2>
            <p className="text-xl text-cyan-300 mb-12 font-mono">READY TO JACK INTO THE FUTURE?</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all font-mono">
                SEND_MESSAGE &gt;
              </Button>
              <Button
                variant="outline"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(255,20,147,0.3)] hover:shadow-[0_0_30px_rgba(255,20,147,0.6)] transition-all font-mono bg-transparent"
              >
                DOWNLOAD_RESUME &gt;
              </Button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
