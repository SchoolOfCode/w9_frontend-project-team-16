// title (category), description, code snippet - get out of props 

import React from "react";
import './Result.css';

export default function Result({category, description, snippet}) {
    return(
        <div className="result">
            <h3 className="result-header">{category}</h3>
            <p className="result-description">{description}</p>
            <div className="code-block">
                <code className="result-code">{snippet}</code>
            </div>
        </div>
    )
}