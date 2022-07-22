import { esbuild } from "../deps.ts";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/auto-promoter.js",
  bundle: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('Rebuild failed (iife)', error)
      else console.log('Rebuild succeeded (iife): dist/auto-promoter.js')
    },
  }
}).then(() => {
  console.log('Build file (iife): dist/auto-promoter.js')
});

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/auto-promoter.esm.js",
  format: 'esm',
  bundle: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('Rebuild failed (esm):', error)
      else console.log('Rebuild succeeded (esm): dist/auto-promoter.esm.js')
    },
  },
}).then(() => {
  console.log('Build file (esm): dist/auto-promoter.esm.js')
});

