import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
  preview: {
    port: 8080,
    strictport: true,
},
server: {
 port: 8080,
 strictport: true,
 host: true,
 origin: "http://0.0.0.0:8000",
},      
});
