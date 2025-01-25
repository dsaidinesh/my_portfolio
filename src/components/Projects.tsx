import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Influence and Sponsorship Engagement Platform",
    description: "Solved the problem of connecting sponsors and influencers by developing a web platform using Flask. Created dynamic and responsive designs with Flask and Bootstrap to enhance user experience.",
    technologies: ["Flask", "Jinja2", "Bootstrap", "SQLite", "HTML", "JavaScript", "CSS"],
    github: "saidinesh/isecp"
  },
  {
    title: "AIIQ Trees: Talk to a Database",
    description: "Developed an LLM-based question and answer system for AIIQ Tees, a T-shirt store, to interact with their MySQL database using natural language queries. Conducted few-shot learning to improve query accuracy and system intelligence.",
    technologies: ["Python", "Flask", "MySQL", "Google Palm API", "Hugging Face", "LangChain", "ChromaDB"],
    github: "saidinesh/aiiq-bot"
  },
  {
    title: "BSc Querybot",
    description: "Developed a QA chain with retrieval and language model integration for generating precise and relevant responses to student queries. Integrated HuggingFaceEndpoint to utilize large language models for generating responses.",
    technologies: ["Python", "Docker", "ChromaDB", "Hugging Face API", "Streamlit"],
    github: "DSaiDinesh/streamlit"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={`https://github.com/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;