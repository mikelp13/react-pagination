import React from "react";

const Posts = ({ posts }) => {
  return (
    <ul className="list-group my-4">
      {posts.map(({ title, body }, idx) => (
        <li key={idx} className="list-group-item">
          <p className="h4">{title}</p>
          <p className="lead">{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
