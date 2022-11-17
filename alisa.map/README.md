## [![Alisa Logo](https://i.hizliresim.com/aug2sp9.png)](https://www.npmjs.com/package/alisa.map/)


[![Package Name](https://img.shields.io/badge/Package%20name-alisa.map-red)](https://www.npmjs.com/package/alisa.map/)
[![Package size](https://img.shields.io/bundlephobia/min/alisa.map?label=Package%20size)](https://www.npmjs.com/package/alisa.map/)
[![Version](https://img.shields.io/npm/v/alisa.map.svg?label=Package%20version)](https://www.npmjs.com/package/alisa.map/)
[![License](https://img.shields.io/npm/l/alisa.map.svg?label=License)](https://www.npmjs.com/package/alisa.map/)

[![NPM](https://nodei.co/npm/alisa.map.png?downloads=true)](https://www.npmjs.com/package/alisa.map/)

# Source file

- [alisa.map](https://github.com/pordarman/alisa.map)

<br>

# Creator(s)

- [Ali (Fearless Crazy)](https://github.com/pordarman)

<br>

# Social media accounts

- Ali: [Instagram](https://www.instagram.com/ali.celk/) - [Discord](https://discord.com/users/488839097537003521) - [Spotify](https://open.spotify.com/user/215jixxk4morzgq5mpzsmwwqa?si=41e0583b36f9449b)

<br>

# What is this module?

- This module is more advanced version of Map function.

- This module provides a more stable way for you by eliminating the deficiencies and errors of the Map function.

- It has all the commands you need and there is an explanation of how each command should be used.

<br>

# So how to use?

It's very simple, first you have to open any javascript file and write the following in it:
<br>
```js
const alisa_map = require("alisa.map")

const StrongMap = new alisa_map()
const StrongMap_1 = new alisa_map({ key: "value", anotherKey: "anotherValue" })
const StrongMap_2 = new alisa_map([["key_1", "value_1"],["anotherKey_1", "anotherValue_1"]])
```
Each StrongMap specifies a different Map function and the data they all hold is different. You can increase this as much as you want.

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

Now let's show how to write data to the Map function and call the written data.
<br>

```js
// Writing data to the Map function
StrongMap.set("hello", "World!")
StrongMap.set({ hello: "World!" }, 12345)

// Now when we print the StongMap function to the console, the following will appear on the screen:
```
![Writing data to the Map function](https://i.hizliresim.com/mnt8zwz.png)

<br>

Now let's try to pull the data we wrote
```js
// Getting data from the Map function
StrongMap.get("hello") // "World!"

StrongMap.get({ hello: "World!" }) // 12345
// If you had tried to pull it with the normal Map function, it would most likely return undefined, but thanks to this StrongMap module, it will return whatever data you typed, no matter what you typed.
```

*StrongMap module always wins*

<br>

# So why alisa.map?

- The StrongMap module is a fairly simple yet effective module and overpowered for its package size

- The StrongMap module is an open source module, so if you get an error you can fix it yourself

- The StrongMap module is being developed every day, helping you in the best way with new features and increasing performance

- You don't have to wait long while downloading due to the low package size.

- Aaaannddd if you download it you will make me very happy 👉👈

<br>


# Updates
## v0.0.1

- Module shared publicly 🥳🥳

<br>

Please do not forget to use it in the latest version for more **stable** and **performance** of the module!

<br>

# And finally

- If you want to support this module, if you request me on [github](https://github.com/pordarman), I will be happy to help you.

- Thank you for reading this far, i love you 💗

- See you in my next modules!

<br>

![lovee](https://gifdb.com/images/high/drake-heart-hands-aqm0moab2i6ocb44.webp)