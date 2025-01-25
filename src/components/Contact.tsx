import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Let's work together to bring your dreams to reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="mailto:saidinesh.d@outlook.com"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full inline-flex items-center"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/codeforgeeks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full inline-flex items-center"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full inline-flex items-center"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;