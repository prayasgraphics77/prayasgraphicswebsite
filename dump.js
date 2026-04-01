const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('git log -n 5 --oneline app/page.tsx').toString();
  fs.writeFileSync('history_page.txt', output, 'utf8');

  const historyServices = execSync('git log -n 5 --oneline components/ServicesSection.tsx').toString();
  fs.writeFileSync('history_services.txt', historyServices, 'utf8');

  const oldServices1 = execSync('git show HEAD~1:components/ServicesSection.tsx').toString();
  fs.writeFileSync('old_services1.txt', oldServices1, 'utf8');

  const oldServices2 = execSync('git show HEAD~2:components/ServicesSection.tsx').toString();
  fs.writeFileSync('old_services2.txt', oldServices2, 'utf8');
  
  const oldServices3 = execSync('git show HEAD~3:components/ServicesSection.tsx').toString();
  fs.writeFileSync('old_services3.txt', oldServices3, 'utf8');
} catch (e) {
  console.error(e.message);
}
