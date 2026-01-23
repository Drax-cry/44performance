import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArghusHeader from "@/components/ArghusHeader";

import acPng from "@/assets/ac.png";;
import agbeJpeg from "@/assets/agbe.jpeg";
import azPng from "@/assets/az.png";
import brgPng from "@/assets/braga.png";
import csPng from "@/assets/cs.png";
import esporteClubePelotasPng from "@/assets/bp.png";
import grPng from "@/assets/gr.png";
import juventudePng from "@/assets/juventude.png";
import nkPng from "@/assets/nk.png";
import rgPng from "@/assets/rg.png";
import rtPng from "@/assets/rt.png";
import rvPng from "@/assets/rv.png";
import ag1 from "@/assets/ag1.jpeg";
import ag2 from "@/assets/ag2.jpeg";
import ag3 from "@/assets/ag3.jpeg";
import ag4 from "@/assets/ag4.jpeg";
import ag5 from "@/assets/ag5.jpeg";
import ag6 from "@/assets/ag6.jpeg";
import ag7 from "@/assets/ag7.jpeg";
import ag8 from "@/assets/ag8.jpeg";
import ag9 from "@/assets/ag9.jpeg";
import ag10 from "@/assets/ag10.jpeg";
import ag11 from "@/assets/ag11.jpeg";
import ag12 from "@/assets/ag12.jpeg";
import ag13 from "@/assets/ag13.jpeg";
import ag14 from "@/assets/ag14.jpeg";
import ag15 from "@/assets/ag15.jpeg";
import ag16 from "@/assets/ag16.jpeg";


/* =========================
   Types
========================= */
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

/* =========================
   Page
========================= */
const Arghus = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2007",
      title: "Início da Carreira Profissional - Juventude",
      description:
        "Primeiros passos no cenário profissional, destacando-se nas categorias de base.",
      image: juventudePng,
    },
    {
      year: "2008",
      title: "Primeira experiência em solo europeu - Reginna (IT)",
      description:
        "Adaptação ao futebol europeu e amadurecimento competitivo fora do Brasil.",
      image: rgPng,
    },
    {
      year: "2009",
      title: "Volta ao Brasil - Esporte Clube Pelotas",
      description: "Participação no Gauchão, ganhando rodagem e ritmo.",
      image: esporteClubePelotasPng,
    },
    {
      year: "2010",
      title: "River Plate (SE) - Bicampeão estadual",
      description:
        "Fase vitoriosa que fortaleceu sua confiança e liderança em campo.",
      image: rvPng,
    },
    {
      year: "2011",
      title: "Retorno à Europa - Maribor",
      description:
        "Início sólido no futebol europeu com títulos e regularidade.",
      image: nkPng,
    },
    {
      year: "2016",
      title: "Braga SC - Portugal",
      description:
        "Grande fase em Portugal com jogos de alto nível e visibilidade.",
      image: brgPng,
    },
    {
      year: "2017",
      title: "Clubes europeus",
      description: "Consistência, disciplina e adaptação em diferentes ligas.",
      image: nkPng,
    },
     {
      year: "2018",
      title: "Clubes europeus",
      description: "Consistência, disciplina e adaptação em diferentes ligas.",
      image: nkPng,
    },
     {
      year: "2019",
      title: "Clubes europeus",
      description: "Consistência, disciplina e adaptação em diferentes ligas.",
      image: nkPng,
    },
     {
      year: "2020",
      title: "Clubes europeus",
      description: "Consistência, disciplina e adaptação em diferentes ligas.",
      image: nkPng,
    },
    {
      year: "2023–∞",
      title: "Novo capítulo",
      description: "Transição para mentor e formador de atletas.",
      image: agbeJpeg,
    },
  ];

  // ✅ imagens da seção MOMENTOS
  const galleryImages = [
    
    ag1,
    ag2,
    ag3,
    ag4,
    ag5,
    ag6,
    ag7,
    ag8,
    ag9,
    ag10,
    ag11,
    ag12,
    ag13,
    ag14,
    ag15,
    ag16,
  
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArghusHeader />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-secondary border border-border relative overflow-hidden">
                <img
                  src={agbeJpeg}
                  alt="Arghus - Jogador profissional"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="font-display text-5xl">ARGHUS</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">
                    Atleta Profissional
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="font-display text-6xl md:text-8xl">
                ARGHUS BORDIGNON
              </h1>

              <div className="grid grid-cols-3 gap-6">
                <Stat icon={<Trophy className="w-6 h-6" />} value="12" label="Títulos" />
                <Stat icon={<Calendar className="w-6 h-6" />} value="16" label="Anos" />
                <Stat icon={<MapPin className="w-6 h-6" />} value="12" label="Clubes" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LOGO MARQUEE ================= */}
      <section className="pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <LogoMarquee
            speed={50}
            images={[
              { src: acPng, alt: "ac" },
              { src: azPng, alt: "az" },
              { src: brgPng, alt: "brg" },
              { src: csPng, alt: "cs" },
              { src: esporteClubePelotasPng, alt: "pelotas" },
              { src: grPng, alt: "gr" },
              { src: juventudePng, alt: "juventude" },
              { src: nkPng, alt: "nk" },
              { src: rgPng, alt: "rg" },
              { src: rtPng, alt: "rt" },
              { src: rvPng, alt: "rv" },
            ]}
          />
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl mb-12">TRAJETÓRIA</h2>

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-24 text-4xl font-display text-muted-foreground">
                  {item.year}
                </div>

                <div className="border-l border-border pl-6 w-full space-y-6">
                  <TimelineCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOMENTOS (AUTOPLAY, SEM BARRA DE SCROLL) ================= */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Categoria
            </p>
            <h2 className="font-display text-5xl">MOMENTOS</h2>
            <p className="text-muted-foreground max-w-2xl">
              Carrossel automático — sem mostrar a barra de scroll.
            </p>
          </div>

          <ImageGridCarousel
            autoplay
            intervalMs={2200}
            images={galleryImages.map((src, i) => ({
              src,
              alt: `Momento ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl mb-6">
              QUER TREINAR COMO UM PROFISSIONAL?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como a preparação física de alto nível
              pode transformar sua performance esportiva.
            </p>
            <Link to="/#contact">
              <Button variant="default" size="xl" className="font-display text-lg">
                ENTRE EM CONTATO
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Arghus;

/* =========================
   Stat
========================= */
function Stat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="border border-border p-4">
      <div className="mb-2 text-muted-foreground">{icon}</div>
      <p className="font-display text-3xl">{value}</p>
      <p className="text-xs uppercase text-muted-foreground">{label}</p>
    </div>
  );
}

/* =========================
   Timeline Card
========================= */
function TimelineCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-secondary/20">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            draggable={false}
          />
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Image Grid Carousel (AUTOPLAY)
   ✅ sem barra de scroll (no-scrollbar)
========================= */
function ImageGridCarousel({
  images,
  autoplay = true,
  intervalMs = 2200,
}: {
  images: { src: string; alt: string }[];
  autoplay?: boolean;
  intervalMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByPage = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.92);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollNextStep = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstItem = el.querySelector<HTMLElement>("[data-carousel-item='1']");
    const step =
      firstItem ? firstItem.offsetWidth + 16 : Math.round(el.clientWidth * 0.92); // 16 = gap-4

    const maxLeft = el.scrollWidth - el.clientWidth;
    const nearEnd = el.scrollLeft >= maxLeft - step * 0.6;

    if (nearEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!autoplay) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      scrollNextStep();
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [autoplay, intervalMs, isPaused]);

  return (
    <div
      className="relative border border-border rounded-2xl bg-secondary/20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* fades laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      {/* botões */}
      <button
        type="button"
        onClick={() => scrollByPage("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-border bg-background/70 backdrop-blur hover:bg-background transition grid place-items-center"
        aria-label="Voltar"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => scrollByPage("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border border-border bg-background/70 backdrop-blur hover:bg-background transition grid place-items-center"
        aria-label="Avançar"
      >
        →
      </button>

      {/* carrossel (aqui que some a barra de scroll) */}
      <div
  ref={scrollerRef}
  className="overflow-hidden"
>

        <div className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[42%] lg:auto-cols-[28%] gap-4 p-4 md:p-6">
          {images.map((img, idx) => (
            <div
              key={`${img.alt}-${idx}`}
              data-carousel-item={idx === 0 ? "1" : "0"}
              className="snap-start relative aspect-square rounded-2xl overflow-hidden border border-border bg-black"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   Logo Marquee
========================= */
function LogoMarquee({
  images,
  speed = 40,
}: {
  images: { src: string; alt: string }[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [halfWidth, setHalfWidth] = useState(0);

  const list = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => setHalfWidth(el.scrollWidth / 2);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, [images]);

  const duration = halfWidth ? Math.max(12, halfWidth / speed) : 20;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="overflow-hidden border border-border rounded-2xl bg-secondary/20">
        <motion.div
          ref={trackRef}
          className="flex gap-10 items-center py-6 px-8"
          animate={{ x: halfWidth ? [0, -halfWidth] : [0, -600] }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {list.map((img, idx) => (
            <div
              key={`${img.alt}-${idx}`}
              className="shrink-0 h-10 md:h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-auto object-contain grayscale hover:grayscale-0 transition"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* =========================
   IMPORTANTE:
   Coloque isso no teu globals.css / index.css
   (isso remove a BARRA de scroll do carrossel de fotos)
========================= */
/*
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
