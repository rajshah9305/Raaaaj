"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function TerminalDesign() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "$ whoami",
    "> Creative Developer & Designer",
    "$ ls -la skills/",
    "> React.js    TypeScript    Node.js",
    "> UI/UX       Figma        Tailwind",
    "> Python      PostgreSQL   Docker",
    "$ cat about.txt",
    "> Passionate about creating digital experiences",
    "> that solve real-world problems.",
    "$ ./run_portfolio.sh",
    "> Loading projects...",
    "$ _",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev))
    }, 800)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="border border-green-400 rounded-t-lg bg-green-400/5 p-4 mb-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-green-300">terminal@portfolio:~$</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="border-x border-b border-green-400 rounded-b-lg bg-black/90 p-6 min-h-[600px]">
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="mb-2 flex items-center">
              <span
                className={
                  line.startsWith("$") ? "text-green-300" : line.startsWith(">") ? "text-white" : "text-green-400"
                }
              >
                {line}
              </span>
              {index === currentLine && showCursor && <span className="ml-1 bg-green-400 text-black px-1">█</span>}
            </div>
          ))}

          {currentLine >= terminalLines.length - 1 && (
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-green-400 p-4 bg-green-400/5 hover:bg-green-400/10 transition-colors cursor-pointer">
                  <h3 className="text-green-300 font-bold mb-2">./projects/ecommerce-app</h3>
                  <p className="text-white text-sm">Full-stack e-commerce platform with React & Node.js</p>
                  <span className="text-green-400 text-xs">Status: DEPLOYED ✓</span>
                </div>
                <div className="border border-green-400 p-4 bg-green-400/5 hover:bg-green-400/10 transition-colors cursor-pointer">
                  <h3 className="text-green-300 font-bold mb-2">./projects/ai-dashboard</h3>
                  <p className="text-white text-sm">AI-powered analytics dashboard with real-time data</p>
                  <span className="text-green-400 text-xs">Status: DEPLOYED ✓</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button className="bg-green-400 text-black hover:bg-green-300 font-mono">$ contact --email</Button>
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10 font-mono bg-transparent"
                >
                  $ download --resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
