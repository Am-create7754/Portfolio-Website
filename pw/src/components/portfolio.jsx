import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaPaintBrush,
  FaLaptopCode,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRobot,
  FaPuzzlePiece
} from 'react-icons/fa';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about"); // default About page

  return (
    <div className="min-h-screen bg-[#21232a] flex font-sans px-8 pt-8 pb-6 gap-8">
      {/* Sidebar */}
      <aside
        className="w-80 bg-[#26272d] rounded-2xl flex flex-col items-center pt-10 pb-8 gap-3 shadow-lg self-start"
        style={{ marginBottom: '32px' }}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden bg-yellow-400 mb-4 flex items-center justify-center">
          {/* Cartoon avatar placeholder */}
          <svg viewBox="0 0 64 64" width="80" height="80">
            <circle cx="32" cy="32" r="32" fill="#FFD700" />
            <ellipse cx="32" cy="27" rx="14" ry="14" fill="#333" />
            <circle cx="24" cy="27" r="3" fill="#FFD700" />
            <circle cx="40" cy="27" r="3" fill="#FFD700" />
            <ellipse cx="32" cy="38" rx="10" ry="6" fill="#FFD700" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-yellow-400 mb-1 tracking-wide">Amber Sahay</h1>

        {/* Full Stack Developer badge */}
        <span className="bg-[#23242a] text-yellow-300 rounded px-3 py-1 text-xs font-medium mb-1">
          Full Stack Developer
        </span>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {['Web-Designer', 'Machine Learning', 'DSA'].map((role, idx) => (
            <span
              key={idx}
              className="bg-[#23242a] text-yellow-300 rounded px-3 py-1 text-xs font-medium"
            >
              {role}
            </span>
          ))}
        </div>

        <div className="w-4/5 border-b border-[#444] my-2"></div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 items-start text-gray-300 text-sm w-4/5">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" /> ambersahay18@gmail.com
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-yellow-400" /> +91 7754941682
          </div>
          <div className="flex items-center gap-3">
            <FaBirthdayCake className="text-yellow-400" /> 12 Jan, 2005
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400" /> Tamil Nadu, India
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mt-7">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-0 items-stretch">
        {/* Nav bar */}
        <nav className="flex justify-end gap-0">
          <div
            className="flex bg-[#26272d] rounded-t-2xl px-3 pt-2 pb-2 gap-2"
            style={{ marginBottom: '-2px' }}
          >
            {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? "text-yellow-300"
                    : "text-yellow-300"
                } font-semibold text-lg px-8 py-2 rounded-t-xl hover:text-yellow-400 hover:shadow-[0_0_18px_#FFD700] transition duration-300`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Box */}
        <main className="bg-[#26272d] rounded-b-2xl rounded-tr-2xl p-10 flex flex-col gap-10 shadow-lg flex-1">
          {/* About Section with What I'm Doing & Testimonials */}
          {activeSection === "about" && (
            <>
              <section>
                <h2 className="text-4xl font-bold text-yellow-400 mb-5">About Me</h2>
                <p className="text-gray-300 max-w-3xl leading-normal text-lg">
                  Hi, I'm Amber Sahay. Passionate tech lover and creative developer, specializing in
                  Machine Learning, Data Structures, and Cybersecurity.
                  <br />
                  I enjoy solving complex problems and making beautiful, functional digital
                  experiences.
                  <br />
                  My job is to build your website so that it is functional and user-friendly but at the
                  same time attractive.
                </p>
              </section>

              {/* What I'm Doing */}
              <section>
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">What I'm Doing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  {[
                    { icon: FaPaintBrush, title: 'Web Design', desc: 'The most modern and high-quality design made at a professional level' },
                    { icon: FaLaptopCode, title: 'Web Development', desc: 'High-quality development of sites at the professional level' },
                    { icon: FaRobot, title: 'Machine Learning', desc: 'Building smart models and AI systems.' },
                    { icon: FaPuzzlePiece, title: 'Problem Solving', desc: 'Strong analytical and algorithm skills.' },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i}
                      className="bg-[#1d1f23] rounded-xl px-7 py-6 flex items-center gap-6 border border-[#222328] hover:shadow-[0_0_25px_#FFD700] hover:border-yellow-400 transition">
                      <Icon className="text-yellow-300 text-5xl flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-xl text-yellow-400 mb-1">{title}</h3>
                        <p className="text-gray-400 text-base">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section>
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                  {[
                    { img: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Rohit Patil', feedback: 'Very pleased with the work.' },
                    { img: 'https://randomuser.me/api/portraits/women/56.jpg', name: 'Dipsi Sinha', feedback: 'Rich, functional, and beautiful design.' },
                    { img: 'https://randomuser.me/api/portraits/men/53.jpg', name: 'Alex Verma', feedback: 'Great communication and excellent coding skills.' },
                  ].map(({ img, name, feedback }, i) => (
                    <div key={i}
                      className="bg-[#1d1f23] rounded-xl pt-10 pb-6 px-6 flex flex-col items-center relative border border-[#222328] hover:shadow-[0_0_25px_#FFD700] hover:border-yellow-400 transition">
                      <img src={img} className="w-16 h-16 rounded-full border-2 border-yellow-300 absolute -top-8 left-1/2 -translate-x-1/2" alt={name} />
                      <span className="font-semibold text-yellow-400 text-lg mb-2 mt-8">{name}</span>
                      <p className="italic text-gray-400 text-center max-w-xs">{feedback}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Resume */}
          {activeSection === "resume" && (
            <section>
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Resume</h2>
              <div className="space-y-6">
                {[
                  { title: 'B.Tech CSE', company: 'SRM University', year: '2023-Present', desc: 'Focusing on DSA, ML and Development' },
                  { title: 'ML Intern', company: 'Galgotia University', year: 'AUG 2025-Present', desc: 'Working on Ransomware detection for Hate and Non-Hate speech.' },
                  { title: 'Senior Product Manager', company: 'AIESEC in Chennai', year: 'AUG 2024 - JAN 2025', desc: 'Volunteered for global youth leadership development.' },
                ].map(({ title, company, year, desc }, idx) => (
                  <div key={idx} className="bg-[#1d1f23] p-6 rounded-xl border border-[#222328] hover:border-yellow-400 hover:shadow-[0_0_25px_#FFD700] transition">
                    <h3 className="text-xl font-bold text-yellow-300">{title}</h3>
                    <span className="text-gray-400 text-sm">{company} | {year}</span>
                    <p className="text-gray-300 mt-2">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Portfolio */}
          {activeSection === "portfolio" && (
            <section>
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Portfolio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {[
                  { img: 'https://picsum.photos/300/200?random=1', title: 'DesignNest' },
                  { img: 'https://picsum.photos/300/200?random=2', title: 'Ransomware Detection' },
                  { img: 'https://picsum.photos/300/200?random=3', title: 'Portfolio-Web' },
                ].map(({ img, title }, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden relative group shadow-lg hover:shadow-[0_0_25px_#FFD700]">
                    <img src={img} alt={title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-yellow-300 font-semibold text-lg">{title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact */}
          {activeSection === "contact" && (
            <section>
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Contact</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#1d1f23] text-gray-200 border border-[#333] focus:border-yellow-400 outline-none" />
                <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#1d1f23] text-gray-200 border border-[#333] focus:border-yellow-400 outline-none" />
                <textarea placeholder="Your Message" className="p-3 rounded bg-[#1d1f23] text-gray-200 border border-[#333] focus:border-yellow-400 outline-none col-span-1 sm:col-span-2 h-32"></textarea>
                <button type="submit" className="bg-yellow-400 text-[#23242a] font-bold py-2 px-6 rounded hover:bg-yellow-300 transition">
                  Send Message
                </button>
              </form>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
