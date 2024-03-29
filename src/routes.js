// This file is included in App.js for brevity

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleDetails from "./ArticleDetails";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/article/:id" element={<ArticleDetails />} />
    </Routes>
  </Router>
);

export default routes;
