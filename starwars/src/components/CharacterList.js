import React from "react";
import "./StarWars.css"

function CharacterList(props){
    return (
        <div>
        {props.starwarsChars.map((char) => {
          return (
            <div className="character-names">{char.name}</div>
            )
        })}
        </div>
    )
}

export default CharacterList;