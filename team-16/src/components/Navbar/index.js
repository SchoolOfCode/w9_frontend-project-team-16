export default function Navbar({ setActivePage }) {
  return (
    <>
      <button onClick={() => setActivePage("Homepage")}>Home</button>
      <button onClick={() => setActivePage("Searchpage")}>Search</button>
    </>
  );
}
