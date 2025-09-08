import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Database, 
  Palette, 
  FileText, 
  Zap, 
  Type, 
  Layers, 
  Coffee, 
  Flame, 
  Cloud, 
  GitBranch, 
  Settings, 
  Box 
} from 'lucide-react';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "HTML5", icon: <FileText className="w-5 h-5" /> },
        { name: "CSS3", icon: <Layers className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Zap className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Type className="w-5 h-5" /> },
        { name: "React", icon: <Code className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Globe className="w-5 h-5" /> }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Python", icon: <Coffee className="w-5 h-5" /> },
        { name: "Flask", icon: <Flame className="w-5 h-5" /> },
        { name: "Java", icon: <Code className="w-5 h-5" /> }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "Firebase", icon: <Flame className="w-5 h-5" /> },
        { name: "Google Cloud", icon: <Cloud className="w-5 h-5" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "Gradio", icon: <Box className="w-5 h-5" /> },
        { name: "AutoCAD", icon: <Settings className="w-5 h-5" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-2 p-3 bg-background border border-border rounded-lg text-sm text-text-secondary hover:bg-accent-light hover:text-text-primary transition-all duration-200 hover:shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="text-accent">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;