import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Atletas Formados" },
  { value: 12, suffix: "", label: "Anos de Experiência" },
  { value: 47, suffix: "", label: "Medalhas Conquistadas" },
  { value: 98, suffix: "%", label: "Taxa de Sucesso" },
];

const AnimatedNumber = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="results"
      className="py-32 bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/5 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Números que Falam
          </p>
          <h2 className="font-display text-5xl md:text-7xl">RESULTADOS</h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-6xl md:text-8xl mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </p>
              <p className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <blockquote className="font-body text-xl md:text-2xl italic text-foreground/80 mb-6">
            "A metodologia transformou completamente minha abordagem ao
            treinamento. Os resultados vieram mais rápido do que eu imaginava."
          </blockquote>
          <cite className="font-body text-sm tracking-widest uppercase text-muted-foreground not-italic">
            — João, Atelta de futebol 
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
