import React from 'react';

function CharacterCard(props){
    return (
        <div className="card-container">
          {props.starwarsChars.map( char => {
            return <ul className="character-card">
                      <h3>{char.name}</h3>
                      <li><strong>Gender:</strong> {char.gender}</li>
                      <li><strong>Height:</strong> {char.height}</li>
                      <li><strong>Birth Year:</strong> {char.birth_year}</li>
                      <li><strong>Skin Color:</strong> {char.skin_color}</li>
                      <li><strong>Hair Color:</strong> {char.hair_color}</li>
                      <li><strong>Eye Color:</strong> {char.eye_color}</li>
                   </ul>
          })}        
        </div>
    )
}

export default CharacterCard;