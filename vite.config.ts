import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';
import vue from '@vitejs/plugin-vue';
import * as path from 'jsr:@std/path';

function getModuleDir(importMeta: ImportMeta): string {
	return path.resolve(path.dirname(path.fromFileUrl(importMeta.url)));
}

const dir = getModuleDir(import.meta);

// https://vite.dev/config/
export default defineConfig({
	plugins: [deno(), vue()],
	build: {
		lib: {
			entry: dir + '/src/utils/translate.ts',
			formats: ['es', 'cjs'],
		},
	},
});
