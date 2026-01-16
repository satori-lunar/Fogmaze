//
//  MazeView.swift
//  BlindMaze
//
//  Renders the maze grid with fog of war
//

import SwiftUI

struct MazeView: View {
    @ObservedObject var viewModel: GameViewModel
    
    var body: some View {
        GeometryReader { geometry in
            let tileSize = calculateTileSize(geometry: geometry)
            let mazeWidth = CGFloat(viewModel.maze.width) * tileSize
            let mazeHeight = CGFloat(viewModel.maze.height) * tileSize
            
            ZStack {
                // Center the maze
                VStack(spacing: 0) {
                    ForEach(0..<viewModel.maze.height, id: \.self) { y in
                        HStack(spacing: 0) {
                            ForEach(0..<viewModel.maze.width, id: \.self) { x in
                                let position = Position(x: x, y: y)
                                TileView(
                                    tileType: viewModel.maze.tileAt(position),
                                    position: position,
                                    isVisible: viewModel.isRevealing || viewModel.visibleTiles.contains(position),
                                    size: tileSize
                                )
                            }
                        }
                    }
                }
                .frame(width: mazeWidth, height: mazeHeight)
                
                // Player
                PlayerView(size: tileSize * 0.6)
                    .position(
                        x: CGFloat(viewModel.playerPosition.x) * tileSize + tileSize / 2,
                        y: CGFloat(viewModel.playerPosition.y) * tileSize + tileSize / 2
                    )
                    .opacity(viewModel.isRevealing ? 0.5 : 1.0)
            }
            .frame(width: geometry.size.width, height: geometry.size.height)
        }
    }
    
    private func calculateTileSize(geometry: GeometryProxy) -> CGFloat {
        let availableWidth = geometry.size.width * 0.9
        let availableHeight = geometry.size.height * 0.9
        
        let tileWidth = availableWidth / CGFloat(viewModel.maze.width)
        let tileHeight = availableHeight / CGFloat(viewModel.maze.height)
        
        return min(tileWidth, tileHeight, 50) // Max tile size of 50
    }
}

struct TileView: View {
    let tileType: TileType
    let position: Position
    let isVisible: Bool
    let size: CGFloat
    
    var body: some View {
        ZStack {
            // Base tile
            Rectangle()
                .fill(Color.clear)
                .frame(width: size, height: size)
            
            // Tile content
            if isVisible {
                switch tileType {
                case .wall:
                    RoundedRectangle(cornerRadius: size * 0.15)
                        .fill(Color(red: 0.2, green: 0.2, blue: 0.2))
                        .frame(width: size * 0.95, height: size * 0.95)
                        .transition(.opacity)
                    
                case .exit:
                    Circle()
                        .fill(
                            RadialGradient(
                                gradient: Gradient(colors: [
                                    Color.green.opacity(0.6),
                                    Color.green.opacity(0.2),
                                    Color.clear
                                ]),
                                center: .center,
                                startRadius: 0,
                                endRadius: size * 0.5
                            )
                        )
                        .frame(width: size, height: size)
                        .transition(.opacity)
                    
                case .empty:
                    EmptyView()
                }
            }
        }
        .animation(.easeInOut(duration: 0.3), value: isVisible)
    }
}

struct PlayerView: View {
    let size: CGFloat
    
    var body: some View {
        ZStack {
            // Outer glow
            Circle()
                .fill(
                    RadialGradient(
                        gradient: Gradient(colors: [
                            Color.blue.opacity(0.6),
                            Color.blue.opacity(0.3),
                            Color.blue.opacity(0.1),
                            Color.clear
                        ]),
                        center: .center,
                        startRadius: 0,
                        endRadius: size * 0.8
                    )
                )
                .frame(width: size * 1.6, height: size * 1.6)
                .blur(radius: 3)
            
            // Inner player circle
            Circle()
                .fill(
                    RadialGradient(
                        gradient: Gradient(colors: [
                            Color.white,
                            Color.blue.opacity(0.9),
                            Color.blue.opacity(0.7)
                        ]),
                        center: .center,
                        startRadius: 0,
                        endRadius: size * 0.5
                    )
                )
                .frame(width: size, height: size)
            
            // Subtle pulse animation
            Circle()
                .stroke(Color.white.opacity(0.5), lineWidth: 2)
                .frame(width: size * 0.9, height: size * 0.9)
                .scaleEffect(pulseAnimation ? 1.1 : 1.0)
                .opacity(pulseAnimation ? 0.0 : 0.8)
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 1.5).repeatForever(autoreverses: false)) {
                pulseAnimation = true
            }
        }
    }
    
    @State private var pulseAnimation = false
}

#Preview {
    ContentView()
}
