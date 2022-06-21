// <ul> that takes in props of results, maps through the results
// and calls a result component for each item in the results array


import Result from "../Result";

export default function ResultList({results}) {
    return(
        <ul>
            {results.map((result) => {
                return <Result key={result.id} category={result.category} description={result.description} snippet={result.snippet}/>
            })}
            
        </ul>
    )
}