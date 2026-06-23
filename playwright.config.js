const { defineConfig } = require("playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    headless: true
  },
  webServer: {
    command: "\"C:\\Users\\Dell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe\" -m http.server 4173 --bind 127.0.0.1",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 15000
  }
});
