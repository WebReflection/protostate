/*! Copyright (c) 2017, Andrea Giammarchi - ISC License */
function State(t){"use strict";return Object.assign(this||new State,t)}State.diff=function(t,e){var r,n,o,a={};for(a.isPrototypeOf.call(e,t)&&(r=e,e=t,t=r);e!==t;){for(o=(n=Object.keys(e)).length;o--;a[n[o]]=o);e=Object.getPrototypeOf(e)}return Object.keys(a)},State.keys=function(t){var e,r=[];for(e in t)r.push(e);return r},State.merge=function(t){var e,r={};for(e in t)r[e]=t[e];return new State(r)},State.next=function(t,e){return Object.setPrototypeOf(new State(e),t)},State.prev=function(t){var e=Object.getPrototypeOf(t);return e===State.prototype?null:e},State.size=function(t){var e=0;do{t=Object.getPrototypeOf(t)}while(t!==State.prototype&&++e);return e};try{module.exports=State}catch(t){}