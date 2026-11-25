registerError = (() => {
    addScore(10000, 1, 1);
}) // anti game-over & infinite points
starsFor = (() => {
    return 3;
}) // always 3 stars
P.kc = 9e99; // rank
P.st = {L01 : 3, L02 : 3, L03 : 3, L04 : 3, L05 : 3, L06 : 3, L07 : 3, L08 : 3, L09 : 3, L10 : 3, L11 : 3, L12 : 3 ,L13 : 3, L14 : 3, L15 : 3, L16 : 3, L17 : 3, L18 : 3, L19 : 3, L20 : 3, L21 : 3 ,L22 : 3, L23 : 3, L24 : 3} // stars


newGame();
startGameOver();
