import React, { useState } from "react";

// Lista de certificados con tags asociados
const certificados = [
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671252758659092/Certificado-Data-Science-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=39454a23e436243e92d48e446d5d0e6947a80addb9518e3eb8674c339f3f5e6c&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Data Science | EducacionIT",
    tags: ["data science", "educacionit", "python", "analisis de datos"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671253144408145/Certificado-Introduccion-al-mundo-web-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=47f4896e62393fe36328b3db9856413e3b520dd617513ad87caa82fb286d1a3d&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Introducción al mundo web | EducacionIT",
    tags: ["web", "educacionit", "introduccion"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671253618229309/Certificado-Introduccion-a-Redes-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=e86902ef8ffb36fcb34ef1dcb537d6f0a6ca49556cc3d834c958573be047f1a4&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Introducción a Redes | EducacionIT",
    tags: ["redes", "educacionit", "ciberseguridad"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671254096511046/Certificado-Microsoft-Azure-Data-Fundamentals-DP-900T00-A-EducacionIT.png?ex=67fbf75b&is=67faa5db&hm=8ce7786775e32442bdf06c725b0a660b05652ee7d7d535a6eb941f633e90833e&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Microsoft Azure Data Fundamentals | EducacionIT",
    tags: ["azure", "educacionit", "data", "microsoft"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671325584363721/Certificado-Power-BI-avanzado-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=ec61c84435e15a6800f175bf2b1725c8b8e0ac2e78b64f0b38bae4cdba2477a8&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Power BI Avanzado | EducacionIT",
    tags: ["power bi", "educacionit", "data analytics"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671326020436149/Certificado-Protocolo-HTTPS-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=21c2a5c3eca5baae5e031f27a8f197b204bfcd8221796e1d7fa6d594ed8e7cdf&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Protocolo HTTPS | EducacionIT",
    tags: ["https", "educacionit", "web", "seguridad"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671326486134985/Certificado-Python-para-Analisis-de-Datos-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=9c82991a3e1e430b2b30b06f26d5eca1fc047ec7d5704ce0ba485db9975d4b56&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Python para Análisis de Datos | EducacionIT",
    tags: ["python", "educacionit", "analisis de datos"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671326922346696/Certificado-Storytelling-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=734ee511af44b171f8c21033aeedd95c20a92b84c4b61133a6bc3a84543a6bfd&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Storytelling | EducacionIT",
    tags: ["storytelling", "educacionit", "comunicacion"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671591100584067/data.png?ex=67fbf7ab&is=67faa62b&hm=6d36f296585c68cc64abc9e9d2d6804d9ebe9385a658b4a5d69b5a11e094517d&=&format=webp&quality=lossless&width=1234&height=800",
    alt: "Data",
    tags: ["data", "analytics", "coderhouse"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671591859621908/DATASCIENCE.png?ex=67fbf7ab&is=67faa62b&hm=988b9da9805ac287745e51a1a1c64693b8f22696282dc227fba48522488e67de&=&format=webp&quality=lossless&width=1234&height=800",
    alt: "Data Science",
    tags: ["data science", "coderhouse"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671592245628938/prevencion.jpg?ex=67fbf7ab&is=67faa62b&hm=0d88941fc0d41bb521a0c1729f8ce6e39ba5895dcafd80fc7b849d38e320770d&=&format=webp&width=1076&height=800",
    alt: "Prevención",
    tags: ["prevencion", "ciberseguridad"],
  },
  {
    src: "https://media.discordapp.net/attachments/1359956417636860098/1360671592765456495/Seguridad-en-Redes.png?ex=67fbf7ab&is=67faa62b&hm=fc5ebc945fb77b5cb7f05a635bf884b49edfc0691cb87f64a7ce639c4471a988&=&format=webp&quality=lossless&width=1036&height=800",
    alt: "Seguridad en Redes",
    tags: ["seguridad", "redes", "ciberseguridad"],
  },
];

function uniqueTags(certificados) {
  // Devuelve un array de tags únicos
  return [
    ...new Set(certificados.flatMap((cert) => cert.tags.map((t) => t.toLowerCase()))),
  ];
}

export default function GaleriaCertificados() {
  const [busqueda, setBusqueda] = useState("");
  const tagsDisponibles = uniqueTags(certificados);

  // Filtra por tag (case-insensitive, permite buscar por substring)
  const certificadosFiltrados = certificados.filter((cert) =>
    busqueda.trim() === ""
      ? true
      : cert.tags.some((tag) =>
          tag.toLowerCase().includes(busqueda.trim().toLowerCase())
        )
  );

  return (
    <section id="galeria-certificados" className="mt-12">
      <h2 className="text-2xl mb-6 text-[#39FF14] text-center">Galería de Certificados</h2>
      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Buscar por tag (ej: python, ciberseguridad, data)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4 py-2 rounded bg-[#23272e] border border-[#00ffe7] text-[#baffc9] w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#39FF14] mb-3"
        />
        <div className="flex flex-wrap gap-2 justify-center">
          {tagsDisponibles.map((tag) => (
            <button
              key={tag}
              onClick={() => setBusqueda(tag)}
              className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors ${
                busqueda.toLowerCase() === tag
                  ? "bg-[#00ffe7] text-[#181A20] border-[#39FF14]"
                  : "bg-[#23272e] text-[#00ffe7] border-[#00ffe7] hover:bg-[#181A20]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificadosFiltrados.length === 0 ? (
          <div className="col-span-full text-center text-[#baffc9]">
            No se encontraron certificados para esa búsqueda.
          </div>
        ) : (
          certificadosFiltrados.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#23272e] border border-[#00ffe7] rounded-lg p-4 flex flex-col items-center shadow-[0_0_12px_#39FF1440]"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-h-56 object-contain mb-3 rounded shadow-lg"
                loading="lazy"
              />
              <div className="text-[#baffc9] text-sm text-center mb-2">{cert.alt}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-[#181A20] text-[#00ffe7] text-xs border border-[#00ffe7] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
