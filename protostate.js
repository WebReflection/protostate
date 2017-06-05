/*! Copyright (c) 2017, Andrea Giammarchi - ISC License */
function State(setup) {'use strict';
  return Object.assign(this || new State, setup);
}

State.diff = function diff(prev, curr) {
  var map = {}, tmp, keys, i;
  // accepts states as both prev, curr and curr, prev
  if (map.isPrototypeOf.call(curr, prev)) {
    tmp = curr;
    curr = prev;
    prev = tmp;
  }
  while (curr !== prev) {
    for (
      keys = Object.keys(curr),
      i = keys.length;
      i--; map[keys[i]] = i
    );
    curr = Object.getPrototypeOf(curr);
  }
  return Object.keys(map);
};

State.keys = function keys(state) {
  var keys = [], key;
  for (key in state) keys.push(key);
  return keys;
};

State.merge = function merge(state) {
  var setup = {}, key;
  for (key in state) setup[key] = state[key];
  return new State(setup);
};

State.next = function next(state, setup) {
  return Object.setPrototypeOf(new State(setup), state);
};

State.prev = function prev(state) {
  var previous = Object.getPrototypeOf(state);
  return previous === State.prototype ? null : previous;
};

State.size = function history(state) {
  var i = 0;
  do { state = Object.getPrototypeOf(state); }
  while (state !== State.prototype && ++i);
  return i;
};

try { module.exports = State; } catch(o_O) {}