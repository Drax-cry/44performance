import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Brain } from "lucide-react";

const methodologies = [
  {
    icon: Target,
    title: "AVALIAÇÃO",
    subtitle: "Análise Completa",
    description:
      "Diagnóstico detalhado das capacidades físicas, técnicas e psicológicas do atleta.",
  },
  {
    icon: Brain,
    title: "PLANEJAMENTO",
    subtitle: "Estratégia Personalizada",
    description:
      "Periodização científica adaptada aos objetivos competitivos e ciclo esportivo.",
  },
  {
    icon: Zap,
    title: "EXECUÇÃO",
    subtitle: "Treinamento Intensivo",
    description:
      "Sessões de alta intensidade com monitoramento em tempo real de performance.",
  },
  {
    icon: TrendingUp,
    title: "EVOLUÇÃO",
    subtitle: "Resultados Mensuráveis",
    description:
      "Acompanhamento contínuo com métricas claras e ajustes baseados em dados.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-32 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Como Funciona
          </p>
          <h2 className="font-display text-5xl md:text-7xl">METODOLOGIA 44</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {methodologies.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-8 border border-border hover:bg-secondary transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="font-display text-6xl text-muted/50 absolute top-4 right-4">
                0{index + 1}
              </span>

              <method.icon
                className="w-10 h-10 mb-6 text-foreground"
                strokeWidth={1}
              />

              <h3 className="font-display text-2xl mb-1">{method.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {method.subtitle}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
