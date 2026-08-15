import { useState } from 'react'
import './App.css'
import Board from './functions/Board'

function App() {

  return (
    <>
    <h1>Tic Tac Toe</h1>
    <div className="game">
      <div className="left-panel">
        <h2>Player 1: X</h2>
      </div>
      <div className="center-panel">
        <Board />
      </div>
      <div className="right-panel">
        <h2>Player 2: O</h2>
      </div>
    </div>
    </>
  )
}

export default App
