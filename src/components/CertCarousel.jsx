import { useState } from "react";

export default function CertCarousel({ images = [] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="relative w-full max-w-2xl aspect-[13/10] bg-[#23272e] border border-[#39FF14] rounded-lg shadow-[0_0_12px_#39FF1440] flex items-center justify-center overflow-hidden">
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#181A20cc] text-[#00ffe7] rounded-full p-2 hover:bg-[#23272e] transition"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <img
          src={images[idx]}
          alt={`Certificado ${idx + 1}`}
          className="max-h-[340px] max-w-full object-contain mx-auto transition-all duration-500"
          loading="lazy"
        />
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#181A20cc] text-[#00ffe7] rounded-full p-2 hover:bg-[#23272e] transition"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full border border-[#00ffe7] ${i === idx ? "bg-[#00ffe7]" : "bg-transparent"}`}
            aria-label={`Ir a certificado ${i + 1}`}
          />
        ))}
      </div>
      <div className="text-xs text-[#baffc9] mt-2">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}
