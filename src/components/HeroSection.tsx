import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen  flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1646777948840-c21280db6bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBsb2dpc3RpY3MlMjBwb3J0fGVufDF8fHx8MTc1NzA0MTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cargo ship logistics port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <span
            className="inline-block px-6 py-2 rounded-full text-sm uppercase tracking-wider mb-6 mt-10"
            style={{ backgroundColor: "#ef7f1a" }}
          >
            {t("hero.badge")}
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl mb-6"
          style={{ fontWeight: "bold", lineHeight: "1.1" }}
        >
          {t("hero.title1")}
          <br />
          <span style={{ color: "#ef7f1a" }}>
            {t("hero.title2")}
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#ef7f1a",
              fontSize: "1.125rem",
              fontWeight: "600",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d6691a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ef7f1a";
            }}
          >
            {t("hero.startProject")}
          </button>

          <button
            onClick={() => {
              const element = document.querySelector("#about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-lg border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
            style={{ fontSize: "1.125rem", fontWeight: "600" }}
          >
            {t("hero.learnMore")}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div
              className="text-3xl md:text-4xl mb-2"
              style={{ fontWeight: "bold", color: "#ef7f1a" }}
            >
              500+
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {t("hero.stat1")}
            </div>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl mb-2"
              style={{ fontWeight: "bold", color: "#ef7f1a" }}
            >
              20+
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {t("hero.stat2")}
            </div>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl mb-2"
              style={{ fontWeight: "bold", color: "#ef7f1a" }}
            >
              200+
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {t("hero.stat3")}
            </div>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl mb-2"
              style={{ fontWeight: "bold", color: "#ef7f1a" }}
            >
              100%
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              {t("hero.stat4")}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 border border-orange-500/30 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
}