import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python (Advanced)", "Java (Advanced)", "JavaScript", "HTML/CSS", "PHP"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Flask", "Bootstrap", "NumPy", "Pandas"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Services", "Docker", "Git", "CI/CD"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;