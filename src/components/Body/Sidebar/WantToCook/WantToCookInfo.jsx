import PropTypes from 'prop-types';

const WantToCookInfo = ({ idx, wantToCook, handleCurrentlyCooking }) => {
    return (
        <tr className="bg-dark/5 fira-sans">
            <th className="px-2 lg:px-6 lg:py-4">{ idx + 1 }</th>
            <td className="pr-2 lg:pr-4 lg:py-4">{ wantToCook.recipe_name }</td>
            <td className="pr-2 lg:pr-4 lg:py-4">{ wantToCook.preparing_time }</td>
            <td className="pr-2 lg:pr-4 lg:py-4">{ wantToCook.calories }</td>
            <td className="pr-2 lg:pr-6 py-1 lg:py-4"><button onClick={ () => handleCurrentlyCooking(wantToCook.recipe_id, wantToCook) } className="btn glass bg-buttonColor rounded-full hover:border-none hover:ring-buttonColor hover:ring-2 font-medium text-xs lg:text-base transition-all duration-300 ease-in hover:bg-transparent">Preparing</button></td>
        </tr>
    );
};

WantToCookInfo.propTypes = {
    handleCurrentlyCooking: PropTypes.func,
    wantToCook: PropTypes.array,
    idx: PropTypes.number
}

export default WantToCookInfo;