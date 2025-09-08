import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Cloud, 
  Brain, 
  Building2,
  ExternalLink 
} from 'lucide-react';

const certifications = [
  {
    title: 'Programming in Java',
    provider: 'NPTEL & IIT Kharagpur',
    link: 'https://nptel.ac.in/noc/E-Certificate/NPTEL23CS61S5408106303038927',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    title: 'Introduction to Machine Learning',
    provider: 'AWS',
    link: 'https://www.cloudskillsboost.google/public_profiles/07f564ee-f29b-4c8f-9349-2b910942a8f6/badges/9013797',
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: 'Introduction to Generative AI',
    provider: 'Google Cloud',
    link: 'https://www.cloudskillsboost.google/public_profiles/07f564ee-f29b-4c8f-9349-2b910942a8f6/badges/8998993',
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: 'AI Workflow: Business Priorities and Data',
    provider: 'IBM',
    link: 'https://www.credly.com/badges/177eea0b-242c-4ca1-9276-0c5178b945a9/public_url',
    icon: <Building2 className="w-6 h-6" />
  }
];

const Certifications = () => {
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
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Certifications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in programming, AI, ML, and cloud technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-accent">
                  {cert.icon}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  Provided by {cert.provider}
                </p>
              </div>
              
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-light text-accent border border-accent hover:bg-accent hover:text-white transition-colors font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;