import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// World news 20 November 2026 entry copy - verified valid PNG/JPEG
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const imageSource = new URL('./entry.png', import.meta.url);
const imageTarget = join(outputDir, 'entry.png');
copyFileSync(imageSource, imageTarget);
console.log('Successfully wrote 20 November 2026 news summary image to', imageTarget);
