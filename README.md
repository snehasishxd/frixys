## Frixys
# A Utility Package to make your simple tasks more simpler


- # Generate Numeric ID
```js
const frixys = require('frixys');
const length = 5; // Length of the Numeric ID
console.log(frixys.generateNumericID(length)); // 48956 | random numeric ID
```


- # Generate ID (URL Friendly + Non URL Friendly)
```js
const frixys = require('frixys');
const length = 5; // Length of the ID
const url_friendly = true;
console.log(frixys.generateID(length, url_friendly)); // gsp_5 | random URL friendly ID
// OR
const url_friendly = false;
console.log(frixys.generateID(length, url_friendly)); // ye#5_ | random Non URL friendly ID
```


- # Pick a random item from an Array
```js
const frixys = require('frixys');
const array = ['foo', 'bar'];
console.log(frixys.randomize(array)); // 'bar' | random item from the "array"
```
