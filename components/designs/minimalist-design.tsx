"use client"

import { Button } from "@/components/ui/button"

export function MinimalistDesign() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-gray-600 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
              Design is
              <br />
              <em className="font-serif">thinking</em>
              <br />
              made visual
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-lg">
              I create meaningful digital experiences through thoughtful design and clean code.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none">
              View Selected Work
            </Button>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="max-w-4xl mx-auto px-8 py-24">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-16">Selected Work</h2>

          <div className="space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-[4/3] bg-gray-200 mb-8"></div>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">Minimal Commerce</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A clean, conversion-focused e-commerce platform that prioritizes user experience over visual noise.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>React</span>
                  <span>•</span>
                  <span>Node.js</span>
                  <span>•</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="md:order-2">
                <div className="aspect-[4/3] bg-gray-200 mb-8"></div>
              </div>
              <div className="md:order-1">
                <h3 className="text-3xl font-light mb-4">Focus Dashboard</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A distraction-free analytics dashboard that presents complex data with clarity and purpose.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>D3.js</span>
                  <span>•</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">About</h2>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  I believe in the power of simplicity. Every pixel, every interaction, every line of code serves a
                  purpose.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With over 5 years of experience in design and development, I help brands and startups create digital
                  products that are both beautiful and functional.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Capabilities</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Design</h4>
                    <p className="text-sm text-gray-600">UI/UX Design, Prototyping, Design Systems</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Development</h4>
                    <p className="text-sm text-gray-600">React, TypeScript, Node.js, Python</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Strategy</h4>
                    <p className="text-sm text-gray-600">Product Strategy, User Research, Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Get in Touch</h2>
            <h3 className="text-4xl font-light mb-8 leading-tight">
              Let's create something
              <br />
              <em className="font-serif">meaningful</em> together
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none">
                Start a Project
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-none bg-transparent"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
