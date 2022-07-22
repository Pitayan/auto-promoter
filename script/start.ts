const p1 = Deno.run({
  cmd: ["deno", "task", "serve"]
});

const p2 = Deno.run({
  cmd: ["deno", "task", "dev"]
})

await p1.status()
await p2.status()
