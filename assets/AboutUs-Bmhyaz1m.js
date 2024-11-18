import{r as f,j as e,Q as S,C as T,P as E,a as P}from"./index-BkeKaQ-i.js";/* empty css              */import{m as r}from"./proxy-Cm8yUrks.js";const H="/assets/aboutus-DeHNNaI6.jpeg";var N=new Map,g=new WeakMap,O=0,W=void 0;function q(i){return i?(g.has(i)||(O+=1,g.set(i,O.toString())),g.get(i)):"0"}function M(i){return Object.keys(i).sort().filter(s=>i[s]!==void 0).map(s=>`${s}_${s==="root"?q(i.root):i[s]}`).toString()}function k(i){const s=M(i);let n=N.get(s);if(!n){const l=new Map;let d;const o=new IntersectionObserver(a=>{a.forEach(t=>{var c;const m=t.isIntersecting&&d.some(p=>t.intersectionRatio>=p);i.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=m),(c=l.get(t.target))==null||c.forEach(p=>{p(m,t)})})},i);d=o.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),n={id:s,observer:o,elements:l},N.set(s,n)}return n}function Q(i,s,n={},l=W){if(typeof window.IntersectionObserver>"u"&&l!==void 0){const c=i.getBoundingClientRect();return s(l,{isIntersecting:l,target:i,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:d,observer:o,elements:a}=k(n),t=a.get(i)||[];return a.has(i)||a.set(i,t),t.push(s),o.observe(i),function(){t.splice(t.indexOf(s),1),t.length===0&&(a.delete(i),o.unobserve(i)),a.size===0&&(o.disconnect(),N.delete(d))}}function V({threshold:i,delay:s,trackVisibility:n,rootMargin:l,root:d,triggerOnce:o,skip:a,initialInView:t,fallbackInView:c,onChange:m}={}){var p;const[x,A]=f.useState(null),b=f.useRef(),[j,R]=f.useState({inView:!!t,entry:void 0});b.current=m,f.useEffect(()=>{if(a||!x)return;let v;return v=Q(x,(C,y)=>{R({inView:C,entry:y}),b.current&&b.current(C,y),y.isIntersecting&&o&&v&&(v(),v=void 0)},{root:d,rootMargin:l,threshold:i,trackVisibility:n,delay:s},c),()=>{v&&v()}},[Array.isArray(i)?i.toString():i,x,d,l,o,a,n,c,s]);const w=(p=j.entry)==null?void 0:p.target,I=f.useRef();!x&&w&&!o&&!a&&I.current!==w&&(I.current=w,R({inView:!!t,entry:void 0}));const u=[A,j.inView,j.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const U={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},h={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},F=()=>{const{ref:i,inView:s}=V({triggerOnce:!0,threshold:.1});return e.jsxs("div",{className:"whyus",children:[e.jsx("h2",{children:"Why Choose"}),e.jsx("h1",{children:"Champion Roof Insulation?"}),e.jsxs(r.div,{className:"box",ref:i,variants:U,initial:"hidden",animate:s?"visible":"hidden",children:[e.jsxs(r.div,{className:"points",variants:h,children:[e.jsxs("div",{className:"logobox",children:[e.jsx(r.div,{className:"pointbox",whileHover:{scale:1.2,rotate:90},whileTap:{scale:.8,rotate:-90,borderRadius:"100%"},children:e.jsx(S,{height:"40px",width:"40px"})}),e.jsx("div",{className:"pointheading",children:e.jsx("h3",{children:"Our Quality"})})]}),e.jsx(r.div,{className:"pointcontent",children:"At Champion Roof Insulation, improvement and excellence are pursued in every project. Specifications will be accurate, and workmanship will be skillful to ensure that waterproofing and insulation projects are durable and of high quality, meeting or exceeding the accepted standards of the industry. Quality and precision form the backbone of our success."})]}),e.jsxs(r.div,{className:"points",variants:h,children:[e.jsxs("div",{className:"logobox",children:[e.jsx(r.div,{className:"pointbox",whileHover:{scale:1.2,rotate:90},whileTap:{scale:.8,rotate:-90,borderRadius:"100%"},children:e.jsx(T,{height:"40px",width:"40px"})}),e.jsx("div",{className:"pointheading",children:e.jsx("h3",{children:"Our Commitment"})})]}),e.jsx(r.div,{className:"pointcontent",variants:h,children:"We are committed to providing premium waterproofing and insulation services that exceed the expectations of our clients. Excellence in quality and safety, with customer satisfaction in mind, guides our work processes. Excellence will be our hallmark in whatever project we embark on, ensuring your business is well-protected and your objectives achieved."})]}),e.jsxs(r.div,{className:"points",variants:h,children:[e.jsxs("div",{className:"logobox",children:[e.jsx(r.div,{className:"pointbox",whileHover:{scale:1.2,rotate:90},whileTap:{scale:.8,rotate:-90,borderRadius:"100%"},children:e.jsx(E,{height:"40px",width:"40px"})}),e.jsx("div",{className:"pointheading",children:e.jsx("h3",{children:"Our Price"})})]}),e.jsx(r.div,{className:"pointcontent",variants:h,children:"Quality is never sacrificed in our pricing at Champion Roof Insulation, although the prices remain very competitive. For any budget, cost-effective solutions are available that will provide long-term effects. With transparent pricing, there are no hidden surprises; this way, you will know that the value for each job is excellent."})]}),e.jsxs(r.div,{className:"points",variants:h,children:[e.jsxs("div",{className:"logobox",children:[e.jsx(r.div,{className:"pointbox",whileHover:{scale:1.2,rotate:90},whileTap:{scale:.8,rotate:-90,borderRadius:"100%"},children:e.jsx(P,{height:"40px",width:"40px"})}),e.jsx("div",{className:"pointheading",children:e.jsx("h3",{children:"Our Process"})})]}),e.jsx(r.div,{className:"pointcontent",variants:h,children:"Champion Roof Insulation ensures that the quality is maintained through proper planning, expert execution, and continuous process refinement for long-lasting solutions to meet or exceed industry standards. Each project is carefully managed to ensure superior results and client satisfaction."})]})]})]})},L=()=>(f.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{className:"parent",children:[e.jsxs("div",{className:"about",children:[e.jsx("div",{className:"AboutPhoto",children:e.jsx("img",{src:H})}),e.jsxs("div",{className:"AboutText",children:[e.jsx("h1",{children:"Who we are"}),e.jsx("h4",{children:"Champion roof insulation works llc (an ISO Certified Company) aim is to be the best in its field of waterproofing through the strongest commitment to quality and client/customer satisfaction."}),e.jsx("p",{children:"We offer a wide variety of waterproofing & Insulation services. Our extensive experience in managing resources, process and adherence to quality, help our clients focus on core business strategies while reducing operating costs. CHAMPION ROOF INSULATION has earned an industry reputation of delivering high quality service and customer satisfaction. CHAMPION ROOF INSULATION offers a full array of services that support business strategies and facilitate improvement for compelling business needs."}),e.jsx("p",{children:"Hoping that you will qualify our firm as a prospective bidder for the execution of Water Proofing & Insulation Systems, we look forward to serve you."}),e.jsx("button",{onClick:()=>navigate("/AboutDetails"),children:"Read More"})]})]}),e.jsx(F,{})]}));export{L as default};
