import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
    root: './src',
    build: {
        outDir: '../build',
        sourcemap: true,
        rollupOptions: {
            input: './src/index.html',
        },
        minify: 'terser',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
        },
    },
    server: {
        port: 2404,
    }
});
