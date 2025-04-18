import { useEffect } from "react";
import { MonopolyBoard } from "../Components/Board";
import { useGameStore } from "../store/gameStore";

import { registerPlayerEvents, unregisterPlayerEvents } from "../lib/socket";
import BuyPrompt from "../Components/BuyPrompt";
import Hand from "../Components/Hand";
import RightHand from "../Components/RightHand";
import PayRentPrompt from "../Components/PayRentPrompt";
import YourOwnPrompt from "../Components/YourOwnPrompt";

const Play = () => {
    const game = useGameStore((state) => state.game);
    const yourMoney = useGameStore((state) => state.yourMoney);
    const landedOn = useGameStore((state) => state.landedOn);
    const yourProperties = useGameStore((state) => state.yourProperties);
    const oPP = useGameStore((state) => state.oPP);
    const {roll, end, rolled, isYourTurn, isBuying, isPaying, isOwn } = useGameStore();

    // console.log(game?.boardState);
    
    useEffect(() => {
        registerPlayerEvents();

        return () => unregisterPlayerEvents();
    }, []);

    const handleClick = async() => {
        await roll(game?.code);
    }
    const handleEnd = async() => {
        await end(game?.code);
    }

    return (
        <div className="w-screen h-screen flex flex-col md:flex-row">
            {/* Left Hand (Top on small screens) */}
            <div className="w-full md:w-[25%] flex justify-center items-start p-2">
                <Hand owned={yourProperties} money={yourMoney} />
            </div>
    
            {/* Board (Middle) */}
            <div className="w-full md:w-[50%] flex justify-center items-center relative">
                <MonopolyBoard boardData={game?.boardState}>
                    {!rolled &&  (
                        <button
                            className="z-30 border cursor-pointer text-[8px]"
                            style={{ gridColumn: "7", gridRow: "10" }}
                            disabled={!isYourTurn}
                            onClick={handleClick}
                        >
                            Roll Dice
                        </button>
                    )}
                    {rolled && (
                        <button
                            className="z-30 border cursor-pointer text-[8px]"
                            style={{ gridColumn: "7", gridRow: "10" }}
                            disabled={!isYourTurn}
                            onClick={handleEnd}
                        >
                            End Turn
                        </button>
                    )}
                    {isBuying && <BuyPrompt space={landedOn} />}
                    {isPaying && <PayRentPrompt space={landedOn}/>}
                    {isOwn && <YourOwnPrompt space={landedOn}/>}
                </MonopolyBoard>
            </div>
    
            {/* Right Hand (Bottom on small screens) */}
            <div className="w-full md:w-[25%] flex justify-center items-start p-2">
                <RightHand players={oPP} />
            </div>
        </div>
    );
}
export default Play;
