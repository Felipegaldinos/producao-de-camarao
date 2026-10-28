import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/images/gastronomia.jpg",
    alt: "Camarões grelhados com limão e ervas",
    position: "62% 56%",
  },
  {
    src: "/images/banner-fresco.jpg",
    alt: "Camarões frescos sobre gelo",
    position: "center",
  },
  {
    src: "/images/banner-viveiros.jpg",
    alt: "Vista panorâmica de viveiros de camarão",
    position: "center",
  },
  {
    src: "/images/banner-industria.jpg",
    alt: "Seleção de camarões em uma linha de processamento",
    position: "center",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(() => new Set([0]));
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const loaded = useRef(ready);
  useEffect(() => {
    loaded.current = ready;
  }, [ready]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = window.setInterval(() => {
      if (document.hidden) return;
      setActive((current) => {
        const next = (current + 1) % slides.length;
        return loaded.current.has(next) ? next : current;
      });
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);
  return (
    <section
      className="home-image-banner hero-carousel"
      aria-label="Imagens ilustrativas do universo do camarão"
      aria-roledescription="carrossel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt + " — imagem ilustrativa criada com IA"}
          width="1536"
          height="1024"
          className={
            index === active ? "carousel-slide active" : "carousel-slide"
          }
          aria-hidden={index !== active}
          fetchPriority={index === 0 ? "high" : "low"}
          decoding={index === 0 ? "sync" : "async"}
          onLoad={() => setReady((current) => new Set([...current, index]))}
          style={{ objectPosition: slide.position }}
        />
      ))}
    </section>
  );
}
