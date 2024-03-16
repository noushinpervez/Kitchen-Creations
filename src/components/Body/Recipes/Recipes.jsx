import RecipeCard from "./RecipeCard";
import { useState } from "react";
import { useEffect } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6">
            {
                recipes.map(recipe => <RecipeCard key={ recipe.recipe_id } recipe={ recipe }></RecipeCard>)

            }
        </div>
    );
};

export default Recipes;