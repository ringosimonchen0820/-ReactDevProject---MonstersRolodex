import React from 'react';

//* styles
import './cards.css';

const Cards = (props) => {
    console.log("Cards props:", props);
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.data.id}?set=set2`}/>
            <h1>
                {props.data.username}
            </h1>
            <h2>
                {props.data.name}
            </h2>
            <h3>
                {props.data.email}
            </h3>
        </div>
    )
}

export default Cards;