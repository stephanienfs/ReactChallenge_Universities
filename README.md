# ReactChallenge_Universities

### Set up the project: run the following commands
- yarn install
- In a new terminal run this to set-up the local api: json-server data/db.json -p 3333 -w
- yarn dev
  
  ENJOY!! :) 

### Requirements

* Important
  * Use Redux to manage the GLOBAL state of the components you consider.
  * Use the HOOK's provided by react.

* Layout is up to you but follow the requirements:
* Styles
  * Create a Global Style and add to your project.
      Ex.: Font size, font, color, ...
  * Create at least one Styled Component and use it in all pages.
      Ex.: input, button

* Page Universities
    - Fetch data about universities specified: Argentina, Uruguay, Paraguay, and Chile. 
    - Create a local API if it's needed
    - Add a select-options in order to be able to choose a country.
    - Display:
    - A chart where the user can see the number of Universities by Country
    - The list of universities should be displayed filtered by country: the user should be able to change the country at any time. 

* Page Books
    -  Fetch data about books from this API: 'https://www.anapioficeandfire.com/api/books'
    Display .
    - At least 10 books with their information.
    - Allow the user search a book by name, and display only the book that the user searched.
