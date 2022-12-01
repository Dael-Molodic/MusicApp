import React, { useEffect, useState } from 'react'
import SongCard from '../../components/SongCard/SongCard';
import { useMainAppContext } from '../../contexts/Main_app_context';
import getSongsBySearch from '../../function/getSongBySearch'
import "./Search.css"

function Search() {

  const [searchResults, setSearchResults] = useState([]);
  const { searchTxtState: [searchTxtState, setSearchTxtState] } = useMainAppContext();

  useEffect(() => {
    getSongsBySearch(searchTxtState)
    .then((results) => setSearchResults(results))
  }, [searchTxtState])


  return (searchResults?.length === 0)
  ? <div>Loading....</div>
  : (<>
    <h3>Filters:  Most viewed, recently played, favorite songs\from your collection</h3>
    <div className='songs-container'>
      {searchResults?.map(v => <SongCard key={v.id} songObj = {v} />)}
    </div>
  </>)

}

export default Search
// new, from your, most view
//  useEffect(() => {
//   console.log(searchResults);
//   console.log(searchTxtState);
// }, [searchResults, searchTxtState])
