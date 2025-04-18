import { useGameStore } from "../store/gameStore";

const YourOwnPrompt = ({ space  }) => {
    const {game, pass, landedOn} = useGameStore();

    const handlePass = async () =>  { await pass(game?.code, landedOn.owner) };
    if (!space) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl border-4 border-red-600 px-8 py-6 text-center font-mono w-[90%] max-w-md shadow-2xl">
                
                <h2 className="text-3xl font-bold text-red-600 mb-2">
                    {space.name}
                </h2>
                
                {space.price &&
                    <>
                        <p className="text-lg text-gray-800 mb-6">
                            Your Own
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                className="w-full sm:w-32 h-12 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all"
                                onClick={handlePass}
                            >
                                Pass
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default YourOwnPrompt;
