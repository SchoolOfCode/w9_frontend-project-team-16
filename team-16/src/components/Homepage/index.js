// import Navbar from "./components/Navbar";
import CategoryBar from "../Category Bar";
import Callapsible from "../Collapsible";

export default function Homepage({
  categories,
  handleToggle,
  activeContent,
  activePage,
}) {
  if (activePage === "Homepage") {
    return (
      <>
        <h1>School of Code Revision</h1>
        <p>
          View the links below to external resources or switch over to the
          "search tab" to find some specific code snippets
        </p>
        {/* <Navbar /> */}
        <CategoryBar categories={categories} handleToggle={handleToggle} />
        <Callapsible resourceLinks={activeContent} />
      </>
    );
  }
  return <></>;
}
