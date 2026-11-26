let CompleteGame = (async () => {
    newGame();

    let Increment = 0;
    while (!G.over) {
        await new Promise(resolve => setTimeout(resolve, 10));

        if (G == null) { continue }

        const expectedKey = nextExpected();

        if (expectedKey !== null) {
            onKey({
                length: expectedKey.length,
                key: expectedKey,
                preventDefault : (() => {})
            });
        }
        
        update(0.1);
        
        if (Increment % 20 == 0) {
            grantPower();
            usePower();
        }
        
        if (Increment % 100 == 0) {
            spawnBoss();
        } 

        Increment += 1;
    }

})


while (true) {
    await CompleteGame();
}