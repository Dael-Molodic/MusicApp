import React, { useEffect, useState } from 'react'
import SongCard from '../../components/SongCard/SongCard';
import { useMainAppContext } from '../../contexts/Main_app_context';
import { mostViewsSort, newestSort } from '../../function/customSortFunctions';
import getSongsBySearch from '../../function/getSongBySearch'
import "./Search.css"


function Search() {

  const [searchResults, setSearchResults] = useState([]);
  const [currentSongSorter, setCurrentSongSorter] = useState(() => {});
  const { searchTxtState: [searchTxtState, setSearchTxtState] } = useMainAppContext();

  useEffect(() => {
    getSongsBySearch(searchTxtState)
    .then((results) => setSearchResults(results))
  }, [searchTxtState])

  useEffect(() => {
    setSearchResults( () => [...searchResults].sort(currentSongSorter))
  }, [currentSongSorter])


  return (searchResults?.length === 0)
  ? <div>Loading....</div>
  : (<>
    <h3 onClick={() => setCurrentSongSorter(() => mostViewsSort)}>Most viewed</h3>
    <h3>recently</h3>
    <h3 onClick={() => setCurrentSongSorter(() => newestSort)}>new</h3>
    <div className='songs-container'>
      {searchResults?.map(v => <SongCard key={v.id} songObj = {v} />)}
    </div>
  </>)

}

export default Search
// sort by the hottest songs, check if the server can always be alive and track how many views have been added to the song in the last week
