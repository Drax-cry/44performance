import { motion } from "framer-motion";
import { Award, Trophy, Clock } from "lucide-react";
import aboutPhoto from "@/assets/ag.png";

const highlights = [
  {
    icon: Award,
    title: "Certificação Internacional",
    description: "UEFA B.",
  },
  {
    icon: Trophy,
    title: "TITULOS CONQUISTADOS",
    description: "1X Taça de Portugal,4x Campeão da Eslovénia, 2X taça da Eslovénia.",
  },
  {
    icon: Clock,
    title: "Dedicação Exclusiva",
    description: "Acompanhamento integral para máximo desenvolvimento do atleta.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Quem Sou
            </p>
            <h2 className="font-display text-5xl md:text-7xl mb-8">
              SOBRE MIM
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Bem-vindo ao 44 PERFORMANCE, o espaço dedicado ao desenvolvimento de atletas de alta performance liderado por Arghus Soares Bordignon 
                — ex-jogador profissional com carreira internacional e agora treinador especializado em performance esportiva.
              </p>
              <p>
                Minha missão é desbloquear o potencial máximo de cada atleta,
                transformando disciplina em resultados extraordinários e
                preparando campeões para os maiores desafios competitivos.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-secondary border border-border">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary border border-border relative overflow-hidden">
              <img
                src={aboutPhoto}
                alt="Preparador físico"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <p className="font-display text-4xl">12+</p>
                <p className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  Anos de Excelência
                </p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -right-4 top-1/2 w-32 h-px bg-border hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
