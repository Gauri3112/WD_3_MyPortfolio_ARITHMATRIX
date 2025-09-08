import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, BookOpen } from 'lucide-react';

const accent = {
  base: 'indigo',
  bg: 'bg-indigo-600',
  hover: 'hover:bg-indigo-700',
  text: 'text-indigo-600',
  ring: 'focus:ring-indigo-500',
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div 
            className="text-left"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
              variants={itemVariants}
            >
              <span className="text-text-primary">
                Hi, I'm{' '}
              </span>
              <span className="text-accent">Gauri Mathur</span>
            </motion.h1>
            
            <motion.div 
              className="flex items-center gap-2 mb-6"
              variants={itemVariants}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Available for new opportunities</span>
            </motion.div>
            
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-text-secondary"
              variants={itemVariants}
            >
              Final-year B.Tech AIML student passionate about AI, full-stack development, and building real-world tech that empowers people.
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-text-secondary"
              variants={itemVariants}
            >
              Exploring innovative ideas and building human-centered AI solutions with impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6 mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href="/Gauri Mathur.pdf" 
                download="Gauri Mathur Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Download size={20} /> Download Resume
              </motion.a>
              <div className="flex flex-wrap gap-3">
                <motion.a 
                  href="https://github.com/Gauri3112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} /> GitHub
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/gauri-mathur3112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} /> LinkedIn
                </motion.a>
                <motion.a 
                  href="https://medium.com/@mathurgauri3112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={18} /> Medium
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {[
                { number: '6+', label: 'Projects Completed' },
                { number: '3+', label: 'Hackathons' },
                { number: '40+', label: 'Articles Published' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface border border-border"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-xs text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end lg:pt-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-gradient-to-br from-accent-light to-accent/20">
                <img
                  src="/gauri-profile.jpg"
                  alt="Gauri Mathur"
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-light to-accent/20">
                  <div className="text-6xl text-accent">👤</div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;