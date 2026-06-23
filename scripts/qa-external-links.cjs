const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");
fs.mkdirSync(reportDir, { recursive: true });

const node = "C:\\Users\\Dell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";
const linkinator = path.join(root, "node_modules/linkinator/build/src/cli.js");

async function run() {
  const server = await startStaticServer({ root, port: 4182 });
  const outputPath = path.join(reportDir, "external-links.csv");
  const args = [
    linkinator,
    server.origin,
    "--recurse",
    "--format",
    "CSV",
    "--status-code",
    "403:warn",
    "--status-code",
    "429:warn"
  ];

  let output = "";
  const code = await new Promise(resolve => {
    const child = spawn(node, args, { cwd: root });
    child.stdout.on("data", chunk => {
      const text = chunk.toString();
      output += text;
      process.stdout.write(text);
    });
    child.stderr.on("data", chunk => process.stderr.write(chunk));
    child.on("exit", resolve);
  });

  fs.writeFileSync(outputPath, output);
  await server.close();
  process.exit(code || 0);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
