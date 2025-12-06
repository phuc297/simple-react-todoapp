import { useState } from "react";
import Layout from './Layout.jsx'
import TodoApp from "./components/TodoApp.jsx";

export default function App() {
  return (
    <>
      <Layout>
        <TodoApp></TodoApp>
      </Layout>
    </>
  );
}
