import "./App.css";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/Category Bar";
import Callapsible from "./components/Collapsible";
import { useState } from "react";

function App() {
  const categories = ["Array Methods", "React", "General"];
  const [activeCategory, setActiveCategory] = useState("Array Methods");

  const resourceLinks = [
    {
      category: "Array Methods",
      link: "https://lodash.com/",
      description: "Powerful Library for working with arrays",
      contributor: "Christophe Charbonneau-Freeston",
    },
    {
      category: "React",
      link: "https://beta.reactjs.org/learn",
      description: "React Beta Docs",
      contributor: "Lecture",
    },
    {
      category: "React",
      link: "https://react-icons.github.io/react-icons/",
      description:
        "React Icon library which includes many cool things like Font Awesome",
      contributor: "Helena Archer",
    },
    {
      category: "React",
      link: "https://www.developerway.com/posts/react-key-attribute",
      description: "Best and bad practices for keys",
      contributor: "Brycen Barron-Borden",
    },
    {
      category: "React",
      link: "https://www.youtube.com/watch?v=4pO-HcG2igk",
      description: "useState Hook",
      contributor: "Arshi Sheikh",
    },
    {
      category: "General",
      link: "https://www.youtube.com/watch?v=4pO-HcG2igk",
      description: "useState Hook",
      contributor: "Arshi Sheikh",
    },
  ];

  const handleToggle = (category) => {
    console.log(category);
    setActiveCategory(category);
  };

  const activeContent = resourceLinks.filter(
    (resource) => resource.category === activeCategory
  );

  return (
    <>
      <h1>School of Code Revision</h1>
      <p>
        View the links below to external resources or switch over to the "search
        tab" to find some specific code snippets
      </p>
      {/* <Navbar /> */}
      <CategoryBar categories={categories} handleToggle={handleToggle} />
      <Callapsible resourceLinks={activeContent} />
    </>
  );
}

export default App;
