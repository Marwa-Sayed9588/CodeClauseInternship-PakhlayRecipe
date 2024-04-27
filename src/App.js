import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import "./styles.css"; // Import the merged styles.css file




const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <>
    <div className="header-paragraph">
      <p align="justify">
                    <strong><br/>- Welcome -</strong><br/>  to Pakhlay Recipe, your ultimate destination for discovering delicious and easy-to-make dishes from various categories of food. From appetizers to desserts, we have a wide range of recipes that cater to every taste and preference. Our carefully curated collection of recipes includes traditional dishes, modern twists, and fusion cuisine, ensuring there is something for everyone to enjoy.

                    At Pakhlay Recipe, we understand the importance of using fresh and quality ingredients in cooking, which is why all our recipes emphasize the use of wholesome and flavorful components. Whether you are a novice in the kitchen or a seasoned chef, our step-by-step instructions and helpful tips make cooking a breeze, allowing you to create restaurant-quality dishes in the comfort of your own home.

                    We believe that food is a universal language that brings people together, and our goal is to inspire and empower home cooks to explore new flavors and culinary experiences. So, whether you are looking to impress your guests at a dinner party or simply want to enjoy a cozy meal with your family, Pakhlay Recipe has got you covered.<br/> <strong>Join us on this culinary journey and let's celebrate the joys of food together.</strong>
                </p>
      </div>
    <div className="container">
      <NavBar/>
      <h2>Search For Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
    
    </>
    
  );
}

export default App;
