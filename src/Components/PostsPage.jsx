import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Errore nel recuperare i post:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">I Miei Post</h1>
      <div className="row">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-md-4 mb-3 d-flex align-items-stretch"
          >
            <div className="card">
              <img
                src={`/${post.image}`}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text flex-grow-1">{post.content}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Leggi di più
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
