const { execSync } = require('child_process');
const fs = require('fs');

try {
  const diffPage = execSync('git diff HEAD~5 HEAD -- app/page.tsx').toString();
  fs.writeFileSync('diff_page.txt', diffPage, 'utf8');

  const diffLib = execSync('git diff HEAD~5 HEAD -- lib/services-data.ts').toString();
  fs.writeFileSync('diff_lib.txt', diffLib, 'utf8');
} catch (e) {
  console.error(e.message);
}
