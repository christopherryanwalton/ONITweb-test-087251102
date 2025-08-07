import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Wifi, Globe, CheckCircle, ArrowRight, Wrench } from 'lucide-react';

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollingServices = [
    "Networks & WiFi Design",
    "Endpoint Management", 
    "Web Hosting Solutions",
    "Server Management",
    "Cybersecurity Protection",
    "Cloud Services",
    "IT Support & Maintenance"
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition(prev => prev - 1);
    }, 50);
    return () => clearInterval(scrollInterval);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Endpoint & Server Management",
      description: "Comprehensive endpoint management solutions to protect and optimize your business devices for maximum productivity and security.",
      tech: "Antivirus • Firewall • Threat Detection",
      color: "blue"
    },
    {
      icon: Server,
      title: "Structured Cabling",
      description: "Professional technicians to install and terminate Fiber and Category Cable connections for reliable network infrastructure.",
      tech: "Fiber • Category Cable • Network Infrastructure",
      color: "emerald"
    },
    {
      icon: Wifi,
      title: "Network & WiFi Design",
      description: "Custom network architecture and reliable WiFi solutions tailored to your business needs.",
      tech: "Cisco • Ubiquiti • SonicWall",
      color: "indigo"
    },
    {
      icon: Globe,
      title: "Web Hosting",
      description: "Reliable, secure web hosting solutions to keep your online presence running smoothly.",
      tech: "cPanel • SSL • Daily Backups",
      color: "teal"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="overflow-hidden mb-4 sm:mb-6">
              <div 
                className="flex space-x-2 sm:space-x-3 md:space-x-4 transition-transform duration-75 ease-linear"
                style={{ 
                  transform: `translateX(${scrollPosition}px)`,
                  width: 'calc(200% + 100px)'
                }}
              >
                {[...scrollingServices, ...scrollingServices, ...scrollingServices].map((service, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center bg-white border border-blue-200 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-sm whitespace-nowrap flex-shrink-0"
                  >
                    <Wrench className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-2 sm:mr-3" />
                    <span className="text-xs sm:text-sm text-blue-700 font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Reliable IT Solutions for
              <span className="text-blue-700 block">Growing Businesses</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed">
              We provide honest, straightforward IT services without the enterprise price tag. 
              From server management to network security, we keep your technology running so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 md:py-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto border border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-3 md:py-4 rounded-lg font-medium hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 text-sm sm:text-base"
              >
                Learn About Us
              </Link>
            </div>

            {/* Quick stats */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                <span className="text-xs sm:text-sm font-medium text-slate-700">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mb-12 sm:mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Complete IT Management
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              We handle the technical stuff so you don't have to. Our comprehensive services 
              keep your business running smoothly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600 border-blue-200 hover:border-blue-600',
                emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-600 border-emerald-200 hover:border-emerald-600',
                indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-600 border-indigo-200 hover:border-indigo-600',
                teal: 'bg-teal-100 text-teal-600 hover:bg-teal-600 border-teal-200 hover:border-teal-600'
              };
              
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[service.color]} border rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:text-white transition-all duration-300`}>
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {service.tech}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Why Local Businesses Trust Us
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Honest Pricing",
                    description: "No hidden fees or surprise charges. We quote what we charge.",
                    icon: "💰",
                    color: "emerald"
                  },
                  {
                    title: "Quick Response", 
                    description: "When your system goes down, we're there fast. Usually within hours.",
                    icon: "⚡",
                    color: "blue"
                  },
                  {
                    title: "Real Expertise",
                    description: "Our team has decades of hands-on experience with business IT.",
                    icon: "🔧",
                    color: "indigo"
                  },
                  {
                    title: "Local Support",
                    description: "We're in your neighborhood and understand local business needs.",
                    icon: "🏢",
                    color: "teal"
                  }
                ].map((point, index) => {
                  const colorClasses = {
                    emerald: 'border-emerald-200 bg-emerald-100',
                    blue: 'border-blue-200 bg-blue-100',
                    indigo: 'border-indigo-200 bg-indigo-100',
                    teal: 'border-teal-200 bg-teal-100'
                  };
                  
                  return (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[point.color]} border rounded-lg flex items-center justify-center`}>
                        <span className="text-base sm:text-lg">{point.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1 text-base sm:text-lg">{point.title}</h3>
                        <p className="text-slate-600 text-sm sm:text-base">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="mt-6 sm:mt-8 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  Get Started Today
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Free consultation to assess your current IT setup and identify areas for improvement.
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {[
                    { text: "Complete network assessment", color: "blue" },
                    { text: "Security vulnerability check", color: "emerald" }, 
                    { text: "Cost-saving recommendations", color: "indigo" },
                    { text: "No-obligation consultation", color: "teal" }
                  ].map((item, index) => {
                    const colorClasses = {
                      blue: 'text-blue-600',
                      emerald: 'text-emerald-600',
                      indigo: 'text-indigo-600',
                      teal: 'text-teal-600'
                    };
                    
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${colorClasses[item.color]} flex-shrink-0`} />
                        <span className="text-slate-700 text-sm sm:text-base">{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-blue-800">
                    <strong className="text-blue-900">Typical response time:</strong> Within 4 hours during business hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
