threewords
===

Generate deterministic, human-readable names for things

### Installing

```
npm install --save threewords
```

### Usage

#### Generate from string:

```js
const threewords = require('threewords');

// stable and deterministic (same result every time)
threewords('user@example.com'); // rigid-smothered-lizards
threewords('user@example.com'); // rigid-smothered-lizards
```

#### Generate random:

```js
const threewords = require('threewords');

// totally random
threewords.random(); // fragile-oversize-rocks
threewords.random(); // fragile-oversize-rocks
```

#### CLI from string:

```
threewords user@example.com
# rigid-smothered-lizards
```

#### CLI random

```
threewords
# fragile-oversize-rocks
```
