import React from 'react';

//* styles
import './cards.style.css';

const Cards = (props) => {
    console.log("Cards props:", props);
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.data.id}?set=set2`}/>
            <h2>
                {props.data.username}
            </h2>
            <h3>
                {props.data.name}
            </h3>
            <h4>
                {props.data.email}
            </h4>
        </div>
    )
}

export default Cards;