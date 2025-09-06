import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: t("services.translation"),
      description: t("services.translationDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      detailedFeatures: [
        "Profesyonel yazılı tercüme hizmetleri",
        "Eş zamanlı ve ardıl sözlü tercüme",
        "Yeminli tercüman hizmetleri", 
        "Teknik dokümantasyon tercümesi",
        "Toplantı ve konferans tercümanlığı",
        "Fuar ve etkinlik tercümanlığı",
        "Çoklu dil desteği (50+ dil)",
        "Kalite güvence sistemi"
      ]
    },
    {
      title: t("services.importExport"),
      description: t("services.importExportDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      detailedFeatures: [
        "Hedef pazar analizi ve araştırması",
        "Güvenilir tedarikçi bulma hizmetleri",
        "İthalat-ihracat prosedürleri danışmanlığı",
        "Ticaret finansmanı çözümleri",
        "Resmi belge hazırlama ve takibi",
        "Gümrük mevzuat danışmanlığı",
        "Risk yönetimi ve sigorta çözümleri",
        "Dış ticaret eğitimleri"
      ]
    },
    {
      title: t("services.customs"),
      description: t("services.customsDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      detailedFeatures: [
        "İthalat gümrük işlemleri",
        "İhracat gümrük işlemleri", 
        "Transit geçiş işlemleri",
        "Gümrük beyannamesi hazırlanması",
        "Tarife sınıflandırması",
        "Menşe belgesi işlemleri",
        "Antidamping ve korunma tedbirleri",
        "Gümrük mevzuat takibi"
      ]
    },
    {
      title: t("services.logistics"),
      description: t("services.logisticsDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      detailedFeatures: [
        "Denizyolu taşımacılığı (FCL/LCL)",
        "Havayolu kargo hizmetleri",
        "Karayolu nakliye çözümleri",
        "Intermodal taşımacılık",
        "Soğuk zincir lojistiği",
        "Proje kargo taşımacılığı",
        "Sigorta ve risk yönetimi",
        "Kapıdan kapıya teslimat"
      ]
    },
    {
      title: t("services.storage"),
      description: t("services.storageDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      detailedFeatures: [
        "Bonded warehouse hizmetleri",
        "Geçici depolama çözümleri",
        "Stok yönetimi ve takibi",
        "E-ticaret fulfillment",
        "Cross-docking hizmetleri",
        "Kargo konsolidasyonu",
        "Özel depolama koşulları",
        "WMS entegrasyonu"
      ]
    },
    {
      title: t("services.consulting"),
      description: t("services.consultingDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      detailedFeatures: [
        "Dış ticaret stratejisi geliştirme",
        "Ödeme yöntemleri danışmanlığı",
        "Şirket kuruluş hizmetleri",
        "İş geliştirme danışmanlığı", 
        "Operasyon optimizasyonu",
        "Kişiye özel eğitim programları",
        "Workshop ve seminerler",
        "Sürekli destek hizmetleri"
      ]
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-6" 
              style={{ fontWeight: 'bold', color: '#0d65ad' }}
            >
              {t("services.title")}
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#ef7f1a' }}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => setSelectedService(index)}
              >
                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#ef7f1a', color: 'white' }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 
                  className="text-xl mb-4 group-hover:text-orange-600 transition-colors duration-300" 
                  style={{ fontWeight: 'bold', color: '#0d65ad' }}
                >
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    className="text-sm font-medium transition-colors duration-300 hover:underline"
                    style={{ color: '#ef7f1a' }}
                  >
                    {t("services.learnMore")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div 
              className="inline-block px-8 py-6 rounded-lg"
              style={{ backgroundColor: '#0d65ad' }}
            >
              <h3 className="text-2xl text-white mb-2" style={{ fontWeight: 'bold' }}>
                {t("services.readyToStart")}
              </h3>
              <p className="text-blue-100 mb-4">
                {t("services.readyDesc")}
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#ef7f1a',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d6691a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef7f1a';
                }}
              >
                {t("services.getConsultation")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(13, 101, 173, 0.1)' }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#ef7f1a', color: 'white' }}
                  >
                    {services[selectedService].icon}
                  </div>
                  <h3 
                    className="text-2xl"
                    style={{ fontWeight: 'bold', color: '#0d65ad' }}
                  >
                    {services[selectedService].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {services[selectedService].description}
              </p>

              <h4 
                className="text-xl mb-6"
                style={{ fontWeight: 'bold', color: '#0d65ad' }}
              >
                Hizmet Detayları
              </h4>

              <ul className="grid md:grid-cols-2 gap-3">
                {services[selectedService].detailedFeatures.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div 
                      className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: '#ef7f1a' }}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full px-8 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#ef7f1a',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d6691a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ef7f1a';
                  }}
                >
                  Bu Hizmet İçin Teklif Al
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}