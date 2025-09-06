import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null); // 🟢 burayı ekledik

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟢 Mobile menü dışına tıklama
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.services"), id: "services" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 my-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 md cursor-pointer"
            >
              <img
                src="/assets/kocak-logo.png"
                alt="Koçak Group"
                className="h-16 md:h-24 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-orange-600"
                      : "text-white hover:text-orange-300"
                  }`}
                  style={{ fontWeight: "500" }}
                >
                  {item.name}
                </button>
              ))}

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-2 min-w-[48px] h-10 px-3 rounded-lg border transition-colors duration-300 text-sm
                    ${
                      isScrolled
                        ? "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
                        : "bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20"
                    }`}
                  >
                    <Globe className="w-4 h-4 text-center" />
                    <span className="flex items-center gap-1">
                      {languages.find((lang) => lang.code === language)?.flag}
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={(e) => {
                        e.preventDefault();
                        setLanguage(lang.code as "tr" | "en" | "ar");
                      }}
                      className={`flex items-center space-x-2 cursor-pointer ${
                        language === lang.code ? "bg-gray-100" : ""
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#ef7f1a",
                  fontWeight: "600",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d6691a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ef7f1a";
                }}
              >
                {t("nav.getQuote")}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef} // 🟢 burayı ekledik
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block px-3 py-2 rounded-md text-base text-gray-900 hover:text-orange-600 hover:bg-gray-50 w-full text-left transition-colors duration-300"
              style={{ fontWeight: "500" }}
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Language Selector */}
          <div className="px-3 py-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm hover:bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <>
                      <span>
                        {languages.find((lang) => lang.code === language)?.flag}
                      </span>
                      <span>
                        {languages.find((lang) => lang.code === language)?.name}
                      </span>
                    </>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={(e) => {
                      e.preventDefault();
                      setLanguage(lang.code as "tr" | "en" | "ar");
                    }}
                    className={`flex items-center space-x-2 cursor-pointer ${
                      language === lang.code ? "bg-gray-100" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-left px-3 py-3 rounded-md text-base text-white transition-all duration-300"
            style={{
              backgroundColor: "#ef7f1a",
              fontWeight: "600",
            }}
          >
            {t("nav.getQuote")}
          </button>
        </div>
      </div>
    </nav>
  );
}
