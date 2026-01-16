//
//  GameViewModel.swift
//  BlindMaze
//
//  Game state management with fog of war logic
//

import SwiftUI
import Combine

class GameViewModel: ObservableObject {
    @Published var currentLevel: Int = 1
    @Published var playerPosition: Position
    @Published var maze: Maze
    @Published var visibleTiles: Set<Position> = []
    @Published var isRevealing: Bool = true
    @Published var gameState: GameState = .revealing
    
    enum GameState {
        case revealing
        case playing
        case transitioning
    }
    
    private var revealTimer: Timer?
    
    init() {
        // Initialize with first level
        self.maze = MazeLevels.getLevel(1)!
        self.playerPosition = maze.startPosition
        startLevel()
    }
    
    func startLevel() {
        gameState = .revealing
        isRevealing = true
        playerPosition = maze.startPosition
        
        // Reveal entire maze
        visibleTiles = Set(allPositions())
        
        // After 3 seconds, hide the maze
        revealTimer?.invalidate()
        revealTimer = Timer.scheduledTimer(withTimeInterval: 3.0, repeats: false) { [weak self] _ in
            withAnimation(.easeOut(duration: 1.0)) {
                self?.isRevealing = false
                self?.gameState = .playing
                self?.updateVisibleTiles()
            }
        }
    }
    
    func movePlayer(direction: Direction) {
        guard gameState == .playing else { return }
        
        let newPosition: Position
        switch direction {
        case .up:
            newPosition = Position(x: playerPosition.x, y: playerPosition.y - 1)
        case .down:
            newPosition = Position(x: playerPosition.x, y: playerPosition.y + 1)
        case .left:
            newPosition = Position(x: playerPosition.x - 1, y: playerPosition.y)
        case .right:
            newPosition = Position(x: playerPosition.x + 1, y: playerPosition.y)
        }
        
        // Check if move is valid
        guard maze.isWalkable(newPosition) else { return }
        
        // Move player
        withAnimation(.easeInOut(duration: 0.2)) {
            playerPosition = newPosition
            updateVisibleTiles()
        }
        
        // Check if reached exit
        if playerPosition == maze.exitPosition {
            reachedExit()
        }
    }
    
    private func updateVisibleTiles() {
        var visible = Set<Position>()
        
        // Add player position
        visible.insert(playerPosition)
        
        // Add immediate neighbors (1-tile radius)
        for neighbor in playerPosition.neighbors() {
            visible.insert(neighbor)
        }
        
        visibleTiles = visible
    }
    
    private func reachedExit() {
        gameState = .transitioning
        
        // Wait a moment, then load next level
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in
            self?.loadNextLevel()
        }
    }
    
    private func loadNextLevel() {
        currentLevel += 1
        
        if let nextMaze = MazeLevels.getLevel(currentLevel) {
            maze = nextMaze
            startLevel()
        } else {
            // No more levels - restart from level 1
            currentLevel = 1
            maze = MazeLevels.getLevel(1)!
            startLevel()
        }
    }
    
    func restartLevel() {
        startLevel()
    }
    
    private func allPositions() -> [Position] {
        var positions: [Position] = []
        for y in 0..<maze.height {
            for x in 0..<maze.width {
                positions.append(Position(x: x, y: y))
            }
        }
        return positions
    }
}

enum Direction {
    case up, down, left, right
}
