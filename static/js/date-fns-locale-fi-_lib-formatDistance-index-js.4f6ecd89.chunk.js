"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[97374],{26136:(e,u)=>{function n(e){return e.replace(/sekuntia?/,"sekunnin")}function t(e){return e.replace(/minuuttia?/,"minuutin")}function o(e){return e.replace(/tuntia?/,"tunnin")}function i(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function r(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function a(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:n},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:n},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:t},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:t},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:o},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:o},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(e){return e.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:i},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:i},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:a},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:a},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:a},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:a}},c=function(e,u,n){var t=s[e],o=1===u?t.one:t.other.replace("{{count}}",String(u));return null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?t.futureTense(o)+" kuluttua":o+" sitten":o};u.default=c,e.exports=u.default}}]);
//# sourceMappingURL=date-fns-locale-fi-_lib-formatDistance-index-js.4f6ecd89.chunk.js.map