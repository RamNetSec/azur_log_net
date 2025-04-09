// src/components/SobreMi.jsx
import { BookOpen, CheckCircle2 } from 'lucide-react'; // Import icons

function SobreMi() {
  // Skill images can remain as they are specific logos
  // Consider finding SVG versions for better quality if possible
  const skills = [
    { name: 'HTML5', src: 'https://cdn-icons-png.flaticon.com/128/919/919827.png' },
    { name: '.NET', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/456px-.NET_Logo.svg.png' },
    { name: 'SQL Server', src: 'https://img.icons8.com/color/480/microsoft-sql-server.png' },
    { name: 'CSS3', src: 'https://cdn-icons-png.flaticon.com/128/919/919826.png' },
    { name: 'JavaScript', src: 'https://cdn-icons-png.flaticon.com/128/888/888874.png' },
    { name: 'Python', src: 'https://cdn-icons-png.flaticon.com/128/906/906342.png' },
  ];

  const courses = [
    "Curso de Ciberseguridad con CoderHouse, certificado por DELTA Protect",
    "Curso de Data Analytics con CoderHouse",
    "Curso de Introducción a Redes con EducacionIT"
  ];

  return (
    // Use background from body (bg-gray-50)
    <section id="sobre-mi" className="bg-transparent">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me Text with Animation */}
        <div className="md:flex md:items-start md:gap-12">
           <div className="md:w-2/3 space-y-4 animate-fadeInLeft"> {/* Added animation */}
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 inline-block border-b-4 border-indigo-300 pb-1">
              Sobre mí
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Soy estudiante en la carrera de Redes en EducacionIT y de Data Science en Coderhouse. Considero que mi creatividad se manifiesta en la resolución de problemas y la exploración de soluciones innovadoras para abordar desafíos tecnológicos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mi principal objetivo es adentrarme en el campo laboral, donde pueda aplicar y fortalecer mis habilidades en seguridad informática en datos y/o redes. Busco mi primer empleo en un entorno que me brinde la oportunidad de crecer y evolucionar como profesional, mientras trabajo de manera proactiva para alcanzar nuevos logros en el mundo de la tecnología.
            </p>
          </div>
          {/* Optional: Add an illustrative image that animates */}
           <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center animate-fadeInRight animation-delay-200">
             {/* Example: You could put a relevant illustration here */}
             <img src="/placeholder-illustration.svg" alt="Coding illustration" className="w-56 h-auto opacity-70" onError={(e) => e.target.style.display='none'}/>
           </div>
        </div>


        {/* Aptitudes with Animation */}
        <div id="aptitudes" className="space-y-6 scroll-mt-20 pt-8"> {/* scroll-mt for anchor offset */}
          <h2 className="text-3xl font-bold text-indigo-700 text-center animate-fadeInUp">Aptitudes</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto animate-fadeInUp animation-delay-100">
             Estas son algunas de las tecnologías con las que tengo experiencia y sigo aprendiendo.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-10 pt-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="text-center group transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${150 + index * 100}ms` }} // Staggered animation delay
              >
                <img
                  src={skill.src}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  alt={skill.name}
                  loading="lazy"
                  width="80" // Provide intrinsic size hints
                  height="80"
                />
                <p className="text-sm font-medium text-gray-600 group-hover:text-indigo-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos Realizados with Animation */}
        <div className="space-y-5 bg-white p-8 rounded-lg shadow-lg border border-gray-200 animate-fadeInUp animation-delay-300">
          <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2.5">
            <BookOpen className="text-indigo-500" size={24} strokeWidth={2}/>
            Cursos Realizados
          </h2>
          <ul className="list-none space-y-3 pl-1">
            {courses.map((curso, index) => (
               <li key={index} className="flex items-start text-lg text-gray-700">
                 <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" strokeWidth={2.5}/>
                 {curso}
               </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default SobreMi;