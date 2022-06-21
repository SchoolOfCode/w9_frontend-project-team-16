import "./App.css";

import { useState } from "react";
import Homepage from "./components/Homepage";
import Searchpage from "./components/Searchpage";
import Navbar from "./components/Navbar";

function App() {
  const categories = ["Array Methods", "React", "General"];
  const [activeCategory, setActiveCategory] = useState("Array Methods");
  const [activePage, setActivePage] = useState("Homepage");

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
      <Navbar setActivePage={setActivePage} />
      <Homepage
        categories={categories}
        handleToggle={handleToggle}
        activeContent={activeContent}
        activePage={activePage}
      />
      <Searchpage activePage={activePage} />
    </>
  );
}

export default App;
