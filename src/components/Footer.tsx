import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Logo from '../assets/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div>
            <Logo variant="white" className="mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">
              Créez, monétisez et développez votre contenu 10x plus rapidement avec notre plateforme IA de génération de leads.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-blue-400"><Mail className="w-4 h-4" /></span>
                <span>contact@monetizia.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-blue-400"><MapPin className="w-4 h-4" /></span>
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} MonétizIA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;