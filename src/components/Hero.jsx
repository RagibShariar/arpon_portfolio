import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/arpon.jpg";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="hero"
      className={`pt-24 pb-14 min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? "hero-gradient-dark" : "hero-gradient-light"
      }`}
    >
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh pattern overlay */}
        <div
          className={`absolute inset-0 opacity-30 ${
            darkMode ? "hero-mesh-dark" : ""
          }`}
        />

        {/* Static floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-3xl opacity-40" />

        {/* Medium static elements */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-1/2 right-1/6 w-24 h-24 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-2xl opacity-50" />

        {/* Static particle-like elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/40 rounded-full opacity-70`}
            style={{
              left: `${10 + i * 7}%`,
              top: `${20 + i * 5}%`,
            }}
          />
        ))}

        {/* Static geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 transform rotate-45" />
        <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full border-2 border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Hi, I'm{" "}
              <span
                className={`font-display ${
                  darkMode ? "text-gradient-dark" : ""
                } block mt-2`}
              >
                Syed Hamid Shahriar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-medium">
              Computer Science Student at Daffodil International University
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about technology, coding, and creating innovative
              solutions. Currently pursuing my Bachelor of Science degree while
              building my skills in web development.
            </p>

            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/20 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20 hover:scale-105 cursor-pointer"
              >
                Learn More About Me
                <ArrowDown className="ml-2" size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Static glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-2xl opacity-60" />

                {/* Profile image */}
                <img
                  src={profileImage}
                  alt="Syed Hamid Shahriar"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                />

                {/* Static decorative rings */}
                <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full" />
                <div className="absolute inset-4 border border-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a
            href="#about"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-slow" />
            </div>
            <div className="text-white/50 text-xs font-medium group-hover:text-white/70 transition-colors duration-300">
              Scroll
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
