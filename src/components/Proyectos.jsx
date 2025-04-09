// src/components/Proyectos.jsx
import { ExternalLink, Github } from 'lucide-react'; // Import icons

function Proyectos() {
  // Consider using higher-res or more relevant images
  const projects = [
     {
       title: "Ciberseguridad",
       imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80", // Slightly larger width, better quality
       description: "Proyecto final, realizado para la aprobación del curso de Ciberseguridad proporcionado por CoderHouse.",
       link: "https://linktr.ee/azulferreyrarocio"
     },
     {
       title: "Data Analytics",
       imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
       description: "Mi proyecto Final, donde utilicé una empresa ficticia para realizar un análisis de datos de acuerdo a las prácticas propuestas por CoderHouse.",
       link: "https://linktr.ee/azulferreyrarocio"
     },
     {
       title: "Introducción a Redes",
       imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
       description: "Proyecto donde integro todos los desafíos propuestos por EducacionIT para la aprobación del curso.",
       link: "https://linktr.ee/azulferreyrarocio"
     }
   ];

  return (
    <section id="proyectos" className="bg-gradient-to-b from-gray-50 to-white"> {/* Subtle gradient */}
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 animate-fadeInUp">Mis Proyectos</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeInUp animation-delay-100">
                 Aquí puedes encontrar algunos de los trabajos y proyectos que he realizado durante mis estudios.
              </p>
        </div>
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              // Staggered animation for cards
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col group animate-fadeInUp"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative h-52 overflow-hidden"> {/* Increased height slightly */}
                 <img
                   src={project.imgSrc}
                   alt={`Proyecto ${project.title}`}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Slightly subtler scale
                   loading="lazy"
                   width="600" // Width from URL
                   height="400" // Estimate aspect ratio
                 />
                 {/* Darker gradient for better text contrast */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-5 text-2xl font-semibold text-white z-10">{project.title}</h3>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-auto px-5 py-2.5 bg-indigo-50 text-indigo-700 font-medium rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 group" // Added focus styles
                >
                  Ver más
                  <ExternalLink size={16} className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>
         {/* Link to GitHub profile */}
          <div className="text-center mt-16 animate-fadeInUp animation-delay-500">
              <a
                href="https://github.com/Azul-Ferreyra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition-colors"
              >
                 <Github size={20} />
                 Ver más en GitHub
              </a>
          </div>
      </div>
    </section>
  );
}

export default Proyectos;