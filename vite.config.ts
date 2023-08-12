
import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite'
import { viteMockServe } from 'vite-plugin-mock';
import type { UserConfig  } from 'vite';

const config: UserConfig = {
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  plugins: [
    sveltekit(),
    viteMockServe({
      mockPath: 'src/dev-mocks'
    })
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
}

export default config;

