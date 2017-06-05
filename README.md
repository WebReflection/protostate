# protostate [![Build Status](https://travis-ci.org/WebReflection/protostate.svg?branch=master)](https://travis-ci.org/WebReflection/protostate) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/protostate/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/protostate?branch=master)


Prototypal inheritance based states.

Original [blog post](https://www.webreflection.co.uk/blog/2016/12/23/javascript-proto-state).

```js
var State = require('protostate');

var state = new State({one:1});
state = State.next(state, {two:2});
var two = state;
state = State.next(state, {three:3});
state = State.next(state, {four:4});
state = State.next(state, {five:5});
var five = state;

console.log(State.diff(two, five));
// [five, four, three]
```

**ISC License**