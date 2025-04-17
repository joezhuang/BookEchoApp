import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await client.getEntries({
        content_type: 'bookEchoBlogs',
        'fields.slug': slug,
        limit: 1
      });

      if (response.items.length > 0) {
        setPost(response.items[0]);
      } else {
        setPost(null);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <p>Loading or Post not found.</p>;
  }

return (
  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h1>{post.fields.title}</h1>
    <div style={{ textAlign: 'left' }}>
      {documentToReactComponents(post.fields.content)}
    </div>
  </div>
)}
export default BlogDetailPage;
