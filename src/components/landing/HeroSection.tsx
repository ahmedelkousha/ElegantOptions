import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Complex AI/Tech Lottie animation with multiple layers
const robotAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 400,
  h: 400,
  nm: "AI Core Animation",
  ddd: 0,
  assets: [],
  layers: [
    // Outer pulsing ring
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Outer Ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [30], e: [60] }, { t: 90, s: [60], e: [30] }, { t: 180, s: [30] }] },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 180, s: [360] }] },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100], e: [105, 105, 100] }, { t: 90, s: [105, 105, 100], e: [100, 100, 100] }, { t: 180, s: [100, 100, 100] }] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [280, 280] } },
        { ty: "st", c: { a: 0, k: [0.4, 0.8, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 } }
      ]
    },
    // Middle rotating hexagon path
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Hexagon",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [-360] }, { t: 180, s: [-360] }] },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "sr", p: { a: 0, k: [0, 0] }, or: { a: 0, k: 100 }, ir: { a: 0, k: 50 }, r: { a: 0, k: 0 }, pt: { a: 0, k: 6 }, sy: 1, os: { a: 0, k: 0 }, is: { a: 0, k: 0 } },
        { ty: "st", c: { a: 0, k: [0.3, 0.6, 1, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 2, lj: 2 }
      ]
    },
    // Inner core circle
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Core",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 1, k: [{ t: 0, s: [80, 80, 100], e: [100, 100, 100] }, { t: 45, s: [100, 100, 100], e: [80, 80, 100] }, { t: 90, s: [80, 80, 100], e: [100, 100, 100] }, { t: 135, s: [100, 100, 100], e: [80, 80, 100] }, { t: 180, s: [80, 80, 100] }] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [120, 120] } },
        { ty: "fl", c: { a: 1, k: [{ t: 0, s: [0.2, 0.5, 0.9, 1], e: [0.4, 0.7, 1, 1] }, { t: 90, s: [0.4, 0.7, 1, 1], e: [0.2, 0.5, 0.9, 1] }, { t: 180, s: [0.2, 0.5, 0.9, 1] }] }, o: { a: 0, k: 80 } }
      ]
    },
    // Center dot
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Center",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100], e: [50] }, { t: 30, s: [50], e: [100] }, { t: 60, s: [100], e: [50] }, { t: 90, s: [50], e: [100] }, { t: 120, s: [100], e: [50] }, { t: 150, s: [50], e: [100] }, { t: 180, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [40, 40] } },
        { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    // Orbiting dots
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Orbit1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 120, s: [360] }] },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [80, 0] }, s: { a: 0, k: [16, 16] } },
        { ty: "fl", c: { a: 0, k: [0.5, 0.9, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Orbit2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [120], e: [480] }, { t: 120, s: [480] }] },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [80, 0] }, s: { a: 0, k: [12, 12] } },
        { ty: "fl", c: { a: 0, k: [0.3, 0.7, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Orbit3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [240], e: [600] }, { t: 120, s: [600] }] },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [80, 0] }, s: { a: 0, k: [10, 10] } },
        { ty: "fl", c: { a: 0, k: [0.6, 0.85, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    // Data lines
    {
      ddd: 0,
      ind: 8,
      ty: 4,
      nm: "Line1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0], e: [80] }, { t: 30, s: [80], e: [80] }, { t: 60, s: [80], e: [0] }, { t: 90, s: [0] }] },
        r: { a: 0, k: 45 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, -90] }, s: { a: 0, k: [4, 60] }, r: { a: 0, k: 2 } },
        { ty: "fl", c: { a: 0, k: [0.4, 0.8, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    {
      ddd: 0,
      ind: 9,
      ty: 4,
      nm: "Line2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 30, s: [0], e: [80] }, { t: 60, s: [80], e: [80] }, { t: 90, s: [80], e: [0] }, { t: 120, s: [0] }] },
        r: { a: 0, k: 135 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, -90] }, s: { a: 0, k: [4, 60] }, r: { a: 0, k: 2 } },
        { ty: "fl", c: { a: 0, k: [0.4, 0.8, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    {
      ddd: 0,
      ind: 10,
      ty: 4,
      nm: "Line3",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 60, s: [0], e: [80] }, { t: 90, s: [80], e: [80] }, { t: 120, s: [80], e: [0] }, { t: 150, s: [0] }] },
        r: { a: 0, k: 225 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, -90] }, s: { a: 0, k: [4, 60] }, r: { a: 0, k: 2 } },
        { ty: "fl", c: { a: 0, k: [0.4, 0.8, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    },
    {
      ddd: 0,
      ind: 11,
      ty: 4,
      nm: "Line4",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 90, s: [0], e: [80] }, { t: 120, s: [80], e: [80] }, { t: 150, s: [80], e: [0] }, { t: 180, s: [0] }] },
        r: { a: 0, k: 315 },
        p: { a: 0, k: [200, 200, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, -90] }, s: { a: 0, k: [4, 60] }, r: { a: 0, k: 2 } },
        { ty: "fl", c: { a: 0, k: [0.4, 0.8, 1, 1] }, o: { a: 0, k: 100 } }
      ]
    }
  ]
};

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden network-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className={`text-sm font-medium text-primary ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.title')}
              <br />
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 ${
                isRTL ? 'font-arabic lg:mr-0 lg:ml-auto' : ''
              }`}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="glow-primary text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-accent/10 to-transparent rounded-full blur-3xl" />
              
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 border border-accent/30 rounded-full"
              />
              
              {/* Central Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Lottie
                  animationData={robotAnimation}
                  loop
                  className="w-48 h-48 md:w-64 md:h-64"
                />
              </div>

              {/* Floating Tech Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-accent rounded-full"
                  style={{
                    top: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>{t('hero.scrollDown')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
