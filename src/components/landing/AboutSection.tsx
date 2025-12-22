import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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

  return (
    <section
      id="about"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 network-bg opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'lg:order-2' : ''}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className={`text-sm font-medium text-accent ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('about.title')}
              <br />
              <span className="text-gradient">{t('about.titleHighlight')}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg text-muted-foreground mb-8 ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`grid grid-cols-2 gap-4 md:gap-6 ${isRTL ? 'lg:order-1' : ''}`}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 rounded-2xl group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold text-lg mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`about.values.${value.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
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
