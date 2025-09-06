import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validatePhone = (phone: string) => {
    // Turkish phone number patterns
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$|^(\+90|0)?[2-4][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t("contact.nameRequired");
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("contact.emailRequired");
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t("contact.phoneRequired");
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t("contact.phoneInvalid");
    }
    
    if (!formData.subject) {
      newErrors.subject = t("contact.subjectRequired");
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t("contact.messageRequired");
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setErrors({});
    }, 3000);
  };

  const contactInfo = [
    {
      title: t("contact.phone"),
      details: [
        { text: "0533 631 83 61", link: "tel:+905336318361" },
        { text: "0536 383 09 13", link: "tel:+905363830913" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: t("contact.email"),
      details: [
        { text: "kocaktercume@gmail.com", link: "mailto:kocaktercume@gmail.com" },
        { text: "kkocakgroup@gmail.com", link: "mailto:kkocakgroup@gmail.com" }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: t("contact.address"),
      details: [
        { text: "MollaGürani Mh. Millet Cd. Muratpaşa Sk.", link: null },
        { text: "Yeni Han No:2/114. Fatih/İstanbul", link: null },
        { text: "(29.noter Binasında)", link: null }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: t("contact.workingHours"),
      details: [
        { text: t("contact.monFri"), link: null },
        { text: t("contact.saturday"), link: null }
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-6" 
            style={{ fontWeight: 'bold', color: '#0d65ad' }}
          >
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#ef7f1a' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-6" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
              {t("contact.sendMessage")}
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#ef7f1a', color: 'white' }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl mb-2" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
                  {t("contact.messageSent")}
                </h4>
                <p className="text-gray-600">
                  {t("contact.thankYou")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: '500' }}>
                      {t("contact.fullName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 ${
                        errors.name 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-300 focus:border-orange-500"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: '500' }}>
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 ${
                        errors.email 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-300 focus:border-orange-500"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: '500' }}>
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 ${
                        errors.phone 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-300 focus:border-orange-500"
                      }`}
                      placeholder="+90 xxx xxx xx xx"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: '500' }}>
                      {t("contact.projectType")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 ${
                        errors.subject 
                          ? "border-red-500 focus:border-red-500" 
                          : "border-gray-300 focus:border-orange-500"
                      }`}
                    >
                      <option value="">{t("contact.selectProject")}</option>
                      <option value="translation">{t("contact.translation")}</option>
                      <option value="importExport">{t("contact.importExport")}</option>
                      <option value="customs">{t("contact.customs")}</option>
                      <option value="logistics">{t("contact.logistics")}</option>
                      <option value="storage">{t("contact.storage")}</option>
                      <option value="consulting">{t("contact.consulting")}</option>
                      <option value="other">{t("contact.other")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: '500' }}>
                    {t("contact.projectDetails")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 resize-none ${
                      errors.message 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                    placeholder={t("contact.projectDetailsPlaceholder")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#ef7f1a',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#d6691a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#ef7f1a';
                    }
                  }}
                >
                  {isSubmitting ? t("contact.sendingMessage") : t("contact.sendMessageBtn")}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#ef7f1a', color: 'white' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg mb-2" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-gray-600">
                        {detail.link ? (
                          <a 
                            href={detail.link}
                            className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
                          >
                            {detail.text}
                          </a>
                        ) : (
                          <span>{detail.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg mb-4" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
                {t("contact.ourLocation")}
              </h4>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.866658847709!2d28.94544531200486!3d41.02026671868739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab85e2e3c06c1%3A0x8b6e1d4f10df8b56!2sMollaG%C3%BCrani%2C%20Millet%20Cd.%20No%3A142%2C%2034093%20Fatih%2F%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Koçak Group Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                MollaGürani Mh. Millet Cd. Muratpaşa Sk. Yeni Han No:2/114. Fatih/İstanbul (29.noter Binasında)
              </p>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg mb-4" style={{ fontWeight: 'bold', color: '#0d65ad' }}>
                {t("contact.followUs")}
              </h4>
              <div className="flex space-x-4">
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#1877f2', color: 'white' }}
                  title="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#E4405F', color: 'white' }}
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <a
                  href="https://wa.me/905336318361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#25D366', color: 'white' }}
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}