import { motion } from "framer-motion";

const experiences = [
  {
    title: "Technical Coordinator",
    company: "AWS Cloud Clubs MITU",
    period: "January 2024 - Present",
    location: "Tirupati, AP",
    description: "Facilitated AWS Cloud Study Jam, Gen AI Study Jam, and other Cloud computing Programs using Web, AWS Cloud, Git & Github, Gen AI."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-primary font-semibold">{exp.company}</p>
              <p className="text-gray-600">{exp.period}</p>
              <p className="text-gray-500">{exp.location}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;