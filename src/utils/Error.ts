class SomethingError extends Error {

    public value : number;

    constructor(message : string, value : number = 0) {
        super(message);
        this.name = 'SomethingError';
        this.value = value;
    }
}

try {
    throw new SomethingError('', 100);
} catch (e) {
    if (e instanceof Error) {
        console.warn(`${e.name} ${e.message}`);
        console.info(e.stack);
    }
}
