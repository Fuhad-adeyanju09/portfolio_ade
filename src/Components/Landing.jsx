import '../App.css';
import Silk from '../Silk';
import TextType from '../TextType';
import ShinyText from '../ShinyText';
import profileImg from '../images/profile.jpeg';
import luxeImg from '../images/luxe_estate.jpg';
import Squares from '../Squares';
import Tooltip from '../ToolTip';
import { useState, useRef } from 'react';

// Import icons from react-icons
import { 
  FaReact, FaNodeJs, FaDocker, FaGithub, FaFigma, FaExternalLinkAlt, FaDatabase
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiDotnet, SiMongodb, 
  SiPostgresql, SiFirebase, SiSupabase, SiExpress, SiRedux, SiOpenai 
} from 'react-icons/si';

const projectsData = [
  {
    id: 1,
    name: "Luxe Estate",
    description: "A premium UK luxury real estate portal featuring advanced property search, interactive maps, agent dashboards, mortgage calculators, EPC ratings, and full user authentication.",
    image: luxeImg, // New Luxe Estate image
    liveUrl: "https://luxe-estate-ymo2.vercel.app/",
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Express"]
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Stripe payment integration, user authentication, product management, and a complete admin dashboard with analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    liveUrl: null,
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"]
  },
  {
    id: 3,
    name: "Fintech Dashboard",
    description: "A secure financial dashboard for tracking expenses, managing budgets, visualizing investment portfolios, and analyzing spending habits with beautiful charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    liveUrl: null,
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["React", "Firebase", "Chart.js", "TypeScript"]
  },
  {
    id: 4,
    name: "AI Content Generator",
    description: "An AI-powered web application that generates SEO-optimised blog posts, social media captions, and marketing copy using the OpenAI API.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    liveUrl: null,
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["React", "OpenAI API", "Node.js", "Supabase"]
  },
  {
    id: 5,
    name: "Social Media App",
    description: "A community-focused social networking app with real-time messaging via WebSockets, post sharing, story feeds, and user profiles.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    liveUrl: null,
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["React", "Socket.io", "Firebase", "Tailwind"]
  },
  {
    id: 6,
    name: "Task Management Tool",
    description: "A collaborative project management tool featuring Kanban boards, drag-and-drop task assignments, deadlines, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    liveUrl: null,
    github: "https://github.com/Fuhad-adeyanju09",
    technologies: ["Next.js", "PostgreSQL", "Supabase", "TypeScript"]
  }
];

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB', progress: 95 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', progress: 85 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', progress: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', progress: 95 },
      { name: 'Redux', icon: SiRedux, color: '#764ABC', progress: 85 },
    ]
  },
  {
    label: "Backend",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', progress: 90 },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', progress: 90 },
      { name: '.NET', icon: SiDotnet, color: '#512BD4', progress: 75 },
      { name: 'REST APIs', icon: FaDatabase, color: '#00758F', progress: 95 },
    ]
  },
  {
    label: "Database & Cloud",
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', progress: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', progress: 80 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', progress: 90 },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', progress: 85 },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', progress: 70 },
    ]
  },
  {
    label: "Tools & Other",
    skills: [
      { name: 'Git & GitHub', icon: FaGithub, color: '#ffffff', progress: 95 },
      { name: 'AI Tools', icon: SiOpenai, color: '#412991', progress: 90 },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E', progress: 80 },
    ]
  }
];

function Landing() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });
  const [activeSkillGroup, setActiveSkillGroup] = useState(0);
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/myzdlwqz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        setFormState({ status: 'success', message: "🎉 Message sent! I'll get back to you within 24 hours." });
        form.reset();
      } else {
        throw new Error('Network error');
      }
    } catch {
      setFormState({ status: 'error', message: '❌ Something went wrong. Please try again.' });
    }
  }

  return (
    <div className="font-sans antialiased text-white selection:bg-blue-500/30 overflow-x-hidden w-full max-w-[100vw]">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Silk speed={5} scale={1} color="003049" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex items-center gap-5 md:gap-7 px-6 md:px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-white transition-all duration-300 ease-in-out hover:scale-110 hover:px-12 hover:py-4">
          {[
            { label: 'Me', href: '#me' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map((item, i) => (
            <li key={i} className="cursor-pointer transition-colors hover:text-blue-400 font-medium text-sm md:text-base">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <header id="me" className="flex flex-col xl:flex-row items-center justify-center min-h-screen px-6 md:px-10 gap-16 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="flex-1 text-white space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-sm font-medium mb-2 transition-all hover:bg-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Adeyanju Fuhad <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Adebowale</span>
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xl md:text-2xl font-medium text-gray-300">
            <h2>I specialize as a</h2>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-1.5 shadow-lg text-white">
              <TextType
                text={['Backend Specialist', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
          <div className="text-base md:text-lg leading-relaxed text-gray-300">
            <ShinyText
              text="I build end-to-end web applications — from pixel-level UI to production-ready backend systems."
              disabled={false}
              speed={3}
              className="font-medium"
            />
          </div>
          <div className="flex flex-row items-center gap-4 flex-wrap pt-4">
            <a href="#contact" className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] border border-blue-400/20">
              Hire Me
            </a>
            <a href="#projects" className="inline-flex items-center justify-center h-14 px-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105">
              View Work
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center relative w-full max-w-[400px]">
          <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-blue-600/20 rounded-full blur-[80px] top-10 right-0"></div>
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600/20 rounded-full blur-[70px] bottom-10 left-0"></div>
          
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full p-2 bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
            <img src={profileImg} alt="Adeyanju Fuhad" className="rounded-full object-cover w-full h-full border-4 border-transparent bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-border" />
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-10 mt-16 relative z-10 w-full max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -z-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-medium">
            <p>
              I'm Fuhad, a Computer Engineering student at Obafemi Awolowo University and a fullstack developer who builds end-to-end web applications — from pixel-level UI to production-ready backend systems.
            </p>
            
            <p>
              My core stack is <span className="text-white font-bold">Python, Node.js, Express.js, MongoDB, and Docker</span>, and I'm comfortable across the full development lifecycle — REST API design, database modeling, containerization, and deploying apps that actually work in the real world.
            </p>
            
            <p>
              My journey into tech started at <span className="text-blue-300 font-bold">Nupat Technologies</span>, where I built my foundation and grew into developing full applications independently. Right now, I'm working on <span className="text-green-400 font-bold">Agrofinis</span> — an agritech platform connecting Nigerian smallholder farmers directly to buyers, eliminating middlemen and creating real economic impact at the grassroots level.
            </p>
            
            <p>
              I bring both technical depth and product thinking to everything I build. I don't just ship features — I think about why they exist and how they serve the people using them.
            </p>
            
            <p className="pt-4 border-t border-white/10 text-white font-semibold">
              I'm currently open to internship, freelance, and entry-level fullstack roles where I can contribute meaningfully and keep building things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-10 mt-32 relative z-10 w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 blur-[120px] rounded-full -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Skills & Expertise</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">A comprehensive toolkit spanning the entire modern web stack.</p>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <button
              key={i}
              onClick={() => setActiveSkillGroup(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 cursor-pointer
                ${activeSkillGroup === i
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] scale-105'
                  : 'bg-white/5 backdrop-blur-md border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skillGroups[activeSkillGroup].skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner shrink-0">
                    {Icon && <Icon size={28} color={skill.color} className="drop-shadow-lg" />}
                  </div>
                  <span className="text-lg font-bold text-gray-200">{skill.name}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative z-10 mt-auto w-full">
                  <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span className="text-gray-300">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
                      style={{ width: `${skill.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-10 mt-32 relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Real-world applications built with scalability and performance in mind.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] hover:border-white/20 overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-56 relative overflow-hidden p-2">
                 <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-80"></div>
                  
                  {project.liveUrl && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Live
                    </div>
                  )}
                 </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-4 flex-1 flex flex-col relative">
                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-1">{project.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] font-bold px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Quick Links Preview */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                   <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                     <FaExternalLinkAlt size={12} />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all">
                     <FaGithub size={14} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 mt-32 pb-32 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Let's Connect & Create</h2>
            <p className="text-gray-400 text-lg">Have a project in mind or just want to say hi? My inbox is always open.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full -z-10"></div>

            {formState.status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                  <span className="text-4xl">🎉</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400 max-w-md">{formState.message}</p>
                <button
                  onClick={() => setFormState({ status: 'idle', message: '' })}
                  className="mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all font-semibold"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {formState.status === 'error' && (
                  <div className="px-6 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300 text-sm font-medium flex items-center gap-3">
                    <span className="text-xl">⚠️</span> {formState.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 ml-1">Full Name</label>
                    <input type="text" name="name" required className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-md" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                    <input type="email" name="email" required className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-md" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 ml-1">Subject</label>
                  <input type="text" name="subject" className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-md" placeholder="How can I help you?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                  <textarea name="message" rows="5" required className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-md resize-none" placeholder="Tell me about your project..." />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={formState.status === 'loading'}
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-70 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {formState.status === 'loading' ? (
                      <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</>
                    ) : (
                      <>Say Hello <FaExternalLinkAlt size={12}/></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative w-full border-t border-white/10 py-16 px-10 overflow-hidden bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 -z-10">
          <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="#223" hoverFillColor="#222" />
        </div>
        <div className="relative z-20 text-center text-white flex flex-col items-center justify-center min-h-[150px]">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Ready to collaborate?</h2>
          <Tooltip />
          <p className="mt-12 text-gray-500 text-sm font-medium">© {new Date().getFullYear()} Adeyanju Fuhad Adebowale. Designed with ♥</p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-lg border-none transition-opacity"></div>
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/40 border border-white/10 hover:bg-white/10 text-white rounded-full transition-all backdrop-blur-md hover:rotate-90 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="md:w-[45%] h-64 md:h-auto relative p-4 pb-0 md:pr-0 shrink-0">
               <div className="w-full h-full rounded-2xl md:rounded-r-none overflow-hidden relative border border-white/10 md:border-none">
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0f1423]/90 via-[#0f1423]/40 to-transparent"></div>
               </div>
            </div>

            <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {selectedProject.name}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 font-medium">
                {selectedProject.description}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 flex items-center gap-2 border border-blue-400/20">
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 flex items-center gap-2 hover:-translate-y-1">
                    <FaGithub size={18} /> <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
