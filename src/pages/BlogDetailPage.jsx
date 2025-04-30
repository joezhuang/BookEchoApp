import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await client.getEntries({
  //       content_type: 'bookEchoBlogs',
  //       'fields.slug': slug,
  //       limit: 1
  //     });

  //     if (response.items.length > 0) {
  //       setPost(response.items[0]);
  //     } else {
  //       setPost(null);
  //     }
  //   };

  //   fetchPost();
  // }, [slug]);

  useEffect(() => {
  const fetchPost = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'bookEchoBlogs',
        // content_type: 'blogPosts',
        'fields.slug': slug,
        limit: 1
      });

      if (response.items.length > 0) {
        setPost(response.items[0]);
      } else {
        setPost(null);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost(null);
    }
  };

  fetchPost();
}, [slug]);

  if (!post) {
    return <p>Loading or Post not found.</p>;
  }

  // console.log('post.fields.firstP: ', post.fields.firstP)
return (
  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h2>{post.fields.title}</h2>
    <h3>{post.fields.subtitle && documentToReactComponents(post.fields.subtitle)}</h3>
    <div style={{ textAlign: 'left' }}>
  {post.fields.firstP && documentToReactComponents(post.fields.firstP)}
</div>
<div style={{ textAlign: 'left' }}>
  {post.fields.firstMedia && documentToReactComponents(post.fields.firstMedia)}
</div>
    {/* <div style={{ textAlign: 'left' }}>
  {post.fields.firstP && documentToReactComponents(post.fields.firstP)}
</div> */}
{/* <div style={{ textAlign: 'left' }}>
  {post.fields.firstMedia && documentToReactComponents(post.fields.firstMedia)}
</div> */}
{/* <div style={{ textAlign: 'left' }}> */}
  {/* {post.fields.firstP && documentToReactComponents(post.fields.firstP.content.map(item => <div style={{ textAlign: 'left' }}>item</div>))} */}
{/* </div> */}

{/* <div style={{ textAlign: 'left' }}>
  {post.fields.firstMedia && post.fields.firstMedia.fields ? (
    <img
      src={post.fields.firstMedia.fields.file.url}
      alt={post.fields.firstMedia.fields.title}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  ) : (
    documentToReactComponents(post.fields.firstMedia)
  )}
</div> */}
  </div>
)}
export default BlogDetailPage;
