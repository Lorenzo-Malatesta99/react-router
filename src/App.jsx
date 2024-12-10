import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PostsPage from "./components/PostsPage";
import PostDetailPage from "./components/DetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/blog/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
