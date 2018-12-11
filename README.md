# `harmonic-js`

Usage:

```
yarn add https://github.com/Ezku/harmonic-js
```

```js
const harmonic = require('harmonic');
const baseFontSize = harmonic(0); // 16
// Let's make something bigger
const headerFontSize = harmonic(4); // 16 * e
// Two sizes smaller
const subHeaderFontSize = harmonic(2); // 16 * (e^(2/4)) = 16 * sqrt(e)
// The output is always divisible by two so you can e.g. apply padding on two
// sides for the same measure
const containerPadding = harmonic(-1) / 2; // 16 * (e^(-1/4)) = 12
```
