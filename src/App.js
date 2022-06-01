import React from 'react'
import Card from './components/Card'
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
    <div>{items}</div>

  )
}
