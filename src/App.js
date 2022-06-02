import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from "./data"

export default function App() {
    const items = data.map(
        card=>
        {return (
            <Card
            items = {card}
            />
    )}
        
        )
  return (
    <div>
      <Navbar />
      {items}
    </div>

  )
}
