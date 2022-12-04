import React from 'react'
import { useMainAppContext } from '../../../contexts/Main_app_context'
import "./SearchInput.css"

function SearchInput() {

    const { searchTxtState: [searchTxtState, setSearchTxtState] } = useMainAppContext();

    const UpdateSearch = (inputTxt) => {
        setSearchTxtState(prev => inputTxt)
    }

    return (<>
      <div className="input-search-container">
        <input type="search" onInput={(e) => UpdateSearch(e.target.value)} maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
      </div>
    </>)
}

export default SearchInput
