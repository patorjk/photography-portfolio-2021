#!/usr/bin/env node

/**
 * resize-images.js
 * Usage: node resize-images.js <image> <width1> [width2] [width3] ...
 * Example: node resize-images.js photo.jpg 600 960 1200 1280 1920 2560 3840
 *
 * Requires: npm install sharp
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: node resize-images.js <image> <width1> [width2] ...");
    console.error("Example: node resize-images.js photo.jpg 600 960 1200 1280 1920 2560 3840");
    process.exit(1);
  }

  const inputPath = args[0];
  const widths = args.slice(1).map((w) => {
    const n = parseInt(w, 10);
    if (isNaN(n) || n <= 0) {
      console.error(`Invalid width: "${w}". Widths must be positive integers.`);
      process.exit(1);
    }
    return n;
  });

  // Validate input file exists
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  // Build output folder name from the image filename
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();
  const outputDir = path.join(path.dirname(inputPath), `${baseName}-output`);

  // Create output directory if it doesn't exist
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Output folder: ${outputDir}`);

  // Get original image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`Original size: ${metadata.width}x${metadata.height}`);
  console.log(`Resizing to widths: ${widths.join(", ")}\n`);

  const isJpeg = [".jpg", ".jpeg"].includes(ext);

  // Resize each width in parallel
  const tasks = widths.map(async (width) => {
    const outputFilename = `${width}${ext}`;
    const outputPath = path.join(outputDir, outputFilename);

    const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: false });

    if (isJpeg) {
      pipeline.jpeg({ quality: 100, chromaSubsampling: "4:4:4" });
    }

    await pipeline.toFile(outputPath);

    // Report actual output dimensions
    const outMeta = await sharp(outputPath).metadata();
    console.log(`${width}${ext} created`);
  });

  await Promise.all(tasks);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
