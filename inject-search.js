const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'screens', 'Screen_Home.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Insert import
content = content.replace("import { TopNav, Icon, LogoTile, Stars, Spark } from '../SharedUI';", 
  "import { TopNav, Icon, LogoTile, Stars, Spark } from '../SharedUI';\nimport AiSearchBox from '../../components/AiSearchBox';");

// Replace the HTML search block
const htmlSearchBlock = `{/* AI search */}
          <div className="sx-search" style={{
            padding: '6px 6px 6px 18px',
            background: 'var(--surface)',
            borderColor: 'var(--border-strong)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 6px var(--ai-soft)',
            textAlign: 'left',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ai)" strokeWidth="2">
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
            </svg>
            <input placeholder="Quero um CRM com WhatsApp e IA para minha clínica de estética…" defaultValue="" />
            <button className="sx-btn sx-btn--primary" style={{ background: 'var(--text)', color: 'var(--bg)' }}>
              Perguntar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>`;

content = content.replace(htmlSearchBlock, '<AiSearchBox />');

fs.writeFileSync(filePath, content);
console.log('Replaced search box in Screen_Home.jsx');
