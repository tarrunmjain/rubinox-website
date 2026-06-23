const path = require("node:path");
const { spawn } = require("node:child_process");
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const node = "C:\\Users\\Dell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";
const linkinator = path.join(root, "node_modules/linkinator/build/src/cli.js");

async function run() {
  const server = await startStaticServer({ root, port: 4181 });
  const args = [
    linkinator,
    server.origin,
    "--recurse",
    "--check-fragments",
    "--skip",
    "^(?!http://127\\.0\\.0\\.1:4181)"
  ];

  const code = await new Promise(resolve => {
    const child = spawn(node, args, { cwd: root, stdio: "inherit" });
    child.on("exit", resolve);
  });

  await server.close();
  process.exit(code || 0);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
