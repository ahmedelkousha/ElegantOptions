import { useTranslation } from "react-i18next";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = ["starter", "essential", "professional", "advanced"];

export const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="pricing"
      ref={ref}
      className="section-container relative overflow-hidden">
      {/* Cinematic Background */}
      <motion.div
        className="absolute inset-0 network-bg opacity-30"
        style={{ y: backgroundY }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header with cinematic reveal */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Crown className="w-4 h-4 text-accent" />
            <span
              className={`text-sm font-medium text-accent ${
                isRTL ? "font-arabic" : ""
              }`}>
              {t("pricing.badge")}
            </span>
          </motion.div>

          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isRTL ? "font-arabic" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}>
            {t("pricing.title")}{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}>
              {t("pricing.titleHighlight")}
            </motion.span>
          </motion.h2>

          <motion.p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isRTL ? "font-arabic" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}>
            {t("pricing.subtitle")}
          </motion.p>
        </motion.div>

        {/* Pricing Cards with 3D staggered reveals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 lg:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isProfessional = plan === "professional";
            const isStarter = plan === "starter";
            const isAdvanced = plan === "advanced";
            const features = t(`pricing.${plan}.features`, {
              returnObjects: true,
            }) as string[];

            return (
              <motion.div
                key={plan}
                initial={{
                  opacity: 0,
                  y: 120,
                  rotateX: -20,
                  scale: 0.85,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  delay: 0.02,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -20,
                  scale: isProfessional ? 1.05 : 1.03,
                  transition: { duration: 0.3 },
                }}
                className={`relative ${
                  isProfessional ? "md:-mt-4 md:mb-4 z-10" : ""
                }`}>
                {/* Popular Badge with animation */}

                {isProfessional && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(var(--primary), 0.3)",
                          "0 0 40px rgba(var(--primary), 0.5)",
                          "0 0 20px rgba(var(--primary), 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}>
                      <Sparkles className="w-4 h-4" />
                      <span className={`text-sm ${isRTL ? "font-arabic" : ""}`}>
                        {t("pricing.popular")}
                      </span>
                    </motion.div>
                  </motion.div>
                )}
                {isStarter && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(23, 99, 207, 0.3)",
                          "0 0 40px rgba(23, 99, 207, 0.5)",
                          "0 0 20px rgba(23, 99, 207, 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}>
                      <Sparkles className="w-4 h-4" />
                      <span className={`text-sm ${isRTL ? "font-arabic" : ""}`}>
                        {t(`pricing.${plan}.limitedOffer`)}
                      </span>
                    </motion.div>
                  </motion.div>
                )}

                <div
                  className={`glass-card p-6 md:p-8 rounded-2xl h-full flex flex-col relative overflow-hidden ${
                    isProfessional ? "border-primary/50 glow-primary" : ""
                  }`}>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                    animate={
                      isProfessional ? { translateX: ["100%", "-100%"] } : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />

                  {/* Plan Name */}
                  <motion.h3
                    className={`text-xl font-bold mb-2 relative z-10 ${
                      isRTL ? "font-arabic" : ""
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}>
                    {t(`pricing.${plan}.name`)}
                  </motion.h3>

                  {/* Description */}
                  <p
                    className={`text-sm text-muted-foreground mb-6 relative z-10 ${
                      isRTL ? "font-arabic" : ""
                    }`}>
                    {t(`pricing.${plan}.description`)}
                  </p>

                  {/* Price with counter animation effect */}
                  <motion.div
                    className={`mb-6 relative z-10`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, type: "spring" }}>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`${
                          isAdvanced
                            ? "md:text-xl text-lg"
                            : "md:text-5xl text-4xl"
                        }   font-bold text-gradient`}>
                        {t(`pricing.${plan}.price`)}
                      </span>
                      <span
                        className={`${
                          isAdvanced ? "hidden" : ""
                        } text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                        {t("pricing.currency")}
                      </span>
                    </div>
                    <span
                      className={`${
                        isAdvanced ? "hidden" : ""
                      } text-sm text-muted-foreground ${
                        isRTL ? "font-arabic" : ""
                      }`}>
                      {t("pricing.monthly")}
                    </span>
                  </motion.div>

                  {/* Features with staggered reveal */}
                  <ul className="space-y-3 mb-8 flex-grow relative z-10">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className={`flex justify-between gap-3 ${
                          isRTL ? "flex-row-reverse text-right" : ""
                        }`}>
                        <motion.div
                          className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                          whileHover={{
                            scale: 1.2,
                            backgroundColor: "var(--primary-hsl)",
                          }}>
                          <Check className="w-3 h-3 text-primary" />
                        </motion.div>
                        <span
                          className={`text-xs text-muted-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full relative z-10 ${
                        isProfessional ? "glow-primary" : ""
                      }`}
                      variant={isProfessional ? "default" : "outline"}
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }>
                      <span className={isRTL ? "font-arabic" : ""}>
                        {t("pricing.cta")}
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
