# Assets Directory

This directory contains all your custom images and PDF files for your academic website.

## Directory Structure

```
/assets
├── images/          # Project images and photos
├── pdfs/           # Research papers, presentations, CV
└── README.md       # This file
```

## How to Add Your Files

### Adding Images

1. Place your image files in `/assets/images/`
2. Supported formats: .jpg, .jpeg, .png, .webp, .svg
3. Reference them in your code like this:
   ```tsx
   import myImage from "../assets/images/your-image.jpg";
   ```

### Adding PDFs

1. Place your PDF files in `/assets/pdfs/`
2. Reference them in your code like this:
   ```tsx
   import myPDF from "../assets/pdfs/your-paper.pdf";
   ```

## Example Usage in projects.ts

```tsx
import waveImage from "../assets/images/waves-research.jpg";
import wavePaper from "../assets/pdfs/waves-paper.pdf";

export const projectsData = [
  {
    id: "waves-in-random-materials",
    title: "Waves in random materials",
    image: waveImage,
    pdfDownload: wavePaper,
    // ... rest of your project data
  },
];
```
