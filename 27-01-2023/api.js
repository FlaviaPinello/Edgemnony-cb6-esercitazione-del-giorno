
const API_KEY = "295244d83a0e97b8b63262553c5b84d6";
const BASE_URL = "https://api.themoviedb.org/3/";


// https://api.themoviedb.org/3/tv/550/season/1?api_key=<<api_key>>&language=en-US

// /tv/{tv_id}

const GET = async ( type = "tv", resource = "550") => {
    const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
  };
  export { GET };
  

