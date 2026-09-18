import { watch } from "node:fs";
import { spawn } from "node:child_process";

const repo = "/Users/khalidabdullah/Code Editor";
const ignored = [".git/", "Gemini Ai/node_modules/"];
let timer;

function syncSoon() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    spawn("/bin/zsh", [".codex/auto-git-sync.sh"], {
      cwd: repo,
      detached: true,
      stdio: "ignore",
    }).unref();
  }, 1500);
}

watch(repo, { recursive: true }, (_event, filename) => {
  const path = String(filename ?? "");
  if (!ignored.some((prefix) => path === prefix.slice(0, -1) || path.startsWith(prefix))) {
    syncSoon();
  }
});

syncSoon();
