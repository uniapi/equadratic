This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Equadratic

## Task
Implement a function **equadratic** solving *Quadratic Equation*.


### Example:
```js
console.log(equadratic('1 * x^2 - 8 * x')); // [ 0, 8] 
console.log(equadratic(' x ^ 2+9* x '));    // [-9, 0]
console.log(equadratic('8*x^2+2*x+14'));    // [null, null]
console.log(equadratic('-2* x ^2+3 *x'));   // [0, 2]
console.log(equadratic('x^2-x');            // [0, 1]
```


### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **equadratic branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
