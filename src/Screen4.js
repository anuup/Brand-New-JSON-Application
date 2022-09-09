import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { useEffect,useState } from 'react'

function Screen4() {
    const [posts,setPosts] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => setPosts(posts))

  }, [])
  
  return (
    <div className='blue'>
<h2>FETCH</h2>
<Container>

<Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title><h1>All Details</h1></Card.Title>
        
        
      </Card.Body>
    </Card>
    </Container>
{posts.map((Post)=>
<div>
<b>{Post.title}</b>
<h2>{Post.body}</h2>

</div>


)}

    </div>

  )

}

export default Screen4