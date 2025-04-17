// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const BlogListPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch the list of posts from a JSON file or a backend endpoint
// const fetchPosts = async () => {
//   try {
//     const response = await fetch('posts/posts.json');
    
//     // Check if the response is OK (status code 200)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     setPosts(data);
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//   }
// };

//     fetchPosts();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>BookEcho Blog</h1>
//       <ul>
//         {posts.length === 0 ? (
//           <li>Loading...</li>
//         ) : (
//           posts.map((post) => (
//             <li key={post.slug}>
//               <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default BlogListPage;


// import React, { useEffect, useState } from 'react';
// import client from '../api/contentfulClient';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const BlogListPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await client.getEntries({ content_type: 'blogPosts' });
//       // const response = await client.getEntry("645GG2ZDMQ8U3VvLUWbhMe").then((entry) => console.log(entry));
      
//       setPosts(response.items);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       {posts.map(post => (
//         <div key={post.sys.id}>
//           <h2>{post.fields.title}</h2>
//           <p>{documentToReactComponents(post.fields.content)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogListPage;

import React, { useEffect, useState } from 'react';
import client from '../api/contentfulClient';
import { Link } from 'react-router-dom';

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getEntries({ content_type: 'blogPosts' });
      setPosts(response.items);
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.sys.id}>
          <h2>
            <Link to={`/blogs/${post.fields.slug}`}>{post.fields.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BlogListPage;
