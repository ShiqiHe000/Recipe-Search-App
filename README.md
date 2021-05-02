# Recipe Search App
Find your favourate recipe by this App! Built with React. The recipes are provided by [Edamam](https://www.edamam.com/). 

## Dependency
* [Edamam](https://www.edamam.com/) is a recipe search API. To use this App, you need an account (free) at Edamam. 
  Once you have your account, in `Dashboard` -- `Applications`, you can find your `API_ID` and `API_KEY` for Recipe Search API. 
  
  Then inside `/src` folder, create a new folder called `config` and enter the folder
  ```
  mkdir config && cd config
  ```
  
  Create a `keys.js` file and put your `API_ID` and `API_KEY` in it: 
  ```
  touch keys.js
  API_ID="your api id"
  API_KEY="your api key"
  ```
  
  Then you are ready to search your favouriate recipes!
  
 ## How to start? 
 * `npm intall` -- get all the dependencies. 
 * `npm start` -- the app will fire up in your browser. 
 * Enter the name of your favourate food in the search bar and search!
