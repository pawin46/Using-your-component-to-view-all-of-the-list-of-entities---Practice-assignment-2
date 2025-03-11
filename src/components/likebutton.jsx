/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const buttonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: liked ? "red" : "#ddd",
    color: liked ? "white" : "black",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => setLiked((prevLiked) => !prevLiked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
