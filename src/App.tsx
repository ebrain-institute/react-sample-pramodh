
import { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
  id:number;
  title:string
}

export default function App() {
 const [error, setError] = useState();
 const [isLoading, setLoading] = useState(false);
 const [posts, setPost]= useState<Post[]>([]);
 const [page, setPage] = useState(1)

 const abortControllerRef = useRef(null)

 useEffect(()=>{

  const fetchPosts = async ()=>{
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController ();

    setLoading(true);
    console.log(page)
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        signal: abortControllerRef.current.signal
      });
      const postsData = (await response.json() as Post);
      setPost(postsData);
    }catch(error:any){
      setError(error)
    }

    setLoading(false);
  }

    fetchPosts();

 }, [page])

 if(isLoading){
  return <div> Loading </div>
 }

 if(error){
      return <div> Something went wrong!</div>
 }

  return (
    <div>
        <h1> Data fetching in React</h1>
        <button onClick={()=>setPage(page + 1)}>Increase page</button>
        <ul>
          {posts.map((post)=>  {
                  return <li key={post.id}> {post.title} </li>

          })

          }
        </ul>

 
    
    </div>
  );
}