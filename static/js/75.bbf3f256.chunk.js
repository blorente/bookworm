(this.webpackJsonpbookworm=this.webpackJsonpbookworm||[]).push([[75],{148:function(I,_,n){!function(I){"use strict";I.defineMode("ntriples",(function(){var I={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function _(_,n){var R,t=_.location;R=t==I.PRE_SUBJECT&&"<"==n?I.WRITING_SUB_URI:t==I.PRE_SUBJECT&&"_"==n?I.WRITING_BNODE_URI:t==I.PRE_PRED&&"<"==n?I.WRITING_PRED_URI:t==I.PRE_OBJ&&"<"==n?I.WRITING_OBJ_URI:t==I.PRE_OBJ&&"_"==n?I.WRITING_OBJ_BNODE:t==I.PRE_OBJ&&'"'==n?I.WRITING_OBJ_LITERAL:t==I.WRITING_SUB_URI&&">"==n||t==I.WRITING_BNODE_URI&&" "==n?I.PRE_PRED:t==I.WRITING_PRED_URI&&">"==n?I.PRE_OBJ:t==I.WRITING_OBJ_URI&&">"==n||t==I.WRITING_OBJ_BNODE&&" "==n||t==I.WRITING_OBJ_LITERAL&&'"'==n||t==I.WRITING_LIT_LANG&&" "==n||t==I.WRITING_LIT_TYPE&&">"==n?I.POST_OBJ:t==I.WRITING_OBJ_LITERAL&&"@"==n?I.WRITING_LIT_LANG:t==I.WRITING_OBJ_LITERAL&&"^"==n?I.WRITING_LIT_TYPE:" "!=n||t!=I.PRE_SUBJECT&&t!=I.PRE_PRED&&t!=I.PRE_OBJ&&t!=I.POST_OBJ?t==I.POST_OBJ&&"."==n?I.PRE_SUBJECT:I.ERROR:t,_.location=R}return{startState:function(){return{location:I.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(I,n){var R=I.next();if("<"==R){_(n,R);var t="";return I.eatWhile((function(I){return"#"!=I&&">"!=I&&(t+=I,!0)})),n.uris.push(t),I.match("#",!1)||(I.next(),_(n,">")),"variable"}if("#"==R){var e="";return I.eatWhile((function(I){return">"!=I&&" "!=I&&(e+=I,!0)})),n.anchors.push(e),"variable-2"}if(">"==R)return _(n,">"),"variable";if("_"==R){_(n,R);var r="";return I.eatWhile((function(I){return" "!=I&&(r+=I,!0)})),n.bnodes.push(r),I.next(),_(n," "),"builtin"}if('"'==R)return _(n,R),I.eatWhile((function(I){return'"'!=I})),I.next(),"@"!=I.peek()&&"^"!=I.peek()&&_(n,'"'),"string";if("@"==R){_(n,"@");var i="";return I.eatWhile((function(I){return" "!=I&&(i+=I,!0)})),n.langs.push(i),I.next(),_(n," "),"string-2"}if("^"==R){I.next(),_(n,"^");var T="";return I.eatWhile((function(I){return">"!=I&&(T+=I,!0)})),n.types.push(T),I.next(),_(n,">"),"variable"}" "==R&&_(n,R),"."==R&&_(n,R)}}})),I.defineMIME("application/n-triples","ntriples"),I.defineMIME("application/n-quads","ntriples"),I.defineMIME("text/n-triples","ntriples")}(n(20))}}]);
//# sourceMappingURL=75.bbf3f256.chunk.js.map