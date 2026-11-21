import { readFile } from 'node:fs/promises'
const patch = await readFile(new URL('./search-presets.patch.yml', import.meta.url), 'utf8')
const matches = patch.match(/name: '@local\/dsh-independent-foundations\/tool-fs-search'/g) ?? []
if (matches.length !== 3) throw new Error('Expected three package-local search presets, found ' + matches.length)
await readFile(new URL('./native/tool-fs-search/lib/index.js', import.meta.url))
console.log('Search presets are ready; no local path rewriting is required.')
