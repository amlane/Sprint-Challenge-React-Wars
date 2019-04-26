import React from 'react';
import Character from './Character';

function CharacterList(props){
    return (
        <div className="character-list">
            {props.starwarsChars.map((char) => {
            return (
                <Character 
                char={char}
                id={props.id}
                 />
                )
        })}
        </div>
    )
}

export default CharacterList;