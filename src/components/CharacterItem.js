import React from 'react'

function CharacterItem({_info}) {

    return (
        <div>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <p>{_info.name}</p>
                    </div>
                    <div className="card-back">
                        <p>{_info.name}</p>
                        <ul>
                            <li>
                                Height: {_info.height}
                            </li>
                            <li>
                                Mass: {_info.mass}
                            </li>
                            <li>
                                Birth Year: {_info.birth_year}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
