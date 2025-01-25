import { motion } from "framer-motion";
import { Brain, Code, Cloud, Database, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core Skills",
    skills: ["Python (Advanced)", "Java (Advanced)", "JavaScript", "HTML/CSS", "PHP"],
    icon: Code
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "HuggingFace", "PyTorch", "Stable Diffusion", "RAG"],
    icon: Brain
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Services", "Docker", "Git", "CI/CD"],
    icon: Cloud
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "ChromaDB"],
    icon: Database
  }
];

const achievements = [
  {
    title: "First Prize Winner at National Technex 2024",
    description: "Won first prize for developing a wearable communication device for rapid incident reporting, demonstrating innovative use of sensor technology and speech synthesis"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Achievement</h3>
          </div>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;