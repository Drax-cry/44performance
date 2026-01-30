import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Vamos Começar
            </p>
            <h2 className="font-display text-5xl md:text-7xl mb-8">
              PRONTO PARA
              <br />
              <span className="text-gradient">EVOLUIR?</span>
            </h2>

            <p className="font-body text-muted-foreground max-w-md mb-10 leading-relaxed">
              Agende uma avaliação inicial gratuita e descubra como podemos
              elevar sua performance ao próximo nível.
            </p>

            <Button variant="hero" size="xl" className="group" asChild>
              <a 
                href="https://wa.me/351916152649?text=Olá! Gostaria de agendar uma aula." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar aula
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-border p-6 bg-card hover:bg-accent transition-colors duration-300">
              <Mail className="w-6 h-6 mb-4" strokeWidth={1.5} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Email
              </p>
              <p className="font-body text-lg">contato44performance@gmail.com</p>
            </div>

            <div className="border border-border p-6 bg-card hover:bg-accent transition-colors duration-300">
              <Phone className="w-6 h-6 mb-4" strokeWidth={1.5} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Telefone
              </p>
              <p className="font-body text-lg">+351 916 152 649</p>
            </div>

            <div className="border border-border p-6 bg-card hover:bg-accent transition-colors duration-300">
              <MapPin className="w-6 h-6 mb-4" strokeWidth={1.5} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Localização
              </p>
              <p className="font-body text-lg">Braga, Portugal</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
