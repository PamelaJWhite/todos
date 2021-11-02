import React from 'react';

let Beers  = function Beers(props) {
    return (
        //implicit return 
        <ul>
            {props.beers.map((beer)=> (
                <li>
                    <img src={beer.image_url} alt={beer.name}> </img>
                    <p>{beer.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default Beers