import {useEffect, useState} from 'react'
import BootstrapSpinner from '../BootstrapSpinner/BootstrapSpinner';
import PostItem from '../PostItem/PostItem'


export default function ListPosts() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //fetch data from our endpoint (http get request)
        const fetchedPosts = await response.json(); //converting our json response into js object.
        // console.log("The fetched posts are", fetchedPosts);
        if(mounted) {
            //only update the state when the component is mounted
            console.log("Setting items");
            setIsLoading(false);
            setPosts(fetchedPosts);
        }
     
    }

    loadPosts();

    return () => {
        //this will be run before useEffect is called 
        //this will be run when component unmounts.
        console.log("the listcomponent unmounted");
        mounted = false;
    }

  }, [])

  

  return (
    <div>
        {/* conditional rendering if isLoading = true we display spinner 
        if isloading = false we display list of posts */}
        {isLoading ? <BootstrapSpinner /> : (posts.map((post) =>(<PostItem key={post.id} post={post} />)))}
    </div>
  )
}
