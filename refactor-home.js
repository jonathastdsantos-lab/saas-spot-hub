const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'screens', 'Screen_Home.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove import of SAAS, CATEGORIES
content = content.replace(/import \{ SAAS, CATEGORIES \} from '\.\.\/\.\.\/lib\/mockData';\n/g, '');

// Change component signature
content = content.replace(/const Screen_Home = \(\) => \{/g, 'const Screen_Home = ({ products = [], categories = [] }) => {');

// Replace usages
content = content.replace(/SAAS/g, 'products');
content = content.replace(/CATEGORIES/g, 'categories');

fs.writeFileSync(filePath, content);
console.log('Fixed Screen_Home.jsx to use props');
