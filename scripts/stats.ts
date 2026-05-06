import fs from 'fs';
import path from 'path';

interface ProblemStats {
  total: number;
  byDifficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
}

function getProblemDifficulty(readmePath: string): 'easy' | 'medium' | 'hard' | null {
  try {
    const content = fs.readFileSync(readmePath, 'utf-8');
    if (content.includes('🟢') || content.toLowerCase().includes('easy')) return 'easy';
    if (content.includes('🟡') || content.toLowerCase().includes('medium')) return 'medium';
    if (content.includes('🔴') || content.toLowerCase().includes('hard')) return 'hard';
  } catch {
    return null;
  }
  return null;
}

function analyzeStats(): ProblemStats {
  const solutionsDir = path.join(__dirname, '../solutions');
  const folders = fs.readdirSync(solutionsDir).filter(f => 
    fs.statSync(path.join(solutionsDir, f)).isDirectory()
  );
  
  const stats: ProblemStats = {
    total: folders.length,
    byDifficulty: { easy: 0, medium: 0, hard: 0 }
  };
  
  for (const folder of folders) {
    const readmePath = path.join(solutionsDir, folder, 'README.md');
    const difficulty = getProblemDifficulty(readmePath);
    
    if (difficulty) {
      stats.byDifficulty[difficulty]++;
    }
  }
  
  return stats;
}

const stats = analyzeStats();
console.log('\n📊 Статистика решений:');
console.log(`✅ Всего решено: ${stats.total} задач`);
console.log(`🟢 Легкие: ${stats.byDifficulty.easy}`);
console.log(`🟡 Средние: ${stats.byDifficulty.medium}`);
console.log(`🔴 Сложные: ${stats.byDifficulty.hard}`);
console.log(`\n📈 Прогресс: ${((stats.total / 3920) * 100).toFixed(2)}% от всех задач LeetCode\n`);