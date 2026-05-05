const fs = require('fs');
const path = require('path');

const taskId = process.argv[2];
const taskName = process.argv[3] || 'no-taskName';

if (!taskId) {
  console.error('❌ Укажите ID задачи');
  process.exit(1);
}

const folderName = `${taskId.padStart(4, '0')}-${taskName}`;
const solutionPath = path.join('solutions', folderName);

if (!fs.existsSync(solutionPath)) {
  fs.mkdirSync(solutionPath, { recursive: true });
}