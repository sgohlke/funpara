import { defineConfig } from 'tsdown'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    minify: false,
    outDir: 'build',
    sourcemap: true,
    splitting: true,
    target: ['es2022', 'node24'],
})
