import { Link } from "react-router";
import { User, FlaskConical, FileText, Mail, Mic, Github, Linkedin, GraduationCap, Download, Rss } from "lucide-react";
import {
  generateCombinedRSS,
  downloadRSSFeed,
} from '../utils/generateRSS';

export function Footer() {
  const handleLinkClick = (sectionId: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#2d2d2d] text-slate-400 py-12 border-t border-[#4a4a4a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg mb-4">Aris Karnezis</h3>
            <p className="text-sm leading-relaxed">
              Research Associate specialising in applied and computational mathematics, sensor technology
              and machine learning.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/akarnezis" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/aris-karnezis-595777b5/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://scholar.google.com/citations?user=E3y4MmEAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] text-slate-400 hover:text-white transition-colors" aria-label="Google Scholar">
                <GraduationCap size={16} />
              </a>
              <button
                onClick={() => {
                  const content = generateCombinedRSS();
                  downloadRSSFeed(content, 'feed.xml');
                }}
                className="p-2 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] text-slate-400 hover:text-white transition-colors"
                aria-label="RSS Feed"
              >
                <Rss size={16} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="flex items-center hover:text-white transition-colors">
                  <User className="inline-block mr-2" size={16} />
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('projects')}>
                  <FlaskConical className="inline-block mr-2" size={16} />
                  Research Projects
                </Link>
              </li>
              <li>
                <Link to="/#articles" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('articles')}>
                  <FileText className="inline-block mr-2" size={16} />
                  Explainable Science
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="flex items-center hover:text-white transition-colors" onClick={() => handleLinkClick('contact')}>
                  <Mail className="inline-block mr-2" size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://drive.proton.me/urls/6CRBEG1KEC#ib6PMVllbJP2" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <Mic className="inline-block mr-2" size={16} />
                  Talks
                </a>
              </li>
              <li>
                <a href="https://drive.proton.me/urls/P1DGV8A3CR#PtoLC3qcshda" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <Download className="inline-block mr-2" size={16} />
                  CV / Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#4a4a4a] text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aris Karnezis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}