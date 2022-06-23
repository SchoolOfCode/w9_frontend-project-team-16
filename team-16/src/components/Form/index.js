import { useState } from 'react';

//POST to links URL
const linksURL = `http://localhost:5001/links`;

export default function Form({ setFormReturn }) {
  //Category state
  const [Category, setCategory] = useState("");
  function handleCategoryInput(event){
    setCategory(event.target.value);
    //console.log(Category);
  }
  //Link state
  const [Link, setLink] = useState("");
  function handleLinkInput(event){
    setLink(event.target.value);
    //console.log(Link);
  }
  //Description state
  const [Description, setDescription] = useState("");
  function handleDescriptionInput(event){
    setDescription(event.target.value);
    //console.log(Description);
  }
  //Contributor state
  const [Name, setName] = useState("");
  function handleNameInput(event){
    setName(event.target.value);
    //console.log(Name);
  }

  //Make the POST request
  async function postLink(){
    const postBody = {
      category: Category,
      link: Link,
      description: Description,
      contributor: Name,
    } 
    console.log(`Calling fetch with ${JSON.stringify(postBody)}`)
    

    const response = await fetch(       
        linksURL,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(postBody) // body data type must match "Content-Type" header
          }
        )
        const responseData = await response.json();
        console.log(responseData.payload);
        setFormReturn(responseData.payload);
  }

  return (
    <div>
      <label for="category-input">Select a category or type a new one: </label>
      <input
        id="category-input"
        type="text"
        placeholder="Category"
        list="links-category"
        required
        onChange={handleCategoryInput}
      />
      <datalist id="links-category">
        {/* Change this to map through categories state. Needs taken in as a prop */}
        <option>Array Methods</option>
        <option>React</option>
        <option>General</option>
      </datalist>
      <label for="link-input">Insert the URL(including http://): </label>
      <input id="link-input" type="text" placeholder="URL" required onChange={handleLinkInput}/>
      <label for="description-input">Insert a description: </label>
      <input
        id="description-input"
        type="text"
        placeholder="Description"
        required
        onChange={handleDescriptionInput}
      />
      <label for="name-input">Insert your name: </label>
      <input id="name-input" type="text" placeholder="Name" required onChange={handleNameInput}/>
      <button onClick={postLink}>Submit</button>
    </div>
  );
}