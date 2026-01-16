//
//  ContentView.swift
//  BlindMaze
//
//  Main game view
//

import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = GameViewModel()
    
    var body: some View {
        ZStack {
            // Near-black background
            Color(red: 0.05, green: 0.05, blue: 0.05)
                .ignoresSafeArea()
            
            VStack(spacing: 20) {
                // Level number at top
                Text("Level \(viewModel.currentLevel)")
                    .font(.system(size: 24, weight: .light, design: .rounded))
                    .foregroundColor(.white.opacity(0.8))
                    .padding(.top, 50)
                
                Spacer()
                
                // Maze view
                MazeView(viewModel: viewModel)
                    .padding()
                
                Spacer()
            }
        }
        .gesture(
            DragGesture(minimumDistance: 30)
                .onEnded { value in
                    handleSwipe(value: value)
                }
        )
    }
    
    private func handleSwipe(value: DragGesture.Value) {
        let horizontalAmount = value.translation.width
        let verticalAmount = value.translation.height
        
        if abs(horizontalAmount) > abs(verticalAmount) {
            // Horizontal swipe
            if horizontalAmount > 0 {
                viewModel.movePlayer(direction: .right)
            } else {
                viewModel.movePlayer(direction: .left)
            }
        } else {
            // Vertical swipe
            if verticalAmount > 0 {
                viewModel.movePlayer(direction: .down)
            } else {
                viewModel.movePlayer(direction: .up)
            }
        }
    }
}

#Preview {
    ContentView()
}
