import { cpSync, copyFileSync } from 'node:fs';

// Some GitHub Pages sites are configured to publish the repository root.
// Keep a generated copy there as a compatible fallback alongside the Actions artifact.
copyFileSync('dist/index.html', 'index.html');
cpSync('dist/assets', 'assets', { recursive: true, force: true });
