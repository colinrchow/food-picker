import { useState } from 'react'
import VibeScreen from './screens/VibeScreen'
import CuisineScreen from './screens/CuisineScreen'
import EliminationScreen from './screens/EliminationScreen'
import ResultScreen from './screens/ResultScreen'
import './App.css'

const INITIAL = { vibes: [], cuisine: null, winner: null }

function App() {
  const [screen, setScreen] = useState('vibes')
  const [selected, setSelected] = useState(INITIAL)

  function handleVibesDone(vibes) {
    setSelected(s => ({ ...s, vibes }))
    setScreen('cuisine')
  }

  function handleCuisineDone(cuisine) {
    setSelected(s => ({ ...s, cuisine }))
    setScreen('elimination')
  }

  function handleElimDone(winner) {
    setSelected(s => ({ ...s, winner }))
    setScreen('result')
  }

  function handleRestart() {
    setSelected(INITIAL)
    setScreen('vibes')
  }

  return (
    <div className="app">
      {screen === 'vibes' && (
        <VibeScreen onDone={handleVibesDone} />
      )}
      {screen === 'cuisine' && (
        <CuisineScreen
          onDone={handleCuisineDone}
          onBack={() => setScreen('vibes')}
        />
      )}
      {screen === 'elimination' && (
        <EliminationScreen
          cuisine={selected.cuisine}
          vibes={selected.vibes}
          onDone={handleElimDone}
          onBack={() => setScreen('cuisine')}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          winner={selected.winner}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App
