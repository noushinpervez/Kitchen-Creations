import Recipes from "./Recipes/Recipes";
import CurrentlyCooking from "./Sidebar/CurrentlyCooking";
import WantToCook from "./Sidebar/WantToCook";

const Body = () => {
    return (
        <div>
            <div className="text-center w-2/3 mx-auto mt-24 mb-12">
                <h3 className="text-4xl font-semibold mb-6">Our Recipes</h3>
                <p className="text-base leading-7 text-textColor/60">Explore our simple yet delicious recipe collection designed to bring joy to your kitchen. With easy-to-follow instructions and flavorful ingredients, cooking has never been more delightful.</p>
            </div>
            <div className="flex flex-row gap-6 mb-24">
                <Recipes></Recipes>
                <div className="border border-dark/20 rounded-2xl text-darkParagraph py-8 basis-1/2">
                    <WantToCook></WantToCook>
                    <CurrentlyCooking></CurrentlyCooking>
                </div>
            </div>
        </div>
    );
};

export default Body;