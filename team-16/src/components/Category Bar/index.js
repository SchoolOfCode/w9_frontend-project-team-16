export default function CategoryBar({ categories, handleToggle }) {
  return categories.map((category) => (
    <button className="category-btn" onClick={() => handleToggle(category)}>
      {category}
    </button>
  ));
}
