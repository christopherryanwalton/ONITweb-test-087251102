import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Phone, Mail, MapPin } from 'lucide-react';
import config from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">ON</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">{config.siteName}</span>
                <span className="text-xs text-blue-400 leading-none font-medium">{config.siteTagline}</span>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Professional IT solutions for small and medium businesses. 
              Reliable, cost-effective, and locally supported.
            </p>
          </div>
          
          <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
            <h3 className="font-semibold mb-4 flex items-center text-white">
              <Server className="h-4 w-4 mr-2 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Managed IT Services
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Endpoint & Server Management
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                Structured Cabling
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                Network & WiFi Design
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Web Hosting
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
            <h3 className="font-semibold mb-4 flex items-center text-white">
              <Phone className="h-4 w-4 mr-2 text-emerald-400" />
              Contact
            </h3>
            <div className="space-y-3 text-slate-300">
              <p className="hover:text-white transition-colors cursor-pointer flex items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                {config.contact.email}
              </p>
              <p className="hover:text-white transition-colors cursor-pointer flex items-center">
                <Phone className="h-4 w-4 mr-3 text-emerald-400" />
                {config.contact.phone}
              </p>
              <div className="hover:text-white transition-colors cursor-pointer flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  {config.contact.address.split(',').map((line, i) => (
                    <div key={i}>{line.trim()}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {config.siteName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-slate-500 text-xs">Powered by local expertise</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
