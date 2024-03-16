import CurrentlyCooking from "./Sidebar/CurrentlyCooking/CurrentlyCooking";
import RecipeCard from "./RecipeCard";
import Title from "./Title";
import WantToCook from "./Sidebar/WantToCook/WantToCook";
import { useState } from "react";
import { useEffect } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handleWantToCook = recipe => {
        let addRecipe = [...wantToCook];

        if (!wantToCook.includes(recipe) && !currentlyCooking.includes(recipe)) {
            addRecipe = [...wantToCook, recipe];
            setWantToCook(addRecipe);
        }
    };

    const handleCurrentlyCooking = (id, recipe) => {
        let addCooking = [...currentlyCooking];

        if (!currentlyCooking.includes(recipe)) {
            addCooking = [...currentlyCooking, recipe];
            setCurrentlyCooking(addCooking);
        }

        const remainingWantToCook = wantToCook.filter(wantToCook => wantToCook.recipe_id !== id);
        setWantToCook(remainingWantToCook);
    };

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <>
            <Title></Title>
            <div className="flex flex-col lg:flex-row gap-6 mb-6 lg:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-6">
                    {
                        recipes.map(recipe => <RecipeCard key={ recipe.recipe_id } recipe={ recipe } handleWantToCook={ handleWantToCook }></RecipeCard>)
                    }
                </div>
                <div className="border border-dark/20 rounded-2xl text-darkParagraph py-3 lg:py-8 basis-1/2 flex-1 md:w-fit md:mx-auto">
                    <WantToCook wantToCook={ wantToCook } handleCurrentlyCooking={ handleCurrentlyCooking }></WantToCook>
                    <CurrentlyCooking currentlyCooking={ currentlyCooking } ></CurrentlyCooking>
                </div>
            </div>
        </>
    );
};

export default Recipes;