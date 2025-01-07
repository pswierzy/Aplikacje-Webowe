import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
}

const BlogList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    setArticles(storedArticles);
  }, []);

  return (
    <div>
      <h2>Lista Artykułów</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
