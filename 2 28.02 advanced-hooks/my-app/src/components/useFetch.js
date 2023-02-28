import {useState, useEffect} from 'react'

export default function useFetch(url) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, [url]);

  return [posts]
}
