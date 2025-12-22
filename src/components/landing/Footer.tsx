import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/elegantoptions', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/elegantoptions', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/elegantoptions', label: 'Facebook' },
  { icon: Phone, href: 'tel:+965XXXXXXXX', label: 'Phone' },
];

const navLinks = ['home', 'about', 'services', 'pricing', 'contact'];

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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">EO</span>
              </div>
              <span className={`font-bold text-2xl ${isRTL ? 'font-arabic' : ''}`}>
                Elegant Options
              </span>
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
              <li className={isRTL ? 'font-arabic' : ''}>{t('contact.info.phone')}</li>
              <li>{t('contact.info.email')}</li>
              <li className={isRTL ? 'font-arabic' : ''}>{t('contact.info.address')}</li>
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
              <a href="#" className={`hover:text-foreground transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.privacy')}
              </a>
              <a href="#" className={`hover:text-foreground transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
