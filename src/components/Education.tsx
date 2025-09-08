import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering (AIML)',
      institution: 'Malla Reddy University',
      duration: '2022 – 2026',
      gpa: '9.06 (As per 3-1 Result)',
      description: 'Specialization in Artificial Intelligence and Machine Learning, exploring data science, deep learning, and full stack development.',
      coursework: [
        'Artificial Intelligence',
        'Machine Learning', 
        'Data Structures',
        'Deep Learning',
        'Web Development',
        'Python Programming'
      ],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: 'Intermediate (Class 12) – MPC',
      institution: 'Narayana Junior College',
      duration: '2022',
      gpa: '95.8%',
      description: 'Focused on a strong academic foundation in Mathematics, Physics, and Chemistry.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry'
      ],
      icon: <School className="w-6 h-6" />
    },
    {
      degree: 'Secondary School (Class 10 – ICSE)',
      institution: 'Gitanjali School',
      duration: '2020',
      gpa: '91.6%',
      description: 'Completed with distinction in all subjects and active engagement in school-level academic events.',
      coursework: [
        'Science',
        'Mathematics',
        'English'
      ],
      icon: <BookOpen className="w-6 h-6" />
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Education
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A journey driven by curiosity, passion for technology, and continuous learning.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center text-accent">
                  {education.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary leading-tight">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {education.institution}
                  </p>
                </div>
              </div>

              {/* Duration and GPA */}
              <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">{education.gpa}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {education.description}
              </p>

              {/* Coursework Tags */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-text-primary">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, courseIndex) => (
                    <motion.span
                      key={courseIndex}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs text-text-secondary hover:bg-accent-light hover:text-accent hover:border-accent transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: courseIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 