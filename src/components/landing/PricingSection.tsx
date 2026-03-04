import { useTranslation } from "react-i18next";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Sparkles,
  Crown,
  MessageSquare,
  Zap,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  "starter",
  "essential",
  "comprehensive",
  "professional",
  "enterprise",
];

export const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      {/* Background */}
      {/* <motion.div
        className="absolute inset-0 network-bg opacity-30"
        style={{ y: backgroundY }}
      /> */}

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Crown className="w-4 h-4 text-accent" />
            <span
              className={`text-sm font-medium text-accent ${isRTL ? "font-arabic" : ""}`}>
              {t("pricing.badge")}
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isRTL ? "font-arabic" : ""
            }`}>
            {t("pricing.title")}{" "}
            <span className="text-gradient">{t("pricing.titleHighlight")}</span>
          </h2>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isRTL ? "font-arabic" : ""
            }`}>
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-14 max-w-[1400px] mx-auto mb-16">
          {plans.map((plan, index) => {
            const isProfessional = plan === "professional";
            const isStarter = plan === "starter";
            const isEnterprise = plan === "enterprise";

            const features = t(`pricing.${plan}.features`, {
              returnObjects: true,
            }) as string[];

            const oldPrice = t(`pricing.${plan}.oldPrice`);
            const currentPrice = t(`pricing.${plan}.price`);

            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 120, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  y: -16,
                  scale: isProfessional ? 1.05 : 1.03,
                }}
                className={`relative w-full sm:w-[252px] md:w-[300px] lg:w-[390px] xl:w-[380px] ${
                  isProfessional ? "lg:-mt-6 z-10" : ""
                }`}>
                {/* Badges */}
                {isProfessional && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      {t("pricing.popular")}
                    </div>
                  </div>
                )}

                {isStarter && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      {t(`pricing.${plan}.limitedOffer`)}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`glass-card h-full p-6 md:p-8 rounded-2xl flex flex-col ${
                    isProfessional ? "border-primary/50 glow-primary" : ""
                  } ${isEnterprise ? "border-accent/50" : ""}`}>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isRTL ? "font-arabic" : ""
                    }`}>
                    {t(`pricing.${plan}.name`)}
                  </h3>

                  <p
                    className={`text-sm text-muted-foreground mb-6 ${
                      isRTL ? "font-arabic" : ""
                    }`}>
                    {t(`pricing.${plan}.description`)}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    {oldPrice && (
                      <span className="text-sm line-through text-muted-foreground block">
                        {oldPrice} {t("pricing.currency")}
                      </span>
                    )}

                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-bold text-gradient ${
                          isEnterprise ? "text-xl" : "text-4xl"
                        } ${isRTL ? "font-arabic" : ""}`}>
                        {currentPrice}
                      </span>
                      {!isEnterprise && (
                        <span className="text-muted-foreground">
                          {t("pricing.currency")}
                        </span>
                      )}
                    </div>

                    {!isEnterprise && (
                      <span
                        className={`text-sm text-muted-foreground ${
                          isRTL ? "font-arabic" : ""
                        }`}>
                        {t("pricing.monthly")}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 justify-start ${
                          isRTL
                            ? "flex-row-reverse text-right justify-between"
                            : ""
                        }`}>
                        <div className="w-5 h-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span
                          className={`text-xs 2xl:text-sm 2xl:text-[0.812rem] text-muted-foreground leading-relaxed ${
                            isRTL ? "font-arabic" : ""
                          }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      isProfessional || isEnterprise ? "glow-primary" : ""
                    } ${isRTL ? "font-arabic" : ""}`}
                    variant={
                      isProfessional || isEnterprise ? "default" : "outline"
                    }
                    onClick={() => {
                      const planName = t(`pricing.${plan}.name`);
                      const message = isRTL
                        ? `.مرحباً، أنا مهتم بخطة '${planName}'، اريد أن أعرف تفاصيل أكثر`
                        : `Hello, I'm interested in the ${planName} plan, I need to know more details.`;
                      const whatsappUrl = `https://wa.me/96566305551?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, "_blank");
                    }}>
                    {t("pricing.cta")}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Special Description - FIRST AFTER CARDS */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-2xl p-6 md:p-8 border-2 border-accent/30 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5" />

              <div className="relative z-10">
                <div
                  className={`flex items-start gap-4 mb-4 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}>
                  <div className="p-3 rounded-full bg-accent/20 shrink-0">
                    <Building2 className="w-7 h-7 text-accent" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <h3
                      className={`text-xl md:text-2xl font-bold text-gradient mb-3 ${
                        isRTL ? "font-arabic" : ""
                      }`}>
                      {isRTL
                        ? "باقة المؤسسات - منظومة رقمية متكاملة"
                        : "Enterprise Plan - Complete Digital Ecosystem"}
                    </h3>
                    <p
                      className={`text-sm md:text-base text-muted-foreground leading-relaxed ${
                        isRTL ? "font-arabic" : ""
                      }`}>
                      {isRTL ? (
                        <>
                          باقة{" "}
                          <span className="font-bold text-primary">
                            المؤسسات (Enterprise)
                          </span>{" "}
                          مصممة خصيصاً للشركات التي تهدف لتحويل نشاطها إلى{" "}
                          <span className="font-bold text-accent">
                            "منظومة رقمية"
                          </span>{" "}
                          تعمل ذاتياً، حيث يتم دمج الموقع الذكي مع الـ{" "}
                          <span className="font-bold text-primary">
                            AI Agent
                          </span>{" "}
                          لإدارة دورة المبيعات والحجوزات بالكامل دون تدخل بشري.
                        </>
                      ) : (
                        <>
                          The{" "}
                          <span className="font-bold text-primary">
                            Enterprise plan
                          </span>{" "}
                          is specifically designed for companies aiming to
                          transform their business into a self-operating{" "}
                          <span className="font-bold text-accent">
                            "digital ecosystem"
                          </span>
                          , where the smart website is integrated with the{" "}
                          <span className="font-bold text-primary">
                            AI Agent
                          </span>{" "}
                          to manage the entire sales and booking cycle without
                          human intervention.
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Visual highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}>
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span
                      className={`text-[0.83rem] text-muted-foreground ${
                        isRTL ? "font-arabic text-right" : ""
                      }`}>
                      {isRTL
                        ? "أتمتة كاملة للمبيعات"
                        : "Complete Sales Automation"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}>
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span
                      className={`text-[0.83rem] text-muted-foreground ${
                        isRTL ? "font-arabic text-right" : ""
                      }`}>
                      {isRTL
                        ? "تكامل ذكي مع الموقع"
                        : "Smart Website Integration"}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}>
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span
                      className={`text-[0.83rem] text-muted-foreground ${
                        isRTL ? "font-arabic text-right" : ""
                      }`}>
                      {isRTL
                        ? "عمل مستمر دون تدخل بشري"
                        : "Continuous Autonomous Operation"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Pricing Info Banner - SECOND AFTER ENTERPRISE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 md:p-8 border-2 border-primary/30 relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/20">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold text-gradient ${
                      isRTL ? "font-arabic" : ""
                    }`}>
                    {isRTL ? "تسعير الرسائل المرن" : "Flexible Message Pricing"}
                  </h3>
                </div>

                <div className={`text-center ${isRTL ? "font-arabic" : ""}`}>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {isRTL
                      ? "تُحسب تكلفة الرسائل حسب الاستخدام الفعلي:"
                      : "Message costs are calculated based on actual usage:"}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="glass-card px-6 py-3 rounded-xl border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                      <div className="flex items-center gap-2">
                        {/* <Sparkles className="w-4 h-4 text-accent" /> */}
                        <span className="text-lg font-bold text-primary">
                          3 {isRTL ? "د.ك" : "KWD"}
                        </span>
                        <span
                          className={`text-[0.83rem] text-muted-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}>
                          {isRTL ? "لكل 100 رسالة" : "per 100 messages"}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`text-muted-foreground ${
                        isRTL ? "font-arabic" : "hidden sm:block"
                      }`}>
                      {isRTL ? "أو" : "or"}
                    </div>

                    <div className="glass-card px-6 py-3 rounded-xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
                      <div className="flex items-center gap-2">
                        {/* <Zap className="w-4 h-4 text-accent" /> */}
                        <span className="text-lg font-bold text-accent">
                          29 {isRTL ? "د.ك" : "KWD"}
                        </span>
                        <span
                          className={`text-[0.83rem] text-muted-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}>
                          {isRTL ? "لكل 1000 رسالة" : "per 1000 messages"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
