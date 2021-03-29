import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import postsAPI from "../api/fetchPosts";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    postsAPI
      .fetchPosts()
      .then((posts) => {
        setPosts([...posts.data]);
      })
      .catch((error) => setError({ error }))
      .finally(() => setLoading(false));
  }, []);

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>;
  }

  const getCurrentPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const numberOfPages = Math.ceil(posts.length / postsPerPage);
    return { currentPosts, numberOfPages };
  };


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={getCurrentPosts().currentPosts} />
      <Pagination
        pages={getCurrentPosts().numberOfPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
