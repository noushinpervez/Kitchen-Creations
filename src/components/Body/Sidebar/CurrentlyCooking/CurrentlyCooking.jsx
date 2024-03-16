import CurrentlyCookingRecipe from "./CurrentlyCookingRecipe";
import PropTypes from 'prop-types';

const CurrentlyCooking = ({ currentlyCooking }) => {
    const totalTime = currentlyCooking.reduce((acc, recipe) => {
        const timeParts = recipe.preparing_time.split(' ');
        const time = parseInt(timeParts[0]);
        return acc + time;
    }, 0);

    const totalCalories = currentlyCooking.reduce((acc, recipe) => {
        const caloriesParts = recipe.calories.split(' ');
        const calories = parseInt(caloriesParts[0]);
        return acc + calories;
    }, 0);

    return (
        <>
            <h3 className="text-dark text-lg lg:text-2xl font-semibold mb-2 lg:mb-4 text-center">Currently cooking: 0{ currentlyCooking.length }</h3>
            <div className="border border-dark/15 w-11/12 lg:w-4/6 mx-auto mb-3 lg:mb-6"></div>
            <div className="overflow-x-auto">
                <table className="w-full text-dark/70 text-xs lg:text-base lg:leading-6 text-left">
                    <thead className="text-darkParagraph text-xs lg:text-base font-medium fira-sans">
                        <tr>
                            <th className="pr-2 lg:pr-6"></th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Name</th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Time</th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentlyCooking.map((currentlyCooking, idx) => <CurrentlyCookingRecipe key={ idx } currentlyCooking={ currentlyCooking } idx={ idx }></CurrentlyCookingRecipe>)
                        }
                        <tr className="text-dark/80 text-xs lg:text-base font-medium lg:leading-7">
                            <th></th>
                            <td></td>
                            <td className="pr-2 lg:pr-4 pt-2 lg:pt-4 w-1/4">Total Time = { totalTime } minutes</td>
                            <td className="pr-2 lg:pr-4 pt-2 lg:pt-4 w-[30%]">Total Calories = { totalCalories } calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.array
}

export default CurrentlyCooking;