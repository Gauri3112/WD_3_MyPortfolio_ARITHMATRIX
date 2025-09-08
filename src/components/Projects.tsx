import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Calendar,
  Users,
  Code,
  Brain,
  TrendingUp,
  Shield
} from 'lucide-react';

const projects = [
  {
    title: 'SignSpeak AI – Gesture-to-Speech Communication Platform',
    type: 'Hackathon Project',
    role: 'Team Lead',
    event: 'QUANTANOVA 2025',
    period: 'July 2025',
    description: 'Built a full-stack web app to translate sign language into speech in real-time using MediaPipe and Web Speech API.',
    tech: ['React', 'Flask', 'MediaPipe', 'Web Speech API', 'PostgreSQL'],
    github: 'https://github.com/Gauri3112/SignSpeak',
    image: '/signspeakai.jpeg',
    icon: '💡'
  },
  {
    title: 'HeartHealth AI – Deep Learning Heart Attack Risk Classifier',
    type: 'Minor Project',
    role: 'Developer',
    event: null,
    period: 'Jan 2025 – Feb 2025',
    description: 'Built an AI chatbot to assess heart attack risk using CNNs, RNNs, and Llama 3.1 integrated via Gradio and Ollama.',
    tech: ['Python', 'Deep Learning', 'Gradio', 'Llama 3.1', 'Ollama'],
    github: 'https://github.com/Praneethguduru/HeartHealthAI',
    image: '/hearthealth.jpeg',
    icon: '🛠️'
  },
  {
    title: 'E-Commerce Analytics Dashboard',
    type: 'Hackathon Project',
    role: 'Full Stack Developer',
    event: 'AVENSIS 2025 – CSI Regional Convention',
    period: 'June 2025',
    description: 'Developed an analytics dashboard with inventory tracking, auto-updated visuals, and insights.',
    tech: ['React', 'MongoDB', 'Vercel'],
    github: null,
    image: '/ecommerce.png',
    icon: '💡'
  },
  {
    title: 'MyPocket – Personal Finance Tracker',
    type: 'Minor Project',
    role: 'Developer',
    event: null,
    period: 'Nov 2024 – Dec 2024',
    description: 'Developed a budgeting and savings tracker app with alert systems and intuitive dashboards.',
    tech: ['React', 'Node.js', 'Firebase'],
    github: null,
    image: '/mypocket.jpg',
    icon: '🛠️'
  },
  {
    title: 'CSV-QA – Natural Language CSV Query Tool',
    type: 'Minor Project',
    role: 'Developer',
    event: null,
    period: 'Sep 2024 – Oct 2024',
    description: 'Designed an NLP tool to query CSV files in natural English with 92% accuracy in structured data retrieval.',
    tech: ['Python', 'Pandas', 'NLP', 'Scikit-learn'],
    github: 'https://github.com/Gauri3112/CSV-QA',
    image: '/csvqa.jpeg',
    icon: '🛠️'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and full-stack development
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image Icon */}
              <div className="p-6 pb-0">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
                    <div className="text-2xl text-indigo-400">📱</div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 pt-0">
                {/* Header with Type Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Role and Event Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{project.role}</span>
                  </div>
                  {project.event && (
                    <div className="flex items-center gap-1">
                      <Code className="w-4 h-4" />
                      <span>{project.event}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-900">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {project.github && project.github !== '#' && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-300 hover:bg-indigo-600 hover:text-white transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    View on GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;