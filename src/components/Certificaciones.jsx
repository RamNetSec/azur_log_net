import React from "react";

const certificaciones = [
  "Certificación en Ciberseguridad Defensiva | Udemy",
  "Certificación en Network Hacking | EducacionIT",
  "Certificación en Data Science | CoderHouse",
  "Certificación en Python para el analisis de datos | EducacionIT",
  "Certificación en Microsoft Azure Data Fundamentals | EducacionIT",
  "Certificación en Introduccion a Redes | EducacionIT",
  "Certificación en Data Analytics | CoderHouse",
  "Certificación en Ciberseguridad | CoderHouse",
];

const correo = "info.anzur@gmail.com";

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="animate-fadeInUp mt-10">
      <h2 className="text-2xl mb-6 text-[#39FF14]">Certificaciones</h2>
      <ul className="mb-6 text-left max-w-xl mx-auto">
        {certificaciones.map((cert, idx) => (
          <li
            key={idx}
            className="mb-2 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#00ffe7] before:font-bold"
          >
            {cert}
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <span className="text-[#00ffe7] font-mono">Contacto: </span>
        <a
          href={`mailto:${correo}`}
          className="underline hover:text-[#39FF14] transition-colors"
        >
          {correo}
        </a>
      </div>
    </section>
  );
}
