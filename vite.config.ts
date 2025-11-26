import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'node_modules/**'],
      outDir: 'dist',
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GennexUI',
      formats: ['es', 'umd'],
      fileName: (format) => `gennex-ui.${format}.js`,
    },
    rollupOptions: {
      external: (id) => {
        return (
          id.startsWith('react') ||
          id.startsWith('react-dom') ||
          id.startsWith('@mui') ||
          id.startsWith('ra-core') ||
          id.startsWith('ra-ui-materialui') ||
          id.startsWith('react-router-dom') ||
          id.startsWith('lucide-react') ||
          id === 'lodash' ||
          id.startsWith('simplebar-react')
        );
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'ra-core': 'RaCore',
          'material-react-table': 'MaterialReactTable',
          'react-query': 'ReactQuery',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
          lodash: 'lodash',
          'simplebar-react': 'SimpleBarReact',
          '@mui/material': 'MaterialUI',
          '@mui/material/LinearProgress': 'MaterialUI.LinearProgress',
          '@mui/material/styles': 'MaterialUI.styles',
          '@mui/material/locale': 'MaterialUI.locale',
          '@mui/system': 'MaterialUISystem',
          '@mui/icons-material': 'MaterialUIIcons',
          '@mui/base': 'MaterialUIBase',
          'react-device-detect': 'ReactDeviceDetect',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'gennex-ui.css';
          return assetInfo.name || '';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    hmr: true,
  },
  preview: {
    port: 5173,
    host: true,
    strictPort: true,
  },
});
