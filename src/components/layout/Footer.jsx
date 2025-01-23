import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center text-gray-700">
        <p className="text-lg font-semibold">Dr. Sacha Lapins</p>
        <p>School of Earth Sciences, University of Bristol</p>
        <p>
          <a
            href="mailto:sacha.lapins@bristol.ac.uk"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <Mail className="mr-1 h-4 w-4" /> sacha.lapins@bristol.ac.uk
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://scholar.google.com/citations?user=QDmoPEQAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Google Scholar <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sacha-lapins-a8b0a723b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">
        <p>© {new Date().getFullYear()} Sacha Lapins. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
