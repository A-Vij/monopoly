const Hand = ({ owned,  money }) => {
    console.log(owned);
    return (
        <div className="bg-white border-4 border-red-600 rounded-xl p-4 w-full shadow-2xl font-mono mb-4 md:mb-0 md:ml-6">
            <h2 className="text-xl font-bold text-red-600 mb-1 text-center">
                Your Properties
            </h2>
            <p className="text-sm text-gray-700 font-semibold mb-4 text-center">
                 ${money?.toString()}
            </p>
            <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-100">
                {owned.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center">No properties yet</p>
                ) : (
                    owned.map((property, index) => (
                        <div
                            key={index}
                            className="bg-red-100 text-red-700 font-semibold text-sm rounded-md px-2 py-1 border border-red-300"
                        >
                            {property.name}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Hand;
