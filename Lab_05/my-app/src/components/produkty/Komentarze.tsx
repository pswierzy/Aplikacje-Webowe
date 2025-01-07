import React, { useEffect, useState } from "react";
import Komentarz from "./Komentarz.tsx";

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

const Komentarze: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((err) => {
        setError("Błąd w pobieraniu komentarzy: " + err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Ładowanie komentarzy...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>Komentarze</h1>
      {comments.map((comment) => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          likes={comment.likes}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default Komentarze;
