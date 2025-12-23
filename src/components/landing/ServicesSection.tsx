import { useTranslation } from 'react-i18next';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Bot, Star, Globe, Check } from 'lucide-react';

const services = [
  { key: 'whatsapp', icon: MessageSquare, gradient: 'from-green-500 to-emerald-600' },
  { key: 'aiAgent', icon: Bot, gradient: 'from-primary to-secondary' },
  { key: 'reviews', icon: Star, gradient: 'from-yellow-500 to-orange-500' },
  { key: 'website', icon: Globe, gradient: 'from-accent to-cyan-400' },
];

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      id="services"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Cinematic Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {t('services.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('services.title')}{' '}
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('services.titleHighlight')}
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid with staggered 3D reveals */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const features = t(`services.${service.key}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={service.key}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  rotateY: index % 2 === 0 ? -10 : 10,
                  scale: 0.9
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  duration: 1, 
                  delay: 0.4 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full relative overflow-hidden">
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  />
                  
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  
                  {/* Icon with 3D hover */}
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 relative z-10 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`services.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className={`text-muted-foreground mb-6 relative z-10 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`services.${service.key}.description`)}
                  </p>

                  {/* Features with staggered reveal */}
                  <ul className="space-y-3 relative z-10">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 0.8 + index * 0.2 + i * 0.1,
                          duration: 0.5
                        }}
                        className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <motion.div 
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};