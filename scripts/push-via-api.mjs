// Fast-forwards the GitHub repo's main branch to match local HEAD
// using the Git Data API (auth via gh CLI token), bypassing the stale
// embedded app token in the git remote URL.
import { execSync } from "child_process";

const REPO = "greyomar2002-png/chicoptic";
const exec = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const localSha = exec("git rev-parse HEAD");
const remoteSha = exec(`gh api repos/${REPO}/git/refs/heads/main --jq .object.sha`);
console.log(`local  ${localSha}`);
console.log(`remote ${remoteSha}`);

if (localSha === remoteSha) {
  console.log("Already in sync — nothing to push.");
  process.exit(0);
}

// Verify remote base is ancestor of local (fast-forward safe)
const base = exec(`git merge-base ${localSha} ${remoteSha}`);
if (base !== remoteSha) {
  console.error(
    "Remote main has diverged; aborting to avoid overwriting. base =",
    base
  );
  process.exit(1);
}

// Get tree SHA of local HEAD
const treeSha = exec(`git rev-parse ${localSha}^{tree}`);

// Build commit pointing at local tree, parented to current remote main
const commit = JSON.parse(
  exec(
    `gh api --method POST repos/${REPO}/git/commits -f message="Checkpoint: latest site state (server hardening + brand audit)" -f tree=${treeSha} -f parents=${remoteSha} --jq .sha`
  )
);
console.log("commit:", commit);

// Update main ref
const updated = exec(
  `gh api --method PATCH repos/${REPO}/git/refs/heads/main -f sha=${commit}`
);
console.log("ref updated:", updated.slice(0, 120));
