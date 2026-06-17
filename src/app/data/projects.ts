import image_5ff01893a6010adf700217a37c0896cc4086c419 from "figma:asset/5ff01893a6010adf700217a37c0896cc4086c419.png";
import image_b66c597ccbdbf818a8afd202d87aa1324dd24b2a from "figma:asset/b66c597ccbdbf818a8afd202d87aa1324dd24b2a.png";
import image_343284038a5b5fde8cc82a276654a0ed9514b4d2 from "figma:asset/343284038a5b5fde8cc82a276654a0ed9514b4d2.png";
import image_d2adf462f3c82e3d61dd40eb9b83f600ab657f6c from "figma:asset/d2adf462f3c82e3d61dd40eb9b83f600ab657f6c.png";
import image_ba1cbb963af7b26155194cf1ffe12f1dc47f805a from "figma:asset/ba1cbb963af7b26155194cf1ffe12f1dc47f805a.png";
import image_ed8b83a5d3520877a3c6541067cb8459b1a41222 from "figma:asset/ed8b83a5d3520877a3c6541067cb8459b1a41222.png";
// ============================================================================
// INSTRUCTIONS FOR ADDING YOUR OWN IMAGES AND PDFs
// ============================================================================
//
// CURRENT ENVIRONMENT (Figma Make):
// Since you're working in a text-based editor, use external URLs:
//
// 1. UPLOAD your PDF to Google Drive, Dropbox, or your university server
// 2. GET the public/shareable link
// 3. USE the URL directly in your project data below
//
// EXAMPLES:
// - Google Drive: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
// - University: "https://sheffield.ac.uk/~username/papers/my-paper.pdf"
// - Dropbox: "https://www.dropbox.com/s/xxxxx/file.pdf?dl=1"
//
// For detailed instructions, see: /HOW_TO_UPLOAD_FILES.md
//
// ============================================================================

export const projectsData = [
  {
    id: "average-transmitted-wave-particulate-materials",
    title: "The average transmitted wave in random particulate materials",
    description:
      "Provided the first clear numerical evidence that multiple effective wavenumbers exist in random particulate materials using high-fidelity Monte-Carlo simulations, and proved the Ewald–Oseen extinction theorem for particulate materials.",
    institution: "Department of Mechanical Engineering, University of Sheffield",
    period: "2023 – 2024",
    tags: [
      "Wave Scattering",
      "Multiple Scattering",
      "Particulate Materials",
      "Random Media",
      "Monte-Carlo Simulations",
    ],
    image: "https://images.unsplash.com/photo-1719836567950-b0127bbbdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXZlJTIwcGh5c2ljcyUyMG1hdGVyaWFscyUyMHNjaWVuY2V8ZW58MXx8fHwxNzcyNDgyMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pdfDownload: "https://iopscience.iop.org/article/10.1088/1367-2630/ad49c2",
    pdfTitle: "View Publication",
    status: "Completed",
    detailedDescription: `This research establishes rigorous numerical evidence for the existence of multiple effective wavenumbers in random particulate materials and provides a fundamental proof of the Ewald–Oseen extinction theorem in particulate media.

Using high-fidelity Monte-Carlo simulations, this work demonstrates that the incident wave is extinct at a distance equal to the particle correlation length, providing unprecedented insight into wave propagation through complex random media. The findings have significant implications for understanding wave behavior in materials ranging from composites to biological tissues.`,
    objectives: [
      "Provide the first clear numerical evidence for multiple effective wavenumbers in random particulate materials",
      "Prove the Ewald–Oseen extinction theorem for particulate materials through high-fidelity simulations",
      "Demonstrate that the incident wave is extinct at a distance equal to the particle correlation length",
      "Establish a rigorous computational framework for ensemble averaging in random media",
    ],
    methodology:
      "We employed high-fidelity Monte-Carlo simulations with ensemble averaging techniques to study wave propagation through random particulate materials. The simulations were designed to capture the statistical behavior of waves in materials with varying particle distributions and correlation lengths, enabling direct comparison with theoretical predictions of effective medium theory.",
    results: [
      "First clear numerical evidence for the existence of multiple effective wavenumbers in random particulate materials",
      "Rigorous proof of the Ewald–Oseen extinction theorem for particulate materials",
      "Quantitative demonstration that extinction occurs at the particle correlation length scale",
      "Established computational methods for accurate ensemble averaging in multiple scattering problems",
    ],
    publications: [
      "Published in New Journal of Physics (2024): 'The average transmitted wave in random particulate materials' — https://iopscience.iop.org/article/10.1088/1367-2630/ad49c2",
    ],
  },
    {
    id: "calculating-pair-correlations",
    title: "Calculating pair-correlations from random particle configurations",
    description:
      "Developed an efficient gradient-based optimization method to solve the realizability problem — recovering particle configurations from pair-correlations — and demonstrated how to calculate accurate pair-correlations from small particle configurations while avoiding boundary effects.",
    institution: "Department of Mechanical Engineering, University of Sheffield",
    period: "2023 – 2024",
    tags: [
      "Pair-correlations",
      "Isotropic Distributions",
      "Structure Factor",
      "Gradient Optimisation",
      
    ],
    image: "https://images.unsplash.com/photo-1633164530923-309fd4c02969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0aWNsZSUyMHBoeXNpY3MlMjBjb21wdXRhdGlvbmFsJTIwc2ltdWxhdGlvbiUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzMwOTMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pdfDownload: "https://drive.proton.me/urls/Q5V49PNSJ8#xfdedPjElG8Z",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This research addresses two fundamental problems in material science: calculating pair-correlations from particle configurations without boundary artifacts, and solving the inverse "realizability problem" of recovering particle configurations from specified pair-correlations.

Pair-correlation functions describe the probability of finding particle pairs at certain distances and are essential for predicting material properties such as wave propagation, thermal conductivity, and mechanical behavior. This work presents novel computational methods that significantly improve efficiency compared to traditional approaches, enabling the design of materials with tailored structural properties.`,
    objectives: [
      "Develop methods to calculate pair-correlations from small particle configurations while avoiding boundary effects that typically require very large configurations",
      "Solve the realizability problem by recovering particle configurations from specified pair-correlations or structure factors",
      "Implement gradient-based optimization methods that outperform traditional non-gradient approaches like Genetic Algorithms and Simulated Annealing",
      "Provide a framework for designing particulate materials with specific properties by controlling pair-correlations",
      "Establish necessary conditions and restrictions for physically realizable pair-correlations and structure factors",
    ],
    methodology:
      "The research introduces a two-region approach where particles are placed in a larger region R2 while pair-correlations are calculated from an inner region R1, effectively eliminating boundary effects even for small configurations. For the inverse problem, the method optimizes the structure factor (a smooth function of particle positions) rather than the discontinuous pair-correlation function, enabling efficient gradient-based optimization using Limited-memory BFGS (L-BFGS). The approach employs a two-step process: a global optimization step that allows particle overlaps to explore the parameter space broadly, followed by a local refinement step with a penalty function that prevents overlaps and achieves high precision in matching target structure factors.",
    results: [
      "Derived explicit formulas for calculating pair-correlations from finite particle configurations in both 2D and 3D that eliminate boundary artifacts without requiring infinitely large systems",
      "Developed analytical expressions for the gradient of the structure factor with respect to particle positions, enabling efficient gradient-based optimization",
      "Successfully demonstrated the method by recovering particle configurations matching Percus-Yevick pair-correlations for hard discs at 15% volume fraction",
      "Showed that the gradient-based approach using structure factors converges more efficiently than traditional Monte-Carlo methods that use non-gradient optimization",
      "Established a computational framework applicable to material design problems ranging from composites to neutron star crusts, with applications in controlling wave propagation, thermal properties, and mechanical behavior",
    ],
    publications: [
      "Published on arXiv (2024): 'Calculating pair-correlations from random particle configurations' — https://drive.proton.me/urls/Q5V49PNSJ8#xfdedPjElG8Z",
    ],
  },
  {
    id: "effective-waves-in-random-materials",
    title: "Effective waves in random particulate materials",
    description:
      "Investigated how waves propagate through random particulate media by analysing reflection coefficients and effective wavenumbers in three dimensions.",
    institution: "Department of Mechanical Engineering, University of Sheffield",
    period: "2022 – 2023",
    tags: [
      "Scattering Theory",
      "Reflection Coefficients",
      "Effective waves",
    ],
    image: image_ed8b83a5d3520877a3c6541067cb8459b1a41222,
    pdfDownload:
      "https://drive.proton.me/urls/EXJ6P301N0#Nkl9ifU6V9Oe",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This research project focuses on understanding how acoustic and electromagnetic waves interact with random particulate materials. The work combines analytical methods with numerical simulations to characterise wave propagation in complex heterogeneous media.

By analysing reflection coefficients and deriving effective wavenumbers, this research provides fundamental insights into wave behavior in random materials, with applications ranging from materials characterisation to seismic analysis.`,
    objectives: [
      "Quantify how reflection coefficients depend on particle volume fraction and material contrast for random particulate media containing sound-soft and sound-hard scatterers",
      "Compare the Dominant Effective Wave and All-wavenumbers approaches for computing the average transmitted wave and its associated reflection coefficients, and identify regimes where a single effective wavenumber is sufficient",
      "Extend the analytical framework of Gower et al. to three spatial dimensions by deriving asymptotic formulas for an infinite set of complex effective wavenumbers and validating these against numerical solutions",
      "Assess the impact of weakly attenuating effective wavenumbers on transmission and establish a foundation for future inversion approaches that recover particle statistics (e.g., size and concentration) from reflection data",
    ],
    methodology:
      "We model wave propagation in random particulate media using an ensemble-averaged multiple-scattering framework, in which the discrete particles are replaced by effective waves with complex wavenumbers. Reflection coefficients are computed in two ways: (i) using a single dominant effective wavenumber and (ii) using a finite collection of effective wavenumbers obtained from a dispersion relation, allowing a direct comparison between reduced and fully multimode descriptions. The analysis is carried out for both sound-soft and sound-hard particles across a range of volume fractions, and is complemented by an asymptotic study of three-dimensional effective wavenumbers and their numerical validation.",
    results: [
      "Successfully characterised reflection behavior across different particle volume fractions",
      "Identified distinct regimes where single vs. multiple effective wavenumbers are required",
      "Derived and validated 3D asymptotic formulas for effective wavenumbers",
      "Established theoretical framework for inverse problems in particle characterisation",
    ],
    additionalImages: [
      image_ba1cbb963af7b26155194cf1ffe12f1dc47f805a,
      image_d2adf462f3c82e3d61dd40eb9b83f600ab657f6c,
    ],
    publications: [
      "This work is part of the author's doctoral research and is included in the PhD thesis submitted to University of Sheffield.",
    ],
  },
  {
    id: "optimising-monte-carlo",
    title:
      "Optimising Monte-Carlo accuracy in simulations of random particle configurations",
    description:
      "Studied how to improve the numerical accuracy of Monte Carlo simulations of random particle configurations, with a focus on pair-correlation functions and boundary effects in finite domains.",
    institution: "Department of Mechanical Engineering, University of Sheffield",
    period: "2022 - 2023",
    tags: [
      "Monte-Carlo simulations",
      "Pair-correlations",
      "Random media",
    ],
    image: image_343284038a5b5fde8cc82a276654a0ed9514b4d2,
    pdfDownload:
      "https://drive.proton.me/urls/5RHV6N3C0R#EdglkLvMlyCX",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This project investigates how to obtain accurate Monte Carlo simulations of random particulate media, with a particular emphasis on the pair-correlation function and the impact of finite-domain effects.
      
    We first clarify how standard quantities such as particle number density and volume fraction behave in a finite region, distinguishing between the region that contains all particle centres and the region that contains the full particles. This makes it clear why simple infinite-medium relationships break down when boundaries are present.
      
    Building on this, we compare two Monte Carlo particle-placement strategies. The bounded-sphere method places particles directly into a finite sphere and rejects overlaps, but leads to biased particle distributions that cluster near the boundary. In contrast, the cookie-cutter method draws particles in a larger region and then extracts a smaller subregion away from the outer boundary, producing a configuration that more closely resembles an infinite homogeneous medium.
      
    Using these simulated configurations, we compute numerical pair-correlation functions and compare them to analytical predictions obtained from the Percus–Yevick (PY) theory. Interestingly, we find that using the same nominal number density in both approaches does not yield agreement: the PY solution systematically overestimates the pair-correlation. By introducing an adjusted effective number density, we recover good agreement between the Monte Carlo cookie-cutter results and the PY predictions. This highlights both the importance of careful Monte Carlo design and the subtle role of finite-size and boundary effects in random media simulations.`,

    objectives: [
      "Clarify how particle number density and volume fraction should be defined and interpreted in finite regions for random particle configurations",
      "Compare the bounded-sphere and cookie-cutter Monte Carlo placement methods and quantify their impact on particle homogeneity and boundary bias",
      "Compute numerical pair-correlation functions from Monte Carlo simulations and assess how accurately they approximate an infinite medium",
      "Compare Monte Carlo pair-correlations with the Percus–Yevick analytical approximation and identify the source of discrepancies",
      "Determine an effective number density correction that brings the Percus–Yevick predictions into close agreement with cookie-cutter Monte Carlo simulations",
    ],
    methodology: `I performed Monte Carlo simulations of identical, non-overlapping spherical particles distributed in a finite spherical region. Two placement strategies were implemented:
    A "bounded-sphere" method, which places particle centres directly in a finite ball and rejects any overlapping particles, and a "cookie-cutter" method, which first generates a configuration in a larger region and then extracts an inner subregion that is at least one particle radius away from the outer boundary.
    
    For each configuration, I distinguished between the region that contains all particle centres, and the region that contains the full particles.
    
    This allowed me to define consistent measures of number density and volume fractions for finite domains.
    
    From these simulated configurations, I estimated the pair-correlation function using radial histograms (and, where appropriate, expansions in Legendre polynomials) and studied how it changes with distance. By varying the size of the larger region, the target number density, and the particle volume fraction, I quantified boundary effects and finite-size biases.
    
    Finally, I generated analytical Percus–Yevick (PY) pair-correlation curves for hard spheres at different effective number densities and systematically compared them with the Monte Carlo results to identify the effective density that gives the best agreement.`,
    results: [
      "Showed that standard infinite-medium relationships between number density and volume fraction can deviate by more than 10% in finite regions due to boundary effects.",
      "Demonstrated that the bounded-sphere Monte Carlo method produces particle configurations biased towards the boundary, whereas the cookie-cutter method yields a much more homogeneous distribution of particle centres.",
      "Quantified how the measured number density nR and pair-correlation depend on the size of the larger simulation region when using the cookie-cutter method.",
      "Computed numerical pair-correlation functions using both binned histograms and Legendre polynomial expansions, highlighting the trade-offs between noise and smoothness.",
      "Found that the Percus–Yevick approximation does not match cookie-cutter Monte Carlo results at the same nominal number density, but that excellent agreement can be achieved by introducing a reduced effective number density.",
      "Provided practical guidance for choosing simulation parameters (region size, target density, and placement strategy) to optimise Monte Carlo accuracy for random particle configurations.",
    ],
    additionalImages: [
      image_b66c597ccbdbf818a8afd202d87aa1324dd24b2a,
      image_5ff01893a6010adf700217a37c0896cc4086c419,
    ],
    publications: [
      "This work is part of the author's doctoral research and is included in the PhD thesis submitted to University of Sheffield.",
    ],
  },
  {
    id: "lidar-imu-pipe-material",
    title: "Probabilistic pipe material classification via LiDAR-IMU data fusion",
    description:
      "Developed a probabilistic Bayesian framework that fuses LiDAR intensity measurements with IMU-based joint detection to classify clay, concrete, and plastic pipes in underground sewer networks, achieving over 86% classification confidence across all materials.",
    institution: "School of Electrical and Electronic Engineering, University of Sheffield",
    period: "2026",
    tags: [
      "LiDAR",
      "IMU",
      "Bayesian Inference",
      "Data Fusion",
      "Pipe Inspection",
    ],
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHNlbnNvciUyMGZ1c2lvbiUyMGRhdGF8ZW58MXx8fHwxNzMzMDk0MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pdfDownload: "https://drive.proton.me/urls/3B0F0TV96R#kBlmEBfprglS",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This research addresses a fundamental challenge in underground infrastructure management: reliable identification of pipe material type. In many sewer systems, pipes have been installed, repaired, and extended over decades, creating heterogeneous networks containing vitrified clay, concrete, and plastic pipes. Accurate material identification is essential for asset management, informing rehabilitation strategy selection, estimating remaining service life, and prioritizing maintenance budgets.

The work presents a probabilistic framework that combines two complementary sensing modalities already present on inspection robots. LiDAR intensity measurements capture optical reflectance characteristics at infrared wavelengths, while IMU sensors detect mechanical perturbations as the robot crosses pipe joints. By fusing these independent information sources through Bayesian inference, the system achieves robust classification without requiring additional hardware or dedicated inspection passes.`,
    objectives: [
      "Develop a LiDAR intensity normalisation approach that accounts for range and scan angle effects in cylindrical pipe geometry, producing material-sensitive residuals",
      "Create an IMU-based method that detects pipe joints and interprets inter-joint distances as evidence for material type, accounting for missed detections",
      "Design a unified Bayesian framework that combines both modalities through log-domain fusion with adjustable weighting",
      "Validate the approach across single-material sewer networks, demonstrating that fusion improves classification confidence relative to either modality alone",
      "Establish a probabilistic classification system that produces calibrated posterior probabilities without requiring additional sensing hardware beyond standard inspection payloads",
    ],
    methodology:
      "The framework uses a shared Bayesian formulation applied to both sensing modalities. For LiDAR, raw intensity measurements are normalised using a bivariate polynomial model fitted across all materials to remove geometric effects of range and scan angle. The resulting residuals are material-sensitive, and their distributions are captured using kernel density estimation (KDE). For IMU, mechanical perturbations in the pitch axis are detected at pipe joints, and the distances between consecutive joints are compared with expected segment lengths for each material. A mixture model allows long gaps to represent missed joints when they are close to integer multiples of expected segment length, while unreliable gaps are down-weighted. Both modalities share uniform priors and are combined in the log domain using mean log-likelihoods with an adjustable modality weight, producing calibrated posterior probabilities over material classes.",
    results: [
      "Developed a geometric normalisation method for LiDAR intensity that produces material-sensitive residuals suited to cylindrical pipe environments",
      "Created a probabilistic joint-distance model that gracefully handles missed detections and unreliable measurements through a mixture framework",
      "Achieved 93.5% posterior confidence for concrete classification, improving from 59.9% (LiDAR alone) and 73.8% (IMU alone)",
      "Achieved 93.5% posterior confidence for clay classification, improving from 49.4% (LiDAR alone) and 86.5% (IMU alone)",
      "Achieved 86.2% posterior confidence for plastic classification, improving from 58.3% (LiDAR alone) and 69.0% (IMU alone)",
      "Demonstrated that fusion increases classification confidence relative to either single modality in all test cases, resolving ambiguities through complementary failure modes",
      "Established a framework that leverages existing inspection robot sensors without requiring additional hardware modifications",
    ],
    publications: [
      "Published (2026): 'Probabilistic Pipe Material Classification via LiDAR-IMU Data Fusion' https://drive.proton.me/urls/3B0F0TV96R#kBlmEBfprglS",
    ],
  },
  {
    id: "lidar-pipe-detection",
    title: "Feature detection and classification in buried pipes using LiDAR technology",
    description:
      "Developed a low-cost LiDAR-based system for real-time detection and classification of structural features in buried sewer pipes, achieving high-accuracy identification of joints, manholes, and blockages for autonomous robotic inspection.",
    institution: "School of Electrical and Electronic Engineering, University of Sheffield",
    period: "2024 – 2025",
    tags: [
      "LiDAR",
      "Feature Detection",
      "Decision Making",
    ],
    image: "https://images.unsplash.com/photo-1701111759812-b9a2da549c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGxpZGFyJTIwc2Vuc29yJTIwaW5mcmFzdHJ1Y3R1cmUlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc3MzA5MzYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    pdfDownload: "https://drive.proton.me/urls/F25QXSGCTW#nWbPHHkmniPa",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This research presents a novel approach to autonomous inspection of buried sewer and wastewater infrastructure using low-cost LiDAR technology. With 0.8 million kilometers of buried pipes in the UK alone, effective inspection is essential but currently relies on expensive, manually-controlled tethered crawlers.

This work addresses the critical challenge of enabling autonomous robotic navigation in confined pipe environments by developing a real-time system that accurately detects and classifies structural features such as pipe joints, manholes, and blockages. The approach combines efficient data processing with a lightweight decision algorithm specifically designed for the computational and power constraints of untethered robotic platforms.`,
    objectives: [
      "Develop a low-cost LiDAR sensing system suitable for confined pipe environments with minimal lighting and limited space for sensors",
      "Create a computationally efficient, real-time detection algorithm capable of running onboard resource-constrained robots",
      "Accurately classify critical structural features including pipe walls, joints between pipe segments, manhole openings, and blockages",
      "Achieve classification performance comparable to computationally intensive machine learning methods while maintaining real-time operation",
      "Validate the system's performance using ground-truth annotations collected from various pipe materials and environments",
    ],
    methodology:
      "The system uses an Okdo LiDAR Module (LD06) mounted at a 30-degree angle on a robotic platform, positioned 150mm above ground level. The sensor captures full circular scans, but processing focuses on three 60-degree regions (front, left, right) where features are most likely to appear. Raw LiDAR data undergoes filtering and geometric projection into Cartesian coordinates. A fast two-stage decision system applies DBSCAN clustering to identify spatially coherent point groups in each region, then computes average horizontal distances to classify features. Stage 1 selects the nearest cluster based on distance separation, while Stage 2 applies threshold-based classification: pipe walls fall within the nominal pipe radius, joints appear slightly beyond, and manholes are detected at greater distances. A semi-automated labelling system generates ground truth annotations by visualizing scans in polar form, creating a balanced dataset of several hundred features across multiple pipe materials for validation against both the threshold-based system and a Random Forest benchmark classifier.",
    results: [
      "Achieved 96.9% recall for manhole detection and 95.5% recall for joint detection using the fast two-stage decision system, matching the performance of a Random Forest classifier (97% and 93% recall respectively)",
      "Successfully demonstrated real-time 3D reconstruction of an 11.5-meter pipe network using LiDAR scans aligned with wheel odometry",
      "Validated distance threshold separation between pipe features through Gaussian distribution analysis, confirming clear distinction between pipe walls, joints, and manholes",
      "Developed a computationally lightweight algorithm suitable for onboard processing on low-powered robots with limited computational resources",
      "Created a robust semi-automated ground truth labelling system enabling systematic validation across diverse pipe materials and environments",
      "Established a framework for future expansion to multiclass classification including blockage detection and various feature types",
    ],
    publications: [
      "Published in CCWI 2025 Proceedings (2025): 'Feature detection and classification in buried pipes using LiDAR technology' — https://drive.proton.me/urls/F25QXSGCTW#nWbPHHkmniPa",
    ],
  },
  {
    id: "thz-superfocusing",
    title: "Terahertz Superfocusing in Complex Scattering Media",
    description:
      "Used THz time-domain wavefront control to achieve spatio-temporal superfocusing through scattering media.",
    institution: "Department of Physics & Astronomy, University of Sussex",
    period: "2018-2019",
    tags: ["terahertz (THz)", "Complex imaging", "Wavefront shaping", "Genetic algorithm"],
    pdfDownload: "https://drive.proton.me/urls/DSTBWRN4TC#oMdvHHGANdaj",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `This work developed an experimental-driven theoretical framework for complex imaging at terahertz wavelengths and proposes an iterative strategy to achieve spatio-temporal "superfocusing" through strongly scattering media.

The thesis motivates THz complex imaging via the idea that scattering is "complex" rather than information-destroying, and leverages THz time-domain detection (amplitude + phase access) together with wavefront control concepts (transmission matrix / time-reversal style reasoning).`,
    objectives: [
      "Introduce the physics of terahertz radiation and its advantages for sensing/imaging.",
      "Build the theory of imaging and focusing through complex scattering media (speckles, transmission matrix, wavefront shaping)",
      "Formulate a terahertz-specific scheme for space–time superfocusing through multiple scattering media",
      "Evaluate the approach with numerical simulations of wavefront optimization and pulse propagation through disorder.",
    ],
    methodology:
      "The thesis combines: (i) terahertz generation/detection concepts from THz time-domain spectroscopy (optical rectification + electro-optic sampling), (ii) the transmission-matrix description of scattering media (frequency-dependent TM and its time-domain impulse response), and (iii) iterative wavefront optimization using a genetic algorithm to maximize intensity at a target output mode, enabling spatio-temporal control for broadband pulses.",
    results: [
      "A terahertz superfocusing workflow is formulated where the scattering system effectively acts as a lens once the incident pattern is optimized using feedback from a point detector (in analogy to optical focusing through turbid media).",
      "genetic-algorithm optimization scheme is detailed for wavefront control (selection, breeding, mutation schedule) to accelerate convergence and improve enhancement.",
      "Simulations compare Binary Amplitude Modulation (THz) with Pseudorandom Phase Modulation (visible) and report higher enhancement for the phase-modulation case.",
      "A spatio-temporal pulse model is implemented to show how disorder broadens and distorts pulses, and how correlation/autocorrelation diagnostics help characterize speckle-pulse structure in complex media.",
    ],
    publications: [
      "This work is part of the author's research and is included in the MSc thesis submitted to University of Sussex.",
    ],
  },
  {
    id: "quantum-hydro",
    title: "Quantum Hydrodynamics near caustics",
    description:
      "Showed that near fold and cusp caustics the Bohmian trajectory initial value problem is ill posed, so trajectories fail to converge to geometric rays in the classical limit.",
    institution: "Department of Pure & Applied Mathematics, University of Crete",
    period: "2018",
    tags: [
      "Quantum hydrodynamics",
      "Bohm equations",
      "Geometrical optics",
      "Wigner transform",
    ],
    image:
      "https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MjkzMTc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    pdfDownload:
      "https://drive.proton.me/urls/TPHS1EBKNW#SciQR9JQ94T4",
    pdfTitle: " ",
    status: "Completed",
    detailedDescription: `
Considered some basic features of quantum hydrodynamics near simple fold and cusp caustics. We showed that the initial value problem for the Bohmian trajectories is not well posed, since the quantum potential and the derivatives of the phase of the wave function are too singular. These observations implied, that in the classical limit, the Bohmian trajectories do not converge to the geometric rays because caustics onset at t = 0+.

Using semiclassical tools (WKB/geometrical optics and phase-space methods), the thesis analyzes how caustic formation disrupts standard ray-based descriptions and clarifies the role of the quantum potential in these singular regimes.`,
    objectives: [
      "Examine key features of quantum hydrodynamics near fold and cusp caustics.",
      "Compute and analyse the quantum potential in canonical caustic-forming examples.",
      "Investigate well-posedness of the Bohmian trajectory (characteristic) dynamics near caustics.",
      "Understand implications for the semiclassical/classical limit and ray convergence.",
    ],
    methodology:
      "We used the WKB/geometrical-optics framework for rays and caustics, the Bohm (Madelung) hydrodynamic formulation of the Schrödinger equation, and phase-space analysis via the Wigner transform to obtain uniform expressions for the energy density and phase-gradient near caustics, enabling explicit computation of the quantum potential in fold/cusp settings.",
    results: [
      "The Bohmian-trajectory initial value problem is not well posed near fold/cusp caustics due to singular behavior in the quantum potential and phase derivatives.",
      "In examples where caustics onset at $t = 0+$, initial data for the Burgers/Bohmian characteristic dynamics cannot be prescribed consistently.",
      "Consequently, after caustic onset, Bohmian trajectories fail to converge to geometrical-optics rays in the classical limit.",
    ],
    publications: [
      "This work is part of the author's research and is included in the BSc thesis submitted to University of Crete.",
    ],
  },
];