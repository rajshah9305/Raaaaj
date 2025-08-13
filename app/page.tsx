"use client"

import type React from "react"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { TerminalDesign } from "@/components/designs/terminal-design"
import { BrutalistDesign } from "@/components/designs/brutalist-design"
import { GlassmorphismDesign } from "@/components/designs/glassmorphism-design"
import { MinimalistDesign } from "@/components/designs/minimalist-design"
import { SynthwaveDesign } from "@/components/designs/synthwave-design"
import { Button } from "@/components/ui/button"
import { X, Palette, Minimize2 } from "lucide-react"

const designs = [
  { id: "original", name: "Original", component: null },
  { id: "terminal", name: "Terminal", component: TerminalDesign },
  { id: "brutalist", name: "Brutalist", component: BrutalistDesign },
  { id: "glassmorphism", name: "Glassmorphism", component: GlassmorphismDesign },
  { id: "minimalist", name: "Minimalist", component: MinimalistDesign },
  { id: "synthwave", name: "Synthwave", component: SynthwaveDesign },
]

export default function HomePage() {
  const [currentDesign, setCurrentDesign] = useState("original")
  const [selectorOpen, setSelectorOpen] = useState(true)
  const [selectorMinimized, setSelectorMinimized] = useState(false)

  const selectedDesign = designs.find((d) => d.id === currentDesign)
  const DesignComponent = selectedDesign?.component

  const handleMinimize = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectorMinimized(!selectorMinimized)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectorOpen(false)
  }

  const handleReopen = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectorOpen(true)
    setSelectorMinimized(false)
  }

  return (
    <>
      {/* Design Selector */}
      {selectorOpen && (
        <div className="fixed top-4 left-4 z-[9999] bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border transition-all duration-200">
          <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">Design Styles</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleMinimize}
                className="h-6 w-6 p-1 hover:bg-gray-100 rounded flex items-center justify-center transition-colors cursor-pointer"
                title={selectorMinimized ? "Expand" : "Minimize"}
              >
                <Minimize2 className="w-3 h-3 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="h-6 w-6 p-1 hover:bg-gray-100 rounded flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-3 h-3 text-gray-600" />
              </button>
            </div>
          </div>

          {!selectorMinimized && (
            <div className="p-2">
              <div className="flex flex-col gap-1">
                {designs.map((design) => (
                  <Button
                    key={design.id}
                    onClick={() => setCurrentDesign(design.id)}
                    variant={currentDesign === design.id ? "default" : "ghost"}
                    size="sm"
                    className="justify-start text-xs h-8"
                  >
                    {design.name}
                    {currentDesign === design.id && <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!selectorOpen && (
        <button
          type="button"
          onClick={handleReopen}
          className="fixed top-4 left-4 z-[9999] h-10 w-10 p-0 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Open Design Selector"
        >
          <Palette className="w-4 h-4" />
        </button>
      )}

      {/* Render Selected Design */}
      {DesignComponent ? (
        <DesignComponent />
      ) : (
        <main className="min-h-screen">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      )}
    </>
  )
}
