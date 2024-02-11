import React, { useState } from 'react';

function PostsPage() {
  
  const [posts, setPosts] = useState([
    { title: "first" , body: 'Post 1' , device : "PC" },
    { title: "second" , body: 'Post 2' , device : "TABLET" } ,
    { title: "third" , body: 'Post 3' , device : "TABLET" }
  ]);

  const handleDelete = (id) => {
    
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleUpdate = (id) => {
    
    console.log(`Update post with id: ${id}`);
  };

  return (
    <div>
      <h1>Your Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <button onClick={() => handleUpdate(post.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default PostsPage  ;
