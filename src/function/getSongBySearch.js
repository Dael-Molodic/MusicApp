import axios from "axios";


const getSongsBySearch =  async function (textToSearch) {
    
  const options = {
    method: 'GET',
    url: 'https://simple-youtube-search.p.rapidapi.com/search',
    params: {query: textToSearch.replace(" ", "+"), safesearch: 'false'},
    headers: {
      'X-RapidAPI-Key': '3ef4a46e8amsha603e317f05155cp195674jsn26dd54999e61',
      'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.results);//vvvvvvvvvvvvvvv
    return response.data.results;
  }
  catch (e) {
    console.log(e);
    return []
  }
}


export default getSongsBySearch;