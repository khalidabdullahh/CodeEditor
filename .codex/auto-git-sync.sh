#!/bin/zsh
# Automatically commit and push every workspace change. Started by launchd.
set -euo pipefail

REPO_DIR="/Users/khalidabdullah/Code Editor"
LOCK_DIR="/private/tmp/codeeditor-auto-git-sync.lock"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  exit 0
fi
trap 'rmdir "$LOCK_DIR"' EXIT

cd "$REPO_DIR"
# Dependencies are reproducible from package-lock.json and are not source files.
git add --all -- . ':(exclude)Gemini Ai/node_modules'

if ! git diff --cached --quiet; then
  git commit -m "chore: auto-sync workspace $(date '+%Y-%m-%d %H:%M:%S')"
  # Do not let the background service wait forever for interactive credentials.
  GIT_TERMINAL_PROMPT=0 git push origin main
fi
