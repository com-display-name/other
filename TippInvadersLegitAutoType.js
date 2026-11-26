let Increment = 0;
while (true) {
    await new Promise(resolve => setTimeout(resolve, 100));

    if (G == null) { continue }

    const expectedKey = nextExpected();

    if (expectedKey !== null) {
        onKey({
            length: expectedKey.length,
            key: expectedKey,
            preventDefault : (() => {})
        });
    }
    
    
    if (Increment % 20 == 0) {
        usePower();
    }
    
    Increment += 1;

}