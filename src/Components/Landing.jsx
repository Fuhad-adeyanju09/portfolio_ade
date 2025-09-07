import '../App.css';
import Silk from '../Silk';
import TextType from '../TextType';
import ShinyText from '../ShinyText';
import image from '../images/hero.jpeg';
import react from '../images/react.svg';
import next from '../images/nextjs.svg';
import tailwind from '../images/tailwind.svg';
import typescript from '../images/typescript.svg';
import node from '../images/nodejs.svg';
import net from '../images/dotnet.svg';
import sql from '../images/SQL.svg';
import fire from '../images/firebase.svg';
import ai from '../images/Ai.svg';
import supa from '../images/supabase.svg';
import Squares from '../Squares';
import Tooltip from '../ToolTip';

function Landing() {
  return (
    <>
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="003049"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <ul
          className="flex items-center gap-7 px-8 py-3
          rounded-full 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-lg text-white
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:px-12 hover:py-4"
        >
          {[
            { label: 'Me', href: '#me' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer transition-colors hover:text-blue-400"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header
        id="me"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-16 pt-32"
      >
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Adeyanju Fuhad <br /> Adebowale
          </h1>

          <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
            <h2>I am a</h2>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl px-4 py-1 shadow-md">
              <TextType
                text={[
                  'Fullstack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
          </div>

          <div className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-200">
            <ShinyText
              text="Hi, I'm Adeyanju Fuhad — a passionate Full-Stack Developer dedicated to building elegant, user-friendly, and scalable digital solutions. I specialize in turning ideas into functional products by combining clean frontend design with solid backend architecture."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
          <div>
            <a
              href="#contact"
              className="inline-block px-6 py-3 
                 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900
                 text-white font-semibold 
                 rounded-full shadow-lg 
                 transition-transform transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute w-60 h-60 bg-blue-500/40 rounded-full blur-3xl animate-pulse -top-12 -right-10"></div>
          <div className="absolute w-40 h-40 bg-purple-500/40 rounded-full blur-2xl animate-spin-slow bottom-10 right-20"></div>
          <div className="absolute w-24 h-24 bg-pink-500/30 rounded-full blur-xl animate-bounce top-20 -left-10"></div>
          <div className="absolute w-80 h-80 border-2 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-96 h-96 border border-blue-400/20 rounded-full animate-reverse-spin"></div>
          <div className="w-72 h-72 bg-white/10 rounded-full border border-white/30 shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt=""
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </header>
      <section
        id="skills"
        className="px-10 mt-24 text-white flex items-center flex-col"
      >
        <h1 className="text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            { name: 'React.js', logo: react },
            { name: 'Next.js', logo: next },
            { name: 'Tailwind CSS', logo: tailwind },
            { name: 'TypeScript', logo: typescript },
            { name: 'Node.js', logo: node },
            { name: '.Net', logo: net },
            { name: 'SQL', logo: sql },
            { name: 'Supabase', logo: supa },
            { name: 'Firebase', logo: fire },
            { name: 'AI Tools', logo: ai },
          ].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                rounded-2xl shadow-lg 
                hover:scale-105 transition-transform cursor-pointer"
            >
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3"
                />
              ) : (
                <div className="w-12 h-12 bg-white/20 rounded-lg mb-3"></div>
              )}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="projects" className="px-10 mt-24 text-white">
        <h1 className="text-4xl font-bold text-center mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-white/10 backdrop-blur-xl 
              border border-white/10 
              rounded-2xl shadow-blue-100/10
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2 hover:shadow-[0_0_20px_4px_rgba(10,20,80,0.6)]
              overflow-hidden"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/80">P{i + 1}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Project {i + 1}</h3>
                <p className="text-sm text-gray-300">Description of the project goes here...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="px-10 mt-24 pb-24 text-white">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/myzdlwqz"
            method="POST"
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-inset-custom"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="relative border border-t-gray-700 py-16 px-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#223"
            hoverFillColor="#222"
          />
        </div>
        <div className="relative z-20 text-center text-white flex flex-col items-center justify-center min-h-[200px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Want to start a project?</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">You can reach out to me</p>
          <Tooltip/>
        </div>
      </footer>
    </>
  );
}

export default Landing;
