const WantToCook = () => {
    return (
        <>
            <h3 className="text-dark text-2xl font-semibold mb-4 text-center">Want to cook: 01</h3>
            <div className="border border-dark/15 w-4/6 mx-auto mb-6"></div>
            <div className="overflow-x-auto mb-8">
                <table className="w-full text-dark/70 text-base leading-6 text-left">
                    {/* <!-- head --> */ }
                    <thead className="text-darkParagraph text-base font-medium">
                        <tr>
                            <th></th>
                            <th className="pb-4">Name</th>
                            <th className="pb-4">Time</th>
                            <th className="pb-4">Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-dark/5">
                        {/* <!-- row 1 --> */ }
                        <tr>
                            <th className="px-6 py-4">1</th>
                            <td className="pr-4 py-4">Chicken Caesar Salad</td>
                            <td className="pr-6 py-4">20 mins</td>
                            <td className="pr-6 py-4">400 calories</td>
                            <td className="pr-6 py-4"><button className="btn glass bg-buttonColor rounded-full hover:border-none hover:ring-buttonColor hover:ring-2 font-medium text-base transition-all duration-300 ease-in hover:bg-transparent">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default WantToCook;