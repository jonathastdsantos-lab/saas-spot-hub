const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'screens');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace import
  content = content.replace(
    /import \{ TopNav, Icon, LogoTile, Stars, Spark, Logo \} from '\.\.\/SharedUI';/g,
    "import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';"
  );
  content = content.replace(
    /import \{ TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice \} from '\.\.\/SharedUI';/g,
    "import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';"
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed imports in', file);
});
