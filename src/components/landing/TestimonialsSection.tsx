import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import logo1 from "@/assets/partnersLogos/logo1.png";
import logo2 from "@/assets/partnersLogos/logo2.png";
import logo3 from "@/assets/partnersLogos/logo3.png";
import logo4 from "@/assets/partnersLogos/logo4.png";
import logo5 from "@/assets/partnersLogos/logo5.png";
import logo6 from "@/assets/partnersLogos/logo6.png";
import logo7 from "@/assets/partnersLogos/logo7.jpeg";
import logo8 from "@/assets/partnersLogos/logo8.jpeg";
import logo9 from "@/assets/partnersLogos/logo9.png";

import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Omar Farouk",
    nameAr: "عمر فاروق",
    role: "Customer Support Manager, Delta Logistics",
    roleAr: "مدير خدمة العملاء، دلتا لوجيستكس",
    content:
      "Before working with Elegant Options, our support team was overwhelmed with repetitive questions. Now most routine inquiries are handled automatically, and our team can focus on complex cases. It honestly made our daily operations much smoother.",
    contentAr:
      "قبل العمل مع إليجانت أوبشنز، كان فريق خدمة العملاء لدينا يعاني من ضغط كبير بسبب الأسئلة المتكررة. الآن يتم التعامل مع معظم الاستفسارات الروتينية تلقائياً، وأصبح بإمكان الفريق التركيز على الحالات المعقدة. بصراحة سهلت علينا العمل اليومي بشكل كبير.",
    rating: 5,
    image: person1,
  },
  {
    id: 2,
    name: "Nour El-Din Salem",
    nameAr: "نور الدين سالم",
    role: "Head of Marketing, Urban Style Store",
    roleAr: "رئيس قسم التسويق، متجر أوربان ستايل",
    content:
      "The WhatsApp integration helped us stay closer to our customers. We started seeing faster responses and better engagement within weeks. It became one of our main sales channels.",
    contentAr:
      "تكامل واتساب ساعدنا نكون أقرب لعملائنا. بدأنا نلاحظ سرعة أكبر في الردود وتفاعل أفضل خلال أسابيع قليلة. وأصبح واحداً من أهم قنوات البيع لدينا.",
    rating: 5,
    image: person3,
  },
  {
    id: 3,
    name: "Maha Abdelrahman",
    nameAr: "مها عبد الرحمن",
    role: "Founder, Glow Beauty Clinic",
    roleAr: "مؤسسة، عيادة جلو للتجميل",
    content:
      "What I appreciated most was how simple everything was to set up. The system helped us collect more genuine reviews from satisfied clients without pushing them. It improved our online image naturally.",
    contentAr:
      "أكثر شيء أعجبني هو سهولة الإعداد. النظام ساعدنا نجمع تقييمات حقيقية من العملاء الراضين بدون إلحاح. وتحسنت صورتنا على الإنترنت بشكل طبيعي.",
    rating: 5,
    image: person2,
  },
  {
    id: 4,
    name: "Mona Tarek",
    nameAr: "منى طارق",
    role: "Operations Director, MedCare Clinics",
    roleAr: "مديرة العمليات، عيادات ميدكير",
    content:
      "We were looking for a way to reduce manual work across departments. After implementing the automation tools, internal processes became faster and more organized. The difference was noticeable within the first few weeks.",
    contentAr:
      "كنا نبحث عن طريقة لتقليل العمل اليدوي بين الأقسام. بعد تطبيق أدوات الأتمتة، أصبحت العمليات أسرع وأكثر تنظيماً. لاحظنا الفرق خلال الأسابيع الأولى.",
    rating: 5,
    image: person4,
  },
];

const partners = [
  {
    name: "Tarboush",
    logo: logo1,
  },
  { name: "Dana Cosmetic", logo: logo2 },
  {
    name: "Fatoush",
    logo: logo3,
  },
  {
    name: "Khabaz Restaurant",
    logo: logo4,
  },
  {
    name: "Tibe Organization",
    logo: logo5,
  },
  {
    name: "Abu Haitham Restaurant",
    logo: logo6,
  },
  {
    name: "Authentic Digital Marketing Services",
    logo: logo7,
  },
  {
    name: "Signora",
    logo: logo8,
  },
  {
    name: "Maldives Spa",
    logo: logo9,
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
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div> */}

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
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 4 },
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
                      className="max-w-16 max-h-16 object-contain scale-[1.8] md:scale-[2] transform"
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
