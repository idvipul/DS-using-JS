class HashTable {
    constructor(size = 53) { // default size is 53
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0);
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this.hash(key);

        if (this.keyMap[index] !== null) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            let i;
            for (i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    console.log(this.keyMap[index][i][1]);
                    return this.keyMap[index][i][1];
                }
            }
        }
        console.log(undefined);
        return undefined;
    }

    keys() {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if ( !keysArr.includes(this.keyMap[i][j][0]) ) { // ignore duplicate keys
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        console.log(keysArr);
        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if ( !valuesArr.includes(this.keyMap[i][j][1]) ) { // ignore duplicate values
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        console.log(valuesArr);
        return valuesArr;
    }
}

let hashTable = new HashTable();
hashTable.set("red", "#ff0000");
hashTable.set("green", "#008000");
hashTable.set("blue", "#0000ff");
hashTable.set("black", "#0000ff");
hashTable.get("red");
hashTable.keys();
hashTable.values();