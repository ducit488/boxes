import React from 'react'
import boxes from'./boxes'
import Box from './Box'

function App() {
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      const newSquares = []
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquares = prevSquares[i]
        if (currentSquares.id === id) {
          const updatedSquares = {
            ...currentSquares,
            on: !currentSquares.on
          }
          newSquares.push(updatedSquares)
        } else {
          newSquares.push(currentSquares)
        }
      }
      return newSquares;
    })
  }

  const squareElements = squares.map(square => {
    return (
      <Box 
        key={square.id}
        id={square.id}
        on={square.on}
        toggle={toggle}
      />

    )
    
  })
  return (
    <main className="mainContent">
      {squareElements}
    </main>
  )
}

export default App;
