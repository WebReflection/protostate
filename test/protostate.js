var tressa = tressa || require('tressa');
var State = State || require('../protostate.js');

tressa.title('ProtoState');

var state = new State({one:1});
tressa.assert(
  Object.keys(state).join('') === 'one' && state.one === 1,
  'new State(setup)'
);

state = State.next(state, {two:2});
tressa.assert(
  Object.keys(state).join('') === 'two' && state.two === 2 && state.one === 1,
  'State.next(state, setup)'
);

tressa.assert(
  State.keys(state).sort().join(',') === 'one,two',
  'State.keys(state)'
);

var two = state;
state = State.next(state, {three:3});

tressa.assert(
  State.prev(state) === two,
  'State.prev(state)'
);

state = State.next(state, {four:4});
state = State.next(state, {five:5});
var five = state;

tressa.assert(
  State.diff(two, five).sort().join(',') === 'five,four,three',
  'State.diff(prev, curr)'
);

tressa.assert(
  State.diff(five, two).sort().join(',') === 'five,four,three',
  'State.diff(curr, prev)'
);

tressa.assert(
  State.size(state) === 4,
  'State.size(state)'
);

tressa.assert(
  Object.keys(State.merge(state)).sort().join(',') === 'five,four,one,three,two',
  'State.merge(state)'
);

state = State({one:1});
tressa.assert(State.prev(state) === null, 'State.prev(firstState)');
tressa.assert(
  Object.keys(State.next(state, {two:2})).sort().join(',') === 'two'
);