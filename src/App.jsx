import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Reveal from "./components/Reveal";
import ProjectCard from "./components/ProjectCard";
import Cursor from "./components/Cursor"; // Import the cursor

export default function App() {
  return (
    <div className="bg-white text-gray-900 selection:bg-black selection:text-white">
      <Cursor />
      <Navbar />

      {/* HERO SECTION */}
      <section className=" section-light min-h-screen flex flex-col justify-center items-center text-center px-6">
        
        {/* Name with Reveal Mask */}
        <div className="overflow-hidden py-2"> 
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter uppercase"
          >
            Bhoomi
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="mt-4 text-lg md:text-xl text-gray-500 font-light tracking-wide"
          >
            Aspiring Software Engineer • Building clean and functional web experiences
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 text-xs uppercase tracking-widest text-gray-400"
        >
          Scroll to Explore ↓
        </motion.div>
      </section>

     
{/* SKILLS SECTION */}
<section id="skills" className="section-light relative h-[200vh]">
  
  {/* Fixed Background */}
  <div className="sticky top-0 h-screen flex items-center justify-center bg-black border-y border-gray-200">
    <h2 className="text-4xl font-semibold text-gray-300 tracking-wide">
      Skills
    </h2>
  </div>

 {/* Scrolling Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center pt-[40vh] gap-24">

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
   className="w-[320px] h-[160px] flex flex-col justify-center bg-white shadow-sm border border-gray-200 px-8 py-6 rounded-xl"
  >
    <h3 className="text-xl font-semibold mb-2">Languages</h3>
    <p className="text-gray-600">Java • JavaScript • Python • C</p>
    
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="w-[320px] h-[160px] flex flex-col justify-center bg-white shadow-sm border border-gray-200 px-8 py-6 rounded-xl"
  >
    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
    <p className="text-gray-600">HTML • CSS • React • Tailwind CSS • Node.js</p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="w-[320px] h-[160px] flex flex-col justify-center bg-white shadow-sm border border-gray-200 px-8 py-6 rounded-xl"
  >
    <h3 className="text-xl font-semibold mb-2">Database & Tools</h3>
    <p className="text-gray-600">MySQL • VS Code • Git • GitHub</p>
  </motion.div>

</div>
</section>

      {/* ABOUT SECTION */}
      <section id="about" className=" section-dark min-h-[70vh] flex items-center justify-center px-6 bg-gray-50">
        <Reveal>
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter">About Me</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              I’m a Computer Science Engineering student passionate about building clean, minimal web applications. With a strong foundation in Java and modern web technologies, I enjoy turning ideas into smooth, user-friendly experiences. Currently focused on full-stack development while preparing for software roles.
            </p> 
            <p className="text-xl text-gray-600 leading-relaxed font-light">
             — Bhoomi
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-light min-h-screen px-6 py-24 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-16 uppercase tracking-tighter">Projects</h2>
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl w-full">
          <ProjectCard title="Machine Learning Phishing Attack Detection System" desc="A machine
learning–based model to detect and classify phishing websites/emails using supervised
learning techniques." link="#" />
          <ProjectCard title="IoT Air Quality Monitoring System" desc="Designed real-time IoT solution for monitoring
air pollution levels with continuous data logging." link="#" />
          <ProjectCard title="Metro Management System" desc="Designed and implemented a web application supporting
CRUD functionality using HTML and Python for structured data management." link="#" />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-dark min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">Let's talk.</h2>
        <p className="text-gray-400 mb-12 max-w-md text-lg">
          I'm open to internships, collaborations, and opportunities.
        </p>
        <div className="flex gap-10">
         <a href="#"className="text-xl relative after:absolute after:left-1/2 after:-bottom-1 
          after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 
          hover:after:left-0 hover:after:w-full">LinkedIn</a>

          <a href="https://github.com/iambhoomii"className="text-xl relative after:absolute 
          after:left-1/2 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all 
          after:duration-300 hover:after:left-0 hover:after:w-full">GitHub</a>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-500 text-xs uppercase tracking-widest">
        © 2026 Bhoomi. Made with Focus.
      </footer>
    </div>
  );
}