Component Tree

Home page
Navbar
-home button
-search button

Category Bar
State: to render which category of links to display
-button (x number of Categories)

Collapsible component (list of links)
Props: category
Render: List of links


Search page
Search
-text input
-search button
-random button

Resultlist
-ul

Result
-React.Fragment
-title
-description
-code snippet

App

behaviour

- render home page & search page

Home page
state (list of links for each category)
behaviour

- render the navbar component
- render the category component

Navbar
behaviour

- render the navigation

Search page
state

- search results
  behaviour
- render Navbar component
- render the search component
- render the resultlist component

Resultlist
props

- search results
  behaviour
- render the Result component

Result
props

- singular result
  behaviour
- render the title(category), description and code snippet

Search
props

- a function to update search state
  behaviour
- take text input from users
- use the text input to search the database
- make a random search from the database
