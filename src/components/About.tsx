import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Globe } from 'lucide-react';

const accent = {
  base: 'indigo',
  bg: 'bg-indigo-600',
  hover: 'hover:bg-indigo-700',
  text: 'text-indigo-600',
  ring: 'focus:ring-indigo-500',
  light: 'bg-indigo-50',
};

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Leading teams in hackathons and managing collaborative projects effectively"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Writing",
      description: "Published 40+ articles on Medium covering mental health and personal growth"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community Involvement",
      description: "Active GDSC member and volunteer with Ashray Akruti for hearing-impaired children"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-responsive-lg font-bold mb-4 text-text-primary">
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-secondary">
            Passionate about leveraging technology to solve real-world problems
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="text-lg text-text-secondary leading-relaxed">
              <p className="mb-4">
                I'm a final-year B.Tech student in AI & ML at Malla Reddy University, passionate about solving 
                real-world problems through technology. With a strong foundation in Python, Java, and full-stack 
                development, I specialize in building scalable, user-centric applications that make a difference.
              </p>
              <p className="mb-4">
                My journey in tech is driven by hands-on experience in hackathons, leadership roles, and technical 
                writing. I've led teams in competitive hackathons, published 40+ articles on Medium, and actively 
                contribute to the developer community through GDSC membership and peer collaborations.
              </p>
              <p>
                Beyond coding, I'm deeply involved in community initiatives, having volunteered with Ashray Akruti 
                to support hearing-impaired children. I believe in the power of technology to transform lives and 
                create inclusive solutions that benefit everyone.
              </p>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="p-4 rounded-xl bg-surface border border-border hover:shadow-medium transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 ${accent.light} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-text-primary">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;