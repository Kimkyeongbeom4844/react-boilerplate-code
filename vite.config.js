import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	server: {
		https: true,
		// host: '127.0.0.1',
		// port: '5173',
	},
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
});
