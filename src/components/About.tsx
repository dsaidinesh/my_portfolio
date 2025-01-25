import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-600">Sree Vidyanikethan Engineering College</p>
                <p className="text-gray-500">CGA - 8.97/10</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">B.S. in Data Science and programming</h4>
                <p className="text-gray-600">Indian Institute of Engineering</p>
                <p className="text-gray-500">Level - Diploma</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Full Stack Developer with cloud expertise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                First Prize Winner at National Technex 2024
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;