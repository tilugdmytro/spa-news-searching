import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ArticleView from "./views/ArticleView";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container style={{ padding: "50px 75px 63px 75px" }} maxWidth="false">
        <Routes>
          <Route path="/" index element={<HomeView />} />
          <Route path="/article/:articleId" element={<ArticleView />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
