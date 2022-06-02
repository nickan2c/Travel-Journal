import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div>
          <img className="card--img" src={props.items.imageUrl} />
        </div>

        <div className='card--details'>
          <div className="card--top-header"> 
            <ion-icon name="location-outline"></ion-icon>            
            <h3 > <b>{props.items.location}</b></h3>
            <a className='card--link' href={props.items.googleMapsUrl}>View on Google Maps</a>
          </div>
          
          <h1 className='card--title'>{props.items.title}</h1>
          <p className='card--date'><b>{props.items.startDate} - {props.items.endDate}</b></p>
          <p className='card--description'>{props.items.description}</p>
        </div>
    </div>
  )
}
