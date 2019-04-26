import React from 'react';

function Character(props) {
    return (
        <div>
            <div className="character-names">{props.char.name} was born {props.char.birth_year}</div>
        </div>
    )
}

export default Character;