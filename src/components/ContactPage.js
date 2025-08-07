import React, { useState } from 'react';
import { Mail, Phone, MapPin, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
import config from '../config';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    setErrors({});
    setSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to improve your IT setup? Let's talk about your needs and how we can help 
              your business run more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      placeholder="Your full name"
                      disabled={submitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      placeholder="your@email.com"
                      disabled={submitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company"
                      disabled={submitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How can we help you? *
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                    placeholder="Tell us about your current IT challenges or what you're looking to improve..."
                    disabled={submitting}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting || !config.features.enableContactForm}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: [config.contact.email, config.contact.supportEmail],
                    color: "blue"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: [`Main: ${config.contact.phone}`, `Emergency: ${config.contact.emergencyPhone}`],
                    color: "emerald"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: config.contact.address.split(',').map(s => s.trim()),
                    color: "indigo"
                  }
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  const colorClasses = {
                    blue: 'bg-blue-100 text-blue-600 border-blue-200',
                    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
                    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
                  };
                  
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300">
                      <div className={`flex-shrink-0 w-12 h-12 ${colorClasses[contact.color]} border rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{contact.title}</h3>
                        {contact.content.map((item, i) => (
                          <p key={i} className="text-slate-600">{item}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-blue-600" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday:</span>
                    <span className="text-slate-900 font-medium">{config.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday:</span>
                    <span className="text-slate-900 font-medium">{config.businessHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday:</span>
                    <span className="text-slate-900 font-medium">{config.businessHours.sunday}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 mt-3">
                    <span className="text-slate-500 text-xs">24/7 emergency support available for managed clients</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-emerald-600" />
                  Response Guarantee
                </h3>
                <p className="text-blue-800 text-sm">
                  We respond to all inquiries within 4 business hours. Emergency issues 
                  are handled immediately during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
