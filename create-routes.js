const fs = require('fs');
const path = require('path');

const routes = {
  'agentes': 'Screen_Agents',
  'categorias': 'Screen_Category',
  'comunidade': 'Screen_Community',
  'comparar': 'Screen_Compare',
  'consultor': 'Screen_Consultor',
  'integracoes': 'Screen_Integrations',
  'mobile': 'Screen_Mobile',
  'onboarding': 'Screen_Onboarding',
  'perfil': 'Screen_Profile',
  'stack': 'Screen_Stack'
};

Object.entries(routes).forEach(([route, component]) => {
  const dirPath = path.join(__dirname, 'src', 'app', route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import ${component} from '../../components/screens/${component}';\n\nexport default function Page() {\n  return <${component} />;\n}\n`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log('Created route', route);
});
