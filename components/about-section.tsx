import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Development",
      description: "Full-stack development with modern frameworks and best practices",
    },
    {
      icon: <Palette className="w-8 h-8 text-indigo-600" />,
      title: "Design",
      description: "User-centered design thinking with attention to detail and aesthetics",
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Performance",
      description: "Optimized solutions that deliver fast, reliable user experiences",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Collaboration",
      description: "Strong communication and teamwork skills for successful project delivery",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate designer and developer with over 5 years of experience creating digital solutions that
              make a difference. My approach combines technical expertise with creative problem-solving to deliver
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover-lift border-gray-200 hover:border-indigo-200 transition-all">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="font-serif font-semibold text-xl text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
