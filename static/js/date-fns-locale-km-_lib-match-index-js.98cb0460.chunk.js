"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[92973],{50670:(i,a,t)=>{var e=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e(t(27758)),n={ordinalNumber:(0,e(t(35568)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u1798\.)?\u1782\u179f/i,abbreviated:/^(\u1798\u17bb\u1793)?\u1782\.\u179f/i,wide:/^(\u1798\u17bb\u1793|\u1793\u17c3)\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u1798|\u1798\u17bb\u1793)\u1782\.?\u179f/i,/^(\u1793\u17c3)?\u1782\.?\u179f/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^(\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f)(\u1791\u17b8)?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(\u1798\.\u1780|\u1780\.\u1798|\u1798\u17b7|\u1798\.\u179f|\u17a7\.\u179f|\u1798\.\u1790|\u1780\.\u178a|\u179f\u17b8|\u1780\u1789|\u178f\u17bb|\u179c\u17b7|\u1792)/i,abbreviated:/^(\u1798\u1780\u179a\u17b6|\u1780\u17bb\u1798\u17d2\u1797\u17c8|\u1798\u17b8\u1793\u17b6|\u1798\u17c1\u179f\u17b6|\u17a7\u179f\u1797\u17b6|\u1798\u17b7\u1790\u17bb\u1793\u17b6|\u1780\u1780\u17d2\u1780\u178a\u17b6|\u179f\u17b8\u17a0\u17b6|\u1780\u1789\u17d2\u1789\u17b6|\u178f\u17bb\u179b\u17b6|\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6|\u1792\u17d2\u1793\u17bc)/i,wide:/^(\u1798\u1780\u179a\u17b6|\u1780\u17bb\u1798\u17d2\u1797\u17c8|\u1798\u17b8\u1793\u17b6|\u1798\u17c1\u179f\u17b6|\u17a7\u179f\u1797\u17b6|\u1798\u17b7\u1790\u17bb\u1793\u17b6|\u1780\u1780\u17d2\u1780\u178a\u17b6|\u179f\u17b8\u17a0\u17b6|\u1780\u1789\u17d2\u1789\u17b6|\u178f\u17bb\u179b\u17b6|\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6|\u1792\u17d2\u1793\u17bc)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u1798\.\u1780/i,/^\u1780\.\u1798/i,/^\u1798\u17b7/i,/^\u1798\.\u179f/i,/^\u17a7\.\u179f/i,/^\u1798\.\u1790/i,/^\u1780\.\u178a/i,/^\u179f\u17b8/i,/^\u1780\u1789/i,/^\u178f\u17bb/i,/^\u179c\u17b7/i,/^\u1792/i],any:[/^\u1798\u1780/i,/^\u1780\u17bb/i,/^\u1798\u17b8\u1793/i,/^\u1798\u17c1/i,/^\u17a7\u179f/i,/^\u1798\u17b7\u1790/i,/^\u1780\u1780/i,/^\u179f\u17b8/i,/^\u1780\u1789/i,/^\u178f\u17bb/i,/^\u179c\u17b7\u1785/i,/^\u1792/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,short:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,abbreviated:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,wide:/^(\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799|\u1785\u1793\u17d2\u1791|\u17a2\u1784\u17d2\u1782\u17b6\u179a|\u1796\u17bb\u1792|\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd|\u179f\u17bb\u1780\u17d2\u179a|\u179f\u17c5\u179a\u17cd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u17a2\u17b6/i,/^\u1785/i,/^\u17a2/i,/^\u1796/i,/^\u1796\u17d2\u179a/i,/^\u179f\u17bb/i,/^\u179f/i],any:[/^\u17a2\u17b6/i,/^\u1785/i,/^\u17a2/i,/^\u1796/i,/^\u1796\u17d2\u179a/i,/^\u179f\u17bb/i,/^\u179f\u17c5/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780|\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb|\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b|\u1796\u17c1\u179b\u1799\u1794\u17cb|\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a)/i,any:/^(\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780|\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb|\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b|\u1796\u17c1\u179b\u1799\u1794\u17cb|\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u1796\u17d2\u179a\u17b9\u1780/i,pm:/^\u179b\u17d2\u1784\u17b6\u1785/i,midnight:/^\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a/i,noon:/^\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb/i,morning:/\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780/i,afternoon:/\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b/i,evening:/\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785/i,night:/\u1796\u17c1\u179b\u1799\u1794\u17cb/i}},defaultParseWidth:"any"})};a.default=n,i.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-km-_lib-match-index-js.98cb0460.chunk.js.map