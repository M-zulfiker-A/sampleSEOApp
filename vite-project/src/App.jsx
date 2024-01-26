import { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [post, setPost] = useState({})

  useEffect(() => {
    async function fetchData(){
      const postRes = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
      setPost(postRes)
    }
    fetchData()
    console.log(post)
  },[])

  return (
    <>
    <Helmet>
    <meta name='description' content={post.body} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={"Some type"} />
<meta property="og:title" content={post.title} />
<meta property="og:description" content={post.body} />
    </Helmet>
      {
        post.body ? post.body : "Loading..."
      }
    </>
  )
}

export default App
