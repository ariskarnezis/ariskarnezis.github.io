# Quick Start: Add Your PDF and Images NOW

## The Simple Truth

**You're working in Figma Make, which is a code editor.** You cannot drag-and-drop image/PDF files here like in a file manager. Instead, you need to:

1. **Host your files online** (Google Drive, university server, etc.)
2. **Use the URL** in your code

## 3-Step Process to Add Your PDF

### Step 1: Upload Your PDF to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Click "New" → "File upload"
3. Upload your PDF
4. Right-click the uploaded file → "Get link"
5. Change sharing to "Anyone with the link can view"
6. Copy the link - it looks like: `https://drive.google.com/file/d/1aBcDeFg123XyZ/view?usp=sharing`

### Step 2: Convert the Link to Download Format

Take your link and extract the FILE_ID (the part between `/d/` and `/view`):
- Original: `https://drive.google.com/file/d/1aBcDeFg123XyZ/view?usp=sharing`
- FILE_ID: `1aBcDeFg123XyZ`
- Download URL: `https://drive.google.com/uc?export=download&id=1aBcDeFg123XyZ`

### Step 3: Add to Your Code

Open `/data/projects.ts` and find your "waves-in-random-materials" project.

Add these two lines (replace FILE_ID with yours):

```tsx
pdfDownload: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
pdfTitle: "Download Research Paper",
```

**Full example:**

```tsx
{
  id: "waves-in-random-materials",
  title: "Waves in random materials",
  description: "Investigating how waves propagate...",
  institution: "University of Sheffield",
  period: "2022 - 2023",
  tags: ["Wave Physics", "Mathematical Modeling", "Scattering Theory"],
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb...",
  
  // ADD THESE TWO LINES:
  pdfDownload: "https://drive.google.com/uc?export=download&id=1aBcDeFg123XyZ",
  pdfTitle: "Download Full Research Paper",
  
  status: "Completed",
  detailedDescription: `This research project focuses...`,
  // ... rest stays the same
}
```

## Done! 🎉

Now when visitors view your "Waves in random materials" project, they'll see a download button that lets them get your PDF.

## For Images: Same Process

1. Upload image to Google Drive
2. Get the file ID
3. Use: `https://drive.google.com/uc?export=view&id=YOUR_IMAGE_FILE_ID`
4. Replace the `image:` URL in your project

**Or** keep using Unsplash URLs until you deploy to a real website.

## Alternative: University Hosting

If your university gives you web space:
1. Upload files to: `https://sheffield.ac.uk/~yourusername/`
2. Use direct URLs: `https://sheffield.ac.uk/~yourusername/papers/waves.pdf`

## Need Help?

The download button is **already coded and ready**. You just need to:
1. Upload your PDF somewhere online
2. Add the URL to your project data

That's it!
