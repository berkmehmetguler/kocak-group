import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Building2, Ship, Users, Languages } from "lucide-react";


export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("projects.all"), icon: Building2 },
    { key: "logistics", label: t("projects.logistics"), icon: Ship },
    { key: "trade", label: t("projects.trade"), icon: Users },
    { key: "consulting", label: t("projects.consulting"), icon: Building2 },
    { key: "translation", label: t("projects.translation"), icon: Languages }
  ];

  // Reset to "all" when language changes
  useEffect(() => {
    setActiveFilter("all");
  }, [language]);

  const projects = [
    {
      id: 1,
      title: "Avrupa-Türkiye Lojistik Koridoru",
      titleEn: "Europe-Turkey Logistics Corridor",
      titleAr: "ممر لوجستي أوروبا-تركيا",
      category: t("projects.logistics"),
      categoryEn: "Logistics",
      description: "Avrupa ve Türkiye arasında kapıdan kapıya lojistik çözümleri sunan kapsamlı taşımacılık projesi.",
      descriptionEn: "Comprehensive transportation project providing door-to-door logistics solutions between Europe and Turkey.",
      descriptionAr: "مشروع نقل شامل يوفر حلول لوجستية من الباب إلى الباب بين أوروبا وتركيا.",
      image: "/assets/pro-1.jpg",
      year: "2023",
      location: "Istanbul, Türkiye"
    },
    {
      id: 2,
      title: "E-Ticaret Dağıtım Merkezi",
      titleEn: "E-Commerce Distribution Center", 
      titleAr: "مركز توزيع التجارة الإلكترونية",
      category: t("projects.logistics"),
      categoryEn: "Logistics",
      description: "Modern depolama teknolojileri ve WMS entegrasyonu ile e-ticaret fulfillment çözümleri.",
      descriptionEn: "E-commerce fulfillment solutions with modern storage technologies and WMS integration.",
      descriptionAr: "حلول الوفاء للتجارة الإلكترونية مع تقنيات تخزين حديثة وتكامل نظام إدارة المستودعات.",
      image: "https://images.unsplash.com/photo-1742349934917-c6932c49d067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtb2Rlcm4lMjBkaXN0cmlidXRpb24lMjBjZW50ZXIlMjBlY29tbWVyY2V8ZW58MXx8fHwxNzU3MDQ4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2023",
      location: "Ankara, Türkiye"
    },
    {
      id: 3,
      title: "Havayolu Kargo Hub'ı",
      titleEn: "Airline Cargo Hub",
      titleAr: "مركز الشحن الجوي",
      category: t("projects.logistics"),
      categoryEn: "Logistics", 
      description: "Uluslararası havayolu kargo operasyonları için gelişmiş lojistik merkezi projesi.",
      descriptionEn: "Advanced logistics center project for international airline cargo operations.",
      descriptionAr: "مشروع مركز لوجستي متطور لعمليات الشحن الجوي الدولي.",
      image: "https://images.unsplash.com/photo-1746431564860-4bad7d9a756e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwYWlyY3JhZnQlMjBmcmVpZ2h0JTIwYWlycG9ydHxlbnwxfHx8fDE3NTcwNDg3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2022",
      location: "İzmir, Türkiye"
    },
    {
      id: 4,
      title: "Orta Doğu Ticaret Ortaklığı",
      titleEn: "Middle East Trade Partnership",
      titleAr: "شراكة تجارية الش��ق الأوسط",
      category: t("projects.trade"),
      categoryEn: "Foreign Trade",
      description: "Orta Doğu ülkeleri ile stratejik ticaret ortaklığı ve pazar geliştirme projesi.",
      descriptionEn: "Strategic trade partnership and market development project with Middle Eastern countries.",
      descriptionAr: "مشروع شراكة تجارية استراتيجية وتطوير السوق مع دول الشرق الأوسط.",
      image: "https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbnRlcm5hdGlvbmFsJTIwdHJhZGUlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NTcwNDg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2022",
      location: "Dubai, UAE"
    },
    {
      id: 5,
      title: "Gümrük Modernizasyon Projesi",
      titleEn: "Customs Modernization Project", 
      titleAr: "مشروع تحديث الجمارك",
      category: t("projects.consulting"),
      categoryEn: "Consulting",
      description: "Gümrük süreçlerinin dijitalleştirilmesi ve optimizasyonu için danışmanlık projesi.",
      descriptionEn: "Consulting project for digitalization and optimization of customs processes.",
      descriptionAr: "مشروع استشاري لرقمنة وتحسين عمليات الجمارك.",
      image: "https://images.unsplash.com/photo-1710181202446-db07ae707d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwYm9yZGVyJTIwY2hlY2twb2ludCUyMGRvY3VtZW50cyUyMG9mZmljaWFsfGVufDF8fHx8MTc1NzA0ODc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2021",
      location: "Ankara, Türkiye"
    },
    {
      id: 6,
      title: "Çok Dilli Konferans Merkezi",
      titleEn: "Multilingual Conference Center",
      titleAr: "مركز المؤتمرات متعدد اللغات", 
      category: t("projects.translation"),
      categoryEn: "Translation",
      description: "Uluslararası konferanslar için profesyonel tercümanlık hizmetleri koordinasyonu.",
      descriptionEn: "Coordination of professional interpretation services for international conferences.",
      descriptionAr: "تنسيق خدمات الترجمة الفورية المهنية للمؤتمرات الدولية.",
      image: "https://images.unsplash.com/photo-1581548714337-88408e387f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwaW50ZXJwcmV0aW5nJTIwdHJhbnNsYXRpb24lMjBtaWNyb3Bob25lJTIwbXVsdGlsaW5ndWFsfGVufDF8fHx8MTc1NzA0ODc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2021",
      location: "İstanbul, Türkiye"
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects 
    : projects.filter(project => {
        const filterLabel = filters.find(f => f.key === activeFilter)?.label;
        return project.category === filterLabel;
      });

  const getProjectTitle = (project: any) => {
    const { language } = useLanguage();
    switch (language) {
      case "en": return project.titleEn;
      case "ar": return project.titleAr;
      default: return project.title;
    }
  };

  const getProjectDescription = (project: any) => {
    const { language } = useLanguage();
    switch (language) {
      case "en": return project.descriptionEn;
      case "ar": return project.descriptionAr;
      default: return project.description;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6" 
            style={{ fontWeight: 'bold', color: '#0d65ad' }}
          >
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#ef7f1a' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.key
                    ? "text-white shadow-lg"
                    : "text-gray-600 bg-white border border-gray-200 hover:border-orange-300"
                }`}
                style={{
                  backgroundColor: activeFilter === filter.key ? '#ef7f1a' : undefined,
                  fontWeight: '500'
                }}
              >
                <IconComponent className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={getProjectTitle(project)}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
                
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm text-white"
                  style={{ backgroundColor: '#ef7f1a', fontWeight: '500' }}
                >
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm bg-white text-gray-800">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl mb-2 group-hover:text-orange-600 transition-colors duration-300" 
                  style={{ fontWeight: 'bold', color: '#0d65ad' }}
                >
                  {getProjectTitle(project)}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {getProjectDescription(project)}
                </p>

                {/* View Details Button */}
                <button 
                  className="text-sm font-medium transition-colors duration-300 hover:underline"
                  style={{ color: '#ef7f1a' }}
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("projects.viewDetails")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {t("projects.haveProject")}
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-lg text-white transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#ef7f1a',
              fontSize: '1.125rem',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d6691a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ef7f1a';
            }}
          >
            {t("projects.startProject")}
          </button>
        </div>
      </div>
    </section>
  );
}