import image_fbfcc43a2fac6f4a1b50be0289404c517d4a13a1 from 'figma:asset/fbfcc43a2fac6f4a1b50be0289404c517d4a13a1.png';
import image_a86bcafa8967990d6d5c8af3b1e5208ccbacc8e8 from 'figma:asset/a86bcafa8967990d6d5c8af3b1e5208ccbacc8e8.png';
import image_23e2f492ee57e35c91d8f083c0070b02efa3092a from 'figma:asset/23e2f492ee57e35c91d8f083c0070b02efa3092a.png';
import { Button } from "./ui/button";
import { ArrowRight, Mail, Linkedin, Github, Download, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-[#2d2d2d] dark:to-[#3a3a3a]">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,#2d2d2d,rgba(45,45,45,0.6))] -z-10" />
      
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#fff4ed] dark:bg-[#3a2a1a] text-[#d9653a] dark:text-[#d9653a] rounded-full">
              Research Associate
            </div>
            
            <h1 className="text-5xl md:text-6xl tracking-tight text-slate-900 dark:text-white font-bold font-[Manrope] font-normal">
              Aris Karnezis
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-white leading-relaxed font-[Manrope] text-justify">I use applied mathematics to model complex physical and engineered systems, bridging mathematics, physics, programming and intelligent systems.</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 dark:border-white/20" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 dark:border-white/20" asChild>
                <a href="https://drive.proton.me/urls/P1DGV8A3CR#PtoLC3qcshda" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/aris-karnezis-595777b5/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-[#3a3a3a] dark:border dark:border-white/20 rounded-lg text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/akarnezis" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-[#3a3a3a] dark:border dark:border-white/20 rounded-lg text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://scholar.google.com/citations?user=E3y4MmEAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-[#3a3a3a] dark:border dark:border-white/20 rounded-lg text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl dark:shadow-orange-900/20">
              <img 
                src={image_fbfcc43a2fac6f4a1b50be0289404c517d4a13a1}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200 dark:bg-orange-900 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}