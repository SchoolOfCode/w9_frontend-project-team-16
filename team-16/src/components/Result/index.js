// title (category), description, code snippet - get out of props 

import React from "react";

export default function Result() {
    return(
        <React.Fragment>
            <h3>Category</h3>
            <p>Description of code snippet.</p>
            <code>function hello() {"{"}console.log('hello world'){"}"}; </code>
        </React.Fragment>
    )
}