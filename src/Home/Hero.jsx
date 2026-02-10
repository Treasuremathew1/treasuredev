import React from 'react'
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { assests } from '../assets/assests';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Code, Facebook, FileCode, Github, GithubIcon, Globe, Instagram, Layers, Mail, PhoneCall, SquareCode, Twitter, Users, Wind, Wrench } from 'lucide-react';


function Hero() {

  const About = [
    "My name is Treasure Mathew know as (TreasureDev) I am a passionate and self-driven website developer and graphic designer, focused on building practical, user-centered digital solutions that solve real problems. I enjoy solving problems, learning new technologies, and building projects that actually help people.",
    "I work with modern web technologies, including HTML, CSS, JavaScript, React, and backend tools such as Node.js, MongoDB, Mongoose, and dotenv for environment configuration. I enjoy building complete systems from designing user interfaces to handling backend logic, databases, and application structure.",
    "In addition to development, I have a strong background in graphic design and interface design. I prioritize clean layouts, intuitive navigation, and responsive design, ensuring that users have smooth and enjoyable experiences across devices.",
    "I am the Founder of NaijaFoodMart, a local food marketplace platform I am currently building to help people easily order and buy raw and frozen food products within Nigeria. This project is designed to solve real-life problems related to food accessibility, convenience, and local commerce."
  ]
  return (
    <div>
      <Header />

      <HelmetProvider>
        <Helmet>
          <title>Treasure Mathew - Portfolio</title>
          <meta name='description' content={About[0]} /> 

          <meta property="og:type" content="website" />
         <meta property="og:title" content="Treasure Mathew - Portfolio" />
         <meta property="og:description" content={About[0]} />
         <meta property="og:url" content="https://treasuredev-myportfolio.vercel.app/" />
         <meta property="og:image" content={`https://treasuredev-myportfolio.vercel.app/og-image-hero.jpg`} />
        </Helmet>

      </HelmetProvider>
       
      <motion.section 
       className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#00171F] to-[#003459] text-white p-4'
      >
        <div className='flex items-center flex-col mt-50'>
          <motion.h1
            className='text-3xl font-medium'
        >
            Hi, I'm
        </motion.h1>
        <motion.h1
            className='text-5xl font-bold mt-4 text-center mb-4'
        >
            Treasure <span className='text-[#00A6FB]'>Mathew</span>
        </motion.h1>

        <motion.p
         className='text-center'
        >
          To turn ideas into real product,  I enjoy solving problems, learning new technologies, and building projects that actually help people.
        </motion.p>

        <img 
         src={assests.hero}
         alt="" 
         className='w-100 h-100 mt-10 object-cover rounded-lg'
        />
        </div>
      </motion.section>

      {/* about */}
      <motion.section
       className='min-h-screen bg-gradient-to-br from-[#00171F] to-[#003459] text-white p-4'
       >
        <motion.div
         className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center'
        >
          <motion.div>
            <motion.div>
              <motion.h1
                className='text-4xl font-bold mb-4'
              >About Me</motion.h1>
              <motion.p
                className='text-gray-50 mt-4'
              >
                {About}
              </motion.p>
            </motion.div>

            <div className='mt-4 bg-[#003459] p-4 rounded-lg border-2 border-white/60'>
              <motion.div 
               className='grid grid-cols-1 md:grid-cols-3 gap-4'
              >
                <div className='bg-[#00171F] p-4 rounded-lg'>
                  <h1 className='text-4xl font-bold'>3+</h1>
                  <p className='font-bold mt-2'>Years Experience</p>
                </div>
                <div className='bg-[#00171F] p-4 rounded-lg'>
                  <h1 className='text-4xl font-bold'>10+</h1>
                  <p className='font-bold mt-2'>Completed Projects</p>
                </div>
                <div className='bg-[#00171F] p-4 rounded-lg'>
                  <h1 className='text-4xl font-bold'>5+</h1>
                  <p className='font-bold mt-2'>Collaborate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
           className='bg-[#003459] p-2 rounded-lg'
          >
            <img 
             src={assests.about} 
             className='w-full h-120 object-cover rounded-lg'
             alt="" 
            />
          </motion.div>
        </motion.div>

        <motion.div
         className='mt-8 bg-[#003459] p-3 rounded-lg border-2 border-white/60'
        >
          <motion.div
           className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>

            <motion.div 
             className='bg-[#00171F] p-4 rounded-lg'
            >
              <SquareCode className='w-12 h-12 text-[#00A6FB]' />
              <h1 className='text-2xl font-bold mt-2'>Clean Code</h1>
              <p className='mt-2'>I write clean, maintainable, and efficient code that is easy to read and understand. My approach emphasizes clarity, consistency, and best practices in software development.</p>
            </motion.div>

            <motion.div 
             className='bg-[#00171F] p-4 rounded-lg'
            >
              <Globe className='w-12 h-12 text-[#00A6FB]' />
              <h1 className='text-2xl font-bold mt-2'>Responsive Design</h1>
              <p className='mt-2'>I build websites that look great and function perfectly on all devices, from desktops to mobile phones.</p>
            </motion.div>

            <motion.div 
             className='bg-[#00171F] p-4 rounded-lg'
            > 
              <Users className='w-12 h-12 text-[#00A6FB]' />
              <h1 className='text-2xl font-bold mt-2'>Collaboration</h1>
              <p className='mt-2'>I work effectively with teams and stakeholders to deliver high-quality products that meet user needs and business goals.</p>
            </motion.div>

            <motion.div 
             className='bg-[#00171F] p-4 rounded-lg'
            >
              <Wrench className='w-12 h-12 text-[#00A6FB]' />
              <h1 className='text-2xl font-bold mt-2'>Problem Solving</h1>
              <p className='mt-2'>I approach challenges with a logical mindset and a focus on finding effective solutions that are scalable and maintainable.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Project */}
      <motion.section
        className='min-h-screen bg-gradient-to-br from-[#00171F] to-[#003459] text-white p-4'
      >
        <div className='text-center'>
          <h1 className='font-bold text-3xl'>My Project</h1>
        </div>

        <motion.div
         className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-4'
        >
          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_1}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>Faction Cloth</h1>
              <Link to="https://github.com/Treasuremathew1/clothweb1">
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>
 
            <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://factioncloth.com" target="_blank" className=''>View Project</Link>
              </button>
              <div className='grid md:grid-cols-3 gap-6 mt-4'>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>HTML</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Layers  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>CSS</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <Code className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>JavaScript</h1>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_2}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>Online Books</h1>
              <Link to="https://github.com/Treasuremathew1/book">
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>

           <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://book-six-alpha.vercel.app/" target="_blank" className=''>View Project</Link>
              </button>
              <div className='grid sm:grid-cols-3 gap-6 mt-4'>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>HTML</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Layers  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>CSS</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <Code className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>JavaScript</h1>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_3}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>Coffee</h1>
              <Link to="https://github.com/Treasuremathew1/coffee1">
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>

            <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://coffee1-beryl.vercel.app/" target="_blank" className=''>View Project</Link>
              </button>
              <div className='grid sm:grid-cols-3 gap-6 mt-4'>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>HTML</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Layers  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>CSS</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <Code className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>JavaScript</h1>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_4}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>House</h1>
              <Link to="https://github.com/Treasuremathew1/house1"> 
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>

            <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://house1-iota.vercel.app/" target="_blank" className=''>View Project</Link>
              </button>
              <div className='flex items-center gap-10 mt-4'>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>HTML</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Layers  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>CSS</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <Code className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>JavaScript</h1>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_5}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>Online burger</h1>
              <Link to="https://github.com/Treasuremathew1/BURGER-web">
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>

            <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://burger-web-coral.vercel.app" target="_blank" className=''>View Project</Link>
              </button>
              <div className='grid sm:grid-cols-3 gap-6 mt-4'>
                <div className='flex  gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>HTML</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Layers  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>CSS</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <Code className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>JavaScript</h1>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
           className='bg-[#00171F] p-4 rounded-lg border-2 border-white/50'
          >
            <img 
             src={assests.img_6}
             alt="" 
             className='rounded-lg'
            />
            <div className='mt-3 flex items-center justify-between gap-2'>
              <h1 className='text-2xl font-bold'>VoltCharge</h1>
              <Link to="https://github.com/Treasuremathew1/VoltCharge">
                <Github className='w-6 h-6 text-[#00A6FB]' />
              </Link>
            </div>

            <div className=''>
              <button
               className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'
              >
              <Link to="https://volt-charge-cff2.vercel.app/" target="_blank" className=''>View Project</Link>
              </button>
              <div className='flex items-center gap-10 mt-4'>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                  <FileCode className='w-6 h-6 text-[#00A6FB]' />
                  <h1 className='text-sm'>React</h1>
                </div>
                <div className='flex items-center gap-2 border border-white/50 p-2 rounded-lg'>
                 <Wind  className='w-6 h-6 text-[#00A6FB]'/>
                 <h1 className='text-sm'>Tailwind CSS</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* tools */}
      <motion.section
        className='min-h-screen bg-gradient-to-br from-[#00171F] to-[#003459] text-white p-4'
      >
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>My Tools</h1>
        </div>

        <motion.div 
         className='mt-4'
        >
          <div className='mt-10'>
           <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'
           >
            <div className='flex items-center gap-2  border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/1a/1e/75/1a1e75b588e907899475fa79d8762a5b.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              />
              <h1 className='text-xl font-bold'>HTML</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/69/9e/3b/699e3b329647db00a7e8519c58f5771f.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              />
              <h1 className='text-xl font-bold'>CSS</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/1200x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              />
              <h1 className='text-xl font-bold'>JavaScript</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              />
              <h1 className='text-xl font-bold'>React</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/1200x/08/a3/2f/08a32fc73758025add069aefdde61b80.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>Tailwindcss</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/b8/ad/12/b8ad1222ae7315c6a6d484be17b88d4e.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              />  
              <h1 className='text-xl font-bold'>Nodejs</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/01/15/9b/01159bc9b0bc4ba22f834d06d4974230.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>MongoDB</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/ec/3a/60/ec3a60c8c6539a07eb70b52f6737ea6e.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>Github</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/a7/f5/78/a7f57841deeefc209c764244c7ab93a1.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>Git</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/1200x/b3/3f/0d/b33f0d10bab5c0d68a006844f7eda264.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>Chatgpt</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/d9/60/4c/d9604cb7482f822bd76b396bd563ad26.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>Chrome</h1>
            </div>

            <div className='flex items-center gap-2 border-2 border-white/50 p-4 rounded-lg'>
              <img 
               src="https://i.pinimg.com/736x/2a/90/63/2a906309ab96a943210dd61b5afed7cd.jpg" 
               alt="" 
               className='w-20 h-20 object-cover rounded-lg'
              /> 
              <h1 className='text-xl font-bold'>npm</h1>
            </div>
           </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
       className='min-h-[100%] bg-gradient-to-br from-[#00171F] to-[#003459] text-white p-4'
      >
        <div className='flex items-center justify-between gap-10 flex-col md:flex-row p-4'>
          <motion.div
           className='bg-[#003459] p-4 rounded-lg border-2 border-white/50 w-full md:w-1/2 p-3'
          >
            <div>
              <h1 className='text-2xl font-bold'>Contact me let's talk!</h1>
            </div>
            <div className='mt-4'>
              <motion.div
               className='flex items-center gap-2'
              >
                <Mail className='w-6 h-6 text-[#00A6FB]'/>
                <h1 className='text-xl'>treasuremathew04@gmail.com</h1>
              </motion.div>
              <motion.div
               className='flex items-center gap-2 mt-4'>
                <PhoneCall className='w-6 h-6 text-[#00A6FB]'/>
                <h1 className='text-xl'>+234 9153252305</h1>
              </motion.div>
            </div>
          </motion.div> 

          <motion.div
           className='bg-[#003459] p-4 rounded-lg border-2 border-white/50 w-full md:w-1/2'
          >
            <div>
              <h1 className='text-2xl font-bold'>Contact me</h1>
            </div>
            <form action="" className='mt-4'>
              <motion.div>
                <input type="text" placeholder='Name' className='w-full h-15  p-2 rounded-lg bg-[#00171F] border border-white/50 text-white' />
              </motion.div>
              <motion.div className='mt-4'>
                <input type="email" placeholder='Email' className='w-full h-15 p-2 rounded-lg bg-[#00171F] border border-white/50 text-white' />
              </motion.div>
              <motion.div className='mt-4'>
                <textarea placeholder='Message' className='w-full h-15 p-2 rounded-lg bg-[#00171F] border border-white/50 text-white' rows="5"></textarea>
              </motion.div>
              <motion.button className='bg-[#00A6FB] text-white px-4 py-2 rounded-lg mt-4'>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
       className='bg-[#00171F] p-4 text-white flex items-center justify-center flex-col gap-4'
      >
        <div className='flex items-center justify-center gap-6 p-4'>
          <motion.div
           className=''
          >
            <Link to='https://github.com/Treasuremathew1'
             className='flex items-center flex-col gap-2'>
             <GithubIcon className='w-7 h-7'/>
             <h1 className='text-sm'>GitHub</h1>
            </Link>
          </motion.div>
          <motion.div
           className=''
          >
            <Link to='https://www.facebook.com/TreasureDevs1'
             className='flex items-center flex-col gap-2'
            >
              <Facebook className='w-7 h-7'/>
              <h1 className='text-sm'>Facebook</h1>
            </Link>
          </motion.div>
          <motion.div>
            <Link to='https://x.com/treasure_c579700' 
            className='flex items-center flex-col gap-2'>
              <Twitter className='w-7 h-7'/>
              <h1 className='text-sm'>Twitter</h1>
            </Link>
          </motion.div>

          <motion.div>
            <Link to='https://www.instagram.com/treasuredevs?igsh=MWV0a3ZrZW91cGZpbA==' 
            className='flex items-center flex-col gap-2'>
              <Instagram className='w-7 h-7'/>
              <h1 className='text-sm'>Instagram</h1>
            </Link>
          </motion.div>
        </div>
        <div>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Treasure Mathew. All rights reserved.</p>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero;
