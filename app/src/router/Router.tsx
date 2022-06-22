import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "../components/pages/Home";
import TodoApp from "../components/pages/TodoApp";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </>
  );
};
