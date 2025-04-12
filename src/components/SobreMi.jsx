// src/components/SobreMi.jsx
import { BookOpen, CheckCircle2 } from 'lucide-react'; // Import icons
import Typewriter from './Typewriter';
import CertCarousel from './CertCarousel';

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

  // Certificados
  const certImages = [
    "https://media.discordapp.net/attachments/1359956417636860098/1360671252758659092/Certificado-Data-Science-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=39454a23e436243e92d48e446d5d0e6947a80addb9518e3eb8674c339f3f5e6c&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671253144408145/Certificado-Introduccion-al-mundo-web-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=47f4896e62393fe36328b3db9856413e3b520dd617513ad87caa82fb286d1a3d&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671253618229309/Certificado-Introduccion-a-Redes-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=e86902ef8ffb36fcb34ef1dcb537d6f0a6ca49556cc3d834c958573be047f1a4&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671254096511046/Certificado-Microsoft-Azure-Data-Fundamentals-DP-900T00-A-EducacionIT.png?ex=67fbf75b&is=67faa5db&hm=8ce7786775e32442bdf06c725b0a660b05652ee7d7d535a6eb941f633e90833e&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671325584363721/Certificado-Power-BI-avanzado-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=ec61c84435e15a6800f175bf2b1725c8b8e0ac2e78b64f0b38bae4cdba2477a8&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326020436149/Certificado-Protocolo-HTTPS-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=21c2a5c3eca5baae5e031f27a8f197b204bfcd8221796e1d7fa6d594ed8e7cdf&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326486134985/Certificado-Python-para-Analisis-de-Datos-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=9c82991a3e1e430b2b30b06f26d5eca1fc047ec7d5704ce0ba485db9975d4b56&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326922346696/Certificado-Storytelling-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=734ee511af44b171f8c21033aeedd95c20a92b84c4b61133a6bc3a84543a6bfd&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671591100584067/data.png?ex=67fbf7ab&is=67faa62b&hm=6d36f296585c68cc64abc9e9d2d6804d9ebe9385a658b4a5d69b5a11e094517d&=&format=webp&quality=lossless&width=1234&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671591859621908/DATASCIENCE.png?ex=67fbf7ab&is=67faa62b&hm=988b9da9805ac287745e51a1a1c64693b8f22696282dc227fba48522488e67de&=&format=webp&quality=lossless&width=1234&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671592245628938/prevencion.jpg?ex=67fbf7ab&is=67faa62b&hm=0d88941fc0d41bb521a0c1729f8ce6e39ba5895dcafd80fc7b849d38e320770d&=&format=webp&width=1076&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671592765456495/Seguridad-en-Redes.png?ex=67fbf7ab&is=67faa62b&hm=fc5ebc945fb77b5cb7f05a635bf884b49edfc0691cb87f64a7ce639c4471a988&=&format=webp&quality=lossless&width=1036&height=800"
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

        {/* Carrusel de Certificados */}
        <CertCarousel images={certImages} />

      </div>
    </section>
  );
}

export default SobreMi;
