import React from 'react';
import { Link } from 'react-router-dom';
import { Users, HardDrive } from 'lucide-react';
import config from '../config';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About {config.siteName}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're a local IT services company focused on helping small and medium businesses 
              get the most out of their technology investments without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Started in 2018, {config.siteName} was founded on a simple premise: local businesses 
                  deserve enterprise-quality IT support without the enterprise price tag.
                </p>
                <p>
                  We've worked with everyone from 5-person accounting firms to 50-person manufacturing 
                  companies. What we've learned is that every business has unique needs, but they all 
                  want the same thing: technology that just works.
                </p>
                <p>
                  Our approach is straightforward: listen first, recommend only what you need, 
                  and be there when things go wrong. No overselling, no confusing technical jargon, 
                  just honest IT support.
                </p>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Local</div>
                    <div className="text-sm text-slate-600">Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime Average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                    <div className="text-sm text-slate-600">Emergency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">Fast</div>
                    <div className="text-sm text-slate-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Work</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every business is different, but our process stays the same: understand your needs, 
              implement the right solutions, and provide ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Listen & Assess",
                description: "We start by understanding your business, current setup, pain points, and goals. No assumptions, just questions.",
                color: "blue"
              },
              {
                step: "02", 
                title: "Design & Quote",
                description: "We design solutions that fit your needs and budget. Everything is clearly explained with transparent pricing.",
                color: "emerald"
              },
              {
                step: "03",
                title: "Implement & Support",
                description: "We handle the implementation with minimal disruption, then provide ongoing support to keep things running.",
                color: "indigo"
              }
            ].map((item, index) => {
              const colorClasses = {
                blue: 'bg-blue-600 border-blue-600',
                emerald: 'bg-emerald-600 border-emerald-600',
                indigo: 'bg-indigo-600 border-indigo-600'
              };
              
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${colorClasses[item.color]} text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {config.features.showTeamProfiles && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet the Team</h2>
              <p className="text-lg text-slate-600">
                The people behind your IT solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: 1, color: 'blue' },
                { id: 2, color: 'emerald' },
                { id: 3, color: 'indigo' }
              ].map((member) => {
                const colorClasses = {
                  blue: 'bg-blue-100 border-blue-200',
                  emerald: 'bg-emerald-100 border-emerald-200',
                  indigo: 'bg-indigo-100 border-indigo-200'
                };
                
                return (
                  <div key={member.id} className="text-center">
                    <div className={`w-48 h-48 ${colorClasses[member.color]} border rounded-xl mx-auto mb-6 flex items-center justify-center`}>
                      <Users className="h-16 w-16 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Team Member {member.id}</h3>
                    <p className="text-slate-600 mb-2 font-medium">Position Title</p>
                    <p className="text-sm text-slate-500">
                      Brief bio and expertise description will go here when team profiles are added.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Notice */}
      {!config.features.showTeamProfiles && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                <HardDrive className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-medium">Team profiles coming soon</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutPage;
