import "./App.css";

import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Searchpage from "./components/Searchpage";
import Navbar from "./components/Navbar";

function App() {
  const categories = ["Array Methods", "React", "General"];
  const [activeCategory, setActiveCategory] = useState("Array Methods");
  const [activePage, setActivePage] = useState("Homepage");

  const [resourceLinks, setResourceLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5001/links`);
      const responseJSON = await response.json();
      setResourceLinks(responseJSON.payload);
    }
    fetchData();
  }, []);

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
