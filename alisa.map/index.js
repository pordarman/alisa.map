/**
 * Checks if the elements in two entered objects are all the same
 * @param {Object} object1 
 * @param {Object} object2 
 * @returns {Boolean}
 */

function sameObject(object1, object2) {
    let objectEnt1 = Object.entries(object1)
    let objectEnt2 = Object.entries(object2)
    if (objectEnt1.length != objectEnt2.length) return false
    for (const [key, value] of objectEnt1) {
        let obj = objectEnt2.find(a => a[0] === key)
        if (!obj || !sameValue(value, obj[1])) return false
    }
    return true
}

/**
 * Checks if two entered values are the same
 * @param {any} value1 
 * @param {any} value2 
 * @returns {Boolean}
 */

function sameValue(value1, value2) {
    try {
        if (value1 === value2) return true;
        let pro1 = Object.prototype.toString.call(value1)
        let pro2 = Object.prototype.toString.call(value2)
        if (pro1 !== pro2) return false
        switch (pro1) {
            case "[object String]":
            case "[object Number]":
            case "[object Boolean]": {
                return value1 === value2
            }
            case "[object Array]": {
                return sameArray(value1, value2)
            }
            case "[object Date]": {
                return value1.getTime() === value2.getTime()
            }
            case "[object Object]": {
                return sameObject(value1, value2)
            }
        }
        if (value1 instanceof Set && value2 instanceof Set) return sameArray([...value1], [...value2])
        if (value1 instanceof Map && value2 instanceof Map) return sameArray([...value1.entries()], [...value2.entries()])
        if (value1 instanceof RegExp && value2 instanceof RegExp) return (value1.source === value2.source) && (value1.flags === value2.flags)
        if (value1?.prototype !== undefined) return value1?.prototype === value2?.prototype
        if (value1?.name !== undefined) return value1?.name === value2?.name
    } catch (e) { }
    return false
}

/**
 * Checks if the elements in the two entered arrays are all the same
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns {Boolean}
 */

function sameArray(array1, array2) {
    let length = array1.length;
    if (length != array2.length) return false
    for (let index = 0; index < length; ++index) {
      if (!sameValue(array1[index], array2[index])) return false;
    }
    return true;
  }

class StrongMap extends Map {

    /**
     * You set whether to create the Map function with any value while it is being created
     * @param {StrongMap|Map|Array|Object} props 
     */
    constructor(props) {
        super(props)
    }


    /**
     * Default sort function to use when sorting objects in an array
     * @param {any} firstValue - First object to sort
     * @param {any} secondValue - Second object to sort
     * @returns {Boolean}
     */
    static defaultSort(firstValue, secondValue) {
        return Number(firstValue > secondValue) || Number(firstValue === secondValue) - 1;
    }



    /**
     * Release version of StrongMap module
     * @returns {String} 
     */

    get version() {
        return `v0.1.0`
    }



    /**
     * Make the return value "[object StrongMap]" in the Object.prototype.toString.call(StrongMap) function
     * @returns {String}
     */

    get [Symbol.toStringTag]() {
        return "StrongMap"
    }



    /**
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated
     * @param {any} key - The name of the key to be registered
     * @param {any} value - Value corresponding to the key
     * @returns {StrongMap}
     */

    set(key, value) {
        super.set(key, value)
        return this
    }



    /**
     * Adds all the data you entered in the Set function without deleting all the data in the Set function
     * @param {Map|StrongMap|Object|Array<Array<any,any>>} keysAndValues - Data to be written into when recreating the Map function
     * @returns {StrongMap}
     * @example
     * 
     * // Let's write some data first
     * StrongMap.set("hello", "World!")
     * StrongMap.set("test", "value")
     * 
     * // There are only 2 data in the map function. Now let's add multiple new data without touching the data inside this function
     * StrongMap.setMany({ this: "is", a: "example" })
     * 
     * // Now when we print this Map function to console, we will see "hello" "test", "this" and "a" key data
     * 
     * console.log(StrongMap) // StrongMap(4) { 'hello' => 'World!, 'test' => 'value', 'this' => 'is', 'a' => 'example' }
     */

    setMany(keysAndValues) {
        if (Array.isArray(keysAndValues)) {
            for (const [key, value] of keysAndValues) {
                this.set(key, value)
            }
        } else if (Object.prototype.toString.call(keysAndValues) === "[object Object]") {
            for (const key in keysAndValues) {
                this.set(key, keysAndValues[key])
            }
        } else if (keysAndValues instanceof Map || keysAndValues instanceof StrongMap) {
            for (const [key, value] of keysAndValues) {
                this.set(key, value)
            }
        }
        return this
    }



    /**
     * It deletes all the data inside the Map function and recreates the function by writing the data you entered into the Map function
     * @param {Map|StrongMap|Object|Array<Array<any,any>>} keysAndValues - Data to be written into when recreating the Map function
     * @returns {StrongMap}
     * @example
     * 
     * // Let's write some data first
     * StrongMap.set("hello", "World!")
     * StrongMap.set("test", "value")
     * 
     * // There are only 2 data in the map function. Now we delete all the data inside this function and create a new one
     * StrongMap.setMap({ this: "is", a: "example" })
     * 
     * // Now when we print this Map function to the console we will only see the key data "this" and "a"
     * 
     * console.log(StrongMap) // StrongMap(2) { 'this' => 'is', 'a' => 'example' }
     */

    setMap(keysAndValues) {
        super.clear()
        if (Array.isArray(keysAndValues)) {
            for (const [key, value] of keysAndValues) {
                this.set(key, value)
            }
        } else if (Object.prototype.toString.call(keysAndValues) === "[object Object]") {
            for (const key in keysAndValues) {
                this.set(key, keysAndValues[key])
            }
        } else if (keysAndValues instanceof Map || keysAndValues instanceof StrongMap) {
            for (const [key, value] of keysAndValues) {
                this.set(key, value)
            }
        }
        return this
    }



    /**
     * Indicating whether an element with the specified key exists or not
     * @param {any} key - The name of the key to be checked
     * @returns {Boolean}
     */

    has(key) {
        if (super.has(key)) return true;
        return [...this.keys()].some(key_1 => sameValue(key_1, key))
    }



    /**
     * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map
     * @param {any} key - The name of the key to revert
     * @returns {StrongMap}
     */

    get(key) {
        if (super.has(key)) return super.get(key)
        return [...this.entries()].find(([key_1]) => sameValue(key_1, key))?.[1]
    }



    /**
     * Used to delete data from the map function
     * @param {any} key - The name of the key to delete
     * @returns {Boolean} Returns true if the data to be deleted exists in the Map function, false otherwise
     */

    delete(key) {
        if (super.has(key)) return super.delete(key)
        let ent = [...this.entries()]
        let dataIndex = ent.findIndex(([key_1]) => sameValue(key_1, key))
        if (dataIndex === -1) return false;
        super.clear()
        for (const [key_1, value_1] of ent.slice(0, dataIndex)) {
            this.set(key_1, value_1)
        }
        for (const [key_1, value_1] of ent.slice(dataIndex + 1)) {
            this.set(key_1, value_1)
        }
        return true
    }



    /**
     * Deletes the first element of the map function
     * @param {Number} amount - Number of data to be deleted
     * @return {Boolean} Returns true if the data to be deleted exists in the Map function, false otherwise
     */

    deleteFirst(amount = 1) {
        let size = this.size
        if (size === 0) return false;
        amount = Math.floor(amount)
        if (amount === 1 || isNaN(amount)) {
            let key = this.keys().next().value
            return this.delete(key)
        }
        amount = Math.min(size, amount)
        if (amount < 0) return this.deleteLast(-amount)
        let keys = [...this.keys()].slice(0, amount)
        for (const key of keys) {
            this.delete(key)
        }
        return true
    }



    /**
     * Deletes the last element of the map function
     * @param {Number} amount - Number of data to be deleted
     * @return {Boolean} Returns true if the data to be deleted exists in the Map function, false otherwise
     */

    deleteLast(amount = 1) {
        let size = this.size
        if (size === 0) return false;
        amount = Math.floor(amount)
        if (amount === 1 || isNaN(amount)) {
            let keys = [...this.keys()]
            let lastKey = keys[keys.length - 1]
            return this.delete(lastKey)
        }
        amount = Math.min(size, amount)
        if (amount < 0) return this.deleteFirst(-amount)
        let keys = [...this.keys()].slice(-amount)
        for (const key of keys) {
            this.delete(key)
        }
        return true
    }




    /**
     * Obtains the value of the given key if it exists, otherwise sets and returns the value provided by the default value generator
     * @param {any} key - The key to get if it exists, or set otherwise
     * @param {(key: any, this: StrongMap) => any} defaultValueGenerator - A function that generates the default value
     * @returns {any}
     * @example
     * 
     * // First, let's save data to the Map function
     * StrongMap.set("test", "value")
     * 
     * // If there is data you want to call it will call it
     * StrongMap.ensure("test") // value
     * 
     * // If there is no data you want to call, using the function you entered as the second parameter, it returns the data it created after creating a new data for that key data
     * StrongMap.ensure("test1", () => new Date().getFullYear() + 1) // 2023
     * 
     * 
     * // And now the following data is written in the Map function:
     * // StrongMap(2) { 'test' => 'value', 'test1' => 2023 }
     */

    ensure(key, defaultValueGenerator) {
        if (this.has(key)) return this.get(key);
        if (typeof defaultValueGenerator !== "function") throw new TypeError(`The ${defaultValueGenerator} value is not a function. Please enter a valid function expression`);
        const defaultValue = defaultValueGenerator(key, this);
        this.set(key, defaultValue);
        return defaultValue;
    }



    /**
     * Checks if the key values you entered are all found in the Map function
     * @param  {...any} keys - Keys to be checked
     * @returns {Boolean}
     */

    hasAll(...keys) {
        return keys.every((key) => this.has(key));
    }



    /**
     * Checks if at least 1 of the key values you entered exists in the Map function
     * @param  {...any} keys - Keys to be checked
     * @returns {Boolean}
     */

    hasAny(...keys) {
        return keys.some((key) => this.has(key));
    }



    /**
     * Calls first saved data or multiple data values in map function
     * @param {Number} amount - Number of values to call
     * @returns {any|Array<any>}
     */

    first(amount = 1) {
        amount = Math.floor(amount)
        if (amount === 1 || isNaN(amount)) return this.values().next().value;
        if (amount < 0) return this.last(-amount);
        amount = Math.min(this.size, amount);
        const iter = this.values();
        return Array.from({ length: amount }, () => iter.next().value);
    }



    /**
     * Calls the first saved data or multiple key values in the map function
     * @param {Number} amount - Number of keys to call
     * @returns {any|Array<any>}
     */

    firstKey(amount = 1) {
        amount = Math.floor(amount)
        if (amount === 1 || isNaN(amount)) return this.keys().next().value;
        if (amount < 0) return this.lastKey(-amount);
        amount = Math.min(this.size, amount);
        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }



    /**
     * Calls last saved data or multiple data values in map function
     * @param {Number} amount - Number of values to call
     * @returns {any|Array<any>}
     */

    last(amount = 1) {
        amount = Math.floor(amount)
        const arr = [...this.values()];
        if (amount === 1 || isNaN(amount)) return arr[arr.length - 1];
        if (amount < 0) return this.first(-amount);
        if (!amount) return [];
        return arr.slice(-amount);
    }



    /**
     * Calls the last saved data or multiple key values in the map function
     * @param {Number} amount - Number of values to call
     * @returns {any|Array<any>}
     */

    lastKey(amount = 1) {
        amount = Math.floor(amount)
        const arr = [...this.keys()];
        if (amount === 1 || isNaN(amount)) return arr[arr.length - 1];
        if (amount < 0) return this.firstKey(-amount);
        if (!amount) return [];
        return arr.slice(-amount);
    }



    /**
     * Returns the value corresponding to the index value in an array. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at Array.at()}
     * @param {Number} index - Index number
     * @returns {any}
     */

    at(index) {
        index = Math.floor(index);
        const arr = [...this.values()];
        return arr.at(index);
    }



    /**
     * Returns the key value corresponding to the index value in an array. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at Array.at()}
     * @param {Number} index - Index number
     * @returns {any}
     */

    atKey(index) {
        index = Math.floor(index);
        const arr = [...this.keys()];
        return arr.at(index);
    }



    /**
     * It pulls random data from all values
     * @param {Number} amount - Number of data to return
     * @returns {any|Array<any>}
     */

    random(amount = 1) {
        let size = this.size
        if (size === 0) return [];
        amount = Math.floor(amount)
        const arr = [...this.values()];
        if (amount === 1 || isNaN(amount)) return arr[Math.floor(Math.random() * arr.length)];
        amount = Math.min(size, amount)
        if (!amount) return [];
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }



    /**
     * It pulls random data from all keys
     * @param {Number} amount - Number of data to return
     * @returns {any|Array<any>}
     */

    randomKey(amount) {
        let size = this.size
        if (size === 0) return [];
        amount = Math.floor(amount)
        const arr = [...this.keys()];
        if (amount === 1 || isNaN(amount)) return arr[Math.floor(Math.random() * arr.length)];
        amount = Math.min(size, amount)
        if (!amount) return [];
        return Array.from({ length:amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }



    /**
     * Reverses the data inside the map function. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse Array.reverse()}
     * @returns {StrongMap}
     */

    reverse() {
        const entries = [...this.entries()].reverse();
        this.clear();
        for (const [key, value] of entries) {
            this.set(key, value)
        }
        return this;
    }



    /**
     * Checks if the Map function is empty
     * @returns {Boolean}
     */

    isEmpty() {
        return this.size === 0
    }


    /**
     * Searches for the value of a single item where the given function returns a truthy value. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find Array.find()}
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - The function to test with (should return boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {any}
     */

    find(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (fn(value, key, this)) return value;
        }
        return undefined;
    }



    /**
     * Searches for the value of a single item where the given function returns a truthy value. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find Array.find()}
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - The function to test with (should return boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {any}
     */

    findKey(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (fn(value, key, this)) return key;
        }
        return undefined;
    }



    /**
     * Removes items that satisfy the provided filter function
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - Function used to test (should return a boolean)
     * @param {any} thisArg - Value to use as `this` when executing function 
     * @returns {Number} The number of removed entries
     */

    sweep(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        const previousSize = this.size;
        for (const [key, value] of this) {
            if (fn(value, key, this)) this.delete(key);
        }
        return previousSize - this.size;
    }



    /**
     * Searches for the value of multiple elements for which the given function returns a true value and returns them in the Map function, not an array. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter Array.filter()}
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - The function to test with (should return boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {StrongMap}
     */

    filter(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const [key, value] of this) {
            if (fn(value, key, this)) results.set(key, value);
        }
        return results;
    }


    /**
     * Partitions the StrongMap into two maps where the first StrongMap contains the items that passed and the second contains the items that failed
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - Function used to test (should return a boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {Array<StrongMap,StrongMap>}
     */

    partition(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        const results = [
            new this.constructor[Symbol.species](),
            new this.constructor[Symbol.species]()
        ];
        for (const [key, value] of this) {
            if (fn(value, key, this)) {
                results[0].set(key, value);
            } else {
                results[1].set(key, value);
            }
        }
        return results;
    }



    /**
     * Maps each item into a StrongMap, then joins the results into a single StrongMap. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap Array.flatMap()}
     * @param {( value: any, key: any, this: StrongMap ) => any} fn - Function that produces a new StrongMap
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {StrongMap}
     */

    flatMap(fn, thisArg) {
        const maps = this.map(fn, thisArg);
        return new this.constructor[Symbol.species]().concat(...maps);
    }



    /**
     * Maps each item to another value into an array. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map Array.map()}
     * @param {( value: any, key: any, this: StrongMap ) => any} fn - Function that produces an element of the new array, taking three arguments
     * @param {any} thisArg - Value to use as `this` when executing function 
     * @returns {Array<any>}
     */

    map(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        const iter = this.entries();
        return Array.from({ length: this.size }, () => {
            const [key, value] = iter.next().value;
            return fn(value, key, this);
        });
    }



    /**
     * Maps each item to another value into a StrongMap. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map Array.map()}
     * @param {( value: any, key: any, this: StrongMap ) => any} fn - Function that produces an element of the new array, taking three arguments
     * @param {any} thisArg - Value to use as `this` when executing function 
     * @returns {StrongMap}
     */

    mapValues(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        const map = new this.constructor[Symbol.species]();
        for (const [key, value] of this) {
            map.set(key, fn(value, key, this));
        }
        return map;
    }



    /**
     * Checks if there exists an item that passes a test. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some Array.some()}
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - Function used to test (should return a boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {Boolean}
     */

    some(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (fn(value, key, this)) return true;
        }
        return false;
    }



    /**
     * Checks if all items passes a test. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every Array.every()}
     * @param {( value: any, key: any, this: StrongMap ) => Boolean} fn - Function used to test (should return a boolean)
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {Boolean}
     */

    every(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (!fn(value, key, this)) return false;
        }
        return true;
    }



    /**
     * Applies a function to produce a single value. Identical in behavior to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce Array.reduce()}
     * @param {( value: any, key: any, this: StrongMap ) => any} fn - Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`, and `StrongMap`
     * @param {any} initialValue - Starting value for the accumulator
     * @returns {any}
     */

    reduce(fn, initialValue) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        let accumulator;
        if (initialValue !== undefined) {
            accumulator = initialValue;
            for (const [key, value] of this) accumulator = fn(accumulator, value, key, this);
            return accumulator;
        }
        let first = true;
        for (const [key, value] of this) {
            if (first) {
                accumulator = value;
                first = false;
                continue;
            }
            accumulator = fn(accumulator, value, key, this);
        }
        if (first) throw new TypeError("Reduce of empty map with no initial value");
        return accumulator;
    }



    /**
     * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach Map.forEach()} but returns the StrongMap instead of undefined
     * @param {( value: any, key: any, this: StrongMap ) => any} fn - Function to execute for each element
     * @param {any} thisArg - Value to use as `this` when executing function
     * @returns {StrongMap}
     */

    each(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        this.forEach(fn, thisArg);
        return this;
    }



    /**
     * Runs a function on the StrongMap and returns the StrongMap
     * @param {( value: any, key: any, this: StrongMap ) => any} fn 
     * @param {any} thisArg 
     * @returns {StrongMap}
     */

    tap(fn, thisArg) {
        if (typeof fn !== "function") throw new TypeError(`The ${fn} value is not a function. Please enter a valid function expression`);
        if (thisArg !== undefined) fn = fn.bind(thisArg);
        fn(this);
        return this;
    }



    /**
     * Creates an identical shallow copy of this StrongMap
     * @returns {StrongMap}
     */

    clone() {
        return new this.constructor[Symbol.species](this);
    }



    /**
     * Combines this StrongMap with others into a new StrongMap. None of the source maps are modified
     * @param  {...(StrongMap|Map)} maps - Maps to merge
     * @returns {StrongMap}
     */

    concat(...maps) {
        const newColl = this.clone();
        for (const map of maps) {
            for (const [key, value] of map) {
                newColl.set(key, value);
            }
        }
        return newColl;
    }


    /**
     * Checks if this StrongMap shares identical items with another
     * @param {StrongMap|Map} map 
     * @returns {Boolean}
     */

    equals(map) {
        if (!map) return false;
        if (this === map) return true;
        if (this.size !== map.size) return false;
        for (const [key, value] of this) {
            if (!map.has(key) || value !== map.get(key)) return false;
        }
        return true;
    }



    /**
     * The sort method sorts the items of a StrongMap in place and returns it
     * @param {( value_1: any, value_2, key_1: any, key_2: any ) => Boolean} compareFunction - Specifies a function that defines the sort order. If omitted, the StrongMap is sorted according to each character's Unicode code point value, according to the string conversion of each element
     * @returns {StrongMap}
     */

    sort(compareFunction = StrongMap.defaultSort) {
        const entries = [...this.entries()];
        entries.sort((a, b) => compareFunction(a[1], b[1], a[0], b[0]));
        super.clear();
        for (const [key, value] of entries) {
            super.set(key, value);
        }
        return this;
    }



    /**
     * The intersect method returns a new structure containing items where the keys and values are present in both original structures
     * @param {StrongMap|Map} other - The other StrongMap to filter against
     * @returns {StrongMap}
     */

    intersect(other) {
        const map = new this.constructor[Symbol.species]();
        for (const [key, value] of other) {
            if (this.has(key) && sameValue(value, this.get(key))) map.set(key, value);
        }
        return map;
    }



    /**
     * The difference method returns a new structure containing items where the key is present in one of the original structures but not the other
     * @param {StrongMap|Map} other - The other StrongMap to filter against
     * @returns 
     */

    difference(other) {
        const map = new this.constructor[Symbol.species]();
        for (const [key, value] of other) {
            if (!this.has(key)) map.set(key, value);
        }
        for (const [key, value] of this) {
            if (!other.has(key)) map.set(key, value);
        }
        return map;
    }



    /**
     * The sorted method sorts the elements of a StrongMap and returns it. This does not change the main object
     * @param {( value_1: any, value_2, key_1: any, key_2: any ) => Boolean} compareFunction - Specifies a function that defines the sort order. If omitted, the StrongMap is sorted according to each character's Unicode code point value, according to the string conversion of each element
     * @returns {StrongMap}
     */

    sorted(compareFunction = StrongMap.defaultSort) {
        return new this.constructor[Symbol.species](this).sort((av, bv, ak, bk) => compareFunction(av, bv, ak, bk));
    }



    /**
     * Map function returns Array object as
     * @returns {Array<Array<any,any>>}
     */

    toArray() {
        return [...this.entries()];
    }



    /**
     * Map function returns JSON object as
     * @returns {Object}
     */

    toJSON() {
        return Object.fromEntries([...this.entries()])
    }

}

module.exports = StrongMap;