import React,{useEffect,useState}  from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "70dda231";
  const APP_KEY = "9650d5c1191aabd58a7c8fe949f61a55";
  

  const[recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState("");
  const[query,setQuery] = useState('chicken');


  useEffect(() => {
    const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    }
    getRecipes();  
  },[query]);


  const updateSearch = e => {
    setSearch(e.target.value);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <h1 className="main-heading">RECIPE SEARCH</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
    );  
  }

export default App;
