import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaCamera,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Portfolio() {
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

        {/* Full Stack Developer badge styled same as other roles */}
        <span className="bg-[#23242a] text-yellow-300 rounded px-3 py-1 text-xs font-medium mb-1">
          Full Stack Developer
        </span>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {['Developer', 'ML', 'DSA'].map((role, idx) => (
            <span
              key={idx}
              className="bg-[#23242a] text-yellow-300 rounded px-3 py-1 text-xs font-medium"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Divider below roles */}
        <div className="w-4/5 border-b border-[#444] my-2"></div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 items-start text-gray-300 text-sm w-4/5">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" /> amber.sahay@example.com
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-yellow-400" /> +123 456 7890
          </div>
          <div className="flex items-center gap-3">
            <FaBirthdayCake className="text-yellow-400" /> 15 March, 1990
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400" /> New York, USA
          </div>
        </div>

        {/* Social icons at bottom centered */}
        <div className="flex justify-center gap-5 mt-7">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#23242a] text-yellow-400 rounded-full p-3 text-xl hover:bg-yellow-400 hover:text-[#23242a] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-0 items-stretch">
        {/* Nav bar box on top right above content */}
        <nav className="flex gap-0">
          <div
            className="flex bg-[#26272d] rounded-t-2xl w-full px-3 pt-2 pb-2 gap-2"
            style={{ marginBottom: '-2px' }}
          >
            {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-yellow-300 font-semibold text-lg px-8 py-2 rounded-t-xl hover:text-yellow-400 hover:shadow-[0_0_18px_#FFD700] transition-shadow duration-300 font-bold"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Content Box */}
        <main className="bg-[#26272d] rounded-b-2xl rounded-tr-2xl p-10 flex flex-col gap-10 shadow-lg flex-1">
          {/* About Me */}
          <section id="about">
            <h2 className="text-4xl font-bold text-yellow-400 mb-5">About Me</h2>
            <p className="text-gray-300 max-w-3xl leading-normal text-lg">
              Hi, I'm Amber Sahay. Passionate tech lover and creative developer, specializing in
              Machine Learning, Data Structures, and Cybersecurity.
              <br />
              I enjoy solving complex problems and making beautiful, functional digital
              experiences.
              <br />
              My job is to build your website so that it is functional and user-friendly but at the
              same time attractive. I add a personal touch to your product and make sure it's catchy
              and easy to use.
            </p>
          </section>

          {/* What I'm Doing */}
          <section>
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">What I'm Doing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {[
                {
                  icon: FaPaintBrush,
                  title: 'Web Design',
                  desc: 'The most modern and high-quality design made at a professional level.',
                },
                {
                  icon: FaLaptopCode,
                  title: 'Web Development',
                  desc: 'High-quality development of sites at the professional level.',
                },
                {
                  icon: FaMobileAlt,
                  title: 'Professional Mobile Apps',
                  desc: 'Development of apps for iOS and Android at a professional level.',
                },
                {
                  icon: FaCamera,
                  title: 'Photography',
                  desc: 'I make high-quality photographs of any category at a professional level.',
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-[#1d1f23] rounded-xl px-7 py-6 flex items-center gap-6 transition-shadow duration-300 hover:shadow-[0_0_25px_#FFD700] border-[2px] border-[#222328]"
                  style={{
                    minHeight: '120px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.14)',
                  }}
                >
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
          <section className="pb-4">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              {[
                {
                  img: 'https://randomuser.me/api/portraits/men/32.jpg',
                  name: 'Rohit Patil',
                  feedback:
                    'Richard was hired to create a corporate identity. We were very pleased with the work.',
                },
                {
                  img: 'https://randomuser.me/api/portraits/women/56.jpg',
                  name: 'Dipsi Sinha',
                  feedback: 'Rich, functional, and beautiful design. Strongly recommended!',
                },
                {
                  img: 'https://randomuser.me/api/portraits/men/53.jpg',
                  name: 'Alex Verma',
                  feedback:
                    'Great communication and even better development skills by Amber.',
                },
              ].map(({ img, name, feedback }, i) => (
                <div
                  key={i}
                  className="bg-[#1d1f23] rounded-xl pt-10 pb-6 px-6 flex flex-col items-center relative transition-shadow duration-300 hover:shadow-[0_0_20px_#FFD700] border-[2px] border-[#222328]"
                  style={{
                    minHeight: '120px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.14)',
                  }}
                >
                  <img
                    src={img}
                    className="w-16 h-16 rounded-full border-2 border-yellow-300 absolute -top-8 left-1/2 -translate-x-1/2"
                    alt={name}
                  />
                  <span className="font-semibold text-yellow-400 text-lg mb-2 mt-8">{name}</span>
                  <p className="italic text-gray-400 text-center max-w-xs">{feedback}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
