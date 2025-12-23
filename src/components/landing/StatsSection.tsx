import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MessageSquare, TrendingDown, Headphones, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  {
    key: 'messageOpenRate',
    icon: MessageSquare,
    value: 98,
    suffix: '%',
    gradient: 'from-emerald-500 to-teal-500',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    key: 'costReduction',
    icon: TrendingDown,
    value: 60,
    suffix: '%',
    gradient: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    key: 'customerService',
    icon: Headphones,
    value: 24,
    suffix: '/7',
    gradient: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    key: 'fullAutomation',
    icon: Zap,
    value: 100,
    suffix: '%',
    gradient: 'from-amber-500 to-orange-500',
    shadowColor: 'shadow-amber-500/20',
  },
];

export const StatsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            {t('stats.badge')}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('stats.title')}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Card className={`
                  group relative overflow-hidden p-8 h-full
                  bg-card/50 backdrop-blur-sm border-border/50
                  hover:border-primary/50 transition-all duration-500
                  hover:shadow-2xl ${stat.shadowColor}
                  hover:-translate-y-2
                `}>
                  {/* Gradient background on hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-10 
                    transition-opacity duration-500 
                    bg-gradient-to-br ${stat.gradient}
                  `} />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`
                      w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                      bg-gradient-to-br ${stat.gradient}
                      shadow-lg ${stat.shadowColor}
                    `}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                    <Counter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`stats.${stat.key}.title`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {t(`stats.${stat.key}.description`)}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r ${stat.gradient}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left
                    ${isRTL ? 'origin-right' : 'origin-left'}
                  `} />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
