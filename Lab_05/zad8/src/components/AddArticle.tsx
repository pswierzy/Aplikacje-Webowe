import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Typ artykułu
interface Article {
  id: number;
  title: string;
  content: string;
}

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newID: number = JSON.parse(localStorage.getItem("newID") || "0");

    const newArticle: Article = {
      id: newID,
      title,
      content,
    };

    localStorage.setItem("newID", JSON.stringify(newID + 1));

    const storedArticles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    storedArticles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(storedArticles));

    navigate("/blog");
  };

  return (
    <div>
      <h2>Dodaj Artykuł</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Treść:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default AddArticle;
