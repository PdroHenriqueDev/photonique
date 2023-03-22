import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
        },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), reactRefresh()],
    resolve: {
        alias: [
            { find: '@components', replacement: path.resolve(__dirname, 'src/app/components') }
        ],
    }
});
