// Quick script to verify all levels are beatable
const TileType = {
  Empty: 'empty',
  Wall: 'wall',
  Exit: 'exit',
};

const { Empty, Wall, Exit } = TileType;

const levels = [
  // Level 1
  {
    width: 7, height: 7,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    start: { x: 1, y: 1 }, exit: { x: 5, y: 5 },
  },
  // Level 2
  {
    width: 9, height: 9,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Wall, Empty, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    start: { x: 1, y: 1 }, exit: { x: 7, y: 7 },
  },
  // Level 3
  {
    width: 11, height: 11,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Exit, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    start: { x: 1, y: 1 }, exit: { x: 5, y: 5 },
  },
  // Level 4
  {
    width: 9, height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Empty, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    start: { x: 1, y: 1 }, exit: { x: 7, y: 11 },
  },
  // Level 5
  {
    width: 13, height: 13,
    tiles: [
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Empty, Wall, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall],
      [Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall, Wall, Wall, Empty, Wall],
      [Wall, Empty, Wall, Wall, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Wall, Wall, Wall, Wall, Wall, Empty, Wall, Empty, Wall],
      [Wall, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Wall],
      [Wall, Empty, Empty, Empty, Wall, Empty, Empty, Empty, Empty, Empty, Wall, Exit, Wall],
      [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    ],
    start: { x: 1, y: 1 }, exit: { x: 11, y: 11 },
  },
];

function findPath(level) {
  const { tiles, start, exit, width, height } = level;
  const visited = new Set();
  const queue = [[start.x, start.y, []]];
  
  while (queue.length > 0) {
    const [x, y, path] = queue.shift();
    const key = `${x},${y}`;
    
    if (visited.has(key)) continue;
    visited.add(key);
    
    if (x === exit.x && y === exit.y) {
      return { found: true, length: path.length + 1, path: [...path, [x, y]] };
    }
    
    const neighbors = [
      [x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]
    ];
    
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      const tile = tiles[ny][nx];
      if (tile === Wall) continue;
      if (!visited.has(`${nx},${ny}`)) {
        queue.push([nx, ny, [...path, [x, y]]]);
      }
    }
  }
  
  return { found: false, length: 0 };
}

console.log('Checking all levels...\n');
levels.forEach((level, i) => {
  const result = findPath(level);
  console.log(`Level ${i + 1}:`);
  console.log(`  Start: (${level.start.x}, ${level.start.y})`);
  console.log(`  Exit: (${level.exit.x}, ${level.exit.y})`);
  console.log(`  Beatable: ${result.found ? '✅ YES' : '❌ NO'}`);
  if (result.found) {
    console.log(`  Path length: ${result.length} moves`);
  }
  console.log('');
});
