import { useState, useEffect } from "react";
import CategoryBar from "../Category Bar";
import Callapsible from "../Collapsible";
import "./index.css";

export default function Homepage({
  categories,
  setCategories,
  activeCategory,
  setActiveCategory,
  FormReturnData,
}) {
  const [resourceLinks, setResourceLinks] = useState([]);

  const linksURL = `http://localhost:5001/links`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(linksURL);
      const responseJSON = await response.json();

      setResourceLinks(responseJSON.payload);

      const payloadArray = responseJSON.payload;
      let categoryArray = [];

      for (let i = 0; i < payloadArray.length; i++) {
        if (!categoryArray.includes(payloadArray[i].category)) {
          categoryArray.push(payloadArray[i].category);
        }
        setCategories(categoryArray);
      }
    }
    fetchData();
  }, [FormReturnData]);

  const handleToggle = (category) => {
    console.log(category);
    setActiveCategory(category);
  };

  const activeContent = resourceLinks.filter(
    (resource) => resource.category === activeCategory
  );

  return (
    <div className="home-container">
      <div className="header">
        <h1>School of Code Revision</h1>
        <p>
          View the links below to external resources, submit your own links{" "}
          <br></br>or switch over to the "search" tab to find some specific code
          snippets.
        </p>
      </div>
      {/* <Navbar /> */}
      <CategoryBar
        categories={categories}
        activeCategory={activeCategory}
        handleToggle={handleToggle}
      />
      <Callapsible resourceLinks={activeContent} />
    </div>
  );
}
