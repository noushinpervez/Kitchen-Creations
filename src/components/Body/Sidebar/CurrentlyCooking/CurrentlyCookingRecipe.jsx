import PropTypes from 'prop-types';

const CurrentlyCookingRecipe = ({ idx, currentlyCooking }) => {
    return (
        <tr className="bg-dark/5 fira-sans">
            <th className="px-3 lg:px-6 py-2 lg:py-4">{ idx + 1 }</th>
            <td className="pr-3 lg:pr-6 py-2 lg:py-4">{ currentlyCooking.recipe_name }</td>
            <td className="pr-3 lg:pr-6 py-2 lg:py-4">{ currentlyCooking.preparing_time }</td>
            <td className="pr-3 lg:pr-6 py-2 lg:py-4">{ currentlyCooking.calories }</td>
        </tr>
    );
};

CurrentlyCookingRecipe.propTypes = {
    currentlyCooking: PropTypes.object,
    idx: PropTypes.number
}

export default CurrentlyCookingRecipe;