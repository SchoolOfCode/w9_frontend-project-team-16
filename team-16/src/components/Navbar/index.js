export default function Navbar({ setActivePage }) {
  return (
    <nav>
      <button onClick={() => setActivePage("Homepage")}>Home</button>
      <button onClick={() => setActivePage("Searchpage")}>Search</button>
    </nav>
  );
}
