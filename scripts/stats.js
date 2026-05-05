const fs = require('fs');
const path = require('path');

const solutionsDir = path.join(__dirname, '../solutions');
const folders = fs.readdirSync(solutionsDir).filter(f => 
    fs.statSync(path.join(solutionsDir, f)).isDirectory()
);

console.log(`✅ Всего решено: ${folders.length} задач`);