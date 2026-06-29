const path = require("node:path");
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const port = Number(process.argv[2] || 4185);
const host = "127.0.0.1";
let server;

async function shutdown() {
  if (server) await server.close();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

startStaticServer({ root, host, port }).then(started => {
  server = started;
  console.log(`Serving HTTP on ${started.origin}`);
}).catch(error => {
  console.error(error);
  process.exit(1);
});