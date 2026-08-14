#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

# Sites invokes a Worker module whose default export must expose fetch().
# Vinext's server entry is itself a Request handler, so preserve it and place
# a tiny Worker-compatible adapter at the required entrypoint.
server_dir="${SITES_PROJECT_ROOT}/dist/server"
mv "${server_dir}/index.js" "${server_dir}/vinext-server.js"
printf '%s\n' \
  'import handler from "./vinext-server.js";' \
  'export default { fetch(request, _env, ctx) { return handler(request, ctx); } };' \
  > "${server_dir}/index.js"

bash "${script_dir}/validate-artifact.sh"
