"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[44388],{40776:(o,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={lessThanXSeconds:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},xSeconds:{one:"\u05e9\u05e0\u05d9\u05d9\u05d4",two:"\u05e9\u05ea\u05d9 \u05e9\u05e0\u05d9\u05d5\u05ea",other:"{{count}} \u05e9\u05e0\u05d9\u05d5\u05ea"},halfAMinute:"\u05d7\u05e6\u05d9 \u05d3\u05e7\u05d4",lessThanXMinutes:{one:"\u05e4\u05d7\u05d5\u05ea \u05de\u05d3\u05e7\u05d4",two:"\u05e4\u05d7\u05d5\u05ea \u05de\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"\u05e4\u05d7\u05d5\u05ea \u05de\u05be{{count}} \u05d3\u05e7\u05d5\u05ea"},xMinutes:{one:"\u05d3\u05e7\u05d4",two:"\u05e9\u05ea\u05d9 \u05d3\u05e7\u05d5\u05ea",other:"{{count}} \u05d3\u05e7\u05d5\u05ea"},aboutXHours:{one:"\u05db\u05e9\u05e2\u05d4",two:"\u05db\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e2\u05d5\u05ea"},xHours:{one:"\u05e9\u05e2\u05d4",two:"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e2\u05d5\u05ea"},xDays:{one:"\u05d9\u05d5\u05dd",two:"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd",other:"{{count}} \u05d9\u05de\u05d9\u05dd"},aboutXWeeks:{one:"\u05db\u05e9\u05d1\u05d5\u05e2",two:"\u05db\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},xWeeks:{one:"\u05e9\u05d1\u05d5\u05e2",two:"\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"},aboutXMonths:{one:"\u05db\u05d7\u05d5\u05d3\u05e9",two:"\u05db\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},xMonths:{one:"\u05d7\u05d5\u05d3\u05e9",two:"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",other:"{{count}} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},aboutXYears:{one:"\u05db\u05e9\u05e0\u05d4",two:"\u05db\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},xYears:{one:"\u05e9\u05e0\u05d4",two:"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"{{count}} \u05e9\u05e0\u05d9\u05dd"},overXYears:{one:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05d4",two:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05d9\u05d5\u05ea\u05e8 \u05de\u05be{{count}} \u05e9\u05e0\u05d9\u05dd"},almostXYears:{one:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05d4",two:"\u05db\u05de\u05e2\u05d8 \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",other:"\u05db\u05de\u05e2\u05d8 {{count}} \u05e9\u05e0\u05d9\u05dd"}},n=function(o,t,n){if("xDays"===o&&null!==n&&void 0!==n&&n.addSuffix&&t<=2)return n.comparison&&n.comparison>0?1===t?"\u05de\u05d7\u05e8":"\u05de\u05d7\u05e8\u05ea\u05d9\u05d9\u05dd":1===t?"\u05d0\u05ea\u05de\u05d5\u05dc":"\u05e9\u05dc\u05e9\u05d5\u05dd";var r,u=e[o];return r="string"===typeof u?u:1===t?u.one:2===t?u.two:u.other.replace("{{count}}",String(t)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"\u05d1\u05e2\u05d5\u05d3 "+r:"\u05dc\u05e4\u05e0\u05d9 "+r:r};t.default=n,o.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-he-_lib-formatDistance-index-js.27e34435.chunk.js.map