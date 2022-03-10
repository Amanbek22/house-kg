import React from 'react'
import Card from '../components/card/Card.jsx'

export default function Homepage() {
  return (
    <div className='container page'>
      <div className='title'>Homepage</div>

      <div className="cardsWrapper">
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}
