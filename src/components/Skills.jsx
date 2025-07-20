import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript",
          level: 85,
          color: "from-yellow-400 to-yellow-600",
        },
        { name: "Python", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 70, color: "from-red-400 to-red-600" },
        { name: "C++", level: 65, color: "from-purple-400 to-purple-600" },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Node.js", level: 70, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git/GitHub", level: 75, color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600" },
        {
          name: "Database (SQL)",
          level: 65,
          color: "from-indigo-400 to-indigo-600",
        },
        { name: "Linux", level: 60, color: "from-yellow-400 to-yellow-600" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-gradient-dark" : "text-gradient-light"
            }`}
          >
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with during my
            academic journey and personal projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: [-100, 100],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-white/20 skew-x-12 w-8"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90">
              I'm continuously expanding my skill set and staying updated with
              the latest technologies. Currently exploring advanced concepts in
              web development and software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
