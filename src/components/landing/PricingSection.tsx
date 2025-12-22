import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = ['essential', 'professional', 'advanced'];

export const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="pricing"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 network-bg opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className={`text-sm font-medium text-accent ${isRTL ? 'font-arabic' : ''}`}>
              {t('pricing.badge')}
            </span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('pricing.title')}{' '}
            <span className="text-gradient">{t('pricing.titleHighlight')}</span>
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isProfessional = plan === 'professional';
            const features = t(`pricing.${plan}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative ${isProfessional ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {isProfessional && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span className={isRTL ? 'font-arabic' : ''}>{t('pricing.popular')}</span>
                    </div>
                  </motion.div>
                )}

                <div className={`glass-card p-6 md:p-8 rounded-2xl h-full flex flex-col ${
                  isProfessional ? 'border-primary/50 glow-primary' : ''
                }`}>
                  {/* Plan Name */}
                  <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`pricing.${plan}.name`)}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm text-muted-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(`pricing.${plan}.description`)}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-gradient">
                        {t(`pricing.${plan}.price`)}
                      </span>
                      <span className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                        {t('pricing.currency')}
                      </span>
                    </div>
                    <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {t('pricing.monthly')}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${isProfessional ? 'glow-primary' : ''}`}
                    variant={isProfessional ? 'default' : 'outline'}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className={isRTL ? 'font-arabic' : ''}>{t('pricing.cta')}</span>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
