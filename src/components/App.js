import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Articlelist from "./Articlelist";

console.log(blogData);
const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "April 20, 2025",
    preview: "This post will help you get started with React step by step."
  },
  {
    id: 2,
    title: "Understanding Props and State",
    date: "April 22, 2025",
    preview: "Let's dive into props and state in React and how they work together."
  }
]

function App() {

  return (
    <div className="App">
     <Header name="First Blog"/>
     <About image="https://via.placeholder.com/215" about="Hello this is my first blog"/>
     <Articlelist posts={posts}/>
    </div>
  );
}

export default App;
