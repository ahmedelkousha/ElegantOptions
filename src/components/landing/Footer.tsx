import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/elegantoptions', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/elegantoptions', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/elegantoptions', label: 'Facebook' },
  { icon: Phone, href: 'tel:+96566305551', label: 'Phone' },
];

const navLinks = ['home', 'about', 'services', 'portfolio', 'testimonials', 'pricing', 'contact'];

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className={`lg:col-span-2 ${isRTL ? 'text-right' : ''}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 mb-4"
            >
              <img 
                src={logo} 
                alt="Elegant Options" 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>
            <p className={`text-muted-foreground max-w-md mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'justify-end' : ''}`}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className={`font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`text-muted-foreground hover:text-foreground transition-colors ${
                      isRTL ? 'font-arabic' : ''
                    }`}
                  >
                    {t(`nav.${link}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className={`font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="tel:+96566305551" className="hover:text-foreground transition-colors">
                  +965 66305551
                </a>
              </li>
              <li>
                <a href="mailto:Info@elegant-options.com" className="hover:text-foreground transition-colors">
                  Info@elegant-options.com
                </a>
              </li>
              <li className={isRTL ? 'font-arabic' : ''}>
                {isRTL ? 'السالمية، بلوك 10، الكويت 11010' : 'Salmiya, Block 10, Kuwait 11010'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${
            isRTL ? 'md:flex-row-reverse' : ''
          }`}>
            <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              © {new Date().getFullYear()} Elegant Options. {t('footer.rights')}
            </p>
            <div className={`flex gap-6 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="/privacy" className={`hover:text-foreground transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.privacy')}
              </a>
              <a href="/terms" className={`hover:text-foreground transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
