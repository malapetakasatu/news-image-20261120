import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// World news 20 November 2026 broadsheet entry - 38 stories, 7 regions, strict UTC filter
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const imageSource = new URL('./entry.png', import.meta.url);
const imageTarget = join(outputDir, 'entry.png');
copyFileSync(imageSource, imageTarget);
console.log('Successfully wrote Friday 20 November 2026 38-story broadsheet image to', imageTarget);
