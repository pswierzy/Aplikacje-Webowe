import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const storedArticles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    const foundArticle: Article | undefined = storedArticles.find(
      (article) => article.id === Number(id)
    );

    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      navigate("/blog");
    }
  }, []);

  if (!article) return <div>Ładowanie artykułu...</div>;

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
};

export default Article;
