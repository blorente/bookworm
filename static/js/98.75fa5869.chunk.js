(this.webpackJsonpbookworm=this.webpackJsonpbookworm||[]).push([[98],{172:function(t,e,n){!function(t){"use strict";t.defineMode("solr",(function(){var t=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,e=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;function o(t){return parseFloat(t).toString()===t}function r(t){return function(e,n){for(var o,r=!1;null!=(o=e.next())&&(o!=t||r);)r=!r&&"\\"==o;return r||(n.tokenize=s),"string"}}function i(t){return function(e,n){var o="operator";return"+"==t?o+=" positive":"-"==t?o+=" negative":"|"==t?e.eat(/\|/):"&"==t?e.eat(/\&/):"^"==t&&(o+=" boost"),n.tokenize=s,o}}function u(e){return function(r,i){for(var u=e;(e=r.peek())&&null!=e.match(t);)u+=r.next();return i.tokenize=s,n.test(u)?"operator":o(u)?"number":":"==r.peek()?"field":"string"}}function s(n,o){var a=n.next();return'"'==a?o.tokenize=r(a):e.test(a)?o.tokenize=i(a):t.test(a)&&(o.tokenize=u(a)),o.tokenize!=s?o.tokenize(n,o):null}return{startState:function(){return{tokenize:s}},token:function(t,e){return t.eatSpace()?null:e.tokenize(t,e)}}})),t.defineMIME("text/x-solr","solr")}(n(20))}}]);
//# sourceMappingURL=98.75fa5869.chunk.js.map