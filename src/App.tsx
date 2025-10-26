import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
import Redux from "./pages/Redux";
import Layout from "./components/LayOut";
import Home from "./pages/Home";
import Tailwind from "./pages/Tailwind";
import TypeScript from "./pages/TypeScript";
import React from "./pages/React";
import Formik from "./pages/Formik";
import ReactQuery from "./pages/ReactQuery";
import Node from "./pages/Node";
import Sql from "./pages/Sql";
import Mongodb from "./pages/Mongodb";
import Sequilize from "./pages/Sequilize";
import Git from "./pages/Git";
import Next from "./pages/Next";
import AWS from "./pages/AWS";
import Docker from "./pages/Docker";
import Jest from "./pages/Jest";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages in Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="tailwind" element={<Tailwind />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="typescript" element={<TypeScript />} />
          <Route path="react" element={<React />} />
          <Route path="formik" element={<Formik />} />
          <Route path="redux" element={<Redux />} />
          <Route path="react-query" element={<ReactQuery />} />
          <Route path="node" element={<Node />} />
          <Route path="sql" element={<Sql />} />
          <Route path="mongodb" element={<Mongodb />} />
          <Route path="sequilize" element={<Sequilize />} />
          <Route path="git" element={<Git />} />
          <Route path="nextjs" element={<Next />} />
          <Route path="aws" element={<AWS />} />
          <Route path="docker" element={<Docker />} />
          <Route path="jest" element={<Jest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
