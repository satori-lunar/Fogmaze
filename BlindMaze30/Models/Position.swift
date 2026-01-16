//
//  Position.swift
//  Blind Maze
//
//  Grid position structure
//

import Foundation

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
}
