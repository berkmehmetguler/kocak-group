import { useLanguage } from "../context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  const values = [
    {
      title: t("about.excellence"),
      description: t("about.excellenceDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t("about.innovation"),
      description: t("about.innovationDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t("about.reliability"),
      description: t("about.reliabilityDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: t("about.sustainability"),
      description: t("about.sustainabilityDesc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6" 
            style={{ fontWeight: 'bold', color: '#0d65ad' }}
          >
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#ef7f1a' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
              {t("about.story")}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t("about.story1")}
              </p>
              <p>
                {t("about.story2")}
              </p>
              <p>
                {t("about.story3")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div 
                  className="text-3xl mb-2" 
                  style={{ fontWeight: 'bold', color: '#ef7f1a' }}
                >
                  500+
                </div>
                <div className="text-gray-600">{t("about.completedProjects")}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div 
                  className="text-3xl mb-2" 
                  style={{ fontWeight: 'bold', color: '#ef7f1a' }}
                >
                  20+
                </div>
                <div className="text-gray-600">{t("about.yearsExperience")}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTcwNDEzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Koçak Group logistics excellence"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 rounded-lg" style={{ 
              background: 'linear-gradient(135deg, rgba(13,101,173,0.1) 0%, rgba(239,127,26,0.1) 100%)' 
            }}></div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 
            className="text-3xl text-center mb-12" 
            style={{ fontWeight: 'bold', color: '#0d65ad' }}
          >
            {t("about.coreValues")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ backgroundColor: '#ef7f1a', color: 'white' }}
                >
                  {value.icon}
                </div>
                <h4 
                  className="text-xl mb-4" 
                  style={{ fontWeight: 'bold', color: '#0d65ad' }}
                >
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}