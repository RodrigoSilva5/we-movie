import "./styles.css"

const SearchBar = ({inputText, setInputText}) => {
    return(
        <>
            <input className="search" 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value) }
                />
        </>
    )
}

export {SearchBar}