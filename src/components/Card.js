import React from 'react'

export default function Card(props) {
  return (
    <div>
        
        <img src={props.items.imageUrl} width="400px"/>
        <h1>{props.items.title}</h1>
        <h3>{props.items.location}</h3>
        <p><b>{props.items.startDate} - {props.items.endDate}</b></p>

    </div>
  )
}
