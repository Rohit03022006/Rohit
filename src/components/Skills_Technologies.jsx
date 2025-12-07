import React, { useState, useEffect } from "react";
import { FaGithub, FaCode, FaCloud, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills_Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "devops",
    },
    {
      name: "Bash",
      icon: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      category: "devops",
    },
    {
      name: "Bootstrap",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      category: "frontend",
    },
    {
      name: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      category: "backend",
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      category: "backend",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      category: "devops",
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      category: "backend",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      category: "tools",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      category: "devops",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      category: "frontend",
    },
    {
      name: "Jenkins",
      icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      category: "devops",
    },
    {
      name: "Kubernetes",
      icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      category: "devops",
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      category: "devops",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      category: "database",
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      category: "database",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      category: "backend",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "tools",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "React Native",
      icon: "https://reactnative.dev/img/header_logo.svg",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      category: "frontend",
    },
    {
      name: "Vue.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      category: "frontend",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "backend",
    },
    {
      name: "MLflow",
      icon: "https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg",
      category: "tools",
    },
    {
      name: "Terraform",
      icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
      category: "devops",
    },
    {
      name: "Helm",
      icon: "https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg",
      category: "devops",
    },
    {
      name: "OWASP",
      icon: "https://owasp.org/assets/images/logo.png",
      category: "tools",
    },
    {
      name: "Trivy",
      icon: "https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo.png",
      category: "tools",
    },
    {
      name: "SonarQube",
      icon: "https://assets-eu-01.kc-usercontent.com:443/55017e37-262d-017b-afd6-daa9468cbc30/8e59bcad-6e39-41dc-abd9-a0e251e8d63f/Sonar%20%282%29.svg?w=128&h=32&fit=crop&q=80",
      category: "tools",
    },
    {
      name: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      category: "database",
    },
    {
      name: "Firebase",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      category: "database",
    },
    {
      name: "Ansible",
      icon: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      category: "devops",
    },
    {
      name: "Prometheus",
      icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg",
      category: "devops",
    },
    {
      name: "Grafana",
      icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
      category: "devops",
    },
    {
      name: "GitHub Actions",
      icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      category: "tools",
    },
    {
      name: "Selenium",
      icon: "https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/common/images/selenium_logo_mark_green.svg",
      category: "tools",
    },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      frontend: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", icon: "text-blue-500", hover: "hover:bg-blue-100" },
      backend: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", icon: "text-green-500", hover: "hover:bg-green-100" },
      devops: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", icon: "text-purple-500", hover: "hover:bg-purple-100" },
      database: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", icon: "text-amber-500", hover: "hover:bg-amber-100" },
      tools: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", icon: "text-amber-500", hover: "hover:bg-amber-100" },
    };
    return colors[category] || { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-600", icon: "text-gray-500", hover: "hover:bg-gray-100" };
  };

  return (
    <section
      id="skills"
      className="skills-technologies py-20 relative overflow-hidden bg-[#F5E6CC]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-black">
            Skills & <span className="text-[#DC2626]">Technologies</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Infinite Scroll Logos */}
        <motion.div
          className="w-full my-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex animate-logoLoop w-max">
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="mx-8 flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-20 h-20 bg-[#fdfdfd75] rounded-2xl shadow-lg flex items-center justify-center p-4 mb-2 border border-[#F5E6CC] hover:shadow-xl transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      title={tech.name}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#666666] mt-2">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Frontend */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <FaCode className="text-2xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Frontend</h3>
                <p className="text-sm text-[#666666]">UI/UX Development</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <FaCloud className="text-2xl text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Backend</h3>
                <p className="text-sm text-[#666666]">Server & APIs</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <FaTools className="text-2xl text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">DevOps</h3>
                <p className="text-sm text-[#666666]">Cloud & Infrastructure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter((tech) => tech.category === "devops")
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                <FaDatabase className="text-2xl text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">Tools & DB</h3>
                <p className="text-sm text-[#666666]">Database & Development</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technologies
                .filter(
                  (tech) =>
                    tech.category === "database" || tech.category === "tools"
                )
                .map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F5E6CC] p-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-amber-50 hover:translate-x-1 min-w-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-black truncate">{tech.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes logoLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logoLoop {
          animation: logoLoop 40s linear infinite;
        }
        .animate-logoLoop:hover {
          animation-play-state: paused;
        }
        
      `}</style>
    </section>
  );
};

export default Skills_Technologies;