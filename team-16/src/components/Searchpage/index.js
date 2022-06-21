import SearchInput from '../SearchInput/index.js';
import ResultList from '../ResultList/index.js';

export default function Searchpage({ activePage }) {
  if (activePage === "Searchpage") {
    return (
      <>
        <h1>The <s>School</s> Search of Code</h1>
        <SearchInput />
        <ResultList />
      </>
    );
  }
  return <></>;
}
