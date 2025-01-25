import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "TalkToPDF: Voice-Enabled Document Interaction",
    description: "Developed an innovative voice-based conversational interface for PDF documents, enabling users to verbally query and receive spoken responses about document content. Implemented a robust document processing pipeline using LangChain for accurate question-answering and RAG capabilities. Features real-time voice visualization, interrupt capabilities, and multi-document context management.",
    technologies: ["Python", "Flask", "LangChain", "PyMuPDF", "Sentence-Transformers", "React", "Web Speech API", "Chroma DB", "HuggingFace"],
    github: "dsaidinesh/talktopdf"
  },
  {
    title: "AI Interior Design Visualization",
    description: "Created a custom ComfyUI workflow that enables users to visualize interior design ideas by combining room images with reference styles. Users provide two inputs: room image and style reference, which are processed to seamlessly apply the desired style to the room, offering tailored design previews.",
    technologies: ["Python", "ComfyUI", "Stable Diffusion", "Image Processing", "UI/UX Design"],
    github: "dsaidinesh/interiordesign"
  },
  {
    title: "Custom LoRA Product Photography",
    description: "Developed a specialized LoRA model trained on a dataset of product images in various angles and conditions. Integrated within ComfyUI workflow to generate realistic product visuals in different environments through simple prompts, streamlining professional-grade product photography creation.",
    technologies: ["Python", "LoRA", "ComfyUI", "Machine Learning", "Computer Vision"],
    github: "dsaidinesh/flux_lora_product"
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