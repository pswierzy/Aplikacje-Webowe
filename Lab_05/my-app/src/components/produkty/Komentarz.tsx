import React, { useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<Comment> = ({ id, body, postId, likes, user }) => {
  const [currentLikes, setCurrentLikes] = useState<number>(likes);

  const handleLike = () => setCurrentLikes((prev) => prev + 1);
  const handleDislike = () => setCurrentLikes((prev) => Math.max(0, prev - 1));

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        maxWidth: "500px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <b>{user.fullName}</b> (@{user.username})
      </div>

      <div style={{ marginBottom: "12px", color: "gray" }}>{body}</div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleLike}
          style={{
            padding: "8px 12px",
            backgroundColor: "green",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          👍
        </button>
        <button
          onClick={handleDislike}
          style={{
            padding: "8px 12px",
            backgroundColor: "red",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          👎
        </button>
        <span style={{ fontSize: "16px", color: "#555" }}>
          {currentLikes} polubień
        </span>
      </div>

      <div
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: "#555",
          marginTop: "10px",
        }}
      >
        ID komentarza: {id}, ID postu: {postId}
      </div>
    </div>
  );
};

export default Komentarz;
