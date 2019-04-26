import React from "react";
import Character from "./Character"

function CharacterList(props){
    return (
        <div className="character-list">
        {props.starwarsChars.map((char) => {
          return (
            <Character 
            char={char} />
            )
        })}
        </div>
    )
}

export default CharacterList;