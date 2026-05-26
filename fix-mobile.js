const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'screens', 'Screen_Mobile.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove window assignments
content = content.replace('window.Screen_Mobile_Home = Screen_Mobile_Home;', '');
content = content.replace('window.Screen_Mobile_Chat = Screen_Mobile_Chat;', '');

// Add imports at top
const imports = `import React from 'react';\nimport { SAAS, CATEGORIES } from '../../lib/mockData';\nimport { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice } from '../SharedUI';\n\n`;
content = imports + content;

// Add export at bottom
content += `\nconst Screen_Mobile = () => (\n  <div style={{ display: 'flex', gap: 20 }}>\n    <Screen_Mobile_Home />\n    <Screen_Mobile_Chat />\n  </div>\n);\n\nexport default Screen_Mobile;\n`;

fs.writeFileSync(filePath, content);
console.log('Fixed Screen_Mobile.jsx');
