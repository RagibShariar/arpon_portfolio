import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tech stack with image URLs from CDN (shields.io for consistent styling)
  const techStack = [
    {
      name: "JavaScript",
      image:
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      category: "Programming",
    },
    {
      name: "Python",
      image:
        "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      category: "Programming",
    },
    {
      name: "Java",
      image:
        "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      category: "Programming",
    },
    {
      name: "C++",
      image:
        "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      category: "Programming",
    },
    {
      name: "React",
      image:
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      category: "Frontend",
    },
    {
      name: "HTML5",
      image:
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      category: "Frontend",
    },
    {
      name: "CSS3",
      image:
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      category: "Frontend",
    },
    {
      name: "Node.js",
      image:
        "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      category: "Backend",
    },
    {
      name: "Express.js",
      image:
        "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white",
      category: "Backend",
    },
    {
      name: "MongoDB",
      image:
        "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
      category: "Database",
    },
    {
      name: "MySQL",
      image:
        "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
      category: "Database",
    },
    {
      name: "Git",
      image:
        "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      category: "Tools",
    },
    {
      name: "GitHub",
      image:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
      category: "Tools",
    },
    {
      name: "VS Code",
      image:
        "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
      category: "Tools",
    },
    {
      name: "Linux",
      image:
        "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
      category: "Tools",
    },
    {
      name: "Figma",
      image:
        "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      category: "Design",
    },
    {
      name: "Photoshop",
      image:
        "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black",
      category: "Design",
    },
  ];

  // Duplicate the array for seamless scrolling
  const marqueeItems = [...techStack, ...techStack];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
              ✨ My Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive showcase of the technologies and tools I've mastered
            during my journey as a developer. From frontend frameworks to
            backend solutions, here's my technical arsenal.
          </motion.p>
        </motion.div>

        {/* Enhanced Marquee Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative overflow-hidden mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Technologies in Motion
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Watch my tech stack in action
            </p>
          </motion.div>

          {/* Top Row - Left to Right */}
          <motion.div variants={itemVariants} className="flex space-x-6 mb-8">
            <div className="flex space-x-6 animate-marquee">
              {marqueeItems
                .slice(0, marqueeItems.length / 2)
                .map((tech, index) => (
                  <motion.div
                    key={`top-${index}`}
                    whileHover={{ y: -5 }}
                    className={`flex-shrink-0 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                      darkMode
                        ? "bg-gray-800/80 hover:bg-gray-700/90"
                        : "bg-white/90 hover:bg-white"
                    } shadow-lg hover:shadow-xl group relative overflow-hidden`}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-14 object-contain relative z-10 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Tooltip */}
                    <div
                      className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${
                        darkMode
                          ? "bg-gray-900 text-white border border-gray-700"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {tech.name}
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                          darkMode ? "border-t-gray-900" : "border-t-gray-800"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Bottom Row - Right to Left */}
          <motion.div variants={itemVariants} className="flex space-x-6">
            <div className="flex space-x-6 animate-marquee-reverse">
              {marqueeItems
                .slice(marqueeItems.length / 2)
                .map((tech, index) => (
                  <motion.div
                    key={`bottom-${index}`}
                    whileHover={{ y: -5 }}
                    className={`flex-shrink-0 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                      darkMode
                        ? "bg-gray-800/80 hover:bg-gray-700/90"
                        : "bg-white/90 hover:bg-white"
                    } shadow-lg hover:shadow-xl group relative overflow-hidden`}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-14 object-contain relative z-10 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Tooltip */}
                    <div
                      className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap ${
                        darkMode
                          ? "bg-gray-900 text-white border border-gray-700"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {tech.name}
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                          darkMode ? "border-t-gray-900" : "border-t-gray-800"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Skill Categories
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Organized by expertise areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Programming",
                icon: "💻",
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Frontend",
                icon: "🎨",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Backend",
                icon: "⚡",
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Tools",
                icon: "🛠️",
                color: "from-orange-500 to-red-500",
              },
            ].map((category, index) => {
              const categoryTechs = techStack.filter(
                (tech) =>
                  (category.name === "Programming" &&
                    tech.category === "Programming") ||
                  (category.name === "Frontend" &&
                    tech.category === "Frontend") ||
                  (category.name === "Backend" &&
                    (tech.category === "Backend" ||
                      tech.category === "Database")) ||
                  (category.name === "Tools" &&
                    (tech.category === "Tools" || tech.category === "Design"))
              );

              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`group relative p-8 rounded-3xl text-center transition-all duration-500 backdrop-blur-sm ${
                    darkMode
                      ? "bg-gray-800/60 hover:bg-gray-700/70"
                      : "bg-white/80 hover:bg-white/90"
                  } shadow-lg hover:shadow-2xl overflow-hidden`}
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Icon with gradient background */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {category.icon}
                  </motion.div>

                  <h4
                    className={`text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:${
                      category.color
                    } group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {category.name}
                  </h4>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {categoryTechs.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                          darkMode
                            ? "bg-gray-700/80 text-gray-300 group-hover:bg-gray-600/90"
                            : "bg-gray-100/80 text-gray-700 group-hover:bg-gray-200/90"
                        }`}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center justify-center space-x-2 text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    ></div>
                    <span>{categoryTechs.length} Technologies</span>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`mt-20 relative overflow-hidden rounded-3xl ${
            darkMode
              ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"
              : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
          }`}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full translate-x-36 translate-y-36"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full"></div>
          </div>

          <div className="relative z-10 p-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full mb-6">
                <span className="text-2xl">🚀</span>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  Ready to Build Amazing Things
                </span>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              Always Learning & Growing
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies in web development and software
              engineering. Let's build something amazing together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{}}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700/50 text-gray-300 hover:bg-gray-600/70"
                    : "bg-gray-100/50 text-gray-700 hover:bg-gray-200/70"
                }`}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Stats or additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "18+", label: "Technologies" },
                { number: "5+", label: "Categories" },
                { number: "∞", label: "Learning" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
