import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      description:
        "Revamped user interface for an e-commerce platform, increasing conversion rates by 30% through improved UX and streamlined checkout process.",
      image: "/modern-ecommerce-interface.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      metrics: "+30% conversion rate",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Built a comprehensive project management tool with real-time collaboration features, serving 1000+ active users daily.",
      image: "/clean-task-dashboard.png",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      metrics: "1000+ daily users",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Designed and developed a secure mobile banking application with biometric authentication and intuitive financial tracking.",
      image: "/mobile-banking-app.png",
      tags: ["React Native", "TypeScript", "Firebase"],
      metrics: "4.8★ app store rating",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-800 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border-gray-200 hover:border-indigo-200 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {project.metrics}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-xl text-gray-800 mb-3">{project.title}</h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
