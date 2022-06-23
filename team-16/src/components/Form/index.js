export default function Form() {
  return (
    <div>
      <label for="category-input">Select a category or type a new one: </label>
      <input
        id="category-input"
        type="text"
        placeholder="Category"
        list="links-category"
        required
      />
      <datalist id="links-category">
        {/* Change this to map through categories state. Needs taken in as a prop */}
        <option>Array Methods</option>
        <option>React</option>
        <option>General</option>
      </datalist>
      <label for="link-input">Insert the URL: </label>
      <input id="link-input" type="text" placeholder="URL" required />
      <label for="description-input">Insert a description: </label>
      <input
        id="description-input"
        type="text"
        placeholder="Description"
        required
      />
      <label for="name-input">Insert your name: </label>
      <input id="name-input" type="text" placeholder="Name" required />
      <button>Submit</button>
    </div>
  );
}
