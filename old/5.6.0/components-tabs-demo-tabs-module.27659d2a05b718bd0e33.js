(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"++Cd":function(t,e,n){"use strict";n.r(e),e.default='<tabset>\n  <tab  heading="Tab1">Tab1</tab>\n  <tab  heading="Tab2">Tab2</tab>\n</tabset>\n'},"0aVI":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTabsBasicComponent {}\n"},"56vY":function(t,e,n){"use strict";n.r(e),e.default='<div class="mb-3">\n  <pre class="card card-block card-header" *ngIf="value">Event select is fired. The heading of the selected tab is: {{value}}</pre>\n</div>\n<tabset>\n  <tab heading="First tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n  </tab>\n  <tab heading="Second tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title 2</h4>\n    <p>It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged. It was popularised in the 1960s with the release of\n      Letraset sheets containing Lorem Ipsum passages</p>\n  </tab>\n</tabset>\n'},"6Ost":function(t,e,n){"use strict";n.r(e),e.default='<div>\n  <tabset>\n    <tab heading="Basic title" id="tab1">Basic content</tab>\n    <tab heading="Basic Title 1">Basic content 1</tab>\n    <tab heading="Basic Title 2">Basic content 2</tab>\n  </tabset>\n</div>\n\n'},"79mg":function(t,e,n){"use strict";n.r(e),e.default="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap/tabs';\n\n@Component({\n  selector: 'demo-tabs-manual-selection',\n  templateUrl: './manual-selection.html'\n})\nexport class DemoTabsManualSelectionComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  selectTab(tabId: number) {\n    this.staticTabs.tabs[tabId].active = true;\n  }\n}\n"},"8MTU":function(t,e,n){"use strict";n.r(e),e.default='<tabset type="pills">\n  <tab heading="Pills 1">Pills content 1</tab>\n  <tab heading="Pills 2">Pills content 2</tab>\n</tabset>\n'},"94iu":function(t,e,n){"use strict";n.r(e),e.default='<div (click)="$event.preventDefault()">\n    <p>Change quantity of tabs by manipulating tabs array</p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="addNewTab()">\n      Add new tab\n    </button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="tabs = []"  *ngIf="tabs.length">\n      Remove all tabs\n    </button>\n  <hr/>\n  <tabset>\n    <tab heading="Static title">Static content</tab>\n    <tab *ngFor="let tabz of tabs"\n         [heading]="tabz.title"\n         [active]="tabz.active"\n         (selectTab)="tabz.active = true"\n         (deselect)="tabz.active = false"\n         [disabled]="tabz.disabled"\n         [removable]="tabz.removable"\n         (removed)="removeTabHandler(tabz)"\n         [customClass]="tabz.customClass">\n      {{tabz?.content}}\n    </tab>\n  </tabset>\n</div>\n'},CXga:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-vertical-pills',\n  templateUrl: './vertical-pills.html'\n})\nexport class DemoTabsVerticalPillsComponent {}\n"},CcHA:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { TabDirective } from 'ngx-bootstrap/tabs';\n\n@Component({\n  selector: 'demo-tabs-select-event',\n  templateUrl: './select-event.html'\n})\nexport class DemoTabsSelectEventComponent {\n  value: string;\n  onSelect(data: TabDirective): void {\n    this.value = data.heading;\n  }\n}\n"},JN29:function(t,e,n){"use strict";n.r(e),e.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-dynamic',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './dynamic.html'\n})\nexport class DemoTabsDynamicComponent {\n  tabs: any[] = [\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }\n  ];\n\n  addNewTab(): void {\n    const newTabIndex = this.tabs.length + 1;\n    this.tabs.push({\n      title: `Dynamic Title ${newTabIndex}`,\n      content: `Dynamic content ${newTabIndex}`,\n      disabled: false,\n      removable: true\n    });\n  }\n\n  removeTabHandler(tab: any): void {\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\n    console.log('Remove Tab handler');\n  }\n}\n"},Medm:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-pills',\n  templateUrl: './pills.html'\n})\nexport class DemoTabsPillsComponent {}\n"},OEuy:function(t,e,n){"use strict";n.r(e),e.default='<div>\n  <p>You can select tabs directly from component</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(1)">Select second tab</button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(2)">Select third tab</button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n\n'},OOAf:function(t,e,n){"use strict";n.r(e),e.default="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap/tabs';\n\n@Component({\n  selector: 'demo-tabs-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoTabsDisabledComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  disableEnable() {\n    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n  }\n}\n"},RKu0:function(t,e,n){"use strict";n.r(e),e.default='<tabset [justified]="true">\n  <tab heading="Justified">Justified content</tab>\n  <tab heading="SJ">Short Labeled Justified content</tab>\n  <tab heading="Long Justified">Long Labeled Justified content</tab>\n</tabset>\n'},RaAK:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-custom-template',\n  templateUrl: './custom-template.html'\n})\nexport class DemoTabsCustomComponent {}\n"},SCZi:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });\n}\n\n@Component({\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n"},Uzid:function(t,e,n){"use strict";n.r(e),e.default='<div>\n  <tabset>\n    <tab heading="Static">\n      Tab 1\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <span class="badge badge-secondary">Heading</span>\n      </ng-template>\n      I\'ve got an HTML heading. Pretty cool!\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <i><b>Tab 3</b></i>\n      </ng-template>\n      Tab with html tags in heading\n    </tab>\n  </tabset>\n</div>\n'},afuA:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-justified',\n  templateUrl: './justified.html'\n})\nexport class DemoTabsJustifiedComponent {}\n"},gAuF:function(t,e,n){"use strict";n.r(e),e.default='<tabset>\n  <tab heading="Config 1">Config content 1</tab>\n  <tab heading="Config 2">Config content 2</tab>\n</tabset>\n'},iTcO:function(t,e,n){"use strict";n.r(e);var c=n("Valr"),a=n("QJY3"),i=n("DUip"),o=n("YAQW"),s=n("k3/p"),l=n("TYT/"),r=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-basic"]],decls:8,vars:0,consts:[["heading","Basic title","id","tab1"],["heading","Basic Title 1"],["heading","Basic Title 2"]],template:function(t,e){1&t&&(l.gc(0,"div"),l.gc(1,"tabset"),l.gc(2,"tab",0),l.Tc(3,"Basic content"),l.fc(),l.gc(4,"tab",1),l.Tc(5,"Basic content 1"),l.fc(),l.gc(6,"tab",2),l.Tc(7,"Basic content 2"),l.fc(),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}(),b=["staticTabs"],d=function(){function t(){}return t.prototype.selectTab=function(t){this.staticTabs.tabs[t].active=!0},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-manual-selection"]],viewQuery:function(t,e){var n;1&t&&l.Xc(b,!0),2&t&&l.Fc(n=l.pc())&&(e.staticTabs=n.first)},decls:19,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(t,e){1&t&&(l.gc(0,"div"),l.gc(1,"p"),l.Tc(2,"You can select tabs directly from component"),l.fc(),l.gc(3,"p"),l.gc(4,"button",0),l.oc("click",(function(){return e.selectTab(1)})),l.Tc(5,"Select second tab"),l.fc(),l.gc(6,"button",0),l.oc("click",(function(){return e.selectTab(2)})),l.Tc(7,"Select third tab"),l.fc(),l.fc(),l.bc(8,"hr"),l.gc(9,"tabset",null,1),l.gc(11,"tab",2),l.Tc(12,"Static content"),l.fc(),l.gc(13,"tab",3),l.Tc(14,"Static content 1"),l.fc(),l.gc(15,"tab",4),l.Tc(16,"Static content 2"),l.fc(),l.gc(17,"tab",5),l.Tc(18,"Static content 3"),l.fc(),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}();function u(t,e){if(1&t){var n=l.hc();l.gc(0,"button",1),l.oc("click",(function(){return l.Jc(n),l.qc().tabs=[]})),l.Tc(1," Remove all tabs "),l.fc()}}function f(t,e){if(1&t){var n=l.hc();l.gc(0,"tab",5),l.oc("selectTab",(function(){return e.$implicit.active=!0}))("deselect",(function(){return e.$implicit.active=!1}))("removed",(function(){l.Jc(n);var t=e.$implicit;return l.qc().removeTabHandler(t)})),l.Tc(1),l.fc()}if(2&t){var c=e.$implicit;l.wc("heading",c.title)("active",c.active)("disabled",c.disabled)("removable",c.removable)("customClass",c.customClass),l.Ob(1),l.Vc(" ",null==c?null:c.content," ")}}var m=function(){function t(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2"},{title:"Dynamic Title 3",content:"Dynamic content 3",removable:!0}]}return t.prototype.addNewTab=function(){var t=this.tabs.length+1;this.tabs.push({title:"Dynamic Title "+t,content:"Dynamic content "+t,disabled:!1,removable:!0})},t.prototype.removeTabHandler=function(t){this.tabs.splice(this.tabs.indexOf(t),1),console.log("Remove Tab handler")},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-dynamic"]],decls:11,vars:2,consts:[[3,"click"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],["heading","Static title"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed",4,"ngFor","ngForOf"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed"]],template:function(t,e){1&t&&(l.gc(0,"div",0),l.oc("click",(function(t){return t.preventDefault()})),l.gc(1,"p"),l.Tc(2,"Change quantity of tabs by manipulating tabs array"),l.fc(),l.gc(3,"button",1),l.oc("click",(function(){return e.addNewTab()})),l.Tc(4," Add new tab "),l.fc(),l.Rc(5,u,2,0,"button",2),l.bc(6,"hr"),l.gc(7,"tabset"),l.gc(8,"tab",3),l.Tc(9,"Static content"),l.fc(),l.Rc(10,f,2,6,"tab",4),l.fc(),l.fc()),2&t&&(l.Ob(5),l.wc("ngIf",e.tabs.length),l.Ob(5),l.wc("ngForOf",e.tabs))},directives:[c.t,o.e,o.b,c.s],encapsulation:2,changeDetection:0}),t}(),p=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-pills"]],decls:5,vars:0,consts:[["type","pills"],["heading","Pills 1"],["heading","Pills 2"]],template:function(t,e){1&t&&(l.gc(0,"tabset",0),l.gc(1,"tab",1),l.Tc(2,"Pills content 1"),l.fc(),l.gc(3,"tab",2),l.Tc(4,"Pills content 2"),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}(),g=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-vertical-pills"]],decls:5,vars:1,consts:[["type","pills",3,"vertical"],["heading","Vertical 1"],["heading","Vertical 2"]],template:function(t,e){1&t&&(l.gc(0,"tabset",0),l.gc(1,"tab",1),l.Tc(2,"Vertical content 1"),l.fc(),l.gc(3,"tab",2),l.Tc(4,"Vertical content 2"),l.fc(),l.fc()),2&t&&l.wc("vertical",!0)},directives:[o.e,o.b],encapsulation:2}),t}(),h=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-justified"]],decls:7,vars:1,consts:[[3,"justified"],["heading","Justified"],["heading","SJ"],["heading","Long Justified"]],template:function(t,e){1&t&&(l.gc(0,"tabset",0),l.gc(1,"tab",1),l.Tc(2,"Justified content"),l.fc(),l.gc(3,"tab",2),l.Tc(4,"Short Labeled Justified content"),l.fc(),l.gc(5,"tab",3),l.Tc(6,"Long Labeled Justified content"),l.fc(),l.fc()),2&t&&l.wc("justified",!0)},directives:[o.e,o.b],encapsulation:2}),t}();function T(t,e){if(1&t&&(l.gc(0,"tab",2),l.Tc(1),l.fc()),2&t){var n=e.$implicit;l.wc("heading",n.title)("customClass",n.customClass),l.Ob(1),l.Vc(" ",null==n?null:n.content," ")}}var v=function(){function t(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",customClass:"customClass"},{title:"Dynamic Title 2",content:"Dynamic content 2",customClass:"customClass"}]}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-custom-class"]],decls:4,vars:1,consts:[["heading","Static title","customClass","customClass"],[3,"heading","customClass",4,"ngFor","ngForOf"],[3,"heading","customClass"]],template:function(t,e){1&t&&(l.gc(0,"tabset"),l.gc(1,"tab",0),l.Tc(2,"Static content"),l.fc(),l.Rc(3,T,2,3,"tab",1),l.fc()),2&t&&(l.Ob(3),l.wc("ngForOf",e.tabs))},directives:[o.e,o.b,c.s],encapsulation:2}),t}();function y(){return Object.assign(new o.f,{type:"pills",isKeysAllowed:!0})}var C=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-config"]],features:[l.Nb([{provide:o.f,useFactory:y}])],decls:5,vars:0,consts:[["heading","Config 1"],["heading","Config 2"]],template:function(t,e){1&t&&(l.gc(0,"tabset"),l.gc(1,"tab",0),l.Tc(2,"Config content 1"),l.fc(),l.gc(3,"tab",1),l.Tc(4,"Config content 2"),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}(),w=["staticTabs"],S=function(){function t(){}return t.prototype.disableEnable=function(){this.staticTabs.tabs[2].disabled=!this.staticTabs.tabs[2].disabled},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-disabled"]],viewQuery:function(t,e){var n;1&t&&l.Xc(w,!0),2&t&&l.Fc(n=l.pc())&&(e.staticTabs=n.first)},decls:20,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(t,e){1&t&&(l.gc(0,"div"),l.gc(1,"p"),l.Tc(2,"Tabs can be enabled or disabled by changing "),l.gc(3,"code"),l.Tc(4,"disabled"),l.fc(),l.Tc(5," input property"),l.fc(),l.gc(6,"p"),l.gc(7,"button",0),l.oc("click",(function(){return e.disableEnable()})),l.Tc(8," Enable / Disable third tab "),l.fc(),l.fc(),l.bc(9,"hr"),l.gc(10,"tabset",null,1),l.gc(12,"tab",2),l.Tc(13,"Static content"),l.fc(),l.gc(14,"tab",3),l.Tc(15,"Static content 1"),l.fc(),l.gc(16,"tab",4),l.Tc(17,"Static content 2"),l.fc(),l.gc(18,"tab",5),l.Tc(19,"Static content 3"),l.fc(),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}();function D(t,e){1&t&&(l.gc(0,"span",2),l.Tc(1,"Heading"),l.fc())}function k(t,e){1&t&&(l.gc(0,"i"),l.gc(1,"b"),l.Tc(2,"Tab 3"),l.fc(),l.fc())}var x=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-custom-template"]],decls:10,vars:0,consts:[["heading","Static"],["tabHeading",""],[1,"badge","badge-secondary"]],template:function(t,e){1&t&&(l.gc(0,"div"),l.gc(1,"tabset"),l.gc(2,"tab",0),l.Tc(3," Tab 1 "),l.fc(),l.gc(4,"tab"),l.Rc(5,D,2,0,"ng-template",1),l.Tc(6," I've got an HTML heading. Pretty cool! "),l.fc(),l.gc(7,"tab"),l.Rc(8,k,3,0,"ng-template",1),l.Tc(9," Tab with html tags in heading "),l.fc(),l.fc(),l.fc())},directives:[o.e,o.b,o.c],encapsulation:2}),t}();function I(t,e){if(1&t&&(l.gc(0,"pre",4),l.Tc(1),l.fc()),2&t){var n=l.qc();l.Ob(1),l.Vc("Event select is fired. The heading of the selected tab is: ",n.value,"")}}var O=function(){function t(){}return t.prototype.onSelect=function(t){this.value=t.heading},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-tabs-select-event"]],decls:13,vars:1,consts:[[1,"mb-3"],["class","card card-block card-header",4,"ngIf"],["heading","First tab",1,"mt-2",3,"selectTab"],["heading","Second tab",1,"mt-2",3,"selectTab"],[1,"card","card-block","card-header"]],template:function(t,e){1&t&&(l.gc(0,"div",0),l.Rc(1,I,2,1,"pre",1),l.fc(),l.gc(2,"tabset"),l.gc(3,"tab",2),l.oc("selectTab",(function(t){return e.onSelect(t)})),l.gc(4,"h4"),l.Tc(5,"Title"),l.fc(),l.gc(6,"p"),l.Tc(7,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),l.fc(),l.fc(),l.gc(8,"tab",3),l.oc("selectTab",(function(t){return e.onSelect(t)})),l.gc(9,"h4"),l.Tc(10,"Title 2"),l.fc(),l.gc(11,"p"),l.Tc(12,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"),l.fc(),l.fc(),l.fc()),2&t&&(l.Ob(1),l.wc("ngIf",e.value))},directives:[c.t,o.e,o.b],encapsulation:2}),t}(),A=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-accessibility"]],decls:76,vars:0,consts:[[1,"highlighter-rouge"],["href","https://www.w3.org/TR/wai-aria-practices/#tabpanel"],["title","Web Accessibility Initiative"],["title","Accessible Rich Internet Applications"],[1,"table","table-bordered"],[1,"col-xs-3"],[1,"col-xs-9"]],template:function(t,e){1&t&&(l.gc(0,"p"),l.Tc(1,"Note that tabs can be given "),l.gc(2,"code",0),l.Tc(3,'role="tablist"'),l.fc(),l.Tc(4,", "),l.gc(5,"code",0),l.Tc(6,'role="tab"'),l.fc(),l.Tc(7," and "),l.gc(8,"code",0),l.Tc(9,'role="tabpanel"'),l.fc(),l.Tc(10," attributes. These are appropriate for tabbed interfaces, as described in the "),l.gc(11,"a",1),l.gc(12,"abbr",2),l.Tc(13,"WAI"),l.fc(),l.gc(14,"abbr",3),l.Tc(15,"ARIA"),l.fc(),l.Tc(16," Authoring Practices"),l.fc(),l.Tc(17,"."),l.fc(),l.gc(18,"p"),l.Tc(19,"If your control element is targeting a single collapsible element - you should add the "),l.gc(20,"code"),l.Tc(21,"aria-controls"),l.fc(),l.Tc(22," attribute to the control element, containing the "),l.gc(23,"code"),l.Tc(24,"id"),l.fc(),l.Tc(25," of the collapsible element."),l.fc(),l.gc(26,"p"),l.Tc(27,"To confirm the tab content opening you should use "),l.gc(28,"code"),l.Tc(29,"aria-selected"),l.fc(),l.Tc(30," property. If "),l.gc(31,"code"),l.Tc(32,'aria-selected="true"'),l.fc(),l.Tc(33," it indicates the tab control is activated and its associated panel is displayed."),l.fc(),l.gc(34,"p"),l.Tc(35,"If you use a visible text element on the page as a label for a focusable element - you should add "),l.gc(36,"code"),l.Tc(37,"aria-labelledby"),l.fc(),l.Tc(38,". It refers to the tab element that controls the panel."),l.fc(),l.gc(39,"h4"),l.Tc(40,"Keyboard interaction"),l.fc(),l.gc(41,"table",4),l.gc(42,"tbody"),l.gc(43,"tr"),l.gc(44,"td",5),l.gc(45,"code"),l.Tc(46," LEFT_ARROW "),l.fc(),l.fc(),l.gc(47,"td",6),l.Tc(48," Move focus to previous tab "),l.fc(),l.fc(),l.gc(49,"tr"),l.gc(50,"td",5),l.gc(51,"code"),l.Tc(52," RIGHT_ARROW "),l.fc(),l.fc(),l.gc(53,"td",6),l.Tc(54," Move focus to next tab "),l.fc(),l.fc(),l.gc(55,"tr"),l.gc(56,"td",5),l.gc(57,"code"),l.Tc(58," HOME "),l.fc(),l.fc(),l.gc(59,"td",6),l.Tc(60," Move focus to first tab "),l.fc(),l.fc(),l.gc(61,"tr"),l.gc(62,"td",5),l.gc(63,"code"),l.Tc(64," END "),l.fc(),l.fc(),l.gc(65,"td",6),l.Tc(66," Move focus to last tab "),l.fc(),l.fc(),l.gc(67,"tr"),l.gc(68,"td",5),l.gc(69,"code"),l.Tc(70,"SPACE"),l.fc(),l.Tc(71," or "),l.gc(72,"code"),l.Tc(73,"ENTER"),l.fc(),l.fc(),l.gc(74,"td",6),l.Tc(75," Switch to focused tab "),l.fc(),l.fc(),l.fc(),l.fc())},encapsulation:2}),t}();function U(){return Object.assign(new o.f,{type:"tabs",isKeysAllowed:!1})}var R=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["demo-disabled-key-navigations"]],features:[l.Nb([{provide:o.f,useFactory:U}])],decls:5,vars:0,consts:[["heading","Tab1"],["heading","Tab2"]],template:function(t,e){1&t&&(l.gc(0,"tabset"),l.gc(1,"tab",0),l.Tc(2,"Tab1"),l.fc(),l.gc(3,"tab",1),l.Tc(4,"Tab2"),l.fc(),l.fc())},directives:[o.e,o.b],encapsulation:2}),t}(),E=n("ClAA"),M=n("y20O"),J=n("nk7K"),F=n("l3GJ"),V=[{name:"Usage",anchor:"usage",outlet:E.a,content:{doc:n("rNKZ")}},{name:"Examples",anchor:"examples",outlet:M.a,content:[{title:"Basic",anchor:"basic",component:n("0aVI"),html:n("6Ost"),outlet:r},{title:"Manual selection",anchor:"tabs-manual-select",component:n("79mg"),html:n("OEuy"),outlet:d},{title:"Disabled tabs",anchor:"disabled",component:n("OOAf"),html:n("v/Cv"),outlet:S},{title:"Dynamic tabs",anchor:"tabs-dynamic",component:n("JN29"),html:n("94iu"),outlet:m},{title:"Pills",anchor:"tabs-Pills",component:n("Medm"),html:n("8MTU"),outlet:p},{title:"Vertical Pills",anchor:"tabs-vertical-pills",component:n("CXga"),html:n("tXcc"),outlet:g},{title:"Justified",anchor:"tabs-justified",component:n("afuA"),html:n("RKu0"),description:"<p><i>Bootstrap 4 doesn't have justified classes</i></p>",outlet:h},{title:"Custom class",anchor:"tabs-custom-class",component:n("sF0j"),html:n("krWe"),outlet:v},{title:"Select event",anchor:"select-event",component:n("CcHA"),html:n("56vY"),description:"<p>You can subscribe to tab's <code>select</code> event</p>",outlet:O},{title:"Configuring defaults",anchor:"tabs-config-defaults",component:n("SCZi"),html:n("gAuF"),outlet:C},{title:"Custom template",anchor:"tabs-custom-template",component:n("RaAK"),html:n("Uzid"),outlet:x},{title:"Accessibility",anchor:"accessibility",outlet:A},{title:"Disable key navigations",anchor:"disable-key-navigations",component:n("irbw"),html:n("++Cd"),outlet:R}]},{name:"API Reference",anchor:"api-reference",outlet:J.a,content:[{title:"TabsetComponent",anchor:"tabset-component",outlet:F.b},{title:"TabDirective",anchor:"tab-directive",outlet:F.b},{title:"TabHeadingDirective",anchor:"tab-heading-directive",outlet:F.b},{title:"TabsetConfig",anchor:"tabset-config",outlet:F.c}]}],L=n("ybC4"),N=n("oxqd"),P=[{path:"",component:function(){function t(){this.name="Tabs",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs",this.componentContent=V}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ub({type:t,selectors:[["tabs-section"]],decls:18,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,e){1&t&&(l.gc(0,"demo-section",0),l.gc(1,"p"),l.Tc(2,"Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. "),l.gc(3,"strong"),l.Tc(4,"Nested tabs are not supported."),l.fc(),l.fc(),l.gc(5,"p"),l.Tc(6,"The easiest way to add the tabs component to your app (will be added to the root module)"),l.fc(),l.gc(7,"pre",1),l.gc(8,"span",2),l.Tc(9,"ng add ngx"),l.fc(),l.gc(10,"span",3),l.Tc(11,"-"),l.fc(),l.gc(12,"span",2),l.Tc(13,"bootstrap "),l.fc(),l.Tc(14," --component "),l.gc(15,"span",2),l.Tc(16,"tabs"),l.fc(),l.fc(),l.bc(17,"docs-section",4),l.fc()),2&t&&(l.wc("name",e.name)("src",e.src)("componentContent",e.componentContent),l.Ob(17),l.wc("content",e.componentContent))},directives:[L.a,N.a],encapsulation:2,changeDetection:0}),t}()}];n.d(e,"DemoTabsModule",(function(){return z}));var z=function(){function t(){}return t.\u0275mod=l.Yb({type:t}),t.\u0275inj=l.Xb({factory:function(e){return new(e||t)},imports:[[c.c,a.k,s.a,o.d.forRoot(),i.i.forChild(P)]]}),t}()},irbw:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'tabs', isKeysAllowed: false });\n}\n\n@Component({\n  selector: 'demo-disabled-key-navigations',\n  templateUrl: './disabled-key-navigations.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoDisabledKeyNavigationsComponent {\n}\n"},krWe:function(t,e,n){"use strict";n.r(e),e.default='<tabset>\n  <tab heading="Static title" customClass="customClass">Static content</tab>\n  <tab *ngFor="let tabz of tabs"\n       [heading]="tabz.title"\n       [customClass]="tabz.customClass">\n    {{tabz?.content}}\n  </tab>\n</tabset>\n'},rNKZ:function(t,e,n){"use strict";n.r(e),e.default="// RECOMMENDED\nimport { TabsModule } from 'ngx-bootstrap/tabs';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TabsModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},sF0j:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-custom-class',\n  templateUrl: './custom-class.html'\n})\nexport class DemoTabsCustomClassComponent {\n  tabs: any[] = [\n    {\n      title: 'Dynamic Title 1',\n      content: 'Dynamic content 1',\n      customClass: 'customClass'\n    },\n    {\n      title: 'Dynamic Title 2',\n      content: 'Dynamic content 2',\n      customClass: 'customClass'\n    }\n  ];\n}\n"},tXcc:function(t,e,n){"use strict";n.r(e),e.default='<tabset [vertical]="true" type="pills">\n  <tab heading="Vertical 1">Vertical content 1</tab>\n  <tab heading="Vertical 2">Vertical content 2</tab>\n</tabset>\n'},"v/Cv":function(t,e,n){"use strict";n.r(e),e.default='<div>\n  <p>Tabs can be enabled or disabled by changing <code>disabled</code> input property</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="disableEnable()">\n      Enable / Disable third tab\n    </button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n'}}]);