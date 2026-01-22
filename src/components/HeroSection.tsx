import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/aghe.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elite athlete training"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Preparador de Atletas de Alto Rendimento
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-8"
          >
            QUEBRE
            <br />
            <span className="text-gradient">LIMITES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            Transforme seu potencial em performance excepcional. Metodologia
            científica e acompanhamento personalizado para atletas que buscam a
            excelência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              Iniciar Jornada
            </Button>
            <Button variant="heroOutline" size="xl">
              Ver Resultados
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
