import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({info , isLoading}) => {  //could use props.info to pass prop down but new way and way I prefer is destructuring so we just pass the state down in curly brackets
        //if is still loading we want to show some sort of loading icon
        return isLoading ? (
        <h1>Loading...</h1>
        ) : (
        <section className="cards">
            {info.map((_info) => (
                <CharacterItem key={_info.id} _info={_info}></CharacterItem>
            ))}
        </section>
        )
}



export default CharacterGrid
