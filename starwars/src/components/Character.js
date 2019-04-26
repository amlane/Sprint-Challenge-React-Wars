import React from 'react';

function Character(props) {
    return (
        <div>
            <div className="character-names">{props.char.name}</div>
        </div>
    )
}

export default Character;