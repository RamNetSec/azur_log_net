// src/components/SobreMi.jsx
import { BookOpen, CheckCircle2 } from 'lucide-react'; // Import icons
import Typewriter from './Typewriter';

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
    <section id="sobre-mi" className="bg-[#181A20] py-20 font-mono border-b-2 border-[#39FF14]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me Text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <div className="w-full md:w-2/3 space-y-4 bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440]">
            <div className="text-[#00ffe7] text-sm mb-2 select-none">
              <Typewriter
                texts={["$ whoami"]}
                speed={70}
                eraseSpeed={20}
                delay={900}
                className="font-mono"
                cursorClass="text-[#39FF14]"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#39FF14] mb-3">Sobre mí</h2>
            <p className="text-base text-[#baffc9] leading-relaxed">
              Profesional especializada en ciberseguridad defensiva y data science, con experiencia en protección de infraestructuras críticas, detección y respuesta ante amenazas, y optimización de la seguridad de la información. Apasionada por la mejora continua, la automatización y el aprendizaje de nuevas tecnologías.
            </p>
            <p className="text-base text-[#baffc9] leading-relaxed">
              Mi objetivo es aportar valor en equipos donde la ciberseguridad y el análisis de datos sean pilares estratégicos, anticipando riesgos y garantizando la resiliencia operativa.
            </p>
          </div>
        </div>


        {/* Aptitudes with Animation */}
        <div id="aptitudes" className="space-y-6 scroll-mt-20 pt-8">
          <div className="bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440]">
            <h2 className="text-2xl font-bold text-[#39FF14] text-center mb-4">Aptitudes</h2>
            <p className="text-base text-[#baffc9] text-center max-w-2xl mx-auto mb-6">
              Tecnologías y lenguajes con los que tengo experiencia y sigo aprendiendo:
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-10 pt-2">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="text-center group transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  style={{ animationDelay: `${150 + index * 100}ms` }}
                >
                  <img
                    src={skill.src}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                    alt={skill.name}
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                  <p className="text-xs font-medium text-[#00ffe7]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cursos Realizados */}
        <div className="bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440] space-y-5">
          <h2 className="text-2xl font-bold text-[#39FF14] flex items-center gap-2.5 mb-4">
            <BookOpen className="text-[#00ffe7]" size={22} strokeWidth={2}/>
            Cursos Realizados
          </h2>
          <ul className="list-none space-y-3 pl-1">
            {courses.map((curso, index) => (
              <li key={index} className="flex items-start text-base text-[#baffc9]">
                <CheckCircle2 className="h-5 w-5 text-[#00ffe7] mr-3 mt-1 flex-shrink-0" strokeWidth={2}/>
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
