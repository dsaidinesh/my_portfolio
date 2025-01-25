import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Brain, Rocket, Code } from "lucide-react";

const projects = [
  {
    title: "TalkToPDF: Voice-Enabled Document Interaction",
    description: "Addressed document accessibility challenges by developing a voice-based interface for PDF interaction. Engineered a document processing pipeline using LangChain and implemented RAG capabilities, resulting in a system that enables natural conversation with documents and achieves 90% query accuracy.",
    technologies: ["Python", "Flask", "LangChain", "PyMuPDF", "Sentence-Transformers", "React", "Web Speech API", "Chroma DB", "HuggingFace"],
    github: "dsaidinesh/talktopdf",
    icon: Brain
  },
  {
    title: "AI Interior Design Visualization",
    description: "Enhanced interior design visualization process by creating a custom ComfyUI workflow. Developed a system that combines room images with style references, resulting in instant, realistic design previews that reduced decision-making time by 60%.",
    technologies: ["Python", "ComfyUI", "Stable Diffusion", "Image Processing", "UI/UX Design"],
    github: "dsaidinesh/interiordesign",
    icon: Rocket
  },
  {
    title: "Custom LoRA Product Photography",
    description: "Streamlined product photography by training a specialized LoRA model on diverse product images. Integrated the model with ComfyUI workflow, enabling quick generation of professional product visuals in various settings, reducing photography costs by 70%.",
    technologies: ["Python", "LoRA", "ComfyUI", "Machine Learning", "Computer Vision"],
    github: "dsaidinesh/flux_lora_product",
    icon: Code
  },
  {
    title: "AIIIQ Tees: Talk to a Database",
    description: "Improved database interaction efficiency by developing an LLM-based Q&A system. Implemented few-shot learning techniques for natural language queries to MySQL database, resulting in 85% accuracy in query interpretation and response generation.",
    technologies: ["Python", "MySQL", "Google Palm API", "Hugging Face", "LangChain", "ChromaDB"],
    github: "dsaidinesh/aiiiq_bot",
    icon: Brain
  },
  {
    title: "BSc Querybot",
    description: "Automated student query handling by developing a QA chain with retrieval capabilities. Created an integrated system using language models for IITM BS program queries, reducing response time by 80% and handling 200+ daily queries efficiently.",
    technologies: ["Python", "Docker", "ChromaDB", "Hugging Face API", "Streamlit"],
    github: "DSAIDINESH/bsquerybot",
    icon: Brain
  },
  {
    title: "Influence and Sponsorship Platform",
    description: "Solved sponsor-influencer connection challenges by building a Flask-based web platform. Implemented dynamic forms and responsive design, resulting in successful matching of 50+ sponsors with appropriate influencers.",
    technologies: ["Python", "Flask", "Bootstrap", "SQLite", "JavaScript"],
    github: "dsaidinesh/isecp",
    icon: Code
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
          AI & ML Projects
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <project.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
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