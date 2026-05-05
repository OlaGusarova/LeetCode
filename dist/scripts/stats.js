"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getProblemDifficulty(readmePath) {
    try {
        const content = fs_1.default.readFileSync(readmePath, 'utf-8');
        if (content.includes('🟢') || content.toLowerCase().includes('easy'))
            return 'easy';
        if (content.includes('🟡') || content.toLowerCase().includes('medium'))
            return 'medium';
        if (content.includes('🔴') || content.toLowerCase().includes('hard'))
            return 'hard';
    }
    catch {
        return null;
    }
    return null;
}
function analyzeStats() {
    const solutionsDir = path_1.default.join(__dirname, '../solutions');
    const folders = fs_1.default.readdirSync(solutionsDir).filter(f => fs_1.default.statSync(path_1.default.join(solutionsDir, f)).isDirectory());
    const stats = {
        total: folders.length,
        byDifficulty: { easy: 0, medium: 0, hard: 0 }
    };
    for (const folder of folders) {
        const readmePath = path_1.default.join(solutionsDir, folder, 'README.md');
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
console.log(`\n📈 Прогресс: ${((stats.total / 3000) * 100).toFixed(2)}% от всех задач LeetCode\n`);
//# sourceMappingURL=stats.js.map