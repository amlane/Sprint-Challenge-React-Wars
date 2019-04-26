import React from 'react';

function CharacterDetails(props){
    return (
        <div>
            <li className="character-details" key={props.char.index}>eye color: {props.char.eye_color}</li>
            <li className="character-details" key={props.char.index}>gender: {props.char.gender}</li>

            <ul>
             Films:
                {props.char.films.map((film) => {
                    return (
                    <li className="character-details">{film}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CharacterDetails;