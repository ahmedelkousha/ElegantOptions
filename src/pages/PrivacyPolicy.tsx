import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sections = isRTL ? [
    {
      title: '1. المعلومات التي نجمعها',
      content: 'نجمع المعلومات التي تقدمها مباشرة، بما في ذلك الاسم وعنوان البريد الإلكتروني ورقم الهاتف ومعلومات الأعمال. نجمع أيضاً بيانات الاستخدام تلقائياً من خلال ملفات تعريف الارتباط والتقنيات المماثلة.'
    },
    {
      title: '2. كيف نستخدم معلوماتك',
      content: 'نستخدم معلوماتك لتقديم خدماتنا وتحسينها، ومعالجة المعاملات، وإرسال الاتصالات، وتخصيص تجربتك. لن نبيع بياناتك الشخصية أبداً لأطراف ثالثة.'
    },
    {
      title: '3. مشاركة البيانات',
      content: 'قد نشارك المعلومات مع مزودي الخدمة الموثوقين الذين يساعدوننا في تشغيل أعمالنا. جميع الشركاء ملزمون باتفاقيات سرية صارمة.'
    },
    {
      title: '4. أمان البيانات',
      content: 'نطبق تدابير أمنية متوافقة مع معايير الصناعة بما في ذلك التشفير والخوادم الآمنة والتدقيقات الأمنية المنتظمة لحماية معلوماتك.'
    },
    {
      title: '5. حقوقك',
      content: 'لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضاً إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.'
    },
    {
      title: '6. ملفات تعريف الارتباط',
      content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح.'
    },
    {
      title: '7. خدمات الطرف الثالث',
      content: 'قد تتكامل خدماتنا مع منصات الطرف الثالث مثل واتساب وجوجل. يرجى مراجعة سياسات الخصوصية الخاصة بهم للحصول على معلومات حول ممارسات بياناتهم.'
    },
    {
      title: '8. الاحتفاظ بالبيانات',
      content: 'نحتفظ ببياناتك طالما كان حسابك نشطاً أو حسب الحاجة لتقديم الخدمات. يمكنك طلب حذف البيانات في أي وقت.'
    },
    {
      title: '9. خصوصية الأطفال',
      content: 'خدماتنا غير موجهة للأطفال دون 18 عاماً. لا نجمع معلومات عن قصد من القاصرين.'
    },
    {
      title: '10. تحديثات السياسة',
      content: 'قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سيتم إخطارك بأي تغييرات مادية عبر البريد الإلكتروني أو من خلال منصتنا.'
    },
    {
      title: '11. اتصل بنا',
      content: 'للاستفسارات المتعلقة بالخصوصية، تواصل معنا على Info@elegant-options.com أو اتصل على +965 66305551. العنوان: السالمية، بلوك 10، الكويت 11010.'
    }
  ] : [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly, including name, email address, phone number, and business information. We also automatically collect usage data through cookies and similar technologies.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use your information to provide and improve our services, process transactions, send communications, and personalize your experience. We will never sell your personal data to third parties.'
    },
    {
      title: '3. Data Sharing',
      content: 'We may share information with trusted service providers who assist in operating our business. All partners are bound by strict confidentiality agreements.'
    },
    {
      title: '4. Data Security',
      content: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your information.'
    },
    {
      title: '5. Your Rights',
      content: 'You have the right to access, correct, or delete your personal data. You can also opt-out of marketing communications at any time.'
    },
    {
      title: '6. Cookies',
      content: 'We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.'
    },
    {
      title: '7. Third-Party Services',
      content: 'Our services may integrate with third-party platforms such as WhatsApp and Google. Please review their privacy policies for information about their data practices.'
    },
    {
      title: '8. Data Retention',
      content: 'We retain your data for as long as your account is active or as needed to provide services. You can request data deletion at any time.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to children under 18. We do not knowingly collect information from minors.'
    },
    {
      title: '10. Policy Updates',
      content: 'We may update this privacy policy periodically. You will be notified of any material changes via email or through our platform.'
    },
    {
      title: '11. Contact Us',
      content: 'For privacy-related inquiries, contact us at Info@elegant-options.com or call +965 66305551. Address: Salmiya, Block 10, Kuwait 11010.'
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
            {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
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

export default PrivacyPolicy;
