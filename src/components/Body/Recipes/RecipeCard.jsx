const RecipeCard = ({ recipe }) => {
    const { recipe_name, short_description, recipe_image_url, ingredients, preparing_time, calories } = recipe;

    console.log(recipe);
    return (
        <div className="border border-dark/20 p-6 rounded-2xl text-darkParagraph hover:ring-2 hover:ring-buttonColor hover:bg-hover/20 transition-all duration-300 ease-in">
            <div className="mb-6 h-48">
                <img src={ recipe_image_url } alt="" className="rounded-2xl w-full h-full object-cover" />
            </div>
            <h2 className="text-dark text-xl font-semibold mb-4">{ recipe_name }</h2>
            <p className="text-base leading-7 mb-4">{ short_description }</p>
            <div className="border border-dark/10 mb-6"></div>
            <h3 className="text-dark text-lg font-medium mb-4">Ingredients: { ingredients.length }</h3>
            {
                <ul className="text-lg leading-7 list-disc list-inside pl-3 mb-4 truncate">
                    <li>{ ingredients[0] }</li>
                    <li>{ ingredients[2] }</li>
                    <li>{ ingredients[3] }</li>
                </ul>
            }
            <div className="border border-dark/10 mb-6"></div>
            <div className="flex gap-4 text-dark/80 text-base mb-6">
                <div className="flex gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_22_7)">
                            <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 12H15.5" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 7V12" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_22_7">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>{ preparing_time }</p>
                </div>
                <div className="flex gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_36_169)">
                            <path d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_36_169">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>{ calories }</p>
                </div>
            </div>
            <div>
                <button className="btn glass bg-buttonColor rounded-full hover:border-none hover:ring-buttonColor hover:ring-2 font-medium text-lg px-6 py-3 h-full transition-all duration-300 ease-in hover:bg-transparent">Want to Cook</button>
            </div>
        </div>
    );
};

export default RecipeCard;