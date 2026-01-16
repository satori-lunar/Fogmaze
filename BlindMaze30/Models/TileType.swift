//
//  TileType.swift
//  Blind Maze
//
//  Defines all tile types in the game
//

import Foundation

enum TileType: Int {
    case empty = 0      // Walkable path
    case wall = 1       // Impassable barrier
    case start = 2      // Player starting position
    case exit = 3       // Level goal
    case reveal = 4     // Reveals full maze temporarily
    case bomb = 5       // Game over when stepped on
    
    var isWalkable: Bool {
        switch self {
        case .empty, .start, .exit, .reveal, .bomb:
            return true
        case .wall:
            return false
        }
    }
}
