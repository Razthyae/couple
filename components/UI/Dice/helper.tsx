export const calculateNewTile = (roll: number, currentTile: number) => {
let result: number = currentTile + roll
if(result > 22) {
    result -= 22
}
return result
}

