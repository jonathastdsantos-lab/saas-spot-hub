const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'brain', 'fbf66da2-38ed-4e48-9670-fa326dba2249', 'implementation_plan.md');
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('## 6. Publicação e Domínio')) {
  content += `\n## 6. Publicação e Domínio\n- [ ] Hospedar o código na Vercel.\n- [ ] Configurar o seu domínio personalizado (ex: \`stackly.com.br\`).\n- [ ] Adicionar variáveis de ambiente (\`.env.local\`) na Vercel.\n`;
  fs.writeFileSync(filePath, content);
}
console.log('Restored section 6');
