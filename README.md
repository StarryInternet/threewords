threewords
===

[![Build Status](https://travis-ci.org/StarryInternet/threewords.svg?branch=master)](https://travis-ci.org/StarryInternet/threewords)

Generate deterministic, human-readable names for things.

### Installing

```
npm install --save threewords
```

### Usage

#### Generate from string:

```js
const threewords = require('threewords');

// stable and deterministic (same result every time)
threewords('foo@bar.com'); // defeated-ridiculous-family
threewords('foo@bar.com'); // defeated-ridiculous-family
```

#### Generate random:

```js
const threewords = require('threewords');

// totally random
threewords.random(); // obeisant-voiceless-unit
threewords.random(); // grand-verbal-collaborator
```

#### CLI from string:

```
threewords foo@bar.com
# defeated-ridiculous-family
```

#### CLI random

```
threewords
# obeisant-voiceless-unit
```
