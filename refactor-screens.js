const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'screens');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already processed
  if (content.includes('export default Screen_')) return;

  const componentName = file.replace('.jsx', '');

  // Remove window assignment
  content = content.replace(new RegExp(`window\\.${componentName}\\s*=\\s*${componentName};`, 'g'), '');

  // Add imports
  const imports = `import React from 'react';\nimport { SAAS, CATEGORIES } from '../../lib/mockData';\nimport { TopNav, Icon, LogoTile, Stars, Spark, Logo } from '../SharedUI';\n\n`;
  content = imports + content;

  // Add export
  content += `\nexport default ${componentName};\n`;

  fs.writeFileSync(filePath, content);
  console.log('Processed', file);
});
