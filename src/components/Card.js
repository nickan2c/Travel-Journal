import React from 'react'

export default function Card(props) {
  return (
    <div>
        <div>
        <img src={props.items.imageUrl} width="400px"/>
        </div>

        <div>

          <h3>{props.items.location}</h3>
          <h1>{props.items.title}</h1>
          <p><b>{props.items.startDate} - {props.items.endDate}</b></p>
          <p>{props.items.description}</p>
        </div>
    </div>
  )
}
