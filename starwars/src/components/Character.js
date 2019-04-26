import React from 'react';
import CharacterDetails from './CharacterDetails';

function Character(props) {
    return (
        <div className="character-card">
            <ul className="character-info">{props.char.name}
                <CharacterDetails 
                    char={props.char}
                />
            </ul>
        </div>
    )
}

export default Character;