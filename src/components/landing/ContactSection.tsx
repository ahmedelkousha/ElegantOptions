import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build WhatsApp message
    const message = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Message:* ${formData.message}`
    );
    
    const whatsappNumber = '96566305551';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: t('contact.form.success'),
      description: '',
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, label: '+965 66305551', href: 'tel:+96566305551' },
    { icon: Mail, label: 'Info@elegant-options.com', href: 'mailto:Info@elegant-options.com' },
    { icon: MapPin, label: isRTL ? 'السالمية، بلوك 10، الكويت 11010' : 'Salmiya, Block 10, Kuwait 11010', href: 'https://maps.google.com/?q=Salmiya+Block+10+Kuwait' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Cinematic Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Header with cinematic reveal */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {t('contact.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('contact.title')}{' '}
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('contact.titleHighlight')}
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form with 3D reveal */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 100 : -100, rotateY: isRTL ? -15 : 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-card p-6 md:p-8 rounded-2xl space-y-6 relative overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contact.form.name')}
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-muted/50 border-border/50 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${isRTL ? 'text-right' : ''}`}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {t('contact.form.email')}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-muted/50 border-border/50 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${isRTL ? 'text-right' : ''}`}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="relative z-10"
              >
                <label className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contact.form.phone')}
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`bg-muted/50 border-border/50 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${isRTL ? 'text-right' : ''}`}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="relative z-10"
              >
                <label className={`block text-sm font-medium mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                  {t('contact.form.message')}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-muted/50 border-border/50 min-h-[120px] transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${isRTL ? 'text-right' : ''}`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className={`w-4 h-4 animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      <span className={isRTL ? 'font-arabic' : ''}>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      <span className={isRTL ? 'font-arabic' : ''}>{t('contact.form.submit')}</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info with staggered reveals */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 40, x: isRTL ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ 
                    delay: 0.7 + index * 0.15,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    x: isRTL ? -15 : 15,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className={`flex items-center gap-4 p-4 glass-card rounded-xl hover:glow-primary transition-all ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <span className={`text-lg ${isRTL ? 'font-arabic' : ''}`}>{info.label}</span>
                </motion.a>
              );
            })}

            {/* Social Links with bouncy reveals */}
            <motion.div 
              className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
            >
              {['instagram', 'twitter', 'facebook'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com/elegantoptions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {social === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};