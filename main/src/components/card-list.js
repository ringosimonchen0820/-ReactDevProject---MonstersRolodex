import React from 'react';

// components
import Cards from './cards';

// styles
import './card-list.css';


const CardList = (props) => {
    console.log(props.monsters);
    return (
        <div className='card-list'>
            {
                props.monsters.map(data => {
                    return (
                        <Cards 
                            key={data.id}
                            data={data}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;