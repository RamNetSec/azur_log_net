// src/components/Footer.jsx
import { Linkedin, Instagram, Github, Link as LinkIcon } from 'lucide-react'; // Import icons

function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/azul-r-ferreyra/", Icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/azul.r.ferreyra/", Icon: Instagram },
    { name: "GitHub", href: "https://github.com/Azul-Ferreyra", Icon: Github },
    { name: "Linktree", href: "https://linktr.ee/azulferreyrarocio", Icon: LinkIcon } // Use Lucide's Link icon
  ];

  return (
    <footer id="contacto" className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 pt-16 pb-8 border-t-4 border-indigo-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3 animate-fadeInUp">
          <span>Contáctame</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
        </h2>
        <p className="text-lg mb-10 text-gray-400 max-w-xl mx-auto animate-fadeInUp animation-delay-100">
          ¡Siempre estoy abierta a nuevas oportunidades y colaboraciones! No dudes en ponerte en contacto a través de mis redes.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12 animate-fadeInUp animation-delay-200">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label={`Visita mi perfil de ${link.name}`}
            >
              <link.Icon size={28} strokeWidth={1.75} /> {/* Slightly larger icons */}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-500 animate-fadeInUp animation-delay-300">
          <p>© {new Date().getFullYear()} Azul Ferreyra. Todos los derechos reservados.</p>
          {/* <p className="mt-2">Hecho con React, Tailwind CSS y Lucide Icons</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
