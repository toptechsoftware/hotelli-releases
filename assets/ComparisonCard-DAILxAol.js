import{a as r,j as e,i as m,k as x,l as o,m as h,p as i,cW as t}from"./main-DlEAe4kI.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],j=r("arrow-down",g);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],u=r("arrow-up",p);function f({comparison:a,formatValue:c,title:n="Comparison Data"}){const l=c??(s=>i(s)),d=[a.yesterday,a.lastWeek,a.sameDayLastYear];return e.jsxs(m,{className:"border-hms-accent/30",children:[e.jsx(x,{children:e.jsx(o,{className:"text-lg",children:n})}),e.jsx(h,{children:e.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:d.map(s=>e.jsxs("div",{className:"flex flex-col gap-1 p-4 rounded-lg bg-hms-accent/15 border border-hms-accent/30",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:s.label}),e.jsx("p",{className:"text-xl font-semibold text-hms-primary",children:l(s.value)}),e.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[s.changePct===null?e.jsxs("span",{className:"text-muted-foreground flex items-center gap-1",children:[e.jsx(t,{className:"h-3.5 w-3.5"})," n/a"]}):s.changePct>0?e.jsxs("span",{className:"text-green-600 flex items-center gap-1",children:[e.jsx(u,{className:"h-3.5 w-3.5"})," ",s.changePct.toFixed(1),"%"]}):s.changePct<0?e.jsxs("span",{className:"text-red-600 flex items-center gap-1",children:[e.jsx(j,{className:"h-3.5 w-3.5"})," ",Math.abs(s.changePct).toFixed(1),"%"]}):e.jsxs("span",{className:"text-muted-foreground flex items-center gap-1",children:[e.jsx(t,{className:"h-3.5 w-3.5"})," No change"]}),e.jsx("span",{className:"text-muted-foreground",children:"vs current"})]})]},s.label))})})]})}export{f as C};
