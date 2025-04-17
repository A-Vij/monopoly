import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import { Loader } from "lucide-react";
import Lobby from "./Lobby";
import { useAuthStore } from "../store/authStore";
import { registerBasicEvents, unregisterBasicEvents } from "../lib/socket";
import { useNavigate } from "react-router-dom";
import Background from "../Components/Background";

const CreateGame = () => {
    const { create, game, isCreating, start, isStarting } = useGameStore();
    const socket = useAuthStore((state) => state.socket);

    const navigate = useNavigate();

    const handleStart = async (e) => {
        await start(game?.code);
    
    }
    useEffect(() => {
        if (socket) registerBasicEvents();

        return () => unregisterBasicEvents();
    }, [socket]);

    useEffect(() => {
        const createGame = async () => {
            await create();
        };
        createGame();
    }, []);
    // if (game?.started) ( navigate(`/play/${game.code}`) )
    useEffect(() => {
        if (game?.started) 
            navigate(`/play/${game.code}`);
    }, [game])

    if (isCreating){
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader className="animate-spin w-12 h-12 text-red-600" />
            </div>
        );
    }
    return (
    
        <div className="relative z-10 text-center h-screen flex flex-col justify-center items-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-96 border-4 border-red-600 mx-auto mt-10 flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-4 font-mono text-red-600">
                    GAME CREATED
                </h2>
                <div className="text-center text-lg mb-6">
                    <span className="font-semibold">Code:</span>{" "}
                    <span className="font-mono text-red-500">{game?.code}</span>
                </div>
                <Lobby />
                <button
                    onClick={handleStart}
                    className="text-center bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition-all disabled:bg-gray-400"
                >
                    {isStarting ? "Starting..." : "Start"}
                </button>
            </div>
        </div>

    );
};

export default CreateGame;
