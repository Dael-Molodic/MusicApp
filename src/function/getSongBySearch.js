import axios from "axios";


export default async function getSongsBySearch(textToSearch) {
    
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
        return response.data.results;
    }
    catch (e) {
        console.log(e);
        return []
    }
}


