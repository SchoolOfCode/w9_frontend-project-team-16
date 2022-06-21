// <ul> that maps through the results of the req
// and calls a result component for each item in the results

import Result from "../Result";

export default function ResultList() {
    return(
        <ul>
            <Result/>
        </ul>
    )
}