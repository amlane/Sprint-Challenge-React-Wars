import React from 'react';
import CharacterDetails from './CharacterDetails';

function Character(props) {
    return (
        <div className="character-card">
            <ul className="character-names">{props.char.name}
                <CharacterDetails 
                    char={props.char}
                    id={props.id}
                />
            </ul>
        </div>
    )
}

export default Character;