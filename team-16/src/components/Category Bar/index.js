import { useState } from "react";

export default function CategoryBar({ categories, handleToggle }) {
  const [isClicked, setIsClicked] = useState(false);

  function activeButton() {
    setIsClicked(!isClicked);
  }

  return categories.map((category) => (
    <button
      className="category-btn"
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
