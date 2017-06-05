# protostate [![Build Status](https://travis-ci.org/WebReflection/protostate.svg?branch=master)](https://travis-ci.org/WebReflection/protostate) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/protostate/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/protostate?branch=master)

Prototypal inheritance based states.

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

### API

  * `new State({optional:'setup'})` or simply `State({...})`
  * `State.next(state, {optional:'setup'})` create a new state that inherits another one
  * `State.prev(state)` return previously inherited state, if any, or `null`
  * `State.diff(prev, state)` or `State.diff(state, prev)` return an array of keys representing current state differences
  * `State.keys(state)` return all state keys, inherited or not (`Object.keys(state)` to obtain only current list of keys)
  * `State.merge(state)` flattened new state
  * `State.size(state)` inheritance chain dept (how many states in the chain)

**ISC License**