// <ul> that takes in props of results, maps through the results
// and calls a result component for each item in the results array


import Result from "../Result";

export default function ResultList({results}) {
    console.log(results)
    return(
        <ul>
            {results === "No results found" 
            ? <p>{results}</p>
            : results.map((result) => {
                    return <Result 
                    key={result.id}
                    category={result.category}
                    description={result.description}
                    snippet={result.snippet}/>
                    }
                )
            }
        </ul>
    )
}