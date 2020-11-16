import React, {useState} from 'react'

function Search({getQuery}) {
    const [searchText, setSearchText] = useState("");

    const onChangeHandler = (query) => {
        setSearchText(query);
        getQuery(query)

    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Characters"
                    value={searchText}
                    onChange={event => onChangeHandler(event.target.value)}/>
            </form>

        </section>
    )
}

export default Search
