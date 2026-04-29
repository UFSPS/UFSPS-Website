import { copyFileSync, existsSync } from 'node:fs';

if (!existsSync('dist/index.html')) {
  throw new Error('dist/index.html does not exist. Run vite build first.');
}

copyFileSync('dist/index.html', 'dist/404.html');
console.log('Created dist/404.html as SPA fallback.');
