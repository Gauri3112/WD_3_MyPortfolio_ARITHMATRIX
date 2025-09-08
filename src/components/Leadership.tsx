import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const Leadership = () => {
  const leadershipItems = [
    {
      title: 'Class Representative',
      organization: 'Academic Leadership',
      description: 'Led 80+ students, managed communication between faculty and peers, organized class events and academic activities.',
      icon: <Users className="w-6 h-6" />,
      period: '2023 - Present'
    },
    {
      title: 'Writer on Medium',
      organization: 'Content Creation',
      description: 'Published 40+ articles on mental health and tech, sharing insights and experiences with a growing community.',
      icon: <Award className="w-6 h-6" />,
      period: '2022 - Present'
    },
    {
      title: 'GDSC Member',
      organization: 'Google Developer Student Clubs',
      description: 'Participated in coding events and peer learning since May 2024, contributing to the developer community.',
      icon: <Target className="w-6 h-6" />,
      period: 'May 2024 - Present'
    },
    {
      title: 'Volunteer',
      organization: 'Ashray Akruti',
      description: 'Education and awareness for hearing-impaired children, contributing to inclusive community development.',
      icon: <TrendingUp className="w-6 h-6" />,
      period: '2023 - Present'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Leadership & Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Demonstrating leadership through technical mentorship, project coordination, and research contributions
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {leadershipItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                variants={itemVariants}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 z-10"></div>
                
                <div className="ml-16 p-6 rounded-xl bg-surface border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <span className="text-sm text-text-secondary bg-background px-2 py-1 rounded">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-accent mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;