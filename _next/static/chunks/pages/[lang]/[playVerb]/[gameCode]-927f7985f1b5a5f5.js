(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{7828:function(n,e,t){var a={"./gamesShared/definitions/customization":6446,"./tictactoe/customization":577};function i(n){var e=r(n);return t(e)}function r(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}i.keys=function(){return Object.keys(a)},i.resolve=r,n.exports=i,i.id=7828},8465:function(n,e,t){var a={"./tictactoe/thumbnail.jpg":7143};function i(n){var e=r(n);return t(e)}function r(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}i.keys=function(){return Object.keys(a)},i.resolve=r,n.exports=i,i.id=8465},9701:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/[playVerb]/[gameCode]",function(){return t(9397)}])},587:function(n,e){"use strict";e.Z={src:"/_next/static/media/fbg_logo_white_48.7c343fc2.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAd0lEQVR42kXNIQrCAABG4V8Ny3YxDMEmaDWIoN3uMcQLqEFRsQlW68LGYGllfQfYZcb7B4Oxl1771Mewmw17Zg4kloTix5ctL04cKclE7jshF24UnFmJzB/mfnDlT0oiSq/rEU/ejqmIxMETibEXTL0jaB0PerwBQUtBrTw/pEYAAAAASUVORK5CYII="}},7143:function(n,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/thumbnail.2d75d6d7.jpg",height:250,width:500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAI8DR//EABoQAAEFAQAAAAAAAAAAAAAAAAIAAwQSUTH/2gAIAQEAAT8AKrkGxAOcxf/EABcRAQADAAAAAAAAAAAAAAAAAAEAAlH/2gAIAQIBAT8AqGT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgAhAxMi/9oACAEDAQE/AMHCMq0NjUJ//9k="}},777:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var a=t(9722),i=t(169),r=t(4246),o=(t(7378),t(7486));function c(n){if(n.overrideTitle)n=(0,i.Z)((0,a.Z)({},n),{title:n.overrideTitle});else{var e=n.title;n.title?e+=" - FreeBoardGames.org":e="FreeBoardGames.org",n=(0,i.Z)((0,a.Z)({},n),{title:e})}return(0,r.jsx)(o.PB,(0,a.Z)({},{noindex:!1,nofollow:!1},n))}},485:function(n,e,t){"use strict";t.d(e,{C:function(){return r},R:function(){return i}});var a=t(6446);function i(n){var e=localStorage.getItem("customization-".concat(n,"-setting"));return e&&JSON.parse(e)||a.EMPTY_FULL_GAME_CUSTOMIZATION_STATE}function r(n,e,t,a){var r=i(n);return r[e][t]=a,localStorage.setItem("customization-".concat(n,"-setting"),JSON.stringify(r)),r}},1442:function(n,e,t){"use strict";t.d(e,{yb:function(){return m}});var a=t(9722),i=t(169),r=t(1373),o=t(4246),c=t(2133),s=t(8473),l=t(9656),d=(t(7378),t(4625)),u=t.n(d);function m(n){var e=n.gameSummary,a=n.isLink,i=t(8465)("./".concat(e.id,"/thumbnail.jpg")).default.src,r=a?u().CardLink:"";return(0,o.jsxs)("div",{className:"".concat(u().Card," ").concat(r),style:{backgroundImage:"url(".concat(i,")")},"data-testid":"gamecard-".concat(e.id),children:[(0,o.jsx)(A,{children:(0,o.jsx)(p,{children:e.name})}),(0,o.jsx)(x,{children:(0,o.jsx)(o.Fragment,{children:e.callout})}),a&&(0,o.jsx)(f,{})]})}var A=function(n){var e=n.children;return(0,o.jsx)("div",{className:u().Heading,children:e})},p=function(n){var e=n.children,t=(0,r.Z)(n,["children"]);return(0,o.jsx)("div",(0,i.Z)((0,a.Z)({className:"".concat(u().Panel," ").concat(u().Title)},t),{children:(0,o.jsx)(s.Z,{gutterBottom:!1,variant:"h4",component:"h2",style:{fontWeight:300},children:e})}))},x=function(n){var e=n.children,t=(0,r.Z)(n,["children"]);return(0,o.jsx)("div",(0,i.Z)((0,a.Z)({className:u().Description},t),{children:(0,o.jsx)("div",{className:"".concat(u().Panel," ").concat(u().DescriptionInner),children:(0,o.jsx)(s.Z,{gutterBottom:!1,variant:"overline",component:"h5",children:e})})}))},f=function(n){return(0,o.jsx)("div",(0,i.Z)((0,a.Z)({className:u().Navigation},n),{children:(0,o.jsx)("div",{className:"".concat(u().Panel," ").concat(u().NavigationInner),children:(0,o.jsx)(c.Z,{"aria-label":"Next",children:(0,o.jsx)(l.Z,{})})})}))}},9397:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return cn},default:function(){return sn}});var a,i=t(4246),r=t(4369),o=t(8330),c=t(7378),s=t(9815),l=t.n(s),d=function(n){return(0,i.jsx)("div",{className:l().DesktopView,children:n.children})},u=function(n){return(0,i.jsx)("div",{className:l().MobileView,children:n.children})},m=t(8473),A=t(9032),p=t(2040),x=t.n(p),f=t(7486),h=t(777);t(6527);!function(n){n[n.PARTIAL=0]="PARTIAL",n[n.DONE=1]="DONE"}(a||(a={}));var g=t(1442),_=t(4364),j=t(619),v=t(6080),C=t(4885),y=function(n){(0,j.Z)(t,n);var e=(0,v.Z)(t);function t(){return(0,_.Z)(this,t),e.apply(this,arguments)}return t.prototype.render=function(){return(0,i.jsx)("div",{style:{padding:"0 8px"},children:(0,i.jsx)(m.Z,{variant:"body1",component:"div",children:(0,i.jsx)(C.D,{linkTarget:"_blank",children:this.props.text})})})},t}(c.Component),I=t(9106),Z=t(8475),T=(t(9430),function(n){var e=(0,r.$G)("GameInfo").t;return(0,i.jsx)(I.Z,{"data-testid":"gameinstructionsvideo",children:(0,i.jsx)(Z.Z,{id:n.videoId,announce:e("watch"),title:e("video_instructions"),adNetwork:!1,noCookie:!0})})}),E=t(9894),G=t.n(E);function b(n){var e=n.details,t=n.params,a=(0,r.$G)("GameInfo").t,o=e.contributors.map((function(n){return(0,i.jsx)(G(),{href:"/".concat(t.lang,"/about#contributor-").concat(n),style:{marginRight:"4px"},target:"_blank",rel:"noreferrer",children:(0,i.jsx)(m.Z,{variant:"body2",component:"span",style:{color:"black",textDecoration:"underline",cursor:"pointer"},children:n})},n)}));return(0,i.jsxs)("div",{style:{display:"flex",height:"24px",maxWidth:"500px"},children:[(0,i.jsx)("div",{style:{flexGrow:1}}),(0,i.jsx)(m.Z,{variant:"body2",component:"span",style:{marginRight:"4px"},children:a("by")}),(0,i.jsx)("div",{children:o})]})}var D=t(9722),N=t(2313),k=t(9463),w=t(665),B=t(1005),S=t(8055),L=t(860),O=t(47),Q=t(4552),M=t(4669),F=t(1292),U=t(7757),R=t(8666),W=t(1759),V=t.n(W),z=t(8210),P=t.n(z),q=t(6446),K=t(2133),Y=t(7795),H=t(485),J=function(n){var e=t(7828)("./".concat(n.gameId,"/customization")).default;if(!e||!e.FullCustomization)return null;return(0,i.jsx)(K.Z,{"aria-label":"Customize game",onClick:function(){n.setShowDialog(!0)},style:{height:"48px",width:"48px",marginLeft:"auto"},children:(0,i.jsx)(Y.Z,{style:{color:n.fullState?"#3f51b5":void 0}})})},$=function(n){var e=t(7828)("./".concat(n.gameId,"/customization")).default;if(!e||!e.QuickCustomization)return null;var a=e.QuickCustomization,r={mode:n.mode,currentValue:n.quickState,onChange:n.onChange(q.CustomizationType.QUICK)};return(0,i.jsx)(a,(0,D.Z)({},r))},X=function(n){return null},nn=function(n){var e=(0,c.useState)(q.EMPTY_FULL_GAME_CUSTOMIZATION_STATE),t=e[0],a=e[1],r=(0,c.useState)(!1),o=r[0],s=r[1];(0,c.useEffect)((function(){a((0,H.R)(n.gameId))}),[]);var l=t[n.mode]||{},d=o?(0,i.jsx)(X,{gameId:n.gameId,fullState:l.full}):null;return(0,i.jsxs)("div",{className:P().BarWrapperWrapper,children:[d,(0,i.jsx)("div",{className:P().BarWrapper,children:(0,i.jsx)($,{gameId:n.gameId,mode:n.mode,quickState:l.quick,onChange:function(e){return function(t){var i=(0,H.C)(n.gameId,n.mode,e,t);a(i)}}})}),(0,i.jsx)(J,{gameId:n.gameId,fullState:l.full,setShowDialog:s})]})};function en(n){var e=(0,r.$G)("GameInfo").t,t=n.details.modes.map((function(e){return(0,i.jsx)(tn,(0,D.Z)({mode:e},n),e)}));return(0,i.jsxs)("div",{style:{marginTop:"8px",maxWidth:"500px"},children:[(0,i.jsx)(m.Z,{variant:"h6",component:"h2",style:{marginBottom:"16px"},children:e("choose_game_mode")}),(0,i.jsx)("div",{children:t})]})}function tn(n){var e,t,a,o=(0,r.$G)("GameInfo").t;switch(n.mode){case N.G.AI:e=o("computer_ai_title"),t=o("computer_ai_description"),a=(0,i.jsx)(k.Z,{});break;case N.G.LocalFriend:e=o("local_friend_title"),t=o("local_friend_description"),a=(0,i.jsx)(w.Z,{});break;case N.G.OnlineFriend:e=o("online_friend_title"),t=o("online_friend_description"),a=(0,i.jsx)(B.Z,{})}return(0,i.jsxs)(I.Z,{style:{margin:"0 0 16px 0"},children:[(0,i.jsx)(L.Z,{avatar:(0,i.jsx)(S.Z,{"aria-label":e,children:a}),title:e}),(0,i.jsx)(O.Z,{children:(0,i.jsx)(m.Z,{component:"p",children:t})}),(0,i.jsxs)(Q.Z,{children:[(0,i.jsx)(an,(0,D.Z)({},n)),(0,i.jsx)(on,(0,D.Z)({},n))]})]},e)}function an(n){var e=null;return n.mode==N.G.OnlineFriend&&n.details.playerCount.min<n.details.playerCount.max&&(e=(0,i.jsx)(rn,{playerCount:n.details.playerCount,className:V().OccupancySelect})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(nn,{gameId:n.summary.id,mode:n.mode}),e]})}function rn(n){for(var e=(0,r.$G)("GameInfo").t,t=[],a=n.playerCount.min;a<=n.playerCount.max;a++)t.push((0,i.jsx)(M.Z,{value:a,children:e("players",{quantity:a})},a));return(0,i.jsxs)("div",{className:n.className,children:[(0,i.jsx)(F.Z,{style:{position:"relative",top:"8px",padding:"0 8px"}}),(0,i.jsx)(U.Z,{value:0,children:t})]})}function on(n){var e,t=(0,r.$G)("GameInfo").t,a=n.params,o="/".concat(a.lang,"/").concat(a.playVerb,"/").concat(a.gameCode);switch(n.mode){case N.G.AI:e="".concat(o,"/ai");break;case N.G.LocalFriend:e="".concat(o,"/local");break;case N.G.OnlineFriend:e="".concat(o,"/online")}return(0,i.jsx)(G(),{href:e,children:(0,i.jsx)(R.Z,{"data-testid":"playbutton-".concat(n.summary.id,"-").concat(n.mode),component:"a",variant:"contained",color:"primary",style:{marginLeft:"auto"},children:t("play")})})}var cn=!0,sn=function(n){var e=(0,r.$G)("GameInfo").t,t=n.summary.lang,c="en"==t||n.translations[t]===a.DONE,s=n.details.instructions,l=s.videoId?(0,i.jsx)(T,{videoId:s.videoId}):null,p=s.text?(0,i.jsx)(y,{text:s.text}):null,_=e("play_game",{name:n.summary.name}),j=n.urlParams,v=!c&&(0,i.jsx)(A.Z,{severity:"warning",children:(0,i.jsx)(r.cC,{t:e,i18nKey:"missing_translation_warning",components:{docs:(0,i.jsx)("a",{"aria-label":"translation docs",target:"_blank",href:"/docs?path=/story/documentation-game-translation--page"})}})});return(0,i.jsxs)(o.q,{lang:n.urlParams.lang,children:[(0,i.jsx)(h.Z,{title:"".concat(_,", ").concat(n.summary.callout),description:n.details.descriptionTag}),(0,i.jsx)(f.gR,{itemListElements:[{position:1,name:j.playVerb,item:"/".concat(t,"/").concat(j.playVerb)},{position:2,name:n.summary.name,item:"/".concat(t,"/").concat(j.playVerb,"/").concat(j.gameCode)}]}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:x().RootWrapper,"data-testid":"TabletViewDiv",children:[(0,i.jsxs)("div",{className:x().LeftCol,children:[(0,i.jsx)(m.Z,{variant:"h4",component:"h1",children:_}),(0,i.jsx)(b,{details:n.details,params:n.urlParams}),(0,i.jsx)(en,{details:n.details,summary:n.summary,params:n.urlParams})]}),(0,i.jsxs)("div",{className:x().RightCol,children:[(0,i.jsx)(g.yb,{gameSummary:n.summary}),(0,i.jsxs)("div",{style:{marginTop:"16px"},children:[v,(0,i.jsx)("div",{className:x().InstructionsWrapper,children:p})]}),(0,i.jsx)("div",{style:{marginTop:"32px"},children:l})]})]})}),(0,i.jsxs)(u,{children:[(0,i.jsx)(g.yb,{gameSummary:n.summary}),(0,i.jsxs)("div",{style:{padding:"8px"},"data-testid":"MobileViewDiv",children:[(0,i.jsx)(m.Z,{variant:"h5",component:"h1",children:_}),(0,i.jsx)(b,{details:n.details,params:n.urlParams}),v,(0,i.jsx)(en,{details:n.details,summary:n.summary,params:n.urlParams}),l,(0,i.jsx)(I.Z,{style:{marginBottom:16},children:p})]})]})]})}},8330:function(n,e,t){"use strict";t.d(e,{q:function(){return m}});var a=t(4246),i=(t(7378),t(7545)),r=t(2384),o=t(8473),c=t(587),s=t(9894),l=t.n(s),d=t(5609);function u(){return(0,a.jsx)("div",{style:{marginLeft:"auto"},children:(0,a.jsx)(l(),{href:"/",children:(0,a.jsx)("a",{style:{textDecoration:"none",display:"flex",color:"white"},children:(0,a.jsx)(d.Z,{})})})})}var m=function(n){var e,t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,a.jsx)(i.Z,{position:"sticky",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l(),{href:"/".concat(null!==(e=n.lang)&&void 0!==e?e:""),children:(0,a.jsxs)("a",{style:{textDecoration:"none",display:"flex",alignItems:"center"},children:[(0,a.jsx)("img",{style:{marginRight:"8px"},width:"48",height:"48",src:c.Z.src,alt:"FbG"}),(0,a.jsx)(o.Z,{component:"h1",variant:"h6",style:{color:"white"},children:"FreeBoardGames.org"})]})}),null!==(t=n.toolbarContent)&&void 0!==t?t:(0,a.jsx)(u,{})]})})}),(0,a.jsx)("div",{style:{maxWidth:"1200px",marginLeft:"auto",marginRight:"auto"},"data-testid":"childrenDiv",children:n.children})]})}},6446:function(n,e,t){"use strict";var a;t.r(e),t.d(e,{CustomizationType:function(){return a},EMPTY_FULL_GAME_CUSTOMIZATION_STATE:function(){return i}}),function(n){n.QUICK="quick",n.FULL="full"}(a||(a={}));var i={local:{quick:null,full:null},online:{quick:null,full:null},AI:{quick:null,full:null}}},2313:function(n,e,t){"use strict";var a;t.d(e,{G:function(){return a}}),function(n){n.AI="AI",n.OnlineFriend="online",n.LocalFriend="local"}(a||(a={}))},577:function(n,e,t){"use strict";t.r(e),t.d(e,{DEFAULT_QUICK_CUSTOMIZATION:function(){return d},TicTacToeDifficulty:function(){return a},default:function(){return u}});var a,i=t(4246),r=(t(7378),t(4669)),o=t(3429),c=function(n){var e=n.options.map((function(e,t){return(0,i.jsx)(r.Z,{onClick:function(){return n.callback(t)},value:e,selected:n.selectedIdx===t,children:e},e)}));return(0,i.jsx)("div",{children:(0,i.jsx)(o.Z,{style:{paddingTop:0,paddingBottom:0,display:"flex"},children:e})})},s=t(2313),l=t(4369);!function(n){n[n.EASY=0]="EASY",n[n.HARD=1]="HARD"}(a||(a={}));var d={difficulty:a.EASY},u={QuickCustomization:function(n){var e=n.mode,t=n.currentValue,a=n.onChange,r=(0,l.$G)("game-tictactoe").t;if(e!=s.G.AI)return null;var o=t||d;return(0,i.jsx)(c,{options:[r("easy"),r("hard")],selectedIdx:o.difficulty,callback:function(n){a({difficulty:n})}})}}},9815:function(n){n.exports={MobileView:"DesktopMobileView_MobileView__4c2sS",DesktopView:"DesktopMobileView_DesktopView__lVqZG"}},8210:function(n){n.exports={CustomizationCard:"CustomizationBar_CustomizationCard__QrmQr",DialogClose:"CustomizationBar_DialogClose__OJoSq",DialogTitleWrapper:"CustomizationBar_DialogTitleWrapper__2eMIe",DialogContentWrapper:"CustomizationBar_DialogContentWrapper__bMdF4",DialogTitle:"CustomizationBar_DialogTitle__E4tVx",BarWrapperWrapper:"CustomizationBar_BarWrapperWrapper__B_8cU",BarWrapper:"CustomizationBar_BarWrapper__L7CI1"}},4625:function(n){n.exports={Card:"GameCard_Card__iqcCK",CardLink:"GameCard_CardLink__4_d2O",Heading:"GameCard_Heading__Ae_wG",Panel:"GameCard_Panel__iOC6T",Title:"GameCard_Title__sGudS",Description:"GameCard_Description___4pf_",DescriptionInner:"GameCard_DescriptionInner__dZ_lR",Navigation:"GameCard_Navigation__c_jK8",NavigationInner:"GameCard_NavigationInner__vCNGi",ButtonBase:"GameCard_ButtonBase__qfZiS"}},1759:function(n){n.exports={OccupancySelect:"GameModePicker_OccupancySelect__hqQEr"}},2040:function(n){n.exports={RootWrapper:"_gameCode__RootWrapper__pI4N5",LeftCol:"_gameCode__LeftCol__WSzW6",RightCol:"_gameCode__RightCol__VKnjS",InstructionsWrapper:"_gameCode__InstructionsWrapper__JNoIq"}}},function(n){n.O(0,[648,814,800,131,106,818,774,888,179],(function(){return e=9701,n(n.s=e);var e}));var e=n.O();_N_E=e}]);