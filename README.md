Randomcalculation
===
A random number calculation library

### Usage

First, install it from NPM

```
npm install randomcalculation
```

Second, import & code

```
const rn = require("randomcalculation");
console.log(rn.randomcalculation(1, 5, 1, 9));
```

**Parameter Description**

There are four parameters here, which define the value range of the two numbers to be calculated.

- The first, the second is the minimum and maximum of the first number

- The third, the fourth is the minimum and maximum of the second number

**Return result**

The return result like following

```
{result: 1, equation: '1+0'}
```

### Tips

If 0 is used as a divisor, you will get the error like following

```
{ error: false, msg: '0 cannot be used as a divisor' }
```

### License

MIT