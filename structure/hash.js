class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const CHAR_CODE_TO_ALPHABIT = 96;
    const WIERD_PRIME = 31;
    // a to 1, b to 2 etc
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let value = key[i].charCodeAt(0) - CHAR_CODE_TO_ALPHABIT;
      total = (total * WIERD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);

    this.keyMap[hash]
      ? this.keyMap[hash].push([key, value])
      : this.keyMap[hash] = [[key, value]];

    return this;
  }

  get(key) {
    const hash = this._hash(key);
    let value = undefined;

    this.keyMap[hash].forEach(subArr => {
      if (subArr[0] === key) value = subArr[1];
    });

    return value;
  }

  keys() {
    let keys = [];

    this.keyMap.forEach(hashArr => {
      hashArr.forEach(subArr => {
        keys.push(subArr[0]);
      });
    });

    return keys;
  }

  values() {
    let keys = [];

    this.keyMap.forEach(hashArr => {
      hashArr.forEach(subArr => {
        keys.push(subArr[1]);
      });
    });

    return keys;
  }
}

const table = new HashTable(10);
table.set('pink', '#ff00ff');
table.set('grey', '#eee');
table.set('black', '#000');
table.set('moon', 'moon');
table.set('qwerty', '#123456');

console.log(table.keys());
