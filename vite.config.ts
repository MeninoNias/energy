import path from "path"
import react from "@vitejs/plugin-react"
import EnvironmentPlugin from 'vite-plugin-environment';
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(),
  EnvironmentPlugin({
    GRAPHQL_URI: 'http://localhost:8000/graphql',
  })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
