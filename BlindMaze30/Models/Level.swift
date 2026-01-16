//
//  Level.swift
//  Blind Maze
//
//  Level data structure
//

import Foundation

struct Level {
    let number: Int
    let width: Int
    let height: Int
    let tiles: [[TileType]]
    let startPosition: Position
    let exitPosition: Position
    
    var hasAutoReveal: Bool {
        return number <= 20
    }
    
    func tileAt(_ position: Position) -> TileType {
        guard position.x >= 0 && position.x < width &&
              position.y >= 0 && position.y < height else {
            return .wall
        }
        return tiles[position.y][position.x]
    }
    
    func isWalkable(_ position: Position) -> Bool {
        return tileAt(position).isWalkable
    }
}
