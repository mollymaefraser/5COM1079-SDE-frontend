
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  plugins: [
    [sveltekit()],
  ],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '/static',
      ],
    },
  },
})

