//
//  LevelManager.swift
//  Blind Maze
//
//  Manages all 30 levels with predefined maze templates
//

import Foundation

class LevelManager {
    static let shared = LevelManager()
    
    private init() {}
    
    func getLevel(_ number: Int) -> Level? {
        guard number >= 1 && number <= 30 else { return nil }
        return allLevels[number - 1]
    }
    
    // MARK: - All 30 Levels
    
    private lazy var allLevels: [Level] = [
        // LEVELS 1-10: Small mazes (5x5-6x6), no bombs
        createLevel1(),
        createLevel2(),
        createLevel3(),
        createLevel4(),
        createLevel5(),
        createLevel6(),
        createLevel7(),
        createLevel8(),
        createLevel9(),
        createLevel10(),
        
        // LEVELS 11-20: Medium mazes (6x6-7x7), 1-2 bombs
        createLevel11(),
        createLevel12(),
        createLevel13(),
        createLevel14(),
        createLevel15(),
        createLevel16(),
        createLevel17(),
        createLevel18(),
        createLevel19(),
        createLevel20(),
        
        // LEVELS 21-30: Large mazes (8x8-9x9), 2-4 bombs, reveal tiles, no auto-reveal
        createLevel21(),
        createLevel22(),
        createLevel23(),
        createLevel24(),
        createLevel25(),
        createLevel26(),
        createLevel27(),
        createLevel28(),
        createLevel29(),
        createLevel30(),
    ]
    
    // MARK: - Level Definitions (Levels 1-10: Small, No Bombs)
    
    private func createLevel1() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1],
            [1, 2, 0, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 0, 0, 3, 1],
            [1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 1, grid: grid)
    }
    
    private func createLevel2() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1],
            [1, 2, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 3, 1],
            [1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 2, grid: grid)
    }
    
    private func createLevel3() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 3, grid: grid)
    }
    
    private func createLevel4() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 2, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 4, grid: grid)
    }
    
    private func createLevel5() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 2, 1, 3, 0, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 5, grid: grid)
    }
    
    private func createLevel6() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 6, grid: grid)
    }
    
    private func createLevel7() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 2, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1],
            [1, 3, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 7, grid: grid)
    }
    
    private func createLevel8() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 3, 1],
            [1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 2, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 8, grid: grid)
    }
    
    private func createLevel9() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 9, grid: grid)
    }
    
    private func createLevel10() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 2, 0, 0, 0, 1],
            [1, 1, 1, 0, 3, 1],
            [1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 10, grid: grid)
    }
    
    // MARK: - Levels 11-20: Medium mazes with 1-2 bombs
    
    private func createLevel11() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 11, grid: grid)
    }
    
    private func createLevel12() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 5, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 12, grid: grid)
    }
    
    private func createLevel13() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 0, 1],
            [1, 2, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 5, 1],
            [1, 3, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 13, grid: grid)
    }
    
    private func createLevel14() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1],
            [1, 0, 5, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 14, grid: grid)
    }
    
    private func createLevel15() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 3, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1],
            [1, 2, 0, 0, 5, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 15, grid: grid)
    }
    
    private func createLevel16() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 1, 0, 0, 1],
            [1, 0, 0, 5, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 5, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 16, grid: grid)
    }
    
    private func createLevel17() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 0, 1],
            [1, 2, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 5, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 17, grid: grid)
    }
    
    private func createLevel18() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1],
            [1, 0, 5, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 18, grid: grid)
    }
    
    private func createLevel19() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 3, 1],
            [1, 0, 1, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1],
            [1, 2, 0, 0, 0, 5, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 19, grid: grid)
    }
    
    private func createLevel20() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 5, 1, 1],
            [1, 3, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 20, grid: grid)
    }
    
    // MARK: - Levels 21-30: Large mazes, no auto-reveal, 2-4 bombs, reveal tiles
    
    private func createLevel21() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 4, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 5, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 21, grid: grid)
    }
    
    private func createLevel22() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 3, 1],
            [1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 5, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 0, 1],
            [1, 2, 0, 4, 0, 5, 0, 1],
            [1, 1, 1, 1, 1, 1, 5, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 22, grid: grid)
    }
    
    private func createLevel23() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 4, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1],
            [1, 0, 5, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 5, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 23, grid: grid)
    }
    
    private func createLevel24() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 3, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 4, 1, 1, 0, 1],
            [1, 2, 0, 0, 0, 5, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 5, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 24, grid: grid)
    }
    
    private func createLevel25() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 5, 1, 0, 1],
            [1, 2, 0, 0, 4, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 5, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 25, grid: grid)
    }
    
    private func createLevel26() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 5, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 4, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 5, 1, 1, 0, 1],
            [1, 0, 5, 0, 0, 0, 5, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 26, grid: grid)
    }
    
    private func createLevel27() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 3, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 5, 0, 1],
            [1, 1, 1, 1, 4, 1, 1, 0, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 5, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 5, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 27, grid: grid)
    }
    
    private func createLevel28() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 5, 1, 0, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 4, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 5, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 28, grid: grid)
    }
    
    private func createLevel29() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 5, 1, 5, 1, 0, 1],
            [1, 0, 0, 0, 4, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 5, 0, 0, 0, 5, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 29, grid: grid)
    }
    
    private func createLevel30() -> Level {
        let grid: [[Int]] = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 1, 5, 1, 5, 1, 1, 1],
            [1, 2, 0, 0, 4, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 5, 0, 0, 0, 5, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 5, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        return parseLevel(number: 30, grid: grid)
    }
    
    // MARK: - Helper
    
    private func parseLevel(number: Int, grid: [[Int]]) -> Level {
        let height = grid.count
        let width = grid[0].count
        
        var tiles: [[TileType]] = []
        var startPos = Position(x: 0, y: 0)
        var exitPos = Position(x: 0, y: 0)
        
        for (y, row) in grid.enumerated() {
            var tileRow: [TileType] = []
            for (x, value) in row.enumerated() {
                let tile = TileType(rawValue: value) ?? .wall
                tileRow.append(tile)
                
                if tile == .start {
                    startPos = Position(x: x, y: y)
                }
                if tile == .exit {
                    exitPos = Position(x: x, y: y)
                }
            }
            tiles.append(tileRow)
        }
        
        return Level(
            number: number,
            width: width,
            height: height,
            tiles: tiles,
            startPosition: startPos,
            exitPosition: exitPos
        )
    }
}
