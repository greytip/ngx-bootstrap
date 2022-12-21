"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[159],{92159:(D,g,r)=>{r.d(g,{DS:()=>y.D,z8:()=>u.z}),r(52069),r(46485);var u=r(77674),y=r(51616)},52069:(D,g,r)=>{r.d(g,{X:()=>p});var _=r(70033),d=r(69604),u=r(14893),y=r(51616);const P=["*"];let p=(()=>{class m{constructor(O){Object.assign(this,O)}get _bsVersions(){return(0,_.Wl)()}ngAfterViewInit(){this.classMap={in:!1,fade:!1},this.placement&&(this._bsVersions.isBs5&&(this.placement=d.Bz[this.placement]),this.classMap[this.placement]=!0),this.classMap[`tooltip-${this.placement}`]=!0,this.classMap.in=!0,this.animation&&(this.classMap.fade=!0),this.containerClass&&(this.classMap[this.containerClass]=!0)}}return m.\u0275fac=function(O){return new(O||m)(u.Y36(y.D))},m.\u0275cmp=u.Xpm({type:m,selectors:[["bs-tooltip-container"]],hostAttrs:["role","tooltip"],hostVars:7,hostBindings:function(O,h){2&O&&(u.uIk("id",h.id),u.Tol("tooltip in tooltip-"+h.placement+" bs-tooltip-"+h.placement+" "+h.placement+" "+h.containerClass),u.ekj("show",!h._bsVersions.isBs3)("bs3",h._bsVersions.isBs3))},ngContentSelectors:P,decls:3,vars:0,consts:[[1,"tooltip-arrow","arrow"],[1,"tooltip-inner"]],template:function(O,h){1&O&&(u.F$t(),u._UZ(0,"div",0),u.TgZ(1,"div",1),u.Hsn(2),u.qZA())},styles:[".tooltip[_nghost-%COMP%]{display:block;pointer-events:none}.bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.tooltip.bottom[_nghost-%COMP%]{margin-top:0}.bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{margin:0}.bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"],changeDetection:0}),m})()},51616:(D,g,r)=>{r.d(g,{D:()=>d});var _=r(14893);let d=(()=>{class u{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="hover focus",this.delay=0}}return u.\u0275fac=function(P){return new(P||u)},u.\u0275prov=_.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},46485:(D,g,r)=>{r.d(g,{i:()=>h});var _=r(70655),d=r(14893),u=r(52069),y=r(51616),P=r(8281),p=r(70033),m=r(69604),w=r(5963);let O=0;class h{constructor(c,T,M,S,R,A){this._elementRef=S,this._renderer=R,this._positionService=A,this.tooltipId=O++,this.adaptivePosition=!0,this.tooltipChange=new d.vpe,this.placement="top",this.triggers="hover focus",this.containerClass="",this.isDisabled=!1,this.delay=0,this.tooltipAnimation=!0,this.tooltipFadeDuration=150,this.tooltipStateChanged=new d.vpe,this._tooltip=T.createLoader(this._elementRef,c,this._renderer).provide({provide:y.D,useValue:M}),Object.assign(this,M),this.onShown=this._tooltip.onShown,this.onHidden=this._tooltip.onHidden}get isOpen(){return this._tooltip.isShown}set isOpen(c){c?this.show():this.hide()}set htmlContent(c){(0,p.O4)("tooltipHtml was deprecated, please use `tooltip` instead"),this.tooltip=c}set _placement(c){(0,p.O4)("tooltipPlacement was deprecated, please use `placement` instead"),this.placement=c}set _isOpen(c){(0,p.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen=c}get _isOpen(){return(0,p.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen}set _enable(c){(0,p.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled=!c}get _enable(){return(0,p.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled}set _appendToBody(c){(0,p.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),this.container=c?"body":this.container}get _appendToBody(){return(0,p.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),"body"===this.container}set _popupClass(c){(0,p.O4)("tooltipClass deprecated")}set _tooltipContext(c){(0,p.O4)("tooltipContext deprecated")}set _tooltipPopupDelay(c){(0,p.O4)("tooltipPopupDelay is deprecated, use `delay` instead"),this.delay=c}get _tooltipTrigger(){return(0,p.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers}set _tooltipTrigger(c){(0,p.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers=(c||"").toString()}ngOnInit(){this._tooltip.listen({triggers:this.triggers,show:()=>this.show()}),this.tooltipChange.subscribe(c=>{c||this._tooltip.hide()}),this.onShown.subscribe(()=>{this.setAriaDescribedBy()}),this.onHidden.subscribe(()=>{this.setAriaDescribedBy()})}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`tooltip-${this.tooltipId}`:void 0,this._ariaDescribedby?this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}toggle(){if(this.isOpen)return this.hide();this.show()}show(){if(this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}}),this.isOpen||this.isDisabled||this._delayTimeoutId||!this.tooltip)return;const c=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._tooltip.attach(u.X).to(this.container).position({attachment:this.placement}).show({content:this.tooltip,placement:this.placement,containerClass:this.containerClass,id:`tooltip-${this.tooltipId}`})},T=()=>{this._tooltipCancelShowFn&&this._tooltipCancelShowFn()};this.delay?(this._delaySubscription&&this._delaySubscription.unsubscribe(),this._delaySubscription=(0,w.H)(this.delay).subscribe(()=>{c(),T()}),this.triggers&&(0,p.AL)(this.triggers).forEach(M=>{!M.close||(this._tooltipCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,M.close,()=>{var S;null===(S=this._delaySubscription)||void 0===S||S.unsubscribe(),T()}))})):c()}hide(){var c;this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this._tooltip.isShown&&((null===(c=this._tooltip.instance)||void 0===c?void 0:c.classMap)&&(this._tooltip.instance.classMap.in=!1),setTimeout(()=>{this._tooltip.hide()},this.tooltipFadeDuration))}ngOnDestroy(){this._tooltip.dispose(),this.tooltipChange.unsubscribe(),this._delaySubscription&&this._delaySubscription.unsubscribe(),this.onShown.unsubscribe(),this.onHidden.unsubscribe()}}h.\u0275fac=function(c){return new(c||h)(d.Y36(d.s_b),d.Y36(P.oj),d.Y36(y.D),d.Y36(d.SBq),d.Y36(d.Qsj),d.Y36(m.sA))},h.\u0275dir=d.lG2({type:h,selectors:[["","tooltip",""],["","tooltipHtml",""]],inputs:{adaptivePosition:"adaptivePosition",tooltip:"tooltip",placement:"placement",triggers:"triggers",container:"container",containerClass:"containerClass",boundariesElement:"boundariesElement",isOpen:"isOpen",isDisabled:"isDisabled",delay:"delay",htmlContent:["tooltipHtml","htmlContent"],_placement:["tooltipPlacement","_placement"],_isOpen:["tooltipIsOpen","_isOpen"],_enable:["tooltipEnable","_enable"],_appendToBody:["tooltipAppendToBody","_appendToBody"],tooltipAnimation:"tooltipAnimation",_popupClass:["tooltipClass","_popupClass"],_tooltipContext:["tooltipContext","_tooltipContext"],_tooltipPopupDelay:["tooltipPopupDelay","_tooltipPopupDelay"],tooltipFadeDuration:"tooltipFadeDuration",_tooltipTrigger:["tooltipTrigger","_tooltipTrigger"]},outputs:{tooltipChange:"tooltipChange",onShown:"onShown",onHidden:"onHidden",tooltipStateChanged:"tooltipStateChanged"},exportAs:["bs-tooltip"]}),(0,_.gn)([(0,p.GU)(),(0,_.w6)("design:type",Object)],h.prototype,"tooltip",void 0)},77674:(D,g,r)=>{r.d(g,{z:()=>P});var _=r(69808),d=r(8281),u=r(69604),y=r(14893);let P=(()=>{class p{static forRoot(){return{ngModule:p,providers:[d.oj,u.sA]}}}return p.\u0275fac=function(w){return new(w||p)},p.\u0275mod=y.oAB({type:p}),p.\u0275inj=y.cJS({imports:[[_.ez]]}),p})()},5963:(D,g,r)=>{r.d(g,{H:()=>P});var _=r(68306),d=r(34986),u=r(93532);function P(p=0,m,w=d.P){let O=-1;return null!=m&&((0,u.K)(m)?w=m:O=m),new _.y(h=>{let E=function(p){return p instanceof Date&&!isNaN(p)}(p)?+p-w.now():p;E<0&&(E=0);let c=0;return w.schedule(function(){h.closed||(h.next(c++),0<=O?this.schedule(void 0,O):h.complete())},E)})}},34986:(D,g,r)=>{r.d(g,{z:()=>u,P:()=>y});var _=r(84408);const u=new(r(640).v)(_.o),y=u},70655:(D,g,r)=>{function P(t,e,n,o){var a,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var f=t.length-1;f>=0;f--)(a=t[f])&&(i=(s<3?a(i):s>3?a(e,n,i):a(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}function m(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}r.d(g,{gn:()=>P,w6:()=>m})}}]);