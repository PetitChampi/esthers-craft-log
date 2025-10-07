import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMG_DIR = path.join(__dirname, "..", "public", "img");
const THUMBNAIL_DIR = path.join(IMG_DIR, "thumbnails");
const THUMBNAIL_SIZE = 400; // Max width/height for thumbnails

async function ensureThumbnailDir(): Promise<void> {
  try {
    await fs.access(THUMBNAIL_DIR);
  } catch {
    await fs.mkdir(THUMBNAIL_DIR, { recursive: true });
    console.log("✅ Created thumbnails directory");
  }
}

async function generateThumbnail(imagePath: string, filename: string): Promise<boolean> {
  const outputPath = path.join(THUMBNAIL_DIR, filename);
  
  try {
    await sharp(imagePath)
      .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
        fit: "cover",
        position: "center"
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`❌ Error processing ${filename}:`, errorMessage);
    return false;
  }
}

async function main(): Promise<void> {
  console.log("🖼️  Starting thumbnail generation...\n");
  
  await ensureThumbnailDir();
  
  const files = await fs.readdir(IMG_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );
  
  console.log(`Found ${imageFiles.length} images to process\n`);
  
  let successCount = 0;
  
  for (const file of imageFiles) {
    const imagePath = path.join(IMG_DIR, file);
    const stats = await fs.stat(imagePath);
    
    if (!stats.isFile()) continue;
    
    process.stdout.write(`Processing ${file}... `);
    const success = await generateThumbnail(imagePath, file);
    
    if (success) {
      successCount++;
      console.log("✅");
    }
  }
  
  console.log(`\n🎉 Done! Generated ${successCount}/${imageFiles.length} thumbnails`);
}

main().catch(console.error);
