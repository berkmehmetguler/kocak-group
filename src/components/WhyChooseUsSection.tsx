import { useLanguage } from "../context/LanguageContext";

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t("whyChoose.provenTrack"),
      description: t("whyChoose.provenDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t("whyChoose.quality"),
      description: t("whyChoose.qualityDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: t("whyChoose.onTime"),
      description: t("whyChoose.onTimeDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t("whyChoose.competitive"),
      description: t("whyChoose.competitiveDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: t("whyChoose.expert"),
      description: t("whyChoose.expertDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: t("whyChoose.safety"),
      description: t("whyChoose.safetyDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6" 
            style={{ fontWeight: 'bold', color: '#0d65ad' }}
          >
            {t("whyChoose.title")}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#ef7f1a' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#ef7f1a', color: 'white' }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3 
                className="text-xl mb-4 group-hover:text-orange-600 transition-colors duration-300" 
                style={{ fontWeight: 'bold', color: '#0d65ad' }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div 
          className="rounded-lg p-8 md:p-12"
          style={{ 
            background: 'linear-gradient(135deg, #0d65ad 0%, #ef7f1a 100%)'
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl text-white mb-4" style={{ fontWeight: 'bold' }}>
              {t("whyChoose.achievements")}
            </h3>
            <p className="text-white/90">
              {t("whyChoose.achievementsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontWeight: 'bold' }}>
                500+
              </div>
              <div className="text-white/90">{t("about.completedProjects")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontWeight: 'bold' }}>
                20+
              </div>
              <div className="text-white/90">{t("about.yearsExperience")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontWeight: 'bold' }}>
                200+
              </div>
              <div className="text-white/90">{t("hero.stat3")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontWeight: 'bold' }}>
                100%
              </div>
              <div className="text-white/90">{t("hero.stat4")}</div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Preview */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <svg className="w-12 h-12 mx-auto mb-4" style={{ color: '#ef7f1a' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{t("whyChoose.quote")}"
              </blockquote>
              <div>
                <div className="text-lg" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
                  {t("whyChoose.quoteName")}
                </div>
                <div className="text-gray-600">{t("whyChoose.quoteTitle")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl mb-4" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
            {t("whyChoose.readyExperience")}
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            {t("whyChoose.joinClients")}
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
            {t("whyChoose.startToday")}
          </button>
        </div>
      </div>
    </section>
  );
}