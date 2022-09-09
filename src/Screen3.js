import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import { useEffect,useState } from 'react'

function Screen3() {
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
        <Card.Text>
          <Link to={"Screen4"}>Further More</Link>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Container>
{posts.map((Post)=>
<div>
  <Table>
    <thead>
<th>{Post.title}</th>
<th>{Post.body}</th>
</thead>
</Table>
</div>


)}

    </div>

  )

}

export default Screen3