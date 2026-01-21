import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            className="font-display text-xl tracking-widest"
            whileHover={{ scale: 1.05 }}
          >
            44 PERFORMANCE<span className="text-muted-foreground">.</span>
          </motion.a>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground">
            © 2026 44 Performance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
