import { esbuild } from "../deps.ts";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/auto-promoter.js",
  bundle: true,
  minify: true,
});

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/auto-promoter.esm.js",
  bundle: true,
  minify: true,
  format: 'esm',
})

Deno.exit()
