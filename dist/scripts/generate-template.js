"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const problemId = process.argv[2];
const problemName = process.argv[3] || 'problem-name';
const difficulty = process.argv[4] || 'medium';
if (!problemId) {
    console.error('❌ Укажите ID задачи');
    console.log('Usage: npm new <id> <name> [difficulty]');
    process.exit(1);
}
const folderName = `${problemId.padStart(4, '0')}-${problemName}`;
const solutionPath = path_1.default.join(process.cwd(), 'solutions', folderName);
if (!fs_1.default.existsSync(solutionPath)) {
    fs_1.default.mkdirSync(solutionPath, { recursive: true });
}
// Определяем сложность для отображения
const difficultyEmoji = {
    easy: '🟢',
    medium: '🟡',
    hard: '🔴'
}[difficulty];
// solution.ts
const solutionCode = `/**
 * @description Решение задачи ${problemId}. ${problemName}
 * @link ${difficultyEmoji} ${difficulty.toUpperCase()} - https://leetcode.com/problems/${problemName}/
 */

export function solution(params: any): any {
    // TODO: Реализовать решение
    return null;
}

// Альтернативное решение (если есть)
export function solutionOptimized(params: any): any {
    // TODO: Оптимизированное решение
    return null;
}
`;
// solution.test.ts
const testCode = `import { solution } from './solution';

describe('${problemId}. ${problemName}', () => {
    test('Example 1', () => {
        // Arrange
        const input = /* args */;
        const expected = /* expected */;
        
        // Act
        const result = solution(input);
        
        // Assert
        expect(result).toEqual(expected);
    });
    
    test('Example 2', () => {
        // TODO: Добавить тест
    });

});
`;
fs_1.default.writeFileSync(path_1.default.join(solutionPath, 'solution.ts'), solutionCode);
fs_1.default.writeFileSync(path_1.default.join(solutionPath, 'solution.test.ts'), testCode);
console.log(`✅ Создана задача ${folderName} (${difficultyEmoji} ${difficulty})`);
//# sourceMappingURL=generate-template.js.map