const fs = require('fs');
const input = fs.readFileSync('lib/levels.ts', 'utf8');

const levelsMatch = input.match(/const levels: Maze\[\] = \[([\s\S]*?)\];/);
if (!levelsMatch) { 
  console.log('Could not parse levels'); 
  process.exit(1); 
}

const levelsCode = 'const Wall="wall",Empty="empty",Exit="exit",Bomb="bomb",Reveal="reveal"; return [' + levelsMatch[1] + '];';
const levels = new Function(levelsCode)();

function isLevelBeatable(level) {
  const { tiles, startPosition, exitPosition } = level;
  const height = tiles.length;
  const width = tiles[0].length;
  
  const queue = [[startPosition.x, startPosition.y]];
  const visited = new Set([startPosition.x + ',' + startPosition.y]);
  
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x === exitPosition.x && y === exitPosition.y) return true;
    
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      const key = nx + ',' + ny;
      
      if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited.has(key)) {
        const tile = tiles[ny][nx];
        if (tile === 'empty' || tile === 'exit' || tile === 'reveal') {
          visited.add(key);
          queue.push([nx, ny]);
        }
      }
    }
  }
  return false;
}

console.log('Checking all ' + levels.length + ' levels...\n');
let problems = [];
for (let i = 0; i < levels.length; i++) {
  const levelNum = i + 1;
  const beatable = isLevelBeatable(levels[i]);
  console.log((beatable ? 'OK  ' : 'FAIL') + ' Level ' + levelNum);
  if (!beatable) problems.push(levelNum);
}

console.log('\n' + '='.repeat(30));
if (problems.length === 0) {
  console.log('ALL ' + levels.length + ' LEVELS ARE BEATABLE!');
} else {
  console.log('PROBLEMS FOUND IN LEVELS: ' + problems.join(', '));
}
