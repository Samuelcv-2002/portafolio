// vite.config.js
import { defineConfig } from "file:///D:/Sam/Escritorio/IUJO/Programas/React/Portafolio/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Sam/Escritorio/IUJO/Programas/React/Portafolio/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { VitePWA } from "file:///D:/Sam/Escritorio/IUJO/Programas/React/Portafolio/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [{
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png"
        }, {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        }, {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any"
        }, {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }]
      }
    })
  ],
  base: "https://samuelcv-2002.github.io/portafolio"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTYW1cXFxcRXNjcml0b3Jpb1xcXFxJVUpPXFxcXFByb2dyYW1hc1xcXFxSZWFjdFxcXFxQb3J0YWZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTYW1cXFxcRXNjcml0b3Jpb1xcXFxJVUpPXFxcXFByb2dyYW1hc1xcXFxSZWFjdFxcXFxQb3J0YWZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TYW0vRXNjcml0b3Jpby9JVUpPL1Byb2dyYW1hcy9SZWFjdC9Qb3J0YWZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksIFxuICAgIFZpdGVQV0Eoe1xuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgaWNvbnM6IFt7XG4gICAgICAgICAgc3JjOiAncHdhLTY0eDY0LnBuZycsXG4gICAgICAgICAgc2l6ZXM6ICc2NHg2NCcsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIHB1cnBvc2U6ICdhbnknICBcbiAgICAgICAgfSwge1xuICAgICAgICAgIHNyYzogJ21hc2thYmxlLWljb24tNTEyeDUxMi5wbmcnLFxuICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGJhc2U6IFwiaHR0cHM6Ly9zYW11ZWxjdi0yMDAyLmdpdGh1Yi5pby9wb3J0YWZvbGlvXCJcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsb0JBQW9CO0FBQ2hYLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1IsT0FBTyxDQUFDO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUixHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUixHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsUUFDWCxHQUFHO0FBQUEsVUFDRCxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
