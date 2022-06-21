// title (category), description, code snippet - get out of props 

import React from "react";

export default function Result({category, description, snippet}) {
    return(
        <React.Fragment>
            <h3>{category}</h3>
            <p>{description}</p>
            <code>{snippet}</code>
        </React.Fragment>
    )
}