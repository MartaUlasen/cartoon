(this.webpackJsonpcartoon=this.webpackJsonpcartoon||[]).push([[0],{42:function(e,a,t){e.exports=t(74)},51:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(20),i=t.n(n),s=t(17),l=t(16),d=t(5),o=t(19),u=t(15),m={loading:!1,characters:void 0,next:"https://rickandmortyapi.com/api/character",error:void 0},v=Object(u.b)({name:"charactersList",initialState:m,reducers:{requestCharacterList:function(e){e.loading=!0,e.error=void 0},requestCharacterListSuccess:function(e,a){e.loading=!1,e.characters=void 0===e.characters?a.payload.results:[].concat(Object(o.a)(e.characters),Object(o.a)(a.payload.results)),e.next=a.payload.info.next},requestCharacterListError:function(e,a){e.loading=!1,e.error=a.payload}}}),_=v.actions,h=v.reducer,p=t(23),E=t.n(p),f=(t(51),function(e){var a=e.data,t=a.name,r=a.status,n=a.species,i=a.gender,s=a.image,d=a.location,o=a.url,u="/characters/".concat(o.split("/").filter((function(e){return e})).pop()),m=E()({card__status:!0,"card__status--alive":"Alive"===r,"card__status--dead":"Dead"===r});return c.a.createElement(l.b,{to:u,className:"card"},c.a.createElement("img",{className:"card__img",src:s,alt:t}),c.a.createElement("div",{className:"card__description"},c.a.createElement("h5",{className:"card__name"},t),c.a.createElement("div",{className:m},r),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Species:"),c.a.createElement("div",{className:"card__additional-value"},n)),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Gender:"),c.a.createElement("div",{className:"card__additional-value"},i)),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Location:"),c.a.createElement("div",{className:"card__additional-value"},d.name))))}),b=t(75),g={requestCharacterList:_.requestCharacterList},N=Object(s.b)((function(e){var a=e.characterList;return{loading:a.loading,characters:a.characters,next:a.next,error:a.error}}),g)((function(e){var a=e.loading,t=e.error,n=e.characters,i=e.next,s=e.requestCharacterList,l=Object(r.useRef)(null),d=Object(r.useCallback)((function(e){e[0].isIntersecting&&i&&s(i)}),[i,s]);return Object(r.useEffect)((function(){var e=l.current,a=new IntersectionObserver(d,{root:null,rootMargin:"0px",threshold:.2});return l&&e&&a.observe(e),function(){return a.unobserve(e)}}),[l,d]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,null===n||void 0===n?void 0:n.map((function(e){return c.a.createElement(f,{key:e.id,data:e})})),t&&c.a.createElement("span",null,t)),c.a.createElement("div",{ref:l},a&&c.a.createElement(b.a,{className:"icon-loading",size:20})))})),x={loading:!1,data:void 0,error:void 0},O=Object(u.b)({name:"charactersList",initialState:x,reducers:{requestCharacter:function(e){e.loading=!0,e.data=void 0,e.error=void 0},requestCharacterSuccess:function(e,a){e.loading=!1,e.data=a.payload},requestCharacterError:function(e,a){e.loading=!1,e.error=a.payload}}}),j=O.actions,C=O.reducer,q=(t(53),{requestCharacter:j.requestCharacter}),L=Object(s.b)((function(e){return{data:e.character.data}}),q)((function(e){var a=e.loading,t=e.error,n=e.requestCharacter,i=e.id,s=e.data,l=(s=void 0===s?{}:s).status,d=s.image,o=s.name,u=s.species,m=s.gender,v=s.location,_=E()({card__status:!0,"card__status--alive":"Alive"===l,"card__status--dead":"Dead"===l});return Object(r.useEffect)((function(){n("https://rickandmortyapi.com/api/character/".concat(i))}),[n,i]),c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("span",null,t),a?c.a.createElement(b.a,{className:"icon-loading",size:20}):c.a.createElement("div",{className:"character"},c.a.createElement("img",{className:"card__img",src:d,alt:o}),c.a.createElement("div",{className:"card__description"},c.a.createElement("h5",{className:"card__name"},o),c.a.createElement("div",{className:_},l),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Species:"),c.a.createElement("div",{className:"card__additional-value"},u)),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Gender:"),c.a.createElement("div",{className:"card__additional-value"},m)),c.a.createElement("div",{className:"card__additional"},c.a.createElement("div",{className:"card__additional-title"},"Location:"),c.a.createElement("div",{className:"card__additional-value"},null===v||void 0===v?void 0:v.name)))))})),k=(t(54),function(){return c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"header"},c.a.createElement(l.b,{to:"/",className:"logo"},"The Rick and Morty")),c.a.createElement("main",{className:"main"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:N}),c.a.createElement(d.a,{exact:!0,path:"/characters/:id",render:function(e){var a=e.match.params.id;return c.a.createElement(L,{id:a})}}))))}),w=t(40),y=t(11),S=t.n(y),I=t(12),M=t(24),z=t.n(M),A=S.a.mark(F),D=S.a.mark(G);function F(e){var a,t;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.payload,r.prev=1,r.next=4,Object(I.b)((function(){return z.a.get(a)}));case 4:return t=r.sent,r.next=7,Object(I.c)(_.requestCharacterListSuccess(t.data));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(I.c)(_.requestCharacterListError(r.t0.toString()));case 13:case"end":return r.stop()}}),A,null,[[1,9]])}function G(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(_.requestCharacterList.toString(),F);case 2:case"end":return e.stop()}}),D)}var J=S.a.mark(B),R=S.a.mark(T);function B(e){var a,t;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.payload,r.prev=1,r.next=4,Object(I.b)((function(){return z.a.get(a)}));case 4:return t=r.sent,r.next=7,Object(I.c)(j.requestCharacterSuccess(t.data));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(I.c)(j.requestCharacterError(r.t0.toString()));case 13:case"end":return r.stop()}}),J,null,[[1,9]])}function T(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.d)(j.requestCharacter.toString(),B);case 2:case"end":return e.stop()}}),R)}var H=S.a.mark(K);function K(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([G(),T()]);case 2:case"end":return e.stop()}}),H)}var P=t(7),Q=Object(P.c)({characterList:h,character:C}),U=Object(w.a)(),V=[].concat(Object(o.a)(Object(u.c)()),[U]),W=Object(u.a)({reducer:Q,middleware:V});U.run(K);var X=W;t(73);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:X},c.a.createElement(l.a,null,c.a.createElement(k,null)))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.dd89b26b.chunk.js.map