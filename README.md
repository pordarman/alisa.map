## [![Alisa Logo](https://i.hizliresim.com/aug2sp9.png)](https://www.npmjs.com/package/alisa.map/)


[![Package Name](https://img.shields.io/badge/Package%20name-alisa.map-red)](https://www.npmjs.com/package/alisa.map/)
[![Package size](https://img.shields.io/bundlejs/size/alisa.map?label=Package%20size)](https://www.npmjs.com/package/alisa.map/)
[![Version](https://img.shields.io/npm/v/alisa.map.svg?label=Package%20version)](https://www.npmjs.com/package/alisa.map/)
[![License](https://img.shields.io/npm/l/alisa.map.svg?label=License)](https://www.npmjs.com/package/alisa.map/)

[![NPM](https://nodei.co/npm/alisa.map.png?downloads=true)](https://www.npmjs.com/package/alisa.map/)

# Source file

- [alisa.map](https://github.com/pordarman/alisa.map)

<br>

# Creator(s)

- [Ali Çelik](https://github.com/pordarman)

<br>

# Social media accounts

- Ali: [Instagram](https://www.instagram.com/ali.celk/) - [Discord](https://discord.com/users/488839097537003521) - [Spotify](https://open.spotify.com/user/215jixxk4morzgq5mpzsmwwqa?si=41e0583b36f9449b)

<br>

# What is this module?

- This module is more advanced version of Map function

- This module provides a more stable way for you by eliminating the deficiencies and errors of the Map function

- It has all the commands you need and there is an explanation of how each command should be used

<br>

# So how to use?

It's very simple, first you have to open any javascript file and write the following in it:
<br>

```js
// Node.js
const alisa_map = require("alisa.map")

// Without node.js
import alisa_map from "alisa.map"


// Build without any data in it
const StrongMap = new alisa_map()

// Build with data inside (Object)
const StrongMap_1 = new alisa_map({ key: "value", anotherKey: "anotherValue" }) 

// Build with data inside (Array)
const StrongMap_2 = new alisa_map([["key_1", "value_1"], ["anotherKey_1", "anotherValue_1"]])

// Build with data inside (Map or StrongMap)
const StrongMap_3 = new alisa_map(StrongMap_1)
```

Each StrongMap specifies a different Map function and the data they all hold is different. You can increase this as much as you want

After typing this you can access **all** commands

<br>

### **CAUTION!!**
Please make your definitions as above. If you have made a definition as below, the module will not work properly and will give an error!

```js
// Incorrect command definition

const alisa_map = require("alisa.map")

const { get, set } = new alisa_map()
// This command will throw an error!


const StrongMap = new alisa_map()
// This command will work as it should
```

<br>

# Example

Now let's show how to write data to the Map function and call the written data
<br>

```js
// Writing data to the Map function
StrongMap.set("hello", "World!")
StrongMap.set({ hello: "World!" }, 12345)

// Now when we print the StongMap function to the console, the following will appear on the screen:
```
![Writing data to the Map function](https://i.hizliresim.com/qkqhu8a.png)

<br>

Now let's try to pull the data we wrote
```js
// Getting data from the Map function
StrongMap.get("hello") // "World!"

StrongMap.get({ hello: "World!" }) // 12345
// If you had tried to pull it with the normal Map function, it would most likely return undefined
// But thanks to this StrongMap module, it will return whatever data you typed, no matter what you typed
```

*StrongMap module always wins*

<br>

Now let's say you are pulling data from other files with the fs module. But since you are constantly using the readFile command, your code has started to slow down. <br>
This is where **StrongMap** comes into play. If you save the file you pulled using **StrongMap** and save that file again, instead of reading that file, it will pull the cached data and thus the code you write will **speed up**.

What I'm about to tell you may sound a bit confusing to you, so let me show you an example right away.

```js
// First we define our modules

const alisa_map = require("alisa.map")
const fs = require("fs") 
// or
import alisa_map from "alisa.map";
import fs from "fs";

const StrongMap = new alisa_map()

// Then we write the commands to pull the file into a function
function getFile(fileName) {

    // If the file is in the cache, it will pull the file directly without using fs commands
    if (StrongMap.has(fileName)) return StrongMap.get(fileName)

    // If it is not in the cache, it pulls the file with the fs module and saves the data in the cache for later use
    try {

        let file = fs.readFileSync(fileName, "utf-8")

        StrongMap.set(fileName, file)

        return file

    } catch (error) {
      throw new TypeError(`File ${fileName} not found!`)
    }

}


getFile("example.txt") // It pulls this file with the fs module

getFile("example.txt") // But since we pulled this file earlier, it pulls it from the cache (Faster)
```

<br>

# So why alisa.map?

- The StrongMap module is a fairly simple yet effective module and overpowered for its package size

- The StrongMap module is an open source module, so if you get an error you can fix it yourself

- The StrongMap module is being developed every day, helping you in the best way with new features and increasing performance

- You don't have to wait long while downloading due to the low package size

- Aaaannddd if you download it you will make me very happy 👉👈

<br>


# Updates
## v0.0.8

- Added examples to README.md file

## v0.0.6

- Fixed some typos

- Updated README.md file

## v0.0.5

- The error in the console has also been fixed, now you can use the module without any problems yey

## v0.0.4

- Added `.deleteFirst()` and `.deleteLast()` commands

- The error of not being able to import the module has been fixed (If you see an error on the console while importing the module, ignore it)

## v0.0.3

- Added `.isEmpty()` command

- Some bugs fixed

## v0.0.2

- Fixed wrong places in README.md file...

## v0.0.1

- Module shared publicly 🥳🥳

<br>

Please do not forget to use it in the latest version for more **stable** and **performance** of the module!

<br>

# And finally

- If you want to support this module, if you request me on [github](https://github.com/pordarman), I will be happy to help you

- Thank you for reading this far, i love you 💗

- See you in my next modules!

<br>

![lovee](https://gifdb.com/images/high/drake-heart-hands-aqm0moab2i6ocb44.webp)
