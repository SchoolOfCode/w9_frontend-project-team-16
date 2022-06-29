import { useState } from "react";
import Homepage from "./components/Homepage";
import Searchpage from "./components/SearchPage";
import Submitpage from "./components/SubmitPage";
import Navbar from "./components/Navbar";

function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Array Methods");
  const [activePage, setActivePage] = useState("Homepage");
  const [formReturnData, setFormReturnData] = useState([]);

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      {activePage === "Homepage" ? (
        <Homepage
          categories={categories}
          setCategories={setCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          FormReturnData={formReturnData}
        />
      ) : null}
      {activePage === "Searchpage" ? <Searchpage /> : null}
      {activePage === "Submitpage" ? (
        <Submitpage
          formReturnData={formReturnData}
          setFormReturnData={setFormReturnData}
          categories={categories}
        />
      ) : null}
    </>
  );
}

export default App;
