import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";

import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
