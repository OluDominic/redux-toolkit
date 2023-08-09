function* yieldAndReturn() {
    yield 'Y';
    return 'R';
    yield 'unreachable'
};

const gen = yieldAndReturn();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().done)