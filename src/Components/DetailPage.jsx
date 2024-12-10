import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const postId = id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Errore nel recuperare il post:", error));

    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Errore nel recuperare i post:", error));
  }, [id]);

  const getPreviousPostId = () => {
    const currentIndex = posts.findIndex((post) => post.id === postId);
    if (currentIndex > 0) {
      return posts[currentIndex - 1].id;
    }
    return null;
  };

  const getNextPostId = () => {
    const currentIndex = posts.findIndex((post) => post.id === postId);
    if (currentIndex < posts.length - 1) {
      return posts[currentIndex + 1].id;
    }
    return null;
  };

  if (!post) {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <img src={`/${post.image}`} className="card-img-top" alt={post.title} />
      <p>{post.content}</p>
      <div className="d-flex justify-content-between">
        {getPreviousPostId() && (
          <Link to={`/blog/${getPreviousPostId()}`} className="btn btn-primary">
            Post Precedente
          </Link>
        )}
        {getNextPostId() && (
          <Link to={`/blog/${getNextPostId()}`} className="btn btn-primary">
            Prossimo Post
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
