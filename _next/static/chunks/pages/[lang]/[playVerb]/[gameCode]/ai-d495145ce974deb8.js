(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{8574:function(n,e,t){var r={"./tictactoe/ai":5668};function a(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=8574},9884:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/[playVerb]/[gameCode]/ai",function(){return t(5649)}])},5649:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return d}});var r=t(9722),a=t(169),o=t(4246),u=t(406),i=t(2313),c=t(4369),l=t(1924),f=t(7657),d=!0;e.default=function(n){var e=(0,c.$G)("Game").t,d=[{playerID:0,name:e("computer")},{playerID:1,name:e("you")}],s={gameCode:n.gameId,mode:i.G.AI,lang:n.params.lang,name:n.name,players:d},v=t(2003)("./".concat(n.gameId,"/board")).default,m=t(6871)("./".concat(n.gameId,"/game")).default,p=t(8574)("./".concat(n.gameId,"/ai")).default,y=null===p||void 0===p?void 0:p.bgioAI({}),g=(null===y||void 0===y?void 0:y.ai)||(null===y||void 0===y?void 0:y.bot)||y,h=(0,u.K)({board:(0,l.g)({gameArgs:s,board:v}),multiplayer:(0,f.L)({bots:{0:y.type||g}}),game:(0,a.Z)((0,r.Z)({},m),{ai:g}),debug:!1});return(0,o.jsx)(h,{playerID:"1"})}},5668:function(n,e,t){"use strict";function r(n,e,t,r,a,o,u){try{var i=n[o](u),c=i.value}catch(l){return void t(l)}i.done?e(c):Promise.resolve(c).then(r,a)}t.r(e),t.d(e,{default:function(){return f}});var a=t(4364),o=t(5230),u=t.n(o),i=t(8355),c=t(577),l=function(){function n(){(0,a.Z)(this,n)}var e=n.prototype;return e.play=function(n,e){var t,a=this;return(t=u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.generateRandomMove(n),t.abrupt("return",a.makeMove(e,r));case 2:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,o){var u=t.apply(n,e);function i(n){r(u,a,o,i,c,"next",n)}function c(n){r(u,a,o,i,c,"throw",n)}i(void 0)}))})()},e.generateRandomMove=function(n){for(var e=[],t=n.G.cells,r=0;r<t.length;r++)null===t[r]&&e.push(r);return e[this.randomNumber(0,e.length-1)]},e.makeMove=function(n,e){return{action:{type:"MAKE_MOVE",payload:{type:"clickCell",args:[e],playerID:n}}}},e.randomNumber=function(n,e){return Math.random()*(e-n+1)+n<<0},n}(),f={bgioAI:function(n){var e=((null===n||void 0===n?void 0:n.quick)||c.DEFAULT_QUICK_CUSTOMIZATION).difficulty;return e===c.TicTacToeDifficulty.HARD?{type:i.M,ai:{enumerate:function(n){for(var e=[],t=0;t<9;t++)null===n.cells[t]&&e.push({move:"clickCell",args:[t]});return e}}}:e===c.TicTacToeDifficulty.EASY?{ai:l}:void 0}}},577:function(n,e,t){"use strict";t.r(e),t.d(e,{DEFAULT_QUICK_CUSTOMIZATION:function(){return f},TicTacToeDifficulty:function(){return r},default:function(){return d}});var r,a=t(4246),o=(t(7378),t(4669)),u=t(3429),i=function(n){var e=n.options.map((function(e,t){return(0,a.jsx)(o.Z,{onClick:function(){return n.callback(t)},value:e,selected:n.selectedIdx===t,children:e},e)}));return(0,a.jsx)("div",{children:(0,a.jsx)(u.Z,{style:{paddingTop:0,paddingBottom:0,display:"flex"},children:e})})},c=t(2313),l=t(4369);!function(n){n[n.EASY=0]="EASY",n[n.HARD=1]="HARD"}(r||(r={}));var f={difficulty:r.EASY},d={QuickCustomization:function(n){var e=n.mode,t=n.currentValue,r=n.onChange,o=(0,l.$G)("game-tictactoe").t;if(e!=c.G.AI)return null;var u=t||f;return(0,a.jsx)(i,{options:[o("easy"),o("hard")],selectedIdx:u.difficulty,callback:function(n){r({difficulty:n})}})}}}},function(n){n.O(0,[648,814,800,131,817,101,774,888,179],(function(){return e=9884,n(n.s=e);var e}));var e=n.O();_N_E=e}]);