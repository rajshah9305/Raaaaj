"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-indigo-600" />,
      label: "Email",
      value: "hello@yourname.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-indigo-600" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="w-5 h-5 text-indigo-600" />,
      label: "Location",
      value: "San Francisco, CA",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "#" },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-800 mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif font-semibold text-2xl text-gray-800 mb-6">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <p className="font-medium text-gray-800">{info.label}</p>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium text-gray-800 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition-colors hover-lift"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg rounded-lg transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
