import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, TrendingUp, Users, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Revolution',
    titleAr: 'ثورة التجارة الإلكترونية',
    client: 'Fashion Boutique',
    clientAr: 'بوتيك الأزياء',
    category: 'Retail',
    categoryAr: 'تجارة التجزئة',
    description: 'Increased sales by 150% through WhatsApp automation and AI-powered customer service.',
    descriptionAr: 'زيادة المبيعات بنسبة 150٪ من خلال أتمتة واتساب وخدمة العملاء المدعومة بالذكاء الاصطناعي.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    stats: [
      { value: '150%', label: 'Sales Increase', labelAr: 'زيادة المبيعات', icon: TrendingUp },
      { value: '10K+', label: 'Monthly Messages', labelAr: 'رسالة شهرياً', icon: MessageSquare },
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 2,
    title: 'Healthcare Transformation',
    titleAr: 'تحول الرعاية الصحية',
    client: 'Medical Center',
    clientAr: 'المركز الطبي',
    category: 'Healthcare',
    categoryAr: 'الرعاية الصحية',
    description: 'Reduced patient wait times by 60% with automated appointment scheduling and follow-ups.',
    descriptionAr: 'تقليل أوقات انتظار المرضى بنسبة 60٪ مع جدولة المواعيد والمتابعات الآلية.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
    stats: [
      { value: '60%', label: 'Less Wait Time', labelAr: 'أقل انتظاراً', icon: TrendingUp },
      { value: '5K+', label: 'Patients Served', labelAr: 'مريض تمت خدمته', icon: Users },
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 3,
    title: 'Restaurant Success Story',
    titleAr: 'قصة نجاح المطعم',
    client: 'Gourmet Kitchen',
    clientAr: 'المطبخ الفاخر',
    category: 'F&B',
    categoryAr: 'الأغذية والمشروبات',
    description: 'Achieved 500+ 5-star reviews in 6 months using our review booster system.',
    descriptionAr: 'حققوا أكثر من 500 تقييم 5 نجوم في 6 أشهر باستخدام نظام تعزيز المراجعات.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    stats: [
      { value: '500+', label: '5-Star Reviews', labelAr: 'تقييم 5 نجوم', icon: Star },
      { value: '85%', label: 'Return Rate', labelAr: 'معدل العودة', icon: Users },
    ],
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 4,
    title: 'Real Estate Excellence',
    titleAr: 'التميز العقاري',
    client: 'Luxury Properties',
    clientAr: 'العقارات الفاخرة',
    category: 'Real Estate',
    categoryAr: 'العقارات',
    description: 'Generated 200+ qualified leads monthly through automated inquiry handling.',
    descriptionAr: 'توليد أكثر من 200 عميل محتمل مؤهل شهرياً من خلال التعامل الآلي مع الاستفسارات.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    stats: [
      { value: '200+', label: 'Monthly Leads', labelAr: 'عميل محتمل شهرياً', icon: Users },
      { value: '40%', label: 'Conversion Rate', labelAr: 'معدل التحويل', icon: TrendingUp },
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

export const PortfolioSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      ref={sectionRef}
      id="portfolio"
      className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            {t('portfolio.badge')}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('portfolio.title')}{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('portfolio.titleHighlight')}
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={study.image}
                    alt={isRTL ? study.titleAr : study.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === study.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {isRTL ? study.categoryAr : study.category}
                    </span>
                  </motion.div>

                  {/* Arrow Icon */}
                  <motion.div
                    className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}
                    animate={{
                      x: hoveredId === study.id ? (isRTL ? -5 : 5) : 0,
                      y: hoveredId === study.id ? -5 : 0,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      {isRTL ? study.clientAr : study.client}
                    </p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {isRTL ? study.titleAr : study.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {isRTL ? study.descriptionAr : study.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6">
                    {study.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + statIndex * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <stat.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">
                            {isRTL ? stat.labelAr : stat.label}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredId === study.id ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
