import CurrentlyCooking from "./Sidebar/CurrentlyCooking/CurrentlyCooking";
import RecipeCard from "./RecipeCard";
import Title from "./Title";
import WantToCook from "./Sidebar/WantToCook/WantToCook";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handleWantToCook = recipe => {
        let addRecipe = [...wantToCook];

        if (!wantToCook.includes(recipe) && !currentlyCooking.includes(recipe)) {
            addRecipe = [...wantToCook, recipe];
            setWantToCook(addRecipe);
            toast.success(`Added "${recipe.recipe_name}" to "Want to cook"`);
        }
        else {
            toast.error(`"${recipe.recipe_name}" is already in the "${wantToCook.includes(recipe) ? 'Want To Cook' : 'Currently Cooking'}" list`);
        }
    };

    const handleCurrentlyCooking = (id, recipe) => {
        let addCooking = [...currentlyCooking];

        if (!currentlyCooking.includes(recipe)) {
            addCooking = [...currentlyCooking, recipe];
            setCurrentlyCooking(addCooking);
            toast.success(`Added "${recipe.recipe_name}" to "Currently Cooking"`);
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
            <ToastContainer
                position="top-right"
                autoClose={ 3000 }
                limit={ 3 }
                hideProgressBar={ true }
                newestOnTop
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover={ false }
                theme="light"
                transition={ Zoom }
            />
        </>
    );
};

export default Recipes;