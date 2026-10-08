const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../assets');
const MAX_DIMENSION = 1200;
const QUALITY = 80;

const exts = ['.jpg', '.jpeg', '.png', '.webp'];

async function walk(dir, fileList = []) {
  const files = await fs.promises.readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.promises.stat(filePath);
    if (stat.isDirectory()) {
      await walk(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function processImages() {
  const files = await walk(ASSETS_DIR);
  const results = {
    scanned: files.length,
    converted: 0,
    resized: 0,
    skipped: 0,
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
    details: []
  };

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const stat = await fs.promises.stat(file);
    results.totalOriginalSize += stat.size;

    let image = sharp(file);
    const metadata = await image.metadata();
    
    const needsResize = metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION;
    const isWebP = ext === '.webp';
    
    // If it's an existing WebP and it doesn't need a resize, skip processing (it's already optimized)
    if (isWebP && !needsResize) {
      results.skipped++;
      results.totalOptimizedSize += stat.size;
      results.details.push({
        file,
        action: 'skipped',
        reason: 'Already optimized WebP',
        originalSize: stat.size,
        optimizedSize: stat.size
      });
      continue;
    }

    if (needsResize) {
      image = image.resize({
        width: MAX_DIMENSION,
        height: MAX_DIMENSION,
        fit: 'inside',
        withoutEnlargement: true
      });
      results.resized++;
    }

    // Convert to webp
    image = image.webp({ quality: QUALITY });

    let outputPath = file;
    if (!isWebP) {
      // Save as webp next to original
      const dirname = path.dirname(file);
      const basename = path.basename(file, path.extname(file));
      outputPath = path.join(dirname, basename + '.webp');
      
      // If we are about to overwrite an existing .webp file, what should we do?
      // Usually, if a .webp version already exists, we might skip to avoid duplicate work.
      // But we just scan all images. If there's an original product1.jpg, we generate product1.webp.
      // Wait, what if product1.webp exists? It will have been added to `files`!
      // If we process product1.jpg, we overwrite product1.webp. This is fine.
    }

    try {
      const outBuffer = await image.toBuffer();
      await fs.promises.writeFile(outputPath, outBuffer);
      results.converted++;
      results.totalOptimizedSize += outBuffer.length;
      
      const newMeta = await sharp(outBuffer).metadata();
      
      results.details.push({
        file,
        action: isWebP ? 'resized' : 'converted_and_resized',
        originalSize: stat.size,
        optimizedSize: outBuffer.length,
        originalWidth: metadata.width,
        originalHeight: metadata.height,
        newWidth: newMeta.width,
        newHeight: newMeta.height,
        reduction: ((stat.size - outBuffer.length) / stat.size * 100).toFixed(2) + '%'
      });
    } catch (e) {
      results.skipped++;
      results.totalOptimizedSize += stat.size;
      results.details.push({
        file,
        action: 'error',
        error: e.message
      });
    }
  }

  await fs.promises.writeFile(path.join(__dirname, 'results.json'), JSON.stringify(results, null, 2));
  console.log('Optimization complete. Results written to results.json');
}

processImages().catch(console.error);
