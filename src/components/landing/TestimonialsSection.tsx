import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    role: "CEO, Tech Solutions",
    roleAr: "الرئيس التنفيذي، تك سوليوشنز",
    content:
      "Elegant Options transformed our customer service completely. The AI agent handles 80% of inquiries automatically, saving us countless hours.",
    contentAr:
      "حولت إليجانت أوبشنز خدمة العملاء لدينا بالكامل. يتعامل وكيل الذكاء الاصطناعي مع 80٪ من الاستفسارات تلقائياً، مما يوفر لنا ساعات لا تحصى.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sara Mohammed",
    nameAr: "سارة محمد",
    role: "Marketing Director, E-Commerce Hub",
    roleAr: "مديرة التسويق، إي كوميرس هب",
    content:
      "The WhatsApp Business API integration was seamless. Our campaign open rates jumped to 98% and conversions increased by 40%.",
    contentAr:
      "كان تكامل واتساب للأعمال سلساً للغاية. قفزت معدلات فتح حملاتنا إلى 98٪ وزادت التحويلات بنسبة 40٪.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Khalid Al-Sabah",
    nameAr: "خالد الصباح",
    role: "Owner, Premium Retail",
    roleAr: "مالك، بريميوم ريتيل",
    content:
      "The review booster system helped us get 200+ new Google reviews in just 3 months. Our online reputation has never been better.",
    contentAr:
      "ساعدنا نظام تعزيز المراجعات في الحصول على أكثر من 200 مراجعة جديدة على جوجل في 3 أشهر فقط. سمعتنا الإلكترونية لم تكن أفضل من ذلك.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Fatima Hassan",
    nameAr: "فاطمة حسن",
    role: "Operations Manager, Healthcare Plus",
    roleAr: "مديرة العمليات، هيلث كير بلس",
    content:
      "Implementing the full automation suite reduced our operational costs by 60%. The ROI was visible within the first month.",
    contentAr:
      "أدى تنفيذ مجموعة الأتمتة الكاملة إلى تقليل تكاليفنا التشغيلية بنسبة 60٪. كان العائد على الاستثمار واضحاً خلال الشهر الأول.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const partners = [
  {
    name: "Slack",
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  {
    name: "Zoom",
    logo: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg",
  },
  {
    name: "Dropbox",
    logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg",
  },
  {
    name: "Monday",
    logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
  },
  {
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "Hubspot",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
  },
  {
    name: "Stripe",
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  },
  {
    name: "Zendesk",
    logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
  },
];

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t("testimonials.badge")}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("testimonials.title")}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("testimonials.titleHighlight")}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20" dir="ltr">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  <div
                    className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                    dir={isRTL ? "rtl" : "ltr"}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Quote icon */}
                    <motion.div
                      className={`absolute top-6 ${
                        isRTL ? "left-6" : "right-6"
                      } text-primary/20`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}>
                      <Quote className="w-16 h-16" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + i * 0.1 }}>
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10">
                      "{isRTL ? testimonial.contentAr : testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}>
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                          <img
                            src={testimonial.image}
                            alt={isRTL ? testimonial.nameAr : testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-1 ${
                            isRTL ? "-left-1" : "-right-1"
                          } w-5 h-5 bg-green-500 rounded-full border-2 border-background`}
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {isRTL ? testimonial.nameAr : testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {isRTL ? testimonial.roleAr : testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Partners/Clients Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <h3 className="text-center text-muted-foreground text-lg mb-8">
            {t("testimonials.trustedBy")}
          </h3>

          <div className="relative overflow-hidden bg-white">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <Swiper
              key={isRTL ? "rtl" : "ltr"}
              dir={isRTL ? "rtl" : "ltr"}
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={true}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              className="partners-swiper">
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-32 p-4 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      decoding="async"
                      className="max-w-8 max-h-8 object-contain scale-[1.8] md:scale-[2] transform"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
