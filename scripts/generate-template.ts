import fs from 'fs';
import path from 'path';

const problemId = process.argv[2];
const problemName = process.argv[3] || 'problem-name';
const difficulty = (process.argv[4] as 'easy' | 'medium' | 'hard') || 'medium';

if (!problemId) {
  console.error('❌ Укажите ID задачи');
  console.log('Usage: npm new <id> <name> [difficulty]');
  process.exit(1);
}

const folderName = `${problemId.padStart(4, '0')}-${problemName}`;
const solutionPath = path.join(process.cwd(), 'solutions', folderName);

if (!fs.existsSync(solutionPath)) {
  fs.mkdirSync(solutionPath, { recursive: true });
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


fs.writeFileSync(path.join(solutionPath, 'solution.ts'), solutionCode);
fs.writeFileSync(path.join(solutionPath, 'solution.test.ts'), testCode);

console.log(`✅ Создана задача ${folderName} (${difficultyEmoji} ${difficulty})`);