export default function CategoryBar({ categories, handleToggle }) {
  return categories.map((category) => (
    <button
      className={category}
      onClick={() => handleToggle(category)}
      key={category}
    >
      {category}
    </button>
  ));
}
