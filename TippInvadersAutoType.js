let Increment = 0;
while (true) {
    await new Promise(resolve => setTimeout(resolve, 20));

    if (G == null) { continue }

    const expectedKey = nextExpected();

    if (expectedKey !== null) {
        onKey({
            length: expectedKey.length,
            key: expectedKey,
            preventDefault : (() => {})
        });
    }
    update(0.11);
    G.spawnT = 0;
    
    if (Increment % 10 == 0) {
        grantPower();
        usePower();
    }
    
    if (Increment % 50 == 0) {
        spawnBoss();
    }

    Increment += 1;

}