const CurrentlyCooking = () => {
    return (
        <>
            <h3 className="text-dark text-2xl font-semibold mb-4 text-center">Currently cooking: 02</h3>
            <div className="border border-dark/15 w-4/6 mx-auto mb-6"></div>
            <div className="overflow-x-auto">
                <table className="w-full text-dark/70 text-base leading-6 text-left">
                    {/* <!-- head --> */ }
                    <thead className="text-darkParagraph text-base font-medium">
                        <tr>
                            <th></th>
                            <th className="pb-4 w-2/5">Name</th>
                            <th className="pb-4">Time</th>
                            <th className="pb-4">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */ }
                        <tr className="bg-dark/5">
                            <th className="px-6 py-4">1</th>
                            <td className="pr-6 py-4">Spaghetti Bolognese</td>
                            <td className="pr-6 py-4">30 mins</td>
                            <td className="pr-6 py-4">600 calories</td>
                        </tr>
                        <tr className="text-dark/80 text-base font-medium leading-7">
                            <th></th>
                            <td></td>
                            <td className="pt-4">Total Time =
                                45 minutes</td>
                            <td className="pt-4">Total Calories =
                                1050 calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CurrentlyCooking;