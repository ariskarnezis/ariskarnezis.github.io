# Guide: How to Upload Your Own Images and PDFs

This guide explains how to add your own images and PDF files to your academic website.

## Quick Start

### Step 1: Add Your Files

1. **Images**: Place your image files in `/assets/images/`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`
   - Example: `/assets/images/waves-experiment.jpg`

2. **PDFs**: Place your PDF files in `/assets/pdfs/`
   - Example: `/assets/pdfs/waves-research-paper.pdf`

### Step 2: Update Your Project Data

Open `/data/projects.ts` and follow these steps:

#### A. Import Your Files (at the top of the file)

```tsx
// Add these imports at the very top of projects.ts
import wavesImage from "../assets/images/waves-experiment.jpg";
import wavesPaper from "../assets/pdfs/waves-research-paper.pdf";
import wavesChart1 from "../assets/images/reflection-coefficient-chart.png";
import wavesChart2 from "../assets/images/wavenumber-analysis.png";
```

#### B. Use Your Files in Project Data

```tsx
export const projectsData = [
  {
    id: "waves-in-random-materials",
    title: "Waves in random materials",
    description: "Your description...",
    institution: "University of Sheffield",
    period: "2022 - 2023",
    tags: ["Wave Physics", "Mathematical Modeling", "Scattering Theory"],
    
    // Use your imported image here
    image: wavesImage,
    
    // Add PDF download
    pdfDownload: wavesPaper,
    pdfTitle: "Research Paper - Waves in Random Materials", // Optional custom title
    
    status: "Completed",
    detailedDescription: `Your detailed description...`,
    objectives: [...],
    methodology: "Your methodology...",
    results: [...],
    
    // Use your imported images for additional visuals
    additionalImages: [
      wavesChart1,
      wavesChart2,
    ],
    
    publications: [
      "Your publication reference...",
    ],
  },
  // ... other projects
];
```

## Complete Example

Here's a complete example showing how to add your own files:

### 1. File Structure
```
/assets
├── images/
│   ├── waves-main.jpg
│   ├── experiment-setup.jpg
│   └── results-chart.png
└── pdfs/
    └── waves-paper-2023.pdf
```

### 2. projects.ts File

```tsx
// Import your files at the top
import wavesMainImage from "../assets/images/waves-main.jpg";
import experimentSetup from "../assets/images/experiment-setup.jpg";
import resultsChart from "../assets/images/results-chart.png";
import wavesPaper from "../assets/pdfs/waves-paper-2023.pdf";

export const projectsData = [
  {
    id: "waves-in-random-materials",
    title: "Waves in random materials",
    description: "Investigating how waves propagate through random particulate media...",
    institution: "University of Sheffield",
    period: "2022 - 2023",
    tags: ["Wave Physics", "Mathematical Modeling", "Scattering Theory"],
    
    image: wavesMainImage,                    // Your main image
    pdfDownload: wavesPaper,                  // Your PDF file
    pdfTitle: "Full Research Paper (PDF)",   // Custom button text
    
    status: "Completed",
    detailedDescription: `This research project focuses on understanding...`,
    
    objectives: [
      "Quantify reflection coefficients...",
      "Compare different approaches...",
    ],
    
    methodology: "This work employs multiple scattering theory...",
    
    results: [
      "Successfully characterized reflection behavior...",
      "Identified distinct regimes...",
    ],
    
    additionalImages: [
      experimentSetup,    // First additional image
      resultsChart,       // Second additional image
    ],
    
    publications: [
      "Your Name et al. (2023). 'Wave Propagation in Random Media.' Journal Name.",
    ],
  },
];
```

## Features

### PDF Download Button

When you add `pdfDownload` to a project, a download button will automatically appear:
- Located below the project title and tags
- Uses GitHub's dark gray color (#2b3137)
- Shows a download icon
- Default text: "Download Research Paper"
- Custom text: Use `pdfTitle` to customize the button text

### Image Support

You can use your own images in three places:

1. **Main Project Image** (`image` field)
   - Displays as the hero image at the top of the project page
   - Also shows on the project card on the homepage

2. **Additional Images** (`additionalImages` array)
   - Displays in the "Research Visuals" section
   - Shown in a 2-column grid
   - Can add as many as you want

3. **Section Images** (if needed in the future)
   - Can be added to custom sections

## Tips

1. **Image Optimization**
   - Use reasonable file sizes (under 2MB per image is ideal)
   - Recommended dimensions for main image: 1920x1080px or similar aspect ratio
   - Additional images: 800x600px or similar

2. **PDF Files**
   - Keep PDFs under 10MB if possible for faster downloads
   - Use descriptive filenames: `smith-waves-research-2023.pdf`

3. **File Naming**
   - Use lowercase and hyphens: `my-research-image.jpg`
   - Avoid spaces and special characters
   - Be descriptive: `experiment-setup.jpg` is better than `image1.jpg`

4. **Using External URLs**
   - You can still use URLs instead of local files
   - Just use the URL string directly without importing:
     ```tsx
     image: "https://example.com/my-image.jpg",
     ```

## Multiple Projects

To add files for multiple projects:

```tsx
// Import all your files at the top
import project1Image from "../assets/images/project1-main.jpg";
import project1PDF from "../assets/pdfs/project1-paper.pdf";
import project2Image from "../assets/images/project2-main.jpg";
import project2PDF from "../assets/pdfs/project2-paper.pdf";

export const projectsData = [
  {
    id: "project-1",
    image: project1Image,
    pdfDownload: project1PDF,
    // ... rest of project 1 data
  },
  {
    id: "project-2",
    image: project2Image,
    pdfDownload: project2PDF,
    // ... rest of project 2 data
  },
];
```

## Troubleshooting

**Q: My image isn't showing up**
- Check that the file path is correct
- Make sure you imported the file at the top of projects.ts
- Verify the file extension matches (.jpg, .png, etc.)

**Q: PDF download button isn't appearing**
- Ensure you added both `pdfDownload` field to your project
- Check that the import statement is correct
- Make sure the PDF file is in `/assets/pdfs/`

**Q: Can I use both local files and URLs?**
- Yes! Use imports for local files and URL strings for external files

## Need Help?

If you have issues:
1. Check the browser console for error messages
2. Verify all import statements are at the top of the file
3. Ensure file paths are correct (use `../assets/` to go up one directory)
4. Make sure all imported variables are used in the data
