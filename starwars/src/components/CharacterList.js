import React from 'react';
import Character from './Character';

function CharacterList(props){
    return (
        <ul key={props.id} className="character-container">
            {props.starwarsChars.map((char) => {
            return (
                <Character 
                char={char}
                 />
                )
        })}
        </ul>
    )
}

export default CharacterList;