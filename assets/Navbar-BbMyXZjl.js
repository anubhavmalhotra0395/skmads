import{g as Ct,r as o,j as i,a as Nt}from"./index-1ZIyIeH6.js";import{c as E}from"./index-kvEjSg_J.js";import{t as Et,T as Ae,a as Be,E as he,b as Le,c as ge,u as xe,o as De,s as U,l as Te,d as O,e as Ke,C as jt,f as Tt}from"./Collapse-FEnzg6BS.js";var Fe={exports:{}},Ot="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rt=Ot,wt=Rt;function Pe(){}function He(){}He.resetWarningCache=Pe;var kt=function(){function e(r,a,s,c,u,l){if(l!==wt){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:He,resetWarningCache:Pe};return n.PropTypes=n,n};Fe.exports=kt();var St=Fe.exports;const le=Ct(St);function $t(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e},[e]),t}function w(e){const t=$t(e);return o.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Mt=e=>o.forwardRef((t,n)=>i.jsx("div",{...t,ref:n,className:E(t.className,e)}));function It(){const e=o.useRef(!0),t=o.useRef(()=>e.current);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function At(e){const t=o.useRef(null);return o.useEffect(()=>{t.current=e}),t.current}const Bt=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Lt=typeof document<"u",ve=Lt||Bt?o.useLayoutEffect:o.useEffect,Dt=["as","disabled"];function Kt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ft(e){return!e||e.trim()==="#"}function We({tagName:e,disabled:t,href:n,target:r,rel:a,role:s,onClick:c,tabIndex:u=0,type:l}){e||(n!=null||r!=null||a!=null?e="a":e="button");const d={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},d];const f=v=>{if((t||e==="a"&&Ft(n))&&v.preventDefault(),t){v.stopPropagation();return}c==null||c(v)},m=v=>{v.key===" "&&(v.preventDefault(),f(v))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:u,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:f,onKeyDown:m},d]}const _e=o.forwardRef((e,t)=>{let{as:n,disabled:r}=e,a=Kt(e,Dt);const[s,{tagName:c}]=We(Object.assign({tagName:n,disabled:r},a));return i.jsx(c,Object.assign({},a,s,{ref:t}))});_e.displayName="Button";const Pt=["onKeyDown"];function Ht(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Wt(e){return!e||e.trim()==="#"}const Ue=o.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=Ht(e,Pt);const[a]=We(Object.assign({tagName:"a"},r)),s=w(c=>{a.onKeyDown(c),n==null||n(c)});return Wt(r.href)||r.role==="button"?i.jsx("a",Object.assign({ref:t},r,a,{onKeyDown:s})):i.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});Ue.displayName="Anchor";const _t=Ue,Ut={[he]:"show",[Le]:"show"},Ge=o.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...a},s)=>{const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},u=o.useCallback((l,d)=>{Et(l),r==null||r(l,d)},[r]);return i.jsx(Ae,{ref:s,addEndListener:Be,...c,onEnter:u,childRef:t.ref,children:(l,d)=>o.cloneElement(t,{...d,className:E("fade",e,t.props.className,Ut[l],n[l])})})});Ge.displayName="Fade";const Gt=Ge,Vt={"aria-label":le.string,onClick:le.func,variant:le.oneOf(["white"])},ye=o.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},a)=>i.jsx("button",{ref:a,type:"button",className:E("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));ye.displayName="CloseButton";ye.propTypes=Vt;const Xt=ye,Ve=o.createContext(null);Ve.displayName="CardHeaderContext";const Yt=Ve;function Qt(e){const t=o.useRef(e);return t.current=e,t}function qt(e){const t=Qt(e);o.useEffect(()=>()=>t.current(),[])}var Jt=Function.prototype.bind.call(Function.prototype.call,[].slice);function L(e,t){return Jt(e.querySelectorAll(t))}function zt(){const[,e]=o.useReducer(t=>!t,!1);return e}function Oe(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const Zt=o.createContext(null),be=(e,t=null)=>e!=null?String(e):t||null,z=Zt,Xe=o.createContext(null);Xe.displayName="NavContext";const Ye=Xe,en="data-rr-ui-",tn="rrUi";function Z(e){return`${en}${e}`}function nn(e){return`${tn}${e}`}const Qe=o.createContext(ge?window:void 0);Qe.Provider;function Ce(){return o.useContext(Qe)}const qe=o.createContext(null);qe.displayName="NavbarContext";const F=qe,rn=o.createContext(null),Je=rn,an=["as","active","eventKey"];function sn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ze({key:e,onClick:t,active:n,id:r,role:a,disabled:s}){const c=o.useContext(z),u=o.useContext(Ye),l=o.useContext(Je);let d=n;const f={role:a};if(u){!a&&u.role==="tablist"&&(f.role="tab");const m=u.getControllerId(e??null),v=u.getControlledId(e??null);f[Z("event-key")]=e,f.id=m||r,d=n==null&&e!=null?u.activeKey===e:n,(d||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(f["aria-controls"]=v)}return f.role==="tab"&&(f["aria-selected"]=d,d||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=w(m=>{s||(t==null||t(m),e!=null&&c&&!m.isPropagationStopped()&&c(e,m))}),[f,{isActive:d}]}const Ze=o.forwardRef((e,t)=>{let{as:n=_e,active:r,eventKey:a}=e,s=sn(e,an);const[c,u]=ze(Object.assign({key:be(a,s.href),active:r},s));return c[Z("active")]=u.isActive,i.jsx(n,Object.assign({},s,c,{ref:t}))});Ze.displayName="NavItem";const on=Ze,ln=["as","onSelect","activeKey","role","onKeyDown"];function cn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const Re=()=>{},we=Z("event-key"),et=o.forwardRef((e,t)=>{let{as:n="div",onSelect:r,activeKey:a,role:s,onKeyDown:c}=e,u=cn(e,ln);const l=zt(),d=o.useRef(!1),f=o.useContext(z),m=o.useContext(Je);let v,h;m&&(s=s||"tablist",a=m.activeKey,v=m.getControlledId,h=m.getControllerId);const p=o.useRef(null),g=y=>{const j=p.current;if(!j)return null;const S=L(j,`[${we}]:not([aria-disabled=true])`),A=j.querySelector("[aria-selected=true]");if(!A||A!==document.activeElement)return null;const $=S.indexOf(A);if($===-1)return null;let k=$+y;return k>=S.length&&(k=0),k<0&&(k=S.length-1),S[k]},N=(y,j)=>{y!=null&&(r==null||r(y,j),f==null||f(y,j))},R=y=>{if(c==null||c(y),!m)return;let j;switch(y.key){case"ArrowLeft":case"ArrowUp":j=g(-1);break;case"ArrowRight":case"ArrowDown":j=g(1);break;default:return}j&&(y.preventDefault(),N(j.dataset[nn("EventKey")]||null,y),d.current=!0,l())};o.useEffect(()=>{if(p.current&&d.current){const y=p.current.querySelector(`[${we}][aria-selected=true]`);y==null||y.focus()}d.current=!1});const I=xe(t,p);return i.jsx(z.Provider,{value:N,children:i.jsx(Ye.Provider,{value:{role:s,activeKey:be(a),getControlledId:v||Re,getControllerId:h||Re},children:i.jsx(n,Object.assign({},u,{onKeyDown:R,ref:I,role:s}))})})});et.displayName="Nav";const un=Object.assign(et,{Item:on});function ce(e){e===void 0&&(e=De());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function dn(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const ke=Z("modal-open");class fn{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return dn(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();t.style={overflow:a.style.overflow,[r]:a.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(U(a,r)||"0",10)+t.scrollBarWidth}px`),a.setAttribute(ke,""),U(a,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(ke),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Ne=fn,ue=(e,t)=>ge?e==null?(t||De()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function vn(e,t){const n=Ce(),[r,a]=o.useState(()=>ue(e,n==null?void 0:n.document));if(!r){const s=ue(e);s&&a(s)}return o.useEffect(()=>{t&&r&&t(r)},[t,r]),o.useEffect(()=>{const s=ue(e);s!==r&&a(s)},[e,r]),r}function mn({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){const s=o.useRef(null),c=o.useRef(t),u=w(n);o.useEffect(()=>{t?c.current=!0:u(s.current)},[t,u]);const l=xe(s,e.ref),d=o.cloneElement(e,{ref:l});return t?d:a||!c.current&&r?null:d}function pn({in:e,onTransition:t}){const n=o.useRef(null),r=o.useRef(!0),a=w(t);return ve(()=>{if(!n.current)return;let s=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[e,a]),ve(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function hn({children:e,in:t,onExited:n,onEntered:r,transition:a}){const[s,c]=o.useState(!t);t&&s&&c(!1);const u=pn({in:!!t,onTransition:d=>{const f=()=>{d.isStale()||(d.in?r==null||r(d.element,d.initial):(c(!0),n==null||n(d.element)))};Promise.resolve(a(d)).then(f,m=>{throw d.in||c(!0),m})}}),l=xe(u,e.ref);return s&&!t?null:o.cloneElement(e,{ref:l})}function Se(e,t,n){return e?i.jsx(e,Object.assign({},n)):t?i.jsx(hn,Object.assign({},n,{transition:t})):i.jsx(mn,Object.assign({},n))}function gn(e){return e.code==="Escape"||e.keyCode===27}const xn=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function yn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}let de;function bn(e){return de||(de=new Ne({ownerDocument:e==null?void 0:e.document})),de}function Cn(e){const t=Ce(),n=e||bn(t),r=o.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:o.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:o.useCallback(a=>{r.current.backdrop=a},[])})}const tt=o.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:a,style:s,children:c,backdrop:u=!0,keyboard:l=!0,onBackdropClick:d,onEscapeKeyDown:f,transition:m,runTransition:v,backdropTransition:h,runBackdropTransition:p,autoFocus:g=!0,enforceFocus:N=!0,restoreFocus:R=!0,restoreFocusOptions:I,renderDialog:y,renderBackdrop:j=x=>i.jsx("div",Object.assign({},x)),manager:S,container:A,onShow:$,onHide:k=()=>{},onExit:G,onExited:V,onExiting:ee,onEnter:te,onEntering:P,onEntered:X}=e,Y=yn(e,xn);const M=Ce(),B=vn(A),C=Cn(S),ne=It(),re=At(n),[H,Q]=o.useState(!n),D=o.useRef(null);o.useImperativeHandle(t,()=>C,[C]),ge&&!re&&n&&(D.current=ce(M==null?void 0:M.document)),n&&H&&Q(!1);const W=w(()=>{if(C.add(),se.current=Te(document,"keydown",yt),ae.current=Te(document,"focus",()=>setTimeout(_),!0),$&&$(),g){var x,je;const ie=ce((x=(je=C.dialog)==null?void 0:je.ownerDocument)!=null?x:M==null?void 0:M.document);C.dialog&&ie&&!Oe(C.dialog,ie)&&(D.current=ie,C.dialog.focus())}}),T=w(()=>{if(C.remove(),se.current==null||se.current(),ae.current==null||ae.current(),R){var x;(x=D.current)==null||x.focus==null||x.focus(I),D.current=null}});o.useEffect(()=>{!n||!B||W()},[n,B,W]),o.useEffect(()=>{H&&T()},[H,T]),qt(()=>{T()});const _=w(()=>{if(!N||!ne()||!C.isTopModal())return;const x=ce(M==null?void 0:M.document);C.dialog&&x&&!Oe(C.dialog,x)&&C.dialog.focus()}),xt=w(x=>{x.target===x.currentTarget&&(d==null||d(x),u===!0&&k())}),yt=w(x=>{l&&gn(x)&&C.isTopModal()&&(f==null||f(x),x.defaultPrevented||k())}),ae=o.useRef(),se=o.useRef(),bt=(...x)=>{Q(!0),V==null||V(...x)};if(!B)return null;const Ee=Object.assign({role:r,ref:C.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Y,{style:s,className:a,tabIndex:-1});let oe=y?y(Ee):i.jsx("div",Object.assign({},Ee,{children:o.cloneElement(c,{role:"document"})}));oe=Se(m,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:G,onExiting:ee,onExited:bt,onEnter:te,onEntering:P,onEntered:X,children:oe});let q=null;return u&&(q=j({ref:C.setBackdropRef,onClick:xt}),q=Se(h,p,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:q})),i.jsx(i.Fragment,{children:Nt.createPortal(i.jsxs(i.Fragment,{children:[q,oe]}),B)})});tt.displayName="Modal";const Nn=Object.assign(tt,{Manager:Ne});function En(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function jn(e,t){e.classList?e.classList.add(t):En(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function $e(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Tn(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=$e(e.className,t):e.setAttribute("class",$e(e.className&&e.className.baseVal||"",t))}const K={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class nt extends Ne{adjustAndStore(t,n,r){const a=n.style[t];n.dataset[t]=a,U(n,{[t]:`${parseFloat(U(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],U(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(jn(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";L(n,K.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,t.scrollBarWidth)),L(n,K.STICKY_CONTENT).forEach(s=>this.adjustAndStore(a,s,-t.scrollBarWidth)),L(n,K.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(a,s,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Tn(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";L(n,K.FIXED_CONTENT).forEach(s=>this.restore(r,s)),L(n,K.STICKY_CONTENT).forEach(s=>this.restore(a,s)),L(n,K.NAVBAR_TOGGLER).forEach(s=>this.restore(a,s))}}let fe;function On(e){return fe||(fe=new nt(e)),fe}const Rn=o.createContext({onHide(){}}),rt=Rn,wn=o.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:a,...s},c)=>{const u=o.useContext(rt),l=w(()=>{u==null||u.onHide(),r==null||r()});return i.jsxs("div",{ref:c,...s,children:[a,n&&i.jsx(Xt,{"aria-label":e,variant:t,onClick:l})]})}),kn=wn;var Me={exports:{}},me={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){function a(c,u,l,d,f,m){var v=d||"<<anonymous>>",h=m||l;if(u[l]==null)return c?new Error("Required "+f+" `"+h+"` was not specified "+("in `"+v+"`.")):null;for(var p=arguments.length,g=Array(p>6?p-6:0),N=6;N<p;N++)g[N-6]=arguments[N];return r.apply(void 0,[u,l,v,f,h].concat(g))}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}e.exports=t.default})(me,me.exports);var Sn=me.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=Sn,r=a(n);function a(c){return c&&c.__esModule?c:{default:c}}function s(){for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];function d(){for(var f=arguments.length,m=Array(f),v=0;v<f;v++)m[v]=arguments[v];var h=null;return u.forEach(function(p){if(h==null){var g=p.apply(void 0,m);g!=null&&(h=g)}}),h}return(0,r.default)(d)}e.exports=t.default})(Me,Me.exports);const at=o.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=O(t,"nav-item"),i.jsx(n,{ref:a,className:E(e,t),...r})));at.displayName="NavItem";const $n=at,st=o.forwardRef(({bsPrefix:e,className:t,as:n=_t,active:r,eventKey:a,disabled:s=!1,...c},u)=>{e=O(e,"nav-link");const[l,d]=ze({key:be(a,c.href),active:r,disabled:s,...c});return i.jsx(n,{...c,...l,ref:u,disabled:s,className:E(t,e,s&&"disabled",d.isActive&&"active")})});st.displayName="NavLink";const Mn=st,ot=o.forwardRef((e,t)=>{const{as:n="div",bsPrefix:r,variant:a,fill:s=!1,justify:c=!1,navbar:u,navbarScroll:l,className:d,activeKey:f,...m}=Ke(e,{activeKey:"onSelect"}),v=O(r,"nav");let h,p,g=!1;const N=o.useContext(F),R=o.useContext(Yt);return N?(h=N.bsPrefix,g=u??!0):R&&({cardHeaderBsPrefix:p}=R),i.jsx(un,{as:n,ref:t,activeKey:f,className:E(d,{[v]:!g,[`${h}-nav`]:g,[`${h}-nav-scroll`]:g&&l,[`${p}-${a}`]:!!p,[`${v}-${a}`]:!!a,[`${v}-fill`]:s,[`${v}-justified`]:c}),...m})});ot.displayName="Nav";const b=Object.assign(ot,{Item:$n,Link:Mn}),it=o.forwardRef(({bsPrefix:e,className:t,as:n,...r},a)=>{e=O(e,"navbar-brand");const s=n||(r.href?"a":"span");return i.jsx(s,{...r,ref:a,className:E(t,e)})});it.displayName="NavbarBrand";const In=it,lt=o.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=O(t,"navbar-collapse");const a=o.useContext(F);return i.jsx(jt,{in:!!(a&&a.expanded),...n,children:i.jsx("div",{ref:r,className:t,children:e})})});lt.displayName="NavbarCollapse";const An=lt,ct=o.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:a="button",onClick:s,...c},u)=>{e=O(e,"navbar-toggler");const{onToggle:l,expanded:d}=o.useContext(F)||{},f=w(m=>{s&&s(m),l&&l()});return a==="button"&&(c.type="button"),i.jsx(a,{...c,ref:u,onClick:f,"aria-label":r,className:E(t,e,!d&&"collapsed"),children:n||i.jsx("span",{className:`${e}-icon`})})});ct.displayName="NavbarToggle";const Bn=ct,pe=new WeakMap,Ie=(e,t)=>{if(!e||!t)return;const n=pe.get(t)||new Map;pe.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Ln(e,t=typeof window>"u"?void 0:window){const n=Ie(e,t),[r,a]=o.useState(()=>n?n.matches:!1);return ve(()=>{let s=Ie(e,t);if(!s)return a(!1);let c=pe.get(t);const u=()=>{a(s.matches)};return s.refCount++,s.addListener(u),u(),()=>{s.removeListener(u),s.refCount--,s.refCount<=0&&(c==null||c.delete(s.media)),s=void 0}},[e]),r}function Dn(e){const t=Object.keys(e);function n(u,l){return u===l?l:u?`${u} and ${l}`:l}function r(u){return t[Math.min(t.indexOf(u)+1,t.length-1)]}function a(u){const l=r(u);let d=e[l];return typeof d=="number"?d=`${d-.2}px`:d=`calc(${d} - 0.2px)`,`(max-width: ${d})`}function s(u){let l=e[u];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function c(u,l,d){let f;typeof u=="object"?(f=u,d=l,l=!0):(l=l||!0,f={[u]:l});let m=o.useMemo(()=>Object.entries(f).reduce((v,[h,p])=>((p==="up"||p===!0)&&(v=n(v,s(h))),(p==="down"||p===!0)&&(v=n(v,a(h))),v),""),[JSON.stringify(f)]);return Ln(m,d)}return c}const Kn=Dn({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),ut=o.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=O(t,"offcanvas-body"),i.jsx(n,{ref:a,className:E(e,t),...r})));ut.displayName="OffcanvasBody";const Fn=ut,Pn={[he]:"show",[Le]:"show"},dt=o.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:a=!1,unmountOnExit:s=!1,appear:c=!1,...u},l)=>(e=O(e,"offcanvas"),i.jsx(Ae,{ref:l,addEndListener:Be,in:r,mountOnEnter:a,unmountOnExit:s,appear:c,...u,childRef:n.ref,children:(d,f)=>o.cloneElement(n,{...f,className:E(t,n.props.className,(d===he||d===Tt)&&`${e}-toggling`,Pn[d])})})));dt.displayName="OffcanvasToggling";const Hn=dt,ft=o.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...a},s)=>(e=O(e,"offcanvas-header"),i.jsx(kn,{ref:s,...a,className:E(t,e),closeLabel:n,closeButton:r})));ft.displayName="OffcanvasHeader";const Wn=ft,_n=Mt("h5"),vt=o.forwardRef(({className:e,bsPrefix:t,as:n=_n,...r},a)=>(t=O(t,"offcanvas-title"),i.jsx(n,{ref:a,className:E(e,t),...r})));vt.displayName="OffcanvasTitle";const Un=vt;function Gn(e){return i.jsx(Hn,{...e})}function Vn(e){return i.jsx(Gt,{...e})}const mt=o.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a="start",responsive:s,show:c=!1,backdrop:u=!0,keyboard:l=!0,scroll:d=!1,onEscapeKeyDown:f,onShow:m,onHide:v,container:h,autoFocus:p=!0,enforceFocus:g=!0,restoreFocus:N=!0,restoreFocusOptions:R,onEntered:I,onExit:y,onExiting:j,onEnter:S,onEntering:A,onExited:$,backdropClassName:k,manager:G,renderStaticNode:V=!1,...ee},te)=>{const P=o.useRef();e=O(e,"offcanvas");const{onToggle:X}=o.useContext(F)||{},[Y,M]=o.useState(!1),B=Kn(s||"xs","up");o.useEffect(()=>{M(s?c&&!B:c)},[c,s,B]);const C=w(()=>{X==null||X(),v==null||v()}),ne=o.useMemo(()=>({onHide:C}),[C]);function re(){return G||(d?(P.current||(P.current=new nt({handleContainerOverflow:!1})),P.current):On())}const H=(T,..._)=>{T&&(T.style.visibility="visible"),S==null||S(T,..._)},Q=(T,..._)=>{T&&(T.style.visibility=""),$==null||$(..._)},D=o.useCallback(T=>i.jsx("div",{...T,className:E(`${e}-backdrop`,k)}),[k,e]),W=T=>i.jsx("div",{...T,...ee,className:E(t,s?`${e}-${s}`:e,`${e}-${a}`),"aria-labelledby":r,children:n});return i.jsxs(i.Fragment,{children:[!Y&&(s||V)&&W({}),i.jsx(rt.Provider,{value:ne,children:i.jsx(Nn,{show:Y,ref:te,backdrop:u,container:h,keyboard:l,autoFocus:p,enforceFocus:g&&!d,restoreFocus:N,restoreFocusOptions:R,onEscapeKeyDown:f,onShow:m,onHide:C,onEnter:H,onEntering:A,onEntered:I,onExit:y,onExiting:j,onExited:Q,manager:re(),transition:Gn,backdropTransition:Vn,renderBackdrop:D,renderDialog:W})})]})});mt.displayName="Offcanvas";const Xn=Object.assign(mt,{Body:Fn,Header:Wn,Title:Un}),pt=o.forwardRef((e,t)=>{const n=o.useContext(F);return i.jsx(Xn,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});pt.displayName="NavbarOffcanvas";const Yn=pt,ht=o.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},a)=>(t=O(t,"navbar-text"),i.jsx(n,{ref:a,className:E(e,t),...r})));ht.displayName="NavbarText";const Qn=ht,gt=o.forwardRef((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:a="light",bg:s,fixed:c,sticky:u,className:l,as:d="nav",expanded:f,onToggle:m,onSelect:v,collapseOnSelect:h=!1,...p}=Ke(e,{expanded:"onToggle"}),g=O(n,"navbar"),N=o.useCallback((...y)=>{v==null||v(...y),h&&f&&(m==null||m(!1))},[v,h,f,m]);p.role===void 0&&d!=="nav"&&(p.role="navigation");let R=`${g}-expand`;typeof r=="string"&&(R=`${R}-${r}`);const I=o.useMemo(()=>({onToggle:()=>m==null?void 0:m(!f),bsPrefix:g,expanded:!!f,expand:r}),[g,f,r,m]);return i.jsx(F.Provider,{value:I,children:i.jsx(z.Provider,{value:N,children:i.jsx(d,{ref:t,...p,className:E(l,g,r&&R,a&&`${g}-${a}`,s&&`bg-${s}`,u&&`sticky-${u}`,c&&`fixed-${c}`)})})})});gt.displayName="Navbar";const J=Object.assign(gt,{Brand:In,Collapse:An,Offcanvas:Yn,Text:Qn,Toggle:Bn}),qn="/SkmAds/assets/logo-np5Kn0vb.png",er=()=>{const[e,t]=o.useState(null),n=s=>{t(s)},r=()=>{t(null)},a=s=>e===s?{color:"#1A3760D4"}:e?{color:"#d3d3d3"}:{color:"#1A3760D4"};return i.jsxs(J,{expand:"xl",className:"px-4 py-2 navbar d-flex justify-space-around",children:[i.jsx(J.Brand,{href:"#",children:i.jsx("img",{src:qn,className:"img-fluid logo",alt:"Logo"})}),i.jsx(J.Toggle,{"aria-controls":"navbarNav",className:"nav-tog",children:i.jsx("i",{className:"fas fa-bars fs-1"})}),i.jsx(J.Collapse,{id:"navbarNav",children:i.jsxs("div",{className:"d-flex justify-content-between w-100",children:[i.jsxs(b,{className:" ",style:{marginLeft:"40px",gap:"22px"},children:[i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/",className:"nav-link",style:a("Home"),onMouseEnter:()=>n("Home"),onMouseOut:r,children:"Home"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/about",className:"nav-link",style:a("About"),onMouseEnter:()=>n("About"),onMouseOut:r,children:"About"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/solutions",className:"nav-link",style:a("Solutions"),onMouseEnter:()=>n("Solutions"),onMouseOut:r,children:"Solutions"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/services",className:"nav-link",style:a("Services"),onMouseEnter:()=>n("Services"),onMouseOut:r,children:"Services"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/contact",className:"nav-link",style:a("Contact"),onMouseEnter:()=>n("Contact"),onMouseOut:r,children:"Contact"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"/SkmAds/careers",className:"nav-link",style:a("Careers"),onMouseEnter:()=>n("Careers"),onMouseOut:r,children:"Careers"})}),i.jsx(b.Item,{children:i.jsx(b.Link,{href:"https://skmdsp.com/",className:"nav-link",style:a("SKMDSP"),onMouseEnter:()=>n("SKMDSP"),onMouseOut:r,children:"SKMDSP"})})]}),i.jsxs(b,{children:[" ",i.jsxs(b.Item,{children:[i.jsx(b.Link,{href:"https://sg.linkedin.com/company/skmads",className:"nav-link",children:i.jsx("i",{className:"fa-brands fa-linkedin fs-5",style:{color:"#0d62bc"}})})," "]}),i.jsxs(b.Item,{children:[i.jsx(b.Link,{href:"mailto:sales@skmads.com",className:"nav-link",children:i.jsx("i",{className:"fa-solid fa-envelope-open-text fs-5",style:{color:"#f95d2b"}})})," "]})]})]})})]})};export{er as default};
