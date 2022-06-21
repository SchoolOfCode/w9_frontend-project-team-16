import { useState } from "react";

export default function CategoryBar({
  categories,
  activeCategory,
  handleToggle,
}) {
  const [isClicked, setIsClicked] = useState(false);

  function activeButton() {
    setIsClicked(!isClicked);
  }

  return categories.map((category) => (
    <button
      className={`category-btn ${category === activeCategory ? "active" : ""}`}
      onClick={() => {
        handleToggle(category);
        // activeButton();
      }}
      key={category}
    >
      {category}
    </button>
  ));
}
