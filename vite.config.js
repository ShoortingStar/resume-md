import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#disabledependencyreinclusion
export default defineConfig({
    plugins: [svelte()],
    optimizeDeps: {
        include: [
            'rehype-sanitize',
            'unified',
            'rehype-raw',
            'rehype-stringify',
            'remark-parse',
            'remark-rehype',
            'unist-util-visit',
            'lodash.debounce',
            'lodash.throttle',
            'codemirror-ssr/keymap/emacs',
            'codemirror-ssr/mode/gfm/gfm',
            'codemirror-ssr/addon/lint/lint',
            'codemirror-ssr/mode/markdown/markdown',
            'codemirror-ssr/addon/mode/overlay.js',
            'codemirror-ssr/addon/display/placeholder',
            'codemirror-ssr/keymap/vim',
            'codemirror-ssr/mode/xml/xml',
            'codemirror-ssr/mode/yaml/yaml',
            'codemirror-ssr/mode/yaml-frontmatter/yaml-frontmatter',
        ],
    },
})
