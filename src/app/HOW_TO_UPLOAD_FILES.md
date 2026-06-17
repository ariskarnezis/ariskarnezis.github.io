# How to Upload Your Images and PDFs in Figma Make

## Important: How File Upload Works in Figma Make

In Figma Make, you can add your own files by using the **file creation interface**. Here's how:

## Step-by-Step Instructions

### Method 1: Using the File Interface (Recommended)

1. **Look at the file tree** on the left side of Figma Make
2. You should now see:
   ```
   /assets
   ├── images/
   │   └── PLACE_YOUR_IMAGES_HERE.txt
   └── pdfs/
       └── PLACE_YOUR_PDFS_HERE.txt
   ```

3. **To add an image file:**
   - Click the "+" or "New File" button in Figma Make
   - Create a new file at path: `/assets/images/your-image-name.jpg`
   - However, **you cannot directly upload binary files (images/PDFs) in this text-based environment**

### Method 2: Use Image URLs (Current Workaround)

Since Figma Make is a text-based code editor, you have two options for images:

#### Option A: Use External URLs (Easiest)
Keep using image URLs from services like:
- Your university's website
- Cloud storage (Dropbox, Google Drive public links)
- Image hosting services
- Unsplash (as currently used)

#### Option B: Use Base64 Encoding (For Small Images)
Convert images to base64 strings and embed them directly in your code.

### Method 3: PDF Downloads

For PDFs, you have these options:

#### Option A: Host PDFs Externally (Recommended)
1. Upload your PDF to:
   - Your university website
   - Google Drive (make public and get shareable link)
   - Dropbox public folder
   - GitHub repository
   - Any file hosting service

2. Use the public URL in your projects.ts:
   ```tsx
   pdfDownload: "https://your-university.edu/~username/papers/waves-paper.pdf"
   ```

#### Option B: GitHub Pages / Repository
If you plan to deploy this site:
1. Create a GitHub repository for your website
2. Add your images and PDFs to the repository
3. Use relative paths in your code

## Updated Example for projects.ts

Here's how to use external URLs for your actual content:

```tsx
export const projectsData = [
  {
    id: "waves-in-random-materials",
    title: "Waves in random materials",
    description: "Investigating how waves propagate through random particulate media...",
    institution: "University of Sheffield",
    period: "2022 - 2023",
    tags: ["Wave Physics", "Mathematical Modeling", "Scattering Theory"],
    
    // Option 1: Use a URL from your university website
    image: "https://www.sheffield.ac.uk/~yourname/research/waves-image.jpg",
    
    // Option 2: Use cloud storage link
    // image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
    
    // Option 3: Keep using Unsplash for now
    // image: "https://images.unsplash.com/photo-...",
    
    // PDF from your university server or cloud storage
    pdfDownload: "https://www.sheffield.ac.uk/~yourname/papers/waves-paper.pdf",
    pdfTitle: "Download Full Research Paper (PDF)",
    
    status: "Completed",
    // ... rest of your data
  },
];
```

## For Deployment

When you're ready to deploy this website to production:

### Using Netlify/Vercel/GitHub Pages:

1. **Download your project code** from Figma Make
2. **Create a local folder structure:**
   ```
   my-website/
   ├── public/
   │   ├── images/
   │   │   ├── waves-experiment.jpg
   │   │   └── research-chart.png
   │   └── pdfs/
   │       └── waves-paper.pdf
   ├── src/
   │   ├── App.tsx
   │   ├── components/
   │   └── data/
   └── package.json
   ```

3. **Update paths in projects.ts:**
   ```tsx
   image: "/images/waves-experiment.jpg",
   pdfDownload: "/pdfs/waves-paper.pdf",
   ```

4. **Deploy to hosting service**

## Quick Solution for Right Now

**For immediate use while building in Figma Make:**

1. **Upload your PDFs** to Google Drive:
   - Right-click file → Get link → Change to "Anyone with the link"
   - Get the file ID from the URL
   - Use: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`

2. **For images**, use:
   - Imgur: Upload and use direct link
   - Google Drive: Same as above with `export=view`
   - Or keep using Unsplash until deployment

3. **Update your projects.ts:**
   ```tsx
   pdfDownload: "https://drive.google.com/uc?export=download&id=1ABC123...",
   ```

## Example with Real URLs

```tsx
export const projectsData = [
  {
    id: "waves-in-random-materials",
    title: "Waves in random materials",
    // ... other fields
    
    // Using Google Drive for image
    image: "https://drive.google.com/uc?export=view&id=1aBcDeFgHiJkLmNoPqRsTuVwXyZ",
    
    // Using Google Drive for PDF download  
    pdfDownload: "https://drive.google.com/uc?export=download&id=1ZyXwVuTsRqPoNmLkJiHgFeDcBa",
    pdfTitle: "Download Full Research Paper",
    
    // Or use university hosting
    // image: "https://sheffield.ac.uk/~abc123/waves.jpg",
    // pdfDownload: "https://sheffield.ac.uk/~abc123/paper.pdf",
  },
];
```

## Summary

**Current Environment (Figma Make):**
- ✅ Use external URLs for images and PDFs
- ✅ Google Drive, Dropbox, university hosting
- ❌ Cannot upload binary files directly in the editor

**After Deployment:**
- ✅ Can include local files in your project folder
- ✅ Files served from your hosting provider
- ✅ Use relative paths like `/images/photo.jpg`

Would you like me to help you set up Google Drive links or another hosting solution for your images and PDFs?
