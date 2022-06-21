// 3 inputs: ConfirmSearch button, RandomSearch button, SearchFieldInput
//

import React, {useState} from 'react'; 

export default function SearchInput() {
    const [Text, setText] = useState("")
    function updateText(event){
        setText(event.target.value);
        console.log(Text);
    }

    return(
        <React.Fragment>
            <button>Search</button>
            <button>Random</button>
            <input type='text' placeholder='Search by Category' onChange={updateText}></input>
        </React.Fragment>
    )
}