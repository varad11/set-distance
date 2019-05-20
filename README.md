# set-distance
Finds similarity/distance between two input sets.
Algorithms implemented:
1). Sorensen-Dice Coefficient.
2). Jaccard Index.
3). Ochiai Coefficient.
4). Overlap Coefficient.
5). Levenshtein/Edit Distance.


## Installation 
```sh
npm install set-distance --save
bower install set-distance --save
```

## Usage

### Javascript

```javascript
var Distance = require('set-distance');
//SorensenDice Coefficient
var sc = new Distance.SorensenDice(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(sc);
//Output: 0.7142857142857143

//Jaccard Index
var jc = new Distance.Jaccard(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(jc);
//Output: 0.5555555555555556

//Ochiai Coefficient
var oc = new Distance.Ochiai(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(oc);
//Output: 0.7216878364870323

//Overlap Coefficient
var ov = new Distance.Overlap(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(ov);
//Output: 0.8333333333333334

//Levenshtein/Edit Distance
var ld = new Distance.Levenshtein(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(ld);
//Output: 3
```

### TypeScript
```typescript
import * as Distance from 'set-distance';
//SorensenDice Coefficient
var sc = new Distance.SorensenDice(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(sc);
//Output: 0.7142857142857143

//Jaccard Index
var jc = new Distance.Jaccard(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(jc);
//Output: 0.5555555555555556

//Ochiai Coefficient
var oc = new Distance.Ochiai(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(oc);
//Output: 0.7216878364870323

//Overlap Coefficient
var ov = new Distance.Overlap(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(ov);
//Output: 0.8333333333333334

//Levenshtein/Edit Distance
var ld = new Distance.Levenshtein(['S', 'A', 'T', 'U', 'R', 'D', 'A', 'Y'], ['S', 'U', 'N', 'D', 'A', 'Y']).getCoefficient();
console.log(ld);
//Output: 3
```