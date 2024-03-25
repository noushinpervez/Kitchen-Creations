import PropTypes from 'prop-types';
import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";

const RecipeCard = ({ recipe, handleWantToCook }) => {
    const { recipe_name, short_description, recipe_image_url, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="border border-dark/20 p-3 lg:p-6 rounded-2xl text-darkParagraph hover:ring-2 hover:ring-buttonColor hover:bg-hover/20 transition-all duration-300 ease-in flex flex-col">
            <div className="mb-3 lg:mb-6 h-48">
                <img src={ recipe_image_url } alt={ `${recipe_name}` } className="rounded-2xl w-full h-full object-cover" />
            </div>
            <h2 className="text-dark text-base lg:text-xl font-semibold mb-2 lg:mb-4">{ recipe_name }</h2>
            <p className="text-xs lg:text-base lg:leading-7 mb-2 lg:mb-4 fira-sans">{ short_description }</p>
            <div className="border border-dark/10 mb-3 lg:mb-6"></div>
            <h3 className="text-dark text-sm lg:text-lg font-medium mb-2 lg:mb-4">Ingredients: { ingredients.length }</h3>
            {
                <ul className="text-sm lg:text-lg lg:leading-7 list-disc list-inside pl-3 mb-2 lg:mb-4 truncate fira-sans">
                    <li>{ ingredients[0] }</li>
                    <li>{ ingredients[2] }</li>
                    <li>{ ingredients[3] }</li>
                </ul>
            }
            <div className="border border-dark/10 mb-3 lg:mb-6"></div>
            <div className="flex gap-4 text-dark/80 text-xs lg:text-base mb-3 lg:mb-6 fira-sans">
                <div className="flex gap-2 items-center justify-center">
                    <LuClock3 />
                    <p>{ preparing_time }</p>
                </div>
                <div className="flex gap-2 items-center">
                    <AiOutlineFire />
                    <p>{ calories }</p>
                </div>
            </div>
            <div>
                <button onClick={ () => handleWantToCook(recipe) } className="btn glass bg-buttonColor rounded-full hover:border-none hover:ring-buttonColor hover:ring-2 font-medium text-sm lg:text-lg lg:px-6 lg:py-3 h-full transition-all duration-300 ease-in hover:bg-transparent">Want to Cook</button>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    handleWantToCook: PropTypes.func,
    recipe: PropTypes.object
}

export default RecipeCard;