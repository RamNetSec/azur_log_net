// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { ArrowDown, Briefcase, MessageSquare } from 'lucide-react'; // Import icons

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ... (scrollToSection remains the same) ...
   const scrollToSection = (sectionId) => {
     const section = document.getElementById(sectionId);
     if (section) {
       const yOffset = -70;
       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({ top: y, behavior: 'smooth' });
     }
   };

  // Define animation classes based on visibility state
  const textContainerClasses = `text-center md:text-left max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
  const imageContainerClasses = `flex-shrink-0 transition-all duration-[1200ms] ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-90'}`;
  const scrollIndicatorClasses = `absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`;

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-800 text-white"
    >
      {/* Background pattern removed for cleaner look, uncomment if desired */}
      {/* <div className="absolute inset-0 z-0 opacity-10 bg-[url('...')]"></div> */}

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

        {/* Text content with animations */}
        <div className={textContainerClasses}>
          {/* Added a subtitle/role */}
           <span className="inline-block bg-white/10 text-indigo-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
             Estudiante de Redes y Data Science
           </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            ¡Hola! Soy <span className="text-indigo-300">Azul Ferreyra</span> 😃
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0">
            Explorando el mundo de la tecnología, aprendiendo y buscando oportunidades para crecer y contribuir. Lista para nuevos desafíos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md shadow-md hover:shadow-lg hover:bg-indigo-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Briefcase size={18} /> Ver proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-white font-medium rounded-md border-2 border-white hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
               <MessageSquare size={18} /> Contactar
            </button>
          </div>
        </div>

        {/* Image container with animations */}
         <div className={imageContainerClasses}>
           <div className="relative group">
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
             <img
               src="https://avatars.githubusercontent.com/u/138906084?v=4" // Use a slightly larger size if available from source ?s=280
               alt="Azul Ferreyra"
               className="relative w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-xl"
               width="256" // Helps browser reserve space
               height="256"
               loading="eager" // Load hero image immediately
            />
           </div>
         </div>

      </div>

      {/* Scroll indicator */}
      <div className={scrollIndicatorClasses}>
        <span className="text-xs mb-1 uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1.5}/>
      </div>

      {/* Tilt animation CSS is now in index.css */}
    </section>
  );
}

export default Hero;
