import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Brain, Rocket, Code } from "lucide-react";

const projects = [
  {
    title: "TalkToPDF: Voice-Enabled Document Interaction",
    description: "Developed an innovative voice-based conversational interface for PDF documents, enabling users to verbally query and receive spoken responses about document content. Implemented a robust document processing pipeline using LangChain for accurate question-answering and RAG capabilities. Features real-time voice visualization, interrupt capabilities, and multi-document context management.",
    technologies: ["Python", "Flask", "LangChain", "PyMuPDF", "Sentence-Transformers", "React", "Web Speech API", "Chroma DB", "HuggingFace"],
    github: "dsaidinesh/talktopdf",
    icon: Brain
  },
  {
    title: "AI Interior Design Visualization",
    description: "Created a custom ComfyUI workflow that enables users to visualize interior design ideas by combining room images with reference styles. Users provide two inputs: room image and style reference, which are processed to seamlessly apply the desired style to the room, offering tailored design previews.",
    technologies: ["Python", "ComfyUI", "Stable Diffusion", "Image Processing", "UI/UX Design"],
    github: "dsaidinesh/interiordesign",
    icon: Rocket
  },
  {
    title: "Custom LoRA Product Photography",
    description: "Developed a specialized LoRA model trained on a dataset of product images in various angles and conditions. Integrated within ComfyUI workflow to generate realistic product visuals in different environments through simple prompts, streamlining professional-grade product photography creation.",
    technologies: ["Python", "LoRA", "ComfyUI", "Machine Learning", "Computer Vision"],
    github: "dsaidinesh/flux_lora_product",
    icon: Code
  },
  {
    title: "AIIIQ Tees: Talk to a Database",
    description: "Developed an LLM-based question and answer system for AIIIQ Tees, a T-shirt store, to interact with their MySQL database using natural language queries. Conducted few-shot learning to improve query accuracy and system intelligence.",
    technologies: ["Python", "MySQL", "Google Palm API", "Hugging Face", "LangChain", "ChromaDB"],
    github: "dsaidinesh/aiiiq_bot",
    icon: Brain
  },
  {
    title: "BSc Querybot",
    description: "Developed a QA chain with retrieval and language model integration for generating precise and accurate responses to student queries related to the IITM BS Degree program in Data Science. Integrated HuggingFace/Endpoint to utilize large language models for generating responses.",
    technologies: ["Python", "Docker", "ChromaDB", "Hugging Face API", "Streamlit"],
    github: "DSAIDINESH/bsquerybot",
    icon: Brain
  },
  {
    title: "Influence and Sponsorship Engagement Platform",
    description: "Solved the problem of connecting sponsors and influencers by developing a web platform using Flask. Created dynamic forms with complete and responsive design with Flask and Bootstrap to enhance user experience.",
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