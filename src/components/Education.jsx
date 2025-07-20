import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const Education = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      level: "University",
      institution: "Daffodil International University",
      degree: "Bachelor of Science in Computer Science & Engineering",
      period: "2023 - Present",
      location: "Dhaka, Bangladesh",
      status: "Currently Pursuing",
      gpa: "**/4.00",
      highlights: [
        "Focused on Software Engineering and Web Development",
        "Active member of Programming Club",
        "Participated in various coding competitions",
        "Dean's List for academic excellence",
      ],
      icon: "🎓",
    },
    {
      level: "College",
      institution: "Bangladesh Noubahini College, Khulna",
      degree: "Higher Secondary Certificate (HSC) - Science",
      period: "2019 - 2021",
      location: "Khulna, Bangladesh",
      status: "Completed",
      gpa: "5.00/5.00",
      highlights: [
        "Specialized in Physics, Chemistry, Mathematics",
        "Science Club Vice President",
        "First place in District Science Fair",
        "Golden GPA with distinction",
      ],
      icon: "🏛️",
    },
    {
      level: "School",
      institution: "Khulna Zilla School, Khulna",
      degree: "Secondary School Certificate (SSC) - Science",
      period: "2014 - 2019",
      location: "Khulna, Bangladesh",
      status: "Completed",
      gpa: "5.00/5.00",
      highlights: [
        "Strong foundation in Mathematics and Science",
        "Computer Club Member",
        "Perfect attendance award",
        "Outstanding academic performance",
      ],
      icon: "🏫",
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
      id="education"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
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
            Education
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8" />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            My academic journey has been focused on building a strong foundation
            in computer science and technology, preparing me for a successful
            career in software development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div
                  className={`absolute left-12 bottom-0 w-0.5 h-8 ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                  style={{ transform: "translateY(100%)" }}
                />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Level */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-[120px]">
                  <div className="text-4xl">{edu.icon}</div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.level}
                    </h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Currently Pursuing"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.institution}
                    </h4>
                    <p
                      className={`text-lg font-medium mb-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <GraduationCap size={16} />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5
                      className={`font-semibold mb-3 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Key Highlights:
                    </h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievements Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`mt-12 p-8 rounded-2xl text-center ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-700"
              : "bg-gradient-to-r from-gray-50 to-gray-100"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Academic Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div
                className={`text-3xl font-bold ${
                  darkMode ? "text-gradient-dark" : "text-gradient-light"
                }`}
              >
                3.75+
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                University GPA
              </p>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${
                  darkMode ? "text-gradient-dark" : "text-gradient-light"
                }`}
              >
                5.00
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                HSC & SSC GPA
              </p>
            </div>
            <div>
              <div
                className={`text-3xl font-bold ${
                  darkMode ? "text-gradient-dark" : "text-gradient-light"
                }`}
              >
                4+
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Years of Study
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
