import React from 'react';

function CharacterDetails(props){
    return (
        <li className="character-details" key={props.id}>{props.char.eye_color}</li>
    )
}

export default CharacterDetails;