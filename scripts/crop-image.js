import sharp from 'sharp';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-19%20at%2011.16.19%20AM-5nzLsrUYDaSL8ED4fKZTIUzbqVYazQ.jpeg';

async function cropImage() {
  try {
    // Create directory if it doesn't exist
    if (!existsSync('./public/images')) {
      mkdirSync('./public/images', { recursive: true });
    }
    
    // Fetch the image
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Get image metadata
    const metadata = await sharp(buffer).metadata();
    console.log('Original dimensions:', metadata.width, 'x', metadata.height);
    
    // Crop to remove top status bar (~40px) and bottom watermark (~50px)
    const topCrop = 45;
    const bottomCrop = 55;
    
    const croppedImage = await sharp(buffer)
      .extract({
        left: 0,
        top: topCrop,
        width: metadata.width,
        height: metadata.height - topCrop - bottomCrop
      })
      .jpeg({ quality: 90 })
      .toBuffer();
    
    // Save to public folder
    writeFileSync('./public/images/profile.jpg', croppedImage);
    console.log('Image cropped and saved to public/images/profile.jpg');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

cropImage();
