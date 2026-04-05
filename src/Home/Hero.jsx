import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { assests } from '../assets/assests';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Code, Facebook, FileCode, Github, GithubIcon, Globe, Instagram, Layers, Mail, PhoneCall, SquareCode, Twitter, Users, Wind, Wrench, ExternalLink } from 'lucide-react';

function Hero() {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = [
    "turn ideas into real products",
    "solve problems with code",
    "build projects that help people",
    "create amazing user experiences",
    "design beautiful interfaces"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const About = [
    "My name is Treasure Mathew known as TreasureDev. I am a passionate and self-driven website developer and graphic designer, focused on building practical, user-centered digital solutions that solve real problems. I enjoy solving problems, learning new technologies, and building projects that actually help people.",
    "I work with modern web technologies, including HTML, CSS, JavaScript, React, and backend tools such as Node.js, MongoDB, Mongoose, and dotenv for environment configuration. I enjoy building complete systems from designing user interfaces to handling backend logic, databases, and application structure.",
    "In addition to development, I have a strong background in graphic design and interface design. I prioritize clean layouts, intuitive navigation, and responsive design, ensuring that users have smooth and enjoyable experiences across devices.",
    "I am the Founder of NaijaFoodMart, a local food marketplace platform I am currently building to help people easily order and buy raw and frozen food products within Nigeria. This project is designed to solve real-life problems related to food accessibility, convenience, and local commerce."
  ];

  const projects = [
    {
      title: "Faction Cloth",
      image: assests.img_1,
      github: "https://github.com/Treasuremathew1/clothweb1",
      live: "https://cloth-sooty.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Online Books",
      image: assests.img_2,
      github: "https://github.com/Treasuremathew1/book",
      live: "https://book-six-alpha.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Coffee",
      image: assests.img_3,
      github: "https://github.com/Treasuremathew1/coffee1",
      live: "https://coffee1-beryl.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "House",
      image: assests.img_4,
      github: "https://github.com/Treasuremathew1/house1",
      live: "https://house1-iota.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Online Burger",
      image: assests.img_5,
      github: "https://github.com/Treasuremathew1/BURGER-web",
      live: "https://burger-web-coral.vercel.app",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "VoltCharge",
      image: assests.img_6,
      github: "https://github.com/Treasuremathew1/VoltCharge",
      live: "https://volt-charge-cff2.vercel.app/",
      tech: ["React", "Tailwind CSS"]
    }
  ];

  const tools = [
    { name: "HTML", image: "https://i.pinimg.com/736x/1a/1e/75/1a1e75b588e907899475fa79d8762a5b.jpg" },
    { name: "CSS", image: "https://i.pinimg.com/736x/69/9e/3b/699e3b329647db00a7e8519c58f5771f.jpg" },
    { name: "JavaScript", image: "https://i.pinimg.com/1200x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" },
    { name: "React", image: "https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" },
    { name: "Tailwind CSS", image: "https://i.pinimg.com/1200x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg" },
    { name: "Node.js", image: "https://i.pinimg.com/736x/b8/ad/12/b8ad1222ae7315c6a6d484be17b88d4e.jpg" },
    { name: "MongoDB", image: "https://i.pinimg.com/736x/01/15/9b/01159bc9b0bc4ba22f834d06d4974230.jpg" },
    { name: "GitHub", image: "https://i.pinimg.com/736x/ec/3a/60/ec3a60c8c6539a07eb70b52f6737ea6e.jpg" },
    { name: "Git", image: "https://i.pinimg.com/736x/a7/f5/78/a7f57841deeefc209c764244c7ab93a1.jpg" }
  ];

  return (
    <div className="font-outfit">
      <Header />

      <HelmetProvider>
        <Helmet>
          <title>Treasure Mathew - Portfolio</title>
          <meta name="google-site-verification" content="_AxXwUrKRLkI4Oh__H26Df7N58_RGmDtwfFg_LI3Jm4" />
          <meta name="description" content={About[0]} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Treasure Mathew - Portfolio" />
          <meta property="og:description" content={About[0]} />
          <meta property="og:url" content="https://treasuredev.vercel.app/" />
          <meta property="og:image" content="https://treasuredev.vercel.app/og-image-hero.jpg" />
        </Helmet>
      </HelmetProvider>

      <section id="home" className="min-h-screen bg-gradient-to-br from-[#00171F] to-[#003459] text-white pt-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300A6FB%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-[#00A6FB] font-light mb-2"
              >
                Hi, I'm
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                Treasure <span className="text-[#00A6FB]">Mathew</span>
              </motion.h2>

              <div className="h-20 md:h-24 mb-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300"
                  >
                    {rotatingTexts[currentText]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#00A6FB] text-white rounded-lg font-medium hover:bg-[#0095E0] transition-colors shadow-lg shadow-[#00A6FB]/20"
                >
                  Hire Me
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[#00A6FB] text-white rounded-lg font-medium hover:bg-[#00A6FB]/10 transition-colors"
                >
                  View Work
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A6FB] to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={assests.tboy}
                  alt="Treasure Mathew"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-[#00171F] to-[#003459] text-white px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A6FB] to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={assests.tboy2}
                alt="About Treasure"
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-[#00A6FB]">Me</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 text-lg">
                {About.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
              >
                <div className="bg-[#003459] p-6 rounded-xl border border-white/10">
                  <h3 className="text-3xl font-bold text-[#00A6FB]">3+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-[#003459] p-6 rounded-xl border border-white/10">
                  <h3 className="text-3xl font-bold text-[#00A6FB]">10+</h3>
                  <p className="text-gray-300">Projects Done</p>
                </div>
                <div className="bg-[#003459] p-6 rounded-xl border border-white/10">
                  <h3 className="text-3xl font-bold text-[#00A6FB]">5+</h3>
                  <p className="text-gray-300">Collaborations</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: SquareCode, title: "Clean Code", desc: "I write clean, maintainable, and efficient code that follows best practices." },
              { icon: Globe, title: "Responsive Design", desc: "Websites that look great and function perfectly on all devices." },
              { icon: Users, title: "Collaboration", desc: "Work effectively with teams and stakeholders to deliver quality products." },
              { icon: Wrench, title: "Problem Solving", desc: "Logical approach to finding scalable and maintainable solutions." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#003459] p-6 rounded-xl border border-white/10 hover:border-[#00A6FB] transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#00A6FB] mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-br from-[#00171F] to-[#003459] text-white px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-[#00A6FB]">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#003459] rounded-xl overflow-hidden border border-white/10 hover:border-[#00A6FB] transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00171F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[#00A6FB] hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00171F] text-xs rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-[#00A6FB] hover:text-white transition-colors"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 bg-gradient-to-br from-[#00171F] to-[#003459] text-white px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-[#00A6FB]">Tools</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#003459] p-6 rounded-xl border border-white/10 hover:border-[#00A6FB] transition-all duration-300 text-center group"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A6FB] to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="relative w-16 h-16 mx-auto object-cover rounded-full"
                  />
                </div>
                <h3 className="font-medium text-sm">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-[#00171F] to-[#003459] text-white px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-[#00A6FB]">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#003459] p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-12 h-12 bg-[#00171F] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00A6FB]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">treasuremathew04@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-12 h-12 bg-[#00171F] rounded-lg flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-[#00A6FB]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">+234 9153252305</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: GithubIcon, link: "https://github.com/Treasuremathew1" },
                    { icon: Facebook, link: "https://www.facebook.com/TreasureDevs1" },
                    { icon: Twitter, link: "https://x.com/treasure_c579700" },
                    { icon: Instagram, link: "https://www.instagram.com/treasuredevs" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-[#00171F] rounded-lg flex items-center justify-center hover:bg-[#00A6FB] transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#003459] p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#00171F] border border-white/10 rounded-lg focus:border-[#00A6FB] focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#00171F] border border-white/10 rounded-lg focus:border-[#00A6FB] focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 bg-[#00171F] border border-white/10 rounded-lg focus:border-[#00A6FB] focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-[#00A6FB] text-white rounded-lg font-medium hover:bg-[#0095E0] transition-colors shadow-lg shadow-[#00A6FB]/20"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#00171F] text-white border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Treasure Mathew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;