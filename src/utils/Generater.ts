
function* getValue(list : string[]) : IterableIterator<string> {
    for (const v of list) {
        yield v;
    }
}

const list = ['1', '2'];
let iterator = getValue(list);
for (let r = iterator.next(); !r.done; r = iterator.next()) {
    console.log(`val = ${r}`);
}

// 
function tuple() : [string, string] {
    return ['a','b'];
}

let union : string | null | undefined;
