import { useState } from 'react'
import users from './json/users.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(users)
  let colorRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    quoteRandom = getRandomElement(users)
    colorRandom = getRandomElement(colors)

    setRandomQuote(quoteRandom)
    setRandomColors(colorRandom)
  }

  return (
    <div id='app' className="App" style={objStyle}>
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
