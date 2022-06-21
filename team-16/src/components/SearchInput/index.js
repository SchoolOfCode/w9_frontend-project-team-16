// 3 inputs: ConfirmSearch button, RandomSearch button, SearchFieldInput
//

import React from 'react'; 

export default function SearchInput() {
    return(
        <React.Fragment>
            <button>Search</button>
            <button>Random</button>
            <input type='text' placeholder='Search by Category'></input>
        </React.Fragment>
    )
}