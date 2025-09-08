import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Copy, Check } from 'lucide-react';

const accent = {
  base: 'indigo',
  bg: 'bg-indigo-600',
  hover: 'hover:bg-indigo-700',
  text: 'text-indigo-600',
  ring: 'focus:ring-indigo-500',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowThankYou(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "mathurgauri3112@gmail.com",
      link: "mailto:mathurgauri3112@gmail.com",
      field: "email"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+91 9966713294",
      link: "tel:+919966713294",
      field: "phone"
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/gauri-mathur3112",
      link: "https://www.linkedin.com/in/gauri-mathur3112",
      field: "linkedin"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/gauri-mathur3112",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Gauri3112",
      color: "hover:text-blue-600"
    },
    {
      name: "Medium",
      icon: <BookOpen size={20} />,
      url: "https://medium.com/@mathurgauri3112",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-bold mb-4 text-text-primary">
            Get In Touch
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-secondary">
            Let's work together on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-text-primary">
                Let's Connect
              </h3>
              <p className="text-lg text-text-secondary mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:shadow-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <a 
                      href={info.link}
                      aria-label={`${info.title}: ${info.value}`}
                      className="flex items-center gap-4 flex-1"
                    >
                      <div className="p-3 rounded-lg bg-background hover:bg-accent-light hover:text-accent transition-colors" aria-hidden="true">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {info.title}
                        </h4>
                        <p className="text-text-secondary">
                          {info.value}
                        </p>
                      </div>
                    </a>
                    <motion.button
                      onClick={() => copyToClipboard(info.value, info.field)}
                      className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-light transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Copy ${info.title}`}
                    >
                      <AnimatePresence mode="wait">
                        {copiedField === info.field ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-green-500"
                          >
                            <Check size={16} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Copy size={16} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-text-primary">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.name} profile`}
                    className={`p-3 rounded-lg bg-surface border border-border text-text-secondary hover:${accent.text} transition-colors group hover:shadow-medium`}
                  >
                    <div className="group-hover:scale-110 transition-transform" aria-hidden="true">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-surface border border-border shadow-medium">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-text-primary"
                    placeholder="Your name"
                    title="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-text-primary"
                    placeholder="your.email@example.com"
                    title="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-text-primary"
                  placeholder="What's this about?"
                  title="Enter the subject of your message"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-text-secondary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-background text-text-primary"
                  placeholder="Tell me about your project or opportunity..."
                  title="Enter your message"
                />
              </div>
              
              <motion.button 
                type="submit" 
                className={`w-full px-6 py-3 ${accent.bg} text-white font-semibold rounded-lg ${accent.hover} transition-colors`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
            
            {/* Thank You Message */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <Check size={20} />
                    <span className="font-medium">Thank you for your message! I will get back to you soon.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;