import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
// import { Home } from "../components/pages/Home";
import Home from "../components/pages/Home";
import Todo from "../components/pages/Todo";

// import { Todo } from "../components/pages/Todo";
//
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};
