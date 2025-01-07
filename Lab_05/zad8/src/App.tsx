import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Blog z artykułami</h1>
        <nav>
          <Link to="/">Strona Główna</Link> | <Link to="/blog">Blog</Link> |{" "}
          <Link to="/dodaj">Dodaj Artykuł</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Witamy na stronie głównej!</h2>} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
