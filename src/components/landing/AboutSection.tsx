import { useTranslation } from 'react-i18next';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Zap, Users, TrendingUp } from 'lucide-react';

const values = [
  { key: 'smart', icon: Brain },
  { key: 'automation', icon: Zap },
  { key: 'journey', icon: Users },
  { key: 'improvement', icon: TrendingUp },
];

export const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <motion.div 
        className="absolute inset-0 network-bg opacity-50"
        style={{ y }}
      />
      
      {/* Floating orbs with parallax */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            {/* Badge with reveal animation */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm font-medium text-accent ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.badge')}
              </span>
            </motion.div>

            {/* Title with staggered letter reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('about.title')}
              <br />
              <motion.span 
                className="text-gradient inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {t('about.titleHighlight')}
              </motion.span>
            </motion.h2>

            {/* Description with fade-up */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-lg text-muted-foreground mb-8 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          {/* Values Grid with staggered card reveals */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`grid grid-cols-2 gap-4 md:gap-6 ${isRTL ? 'lg:order-1' : ''}`}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 60, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Icon with pulse animation */}
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-semibold text-lg mb-2 relative z-10 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`about.values.${value.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm text-muted-foreground relative z-10 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};