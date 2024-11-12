import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'EcoSolidaire',
          short_name: 'EcoSolidaire',
          description: 'Association humanitaire pour l\'éducation et l\'écologie',
          theme_color: '#047857',
          background_color: '#047857',
          display: 'standalone',
          icons: [
            {
              src: '/icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}'],
          navigateFallback: '/offline.html',
          navigateFallbackAllowlist: [/^(?!\/__).*/]
        }
      })
    ]
  }
});