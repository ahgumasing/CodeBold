import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), vue()],
    output: 'server',
    adapter: netlify(),
});
