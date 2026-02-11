import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  "home",
  "about",
  "services",
  "portfolio",
  "testimonials",
  "pricing",
  "contact",
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === "ar";

  // Track scroll position for locking

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SCROLL LOCK LOGIC (Keeps Scrollbar Visible) ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      // 1. Get the width of the scrollbar before hiding it to prevent "layout shift"
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      // Optional: Add padding to body so the content doesn't "jump" left/right
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      // 2. Restore everything
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMobileMenuOpen]);
  
  // Click Outside Logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)&&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth"});
        }
      
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div className="flex items-center gap-2 z-30">
            <img
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("home")}
              src={logo}
              alt="Elegant Options"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </motion.div>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted hover:text-foreground text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}>
                {t(`nav.${item}`)}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4 z-50">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {i18n.language === "en" ? "عربي" : "EN"}
              </span>
            </motion.button>

            <Button
              className="hidden md:flex glow-primary"
              onClick={() => scrollToSection("contact")}>
              {t("hero.cta")}
            </Button>

            <button
              ref={buttonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-50 flex justify-center items-center md:hidden p-2 rounded-lg hover:bg-muted transition-colors w-12 h-12">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* The Blur Overlay for the Landing Page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // z-30 puts it behind the menu (z-40) but above page content
              className="fixed h-screen inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={()=>setIsMobileMenuOpen(false)}
            />

            {/* The Mobile Menu */}
            <motion.div
              id="mobile-menu-container"
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="z-40 absolute top-0 left-0 w-full md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-xl h-screen overflow-y-auto overscroll-contain">
              <nav className="pt-14 container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-3 rounded-lg text-left hover:bg-muted transition-colors ${
                      isRTL ? "font-arabic text-right" : ""
                    }`}>
                    {t(`nav.${item}`)}
                  </motion.button>
                ))}

                <motion.div
                  className="mt-2"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}>
                  <Button
                    className="w-full glow-primary"
                    onClick={() => scrollToSection("contact")}>
                    {t("hero.cta")}
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
