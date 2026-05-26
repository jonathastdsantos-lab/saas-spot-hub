const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'components', 'screens', 'Screen_Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');
homeContent = homeContent.replace('window.Screen_Home = Screen_Home;', 'export default Screen_Home;');
fs.writeFileSync(homePath, homeContent);

const apiPath = path.join(__dirname, 'src', 'app', 'api', 'chat', 'route.ts');
let apiContent = fs.readFileSync(apiPath, 'utf8');
apiContent = apiContent.replace('toDataStreamResponse', 'toTextStreamResponse');
fs.writeFileSync(apiPath, apiContent);

console.log('Fixed export and API stream method.');
