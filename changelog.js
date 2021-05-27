/* eslint-disable no-unused-expressions */
const child = require('child_process');
const fs = require('fs');

const output = child
  .execSync(`git log --format=%B%H----DELIMITER----\n`)
  .toString('utf-8');
const commitsArray = output
  .split('----DELIMITER----\n' || '----DELIMITER----\n')
  .map((commit) => {
    const [message, sha] = commit.split('\n');
    return { sha, message };
  })
  .filter((commit) => Boolean(commit.sha));

// const currentChangelog = fs.readFileSync('./CHANGELOG.md', 'utf-8');
const currentVersion = require('./package.json').version;

const newVersion = currentVersion;
let newChangelog = `# Version ${newVersion} (${
  new Date().toISOString().split('T')[0]
})\n\n`;
fs.writeFileSync('./CHANGELOG.md', ' ');
const style = [];
const refactor = [];
const perf = [];
const test = [];
const build = [];
const ci = [];
const chore = [];
const revert = [];
const feat = [];
const fix = [];
const docs = [];


commitsArray.forEach((commit) => {
  if (commit.message.startsWith('style: ')) {
    style.push(
      `* ${commit.message.replace('style: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/committ${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('refactor: ')) {
    refactor.push(
      `* ${commit.message.replace('refactor: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('perf: ')) {
    perf.push(
      `* ${commit.message.replace('perf: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('test: ')) {
    test.push(
      `* ${commit.message.replace('test: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('build: ')) {
    build.push(
      `* ${commit.message.replace('build: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('ci: ')) {
    ci.push(
      `* ${commit.message.replace('ci: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('chore: ')) {
    chore.push(
      `* ${commit.message.replace('chore: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('revert: ')) {
    revert.push(
      `* ${commit.message.replace('revert: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('feat: ')) {
    feat.push(
      `* ${commit.message.replace('feat: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('fix: ')) {
    fix.push(
      `* ${commit.message.replace('fix: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
  if (commit.message.startsWith('docs: ')) {
    docs.push(
      `* ${commit.message.replace('docs: ', '')} ([${commit.sha.substring(
        0,
        6
      )}](https://github.com/ChristianHS23/skeleton-react-project-with-auto-generate-components/commit${commit.sha}))\n`
    );
  }
});
if (style.length) {
  newChangelog += `## Styles\n`;
  style.forEach((feature) => {
    newChangelog += feature;
  });
  newChangelog += '\n';
}

if (refactor.length) {
  newChangelog += `## Refactors\n`;
  refactor.forEach((refactor) => {
    newChangelog += refactor;
  });
  newChangelog += '\n';
}
if (perf.length) {
  newChangelog += `## Perfs\n`;
  perf.forEach((perf) => {
    newChangelog += perf;
  });
  newChangelog += '\n';
}
if (test.length) {
  newChangelog += `## Tests\n`;
  test.forEach((test) => {
    newChangelog += test;
  });
  newChangelog += '\n';
}
if (build.length) {
  newChangelog += `## Builds\n`;
  build.forEach((build) => {
    newChangelog += build;
  });
  newChangelog += '\n';
}
if (ci.length) {
  newChangelog += `## CI\n`;
  ci.forEach((ci) => {
    newChangelog += ci;
  });
  newChangelog += '\n';
}
if (chore.length) {
  newChangelog += `## Chores\n`;
  chore.forEach((chore) => {
    newChangelog += chore;
  });
  newChangelog += '\n';
}
if (revert.length) {
  newChangelog += `## Reverts\n`;
  revert.forEach((revert) => {
    newChangelog += revert;
  });
  newChangelog += '\n';
}
if (feat.length) {
  newChangelog += `## Feat\n`;
  feat.forEach((feat) => {
    newChangelog += feat;
  });
  newChangelog += '\n';
}
if (fix.length) {
  newChangelog += `## Fixs\n`;
  fix.forEach((fix) => {
    newChangelog += fix;
  });
  newChangelog += '\n';
}
if (docs.length) {
  newChangelog += `## Docs\n`;
  docs.forEach((docs) => {
    newChangelog += docs;
  });
  newChangelog += '\n';
}

// prepend the newChangelog to the current one
const locFile = './CHANGELOG.md';

function removed() {
  fs.writeFile(locFile, '', function() {
    console.warn('cleansing ...');
    setTimeout(function() {
      fs.writeFile(locFile, `${newChangelog}`, function() {
        console.warn('updating!');
      });
    }, 3000);
  });
}
return removed();
