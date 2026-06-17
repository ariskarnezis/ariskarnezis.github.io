import { GraduationCap, Award, BookOpen, Target, MapPin, Calendar, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SEOHelmet } from "./SEOHelmet";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-[#2d2d2d] dark:to-[#2d2d2d] pt-16">
      <SEOHelmet
        title="About | Research Associate in Robot Navigation"
        description="Learn about my journey through mathematics, physics, and research in wave scattering, random media, and intelligent systems. Research Associate at the University of Sheffield."
      />
      <div className="container mx-auto px-6 py-24 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-6 text-slate-900 dark:text-white">About Me</h1>
            <p className="text-xl text-slate-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
              A journey through mathematics, physics, and the pursuit of understanding complex systems
            </p>
          </div>

          {/* Biography */}
          <section className="mb-16">
            <Card className="bg-white dark:bg-[#3a3a3a]">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-2xl dark:text-white">
                  <BookOpen className="w-6 h-6 text-[#2b3137] dark:text-white" />
                  Biography
                </CardTitle>
                <Button
                  asChild
                  className="bg-[#d9653a] hover:bg-[#c25532] text-white"
                >
                  <a
                    href="https://drive.proton.me/urls/P1DGV8A3CR#PtoLC3qcshda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-white text-justify leading-relaxed">
                <p>
                  I'm a Research Associate specializing in applied mathematics, with a focus on modeling complex physical 
                  and engineered systems. My work bridges the gap between theoretical mathematics, physics, and practical 
                  applications in intelligent systems.
                </p>
                <p>
                  My research journey has taken me from understanding the fundamental properties of wave propagation 
                  in disordered materials to developing probabilistic and machine learning approaches for real-world engineering problems. 
                  I'm particularly interested in how mathematical models can illuminate the behavior of systems that are 
                  too complex to understand through intuition alone.
                </p>
                <p>
                  Beyond research, I'm passionate about science communication and making complex ideas accessible. 
                  Through my blog and academic writing, I aim to share not just the results of research, but the process - the 
                  struggles, breakthroughs, and human side of doing science.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-[#2b3137] dark:text-white" />
              Education
            </h2>
            <div className="space-y-6">
              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">PhD in Applied & Computational Mathematics</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Sheffield, UK
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        September 2019 - August 2023
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        <strong>Dynamics Research Group</strong>
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        Thesis: <em>"Waves in disordered particulate materials: transmission and inter-particle correlations"</em>
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Supervisors: Dr Artur Gower, Dr Anton Krynkin
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-green-700 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">M.Sc. Quantum Technology</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Sussex, UK
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        September 2018 - August 2019
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        <strong>EPic Laboratory</strong>
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        Thesis: <em>"THz superfocusing in complex scattering media"</em>
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Supervisors: Prof. Marco Peccianti, Dr Alessia Pasquazi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-700 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">B.Sc. Mathematics & Applied Mathematics</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        University of Crete, Greece
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4" />
                        September 2012 - March 2018
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        <strong>Specialisation in Sciences</strong>
                      </p>
                      <p className="text-slate-700 dark:text-white mb-2">
                        Thesis: <em>"Quantum Hydrodynamics near caustics"</em>
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Supervisor: Prof. George Makrakis
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Research Interests */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-8 h-8 text-[#2b3137] dark:text-white" />
              Research Interests
            </h2>
            <Card className="bg-white dark:bg-[#3a3a3a]">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Wave Mechanics & Acoustics</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Wave propagation and scattering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Acoustics in complex media</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Random media and material characterisation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Sensor Technologies</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Optical and quantum technologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Acoustic sensing and measurement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>LiDAR and computer vision</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Signal Processing & Optimization</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Signal processing techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Non-linear optimisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Data analysis and visualisation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Robotics & Localisation</h3>
                    <ul className="space-y-2 text-slate-700 dark:text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Simultaneous Localization and Mapping (SLAM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Robot navigation in confined spaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d9653a] mt-1">•</span>
                        <span>Multi-sensor data fusion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Awards & Honors */}
          <section className="mb-16">
            <h2 className="text-3xl mb-8 text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-8 h-8 text-[#2b3137] dark:text-white" />
              Awards & Honors
            </h2>
            <div className="space-y-4">
              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                        Best Mathematical Insight - Scattering Hackathon
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">
                        Winter School on Mathematical Theory and Applications of Multiple Wave Scattering. Issued by Isaac Newton Institute for Mathematical Sciences, University of Cambridge.
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                        PhD Scholarship
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">
                        The University of Sheffield - Full funding with additional travel and research support
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">September 2019 - August 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-[#3a3a3a] hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                        Travel Bursaries
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">
                        Isaac Newton Institute for Mathematical Sciences (£1.1k), UK Acoustics Network (£1.3k), EPSRC Centre for Doctoral Training (£500), Global Opportunities 2020 (£500)
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">2019 - 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Professional Timeline */}
          <section>
            <h2 className="text-3xl mb-8 text-slate-900 dark:text-white">Professional Timeline</h2>
            <div className="relative border-l-2 border-slate-300 dark:border-slate-600 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">January 2025 - Present</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Associate</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield - Department of Electrical and Electronic Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Developing advanced multi-sensor fusion algorithms integrating acoustic, optical, and LiDAR data for autonomous robot navigation, precise localization, and real-time mapping in buried pipe environments.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">June 2024 - December 2024</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Associate</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield - Department of Electrical and Electronic Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Collaborated with Opteran Technologies to advance autonomous robot navigation inside buried pipes.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">April 2024 - May 2024</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Assistant</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield - Department of Automatic Control and Systems Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Implemented computer vision and localization techniques for robot navigation inside pipes using optical video data.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">January 2024 - May 2024</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Assistant</h3>
                <p className="text-slate-700 dark:text-white">
                  Pipebots
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Developed software employing LiDAR technology for the detection of structural features and blockages in buried pipes.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">September 2019 - August 2023</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">PhD Researcher</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield - Department of Mechanical Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Focused on wave propagation in disordered particulate materials with applications to inverse problems.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">June 2023 - August 2023</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Assistant</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Built a custom robot for acoustic sensing and measurement, developed software for real-time acoustic sensing and object detection.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-orange-600 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">February 2022 - March 2022</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Research Assistant</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield - Department of Mechanical Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Optimised the Sound Impedance Tube experiment and determined airflow resistance of porous materials.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">July 2021 - August 2021</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Hardware Engineer</h3>
                <p className="text-slate-700 dark:text-white">
                  UK Acoustics Network
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Designed and built an acoustic levitator employing ultrasonic technology to levitate small objects.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-pink-600 rounded-full border-4 border-white dark:border-[#2d2d2d]"></div>
                <div className="mb-1 text-slate-500 dark:text-slate-400">February 2020 - June 2023</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Graduate Teaching Assistant</h3>
                <p className="text-slate-700 dark:text-white">
                  University of Sheffield
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Led problem-solving classes on dynamics of aerospace structures & machines, provided support for dynamics courses, demonstrated MATLAB expertise in fluid dynamics and thermodynamics courses.
                </p>
              </div>

            </div>
          </section>
        </div>
    </div>
  );
}