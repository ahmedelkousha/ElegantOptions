import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sections = isRTL ? [
    {
      title: '1. قبول الشروط',
      content: 'باستخدام خدمات إليجانت أوبشنز، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
    },
    {
      title: '2. وصف الخدمات',
      content: 'نقدم حلول أتمتة الأعمال المدعومة بالذكاء الاصطناعي، بما في ذلك تكامل واتساب للأعمال، ووكلاء خدمة العملاء بالذكاء الاصطناعي، وأنظمة إدارة المراجعات، وتكامل المواقع الإلكترونية.'
    },
    {
      title: '3. حسابات المستخدمين',
      content: 'أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك. يجب عليك إخطارنا فوراً بأي استخدام غير مصرح به.'
    },
    {
      title: '4. الاستخدام المقبول',
      content: 'توافق على استخدام خدماتنا فقط للأغراض القانونية وبطريقة لا تنتهك حقوق الآخرين. يُحظر الإرسال المزعج والتحرش والأنشطة الاحتيالية بشكل صارم.'
    },
    {
      title: '5. الدفع والفوترة',
      content: 'تستند الأسعار إلى الخطط المختارة ويتم إصدار الفواتير شهرياً أو سنوياً. جميع الرسوم غير قابلة للاسترداد ما لم يُنص على خلاف ذلك. نحتفظ بالحق في تعديل الأسعار بإشعار مسبق مدته 30 يوماً.'
    },
    {
      title: '6. الملكية الفكرية',
      content: 'جميع المحتويات والبرامج والتقنيات المقدمة من خلال خدماتنا مملوكة لإليجانت أوبشنز ومحمية بموجب قوانين الملكية الفكرية.'
    },
    {
      title: '7. تحديد المسؤولية',
      content: 'لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام خدماتنا.'
    },
    {
      title: '8. الإنهاء',
      content: 'يجوز لنا إنهاء أو تعليق الوصول إلى خدماتنا فوراً، دون إشعار مسبق، لأي سبب، بما في ذلك انتهاك هذه الشروط.'
    },
    {
      title: '9. التعديلات',
      content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بالتغييرات الجوهرية عبر البريد الإلكتروني أو من خلال منصتنا.'
    },
    {
      title: '10. معلومات الاتصال',
      content: 'للاستفسارات المتعلقة بهذه الشروط، يرجى التواصل معنا على Info@elegant-options.com أو الاتصال على +965 66305551.'
    }
  ] : [
    {
      title: '1. Acceptance of Terms',
      content: 'By using Elegant Options services, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, please do not use our services.'
    },
    {
      title: '2. Description of Services',
      content: 'We provide AI-powered business automation solutions including WhatsApp Business API integration, AI customer service agents, review management systems, and website integrations.'
    },
    {
      title: '3. User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.'
    },
    {
      title: '4. Acceptable Use',
      content: 'You agree to use our services only for lawful purposes and in a way that does not infringe upon the rights of others. Spamming, harassment, and fraudulent activities are strictly prohibited.'
    },
    {
      title: '5. Payment and Billing',
      content: 'Pricing is based on selected plans and billed monthly or annually. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with 30 days notice.'
    },
    {
      title: '6. Intellectual Property',
      content: 'All content, software, and technology provided through our services are owned by Elegant Options and protected by intellectual property laws.'
    },
    {
      title: '7. Limitation of Liability',
      content: 'We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.'
    },
    {
      title: '8. Termination',
      content: 'We may terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these terms.'
    },
    {
      title: '9. Modifications',
      content: 'We reserve the right to modify these terms at any time. Material changes will be notified via email or through our platform.'
    },
    {
      title: '10. Contact Information',
      content: 'For questions regarding these terms, please contact us at Info@elegant-options.com or call +965 66305551.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isRTL ? 'آخر تحديث: يناير 2026' : 'Last updated: January 2026'}
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 border border-border/50 rounded-xl p-6"
              >
                <h2 className={`text-xl font-semibold mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {section.title}
                </h2>
                <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
