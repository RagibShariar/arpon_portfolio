import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

// Import project images
import calculatorImage from "../assets/calculator.svg";
import courseManagementImage from "../assets/course-management.svg";
import gradeTrackerImage from "../assets/grade-tracker.svg";
import portfolioImage from "../assets/portfolio-project.svg";
import taskManagementImage from "../assets/task-management.svg";
import weatherDashboardImage from "../assets/weather-dashboard.svg";

const Projects = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS, featuring dark/light mode toggle and smooth animations.",
      image: portfolioImage,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "University Course Management",
      description:
        "A web application for managing university courses, student enrollment, and academic records with user authentication.",
      image: courseManagementImage,
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for managing daily tasks with features like priority levels, due dates, and progress tracking.",
      image: taskManagementImage,
      technologies: ["React", "Local Storage", "CSS3", "JavaScript"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides current weather conditions and forecasts for multiple cities with a clean UI.",
      image: weatherDashboardImage,
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Calculator App",
      description:
        "A scientific calculator with advanced mathematical functions, built as part of my JavaScript learning journey.",
      image: calculatorImage,
      technologies: ["HTML", "CSS", "JavaScript", "Math.js"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Student Grade Tracker",
      description:
        "A system for tracking student grades across different subjects with statistical analysis and reporting features.",
      image: gradeTrackerImage,
      technologies: ["Python", "Tkinter", "SQLite", "Matplotlib"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
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
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my studies and
            personal learning journey. Each project represents a step in my
            growth as a developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative group">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                </div>
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
            <h3 className="text-2xl font-bold mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-lg opacity-90">
              I'm constantly working on new projects and learning new
              technologies. Check back regularly to see my latest work and
              progress in my development journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
