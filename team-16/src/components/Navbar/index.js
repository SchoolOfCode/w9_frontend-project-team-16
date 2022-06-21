export default function Navbar({ setActivePage }) {
  return (
    <nav>
      {/* <img alt="logo" src="../../../public/soc-logo.png" /> */}
      <button onClick={() => setActivePage("Homepage")}>Home</button>
      <button onClick={() => setActivePage("Searchpage")}>Search</button>
    </nav>
  );
}
