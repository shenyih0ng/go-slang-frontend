"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[37404,9247,34583,53786,89670,51613],{65058:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"minder as 1 sekonde",other:"minder as {{count}} sekonden"},xSeconds:{one:"1 sekonde",other:"{{count}} sekonden"},halfAMinute:"oardel min\xfat",lessThanXMinutes:{one:"minder as 1 min\xfat",other:"minder as {{count}} minuten"},xMinutes:{one:"1 min\xfat",other:"{{count}} minuten"},aboutXHours:{one:"sawat 1 oere",other:"sawat {{count}} oere"},xHours:{one:"1 oere",other:"{{count}} oere"},xDays:{one:"1 dei",other:"{{count}} dagen"},aboutXWeeks:{one:"sawat 1 wike",other:"sawat {{count}} wiken"},xWeeks:{one:"1 wike",other:"{{count}} wiken"},aboutXMonths:{one:"sawat 1 moanne",other:"sawat {{count}} moannen"},xMonths:{one:"1 moanne",other:"{{count}} moannen"},aboutXYears:{one:"sawat 1 jier",other:"sawat {{count}} jier"},xYears:{one:"1 jier",other:"{{count}} jier"},overXYears:{one:"mear as 1 jier",other:"mear as {{count}}s jier"},almostXYears:{one:"hast 1 jier",other:"hast {{count}} jier"}},n=function(e,a,n){var i,r=t[e];return i="string"===typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"oer "+i:i+" lyn":i};a.default=n,e.exports=a.default},81256:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(35063)),r={date:(0,i.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},94526:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'\xf4fr\xfbne' eeee 'om' p",yesterday:"'juster om' p",today:"'hjoed om' p",tomorrow:"'moarn om' p",nextWeek:"eeee 'om' p",other:"P"},n=function(e,a,n,i){return t[e]};a.default=n,e.exports=a.default},38309:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(64028)),r={ordinalNumber:function(e,a){return Number(e)+"e"},era:(0,i.default)({values:{narrow:["f.K.","n.K."],abbreviated:["f.Kr.","n.Kr."],wide:["foar Kristus","nei Kristus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e fearnsjier","2e fearnsjier","3e fearnsjier","4e fearnsjier"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mrt.","apr.","mai.","jun.","jul.","aug.","sep.","okt.","nov.","des."],wide:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["s","m","t","w","t","f","s"],short:["si","mo","ti","wo","to","fr","so"],abbreviated:["snein","moa","tii","woa","ton","fre","sneon"],wide:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"j\xfbns",night:"nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"j\xfbns",night:"nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"j\xfbns",night:"nachts"}},defaultWidth:"wide"})};a.default=r,e.exports=a.default},62638:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(27758)),r={ordinalNumber:(0,n(t(35568)).default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^([fn]\.? ?K\.?)/,abbreviated:/^([fn]\. ?Kr\.?)/,wide:/^((foar|nei) Kristus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/,/^n/]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e fearnsjier/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,wide:/^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^des/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(si|mo|ti|wo|to|fr|so)/i,abbreviated:/^(snein|moa|tii|woa|ton|fre|sneon)/i,wide:/^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^sn/i,/^mo/i,/^ti/i,/^wo/i,/^to/i,/^fr/i,/^sn/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(am|pm|middernacht|middeis|moarns|middei|j\xfbns|nachts)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^middei/i,morning:/moarns/i,afternoon:/^middeis/i,evening:/j\xfbns/i,night:/nachts/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},2617:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(65058)),r=n(t(81256)),o=n(t(94526)),d=n(t(38309)),s=n(t(62638)),u={code:"fy",formatDistance:i.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=u,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-fy-index-js.e3739bb1.chunk.js.map