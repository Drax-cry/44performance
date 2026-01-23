import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArghusHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/", isRoute: false },
    { label: "Metodologia", href: "/#methodology", isRoute: true },
    { label: "Resultados", href: "/#results", isRoute: true },
    { label: "Sobre", href: "/#about", isRoute: true },
    { label: "Contato", href: "/#contact", isRoute: true },
    { label: "Arghus", href: "/arghus", isRoute: true },
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
            href="/"
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
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
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
              <div key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default ArghusHeader;
