import WantToCookInfo from "./WantToCookInfo";
import PropTypes from 'prop-types';

const WantToCook = ({ wantToCook, handleCurrentlyCooking }) => {
    return (
        <>
            <h3 className="text-dark text-lg lg:text-2xl font-semibold mb-2 lg:mb-4 text-center">Want to cook: 0{ wantToCook.length }</h3>
            <div className="border border-dark/15 w-11/12 lg:w-4/6 mx-auto mb-3 lg:mb-6"></div>
            <div className="overflow-x-auto mb-4 lg:mb-8">
                <table className="w-full text-dark/70 text-xs lg:text-base lg:leading-6 text-left">
                    <thead className="text-darkParagraph text-xs lg:text-base font-medium fira-sans">
                        <tr>
                            <th className="pr-2 lg:pr-6"></th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Name</th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Time</th>
                            <th className="pr-2 lg:pr-4 pb-1 lg:pb-4">Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wantToCook.map((wantToCook, idx) => <WantToCookInfo key={ idx } wantToCook={ wantToCook } idx={ idx } handleCurrentlyCooking={ handleCurrentlyCooking }></WantToCookInfo>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

WantToCook.propTypes = {
    handleCurrentlyCooking: PropTypes.func,
    wantToCook: PropTypes.array
}

export default WantToCook;