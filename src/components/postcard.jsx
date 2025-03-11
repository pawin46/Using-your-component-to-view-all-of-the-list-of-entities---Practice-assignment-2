// import React from "react";
import LikeButton from "./likebutton.jsx"; 

function PostCard ( post ) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "16px",
    width: "300px",
    backgroundColor: "#fff",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const imageStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const usernameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <div style={profileStyle}>
        <img src={post.profileImage} alt={post.username} style={imageStyle} />
        <span style={usernameStyle}>{post.username}</span>
      </div>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;