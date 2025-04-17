export const handleLandedOn = async(game, playerIndex, userId) => {
    const player = game.players[playerIndex];
    const space = game.boardState[player.position];
    console.log("landed on", space.name);
    
    if (space.tax) {
        player.money -= space.amt;
        return {event: "landed-tax", space: space};
    }
    if (space.property || space.station || space.utility){
        if (!space.owned) return {event: "landed-unowned-prop", space: space};
        else if (space.owner.toString() === userId.toString()) return {event: "landed-your-prop", space: space};
        else {
            return {event:"landed-owned-prop", space: space};
        }
    }

}