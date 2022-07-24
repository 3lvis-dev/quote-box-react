import React from 'react'

const QuoteBox = ({randomQuote, randomColors, getRandomAll}) => {

  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <div className='card__container'>
        <div className='card__quote'>
          <div className='card__quote--icon'><strong>&quot; </strong></div>
          <div className='card__quote--item'>
            <p> {randomQuote.quote}</p>
          </div>
        </div>
        <div className='card__author'>
          <p>{randomQuote.author}</p>
          <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
        </div>
      </div>
    </article>
  )
}

export default QuoteBox