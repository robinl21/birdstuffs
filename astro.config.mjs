import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
    base: 'classes/863.24/people/RobinLiu/',
    outDir: '../RobinLiu',
    integrations: [react(), mdx()]
});
