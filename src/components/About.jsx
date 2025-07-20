import { motion } from "framer-motion";
import { Code, GraduationCap, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-gradient-dark" : "text-gradient-light"
            }`}
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm Syed Hamid Shahriar, a passionate Computer Science
                student currently pursuing my Bachelor of Science degree at
                Daffodil International University. I'm in my journey of
                exploring the fascinating world of technology and software
                development.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My academic journey has introduced me to various programming
                languages and technologies, and I'm particularly interested in
                web development, algorithms, and software engineering
                principles. I believe in continuous learning and staying updated
                with the latest technological trends.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding or studying, I enjoy exploring new
                technologies, working on personal projects, and connecting with
                fellow developers in the tech community.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  description: "Bachelor of Science in Computer Science",
                  detail: "Daffodil International University",
                },
                {
                  icon: Code,
                  title: "Passion",
                  description: "Web Development & Programming",
                  detail: "Always learning new technologies",
                },
                {
                  icon: Heart,
                  title: "Interest",
                  description: "Problem Solving & Innovation",
                  detail: "Creating solutions that matter",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">My Mission</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              To leverage technology in creating innovative solutions that make
              a positive impact. I'm committed to continuous learning and growth
              in the ever-evolving field of computer science.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
