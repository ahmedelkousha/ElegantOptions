import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
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

  return (
    <section
      id="services"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : ''}`}>
              {t('services.badge')}
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('services.title')}{' '}
            <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const features = t(`services.${service.key}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full relative overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`services.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className={`text-muted-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`services.${service.key}.description`)}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
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
