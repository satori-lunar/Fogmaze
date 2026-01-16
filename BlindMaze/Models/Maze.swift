//
//  Maze.swift
//  BlindMaze
//
//  Data models for maze structure
//

import Foundation

enum TileType {
    case empty
    case wall
    case exit
}

struct Position: Equatable, Hashable {
    var x: Int
    var y: Int
    
    func neighbors() -> [Position] {
        return [
            Position(x: x, y: y - 1), // up
            Position(x: x, y: y + 1), // down
            Position(x: x - 1, y: y), // left
            Position(x: x + 1, y: y)  // right
        ]
    }
    
    func distance(to other: Position) -> Int {
        return abs(x - other.x) + abs(y - other.y)
    }
}

struct Maze {
    let width: Int
    let height: Int
    let tiles: [[TileType]]
    let startPosition: Position
    let exitPosition: Position
    
    func tileAt(_ position: Position) -> TileType {
        guard position.x >= 0 && position.x < width &&
              position.y >= 0 && position.y < height else {
            return .wall
        }
        return tiles[position.y][position.x]
    }
    
    func isWalkable(_ position: Position) -> Bool {
        let tile = tileAt(position)
        return tile == .empty || tile == .exit
    }
}

// Predefined maze levels
struct MazeLevels {
    static let levels: [Maze] = [
        // Level 1 - Simple introduction
        Maze(
            width: 7,
            height: 7,
            tiles: [
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .wall, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .exit, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall]
            ],
            startPosition: Position(x: 1, y: 1),
            exitPosition: Position(x: 5, y: 5)
        ),
        
        // Level 2 - More complex path
        Maze(
            width: 9,
            height: 9,
            tiles: [
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .wall, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .empty, .wall, .empty, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .wall, .empty, .empty, .wall],
                [.wall, .wall, .wall, .wall, .empty, .wall, .empty, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .exit, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall]
            ],
            startPosition: Position(x: 1, y: 1),
            exitPosition: Position(x: 7, y: 7)
        ),
        
        // Level 3 - Spiral pattern
        Maze(
            width: 11,
            height: 11,
            tiles: [
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .wall, .wall, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .wall, .exit, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .wall, .wall, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall]
            ],
            startPosition: Position(x: 1, y: 1),
            exitPosition: Position(x: 5, y: 5)
        ),
        
        // Level 4 - Zigzag challenge
        Maze(
            width: 9,
            height: 13,
            tiles: [
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .empty, .exit, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall]
            ],
            startPosition: Position(x: 1, y: 1),
            exitPosition: Position(x: 7, y: 11)
        ),
        
        // Level 5 - Complex maze
        Maze(
            width: 13,
            height: 13,
            tiles: [
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall],
                [.wall, .empty, .empty, .empty, .wall, .empty, .empty, .empty, .wall, .empty, .empty, .empty, .wall],
                [.wall, .empty, .wall, .empty, .wall, .empty, .wall, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .empty, .empty, .wall, .wall, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .wall, .wall, .wall, .wall, .wall, .empty, .wall],
                [.wall, .wall, .wall, .wall, .wall, .empty, .wall, .empty, .empty, .empty, .empty, .empty, .wall],
                [.wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .wall, .wall, .wall, .empty, .wall],
                [.wall, .empty, .wall, .wall, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .wall, .wall, .wall, .wall, .wall, .empty, .wall, .empty, .wall],
                [.wall, .empty, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .empty, .empty, .empty, .wall],
                [.wall, .empty, .empty, .empty, .wall, .empty, .empty, .empty, .empty, .empty, .wall, .exit, .wall],
                [.wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall, .wall]
            ],
            startPosition: Position(x: 1, y: 1),
            exitPosition: Position(x: 11, y: 11)
        )
    ]
    
    static func getLevel(_ number: Int) -> Maze? {
        let index = number - 1
        guard index >= 0 && index < levels.count else {
            return nil
        }
        return levels[index]
    }
}
