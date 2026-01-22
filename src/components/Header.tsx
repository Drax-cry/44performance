import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Metodologia", href: "#methodology" },
    { label: "Resultados", href: "#results" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6">
           
        <div className="flex items-center justify-between h-20">
          <motion.a
  href="#home"
  className="font-display text-2xl tracking-widest"
>
  <div className="flex items-center gap-3">
    <img
      src="/logoO.png"
      alt="Logo"
      className="w-20 h-20 rounded-full object-cover"
    />
    <p className="leading-none">PERFORMANCE</p>
  </div>
</motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
