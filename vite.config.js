// vite.config.js
// ВАЖЛИВО: base: './' потрібен для GitHub Pages
// Якщо репозиторій - username.github.io (без sub-path), можна залишити './'
// Якщо https://username.github.io/repo-name/ — змініть на '/repo-name/'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: './',   // ← ключовий рядок для GitHub Pages

  build: {
    // Розбиваємо на чанки для кращого кешування
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          carousel: ['embla-carousel-react'],
        },
      },
    },
    // Попереджаємо якщо чанк > 500kb
    chunkSizeWarningLimit: 500,
  },
});
