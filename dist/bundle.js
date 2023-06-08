(()=>{"use strict";var e={424:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(81),i=r.n(n),s=r(645),o=r.n(s)()(i());o.push([e.id,'html {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  color: white;\n}\nbody {\n  margin: 0;\n  padding-top: 10px;\n  display: flex;\n  justify-content: space-around;\n  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  background-color: rgb(0, 0, 73);\n}\n\nh1 {\n  font-size: 3rem;\n  margin: 5px;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.side-bar {\n  display: none;\n  flex-direction: column;\n  gap: 70px;\n  align-items: center;\n}\n\n.reset {\n  visibility: hidden;\n  font-family: inherit;\n  font-size: 2.5rem;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#large-grid {\n  width: 700px;\n  height: 700px;\n}\n\n#small-grid {\n  margin-top: 50px;\n  width: 400px;\n  height: 400px;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.row {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  margin-bottom: 2px;\n}\n\n.square {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  outline: black solid 2px;\n  margin-left: 2px;\n}\n',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},o=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],u=s[c]||0,h="".concat(c," ").concat(u);s[c]=u+1;var d=r(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=i(p,n);n.byIndex=a,t.splice(a,0,{identifier:h,updater:f,references:1})}o.push(h)}return o}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var s=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=r(s[o]);t[a].references--}for(var l=n(e,i),c=0;c<s.length;c++){var u=r(s[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),i=r.n(n),s=r(569),o=r.n(s),a=r(565),l=r.n(a),c=r(216),u=r.n(c),h=r(589),d=r.n(h),p=r(424),f={};function m(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=document.querySelector(`#${e}-grid`),i=document.querySelector(".side-bar");n.innerHTML="","small"===e&&(i.style.display="flex");for(let i=9;i>=0;i-=1){const s=document.createElement("div");s.id=`${i}`,s.className="row",n.appendChild(s);for(let n=0;n<10;n+=1){const o=document.createElement("div");o.id=`${e}-${i}-${n}`,o.className="square",s.appendChild(o);const a=t[i][n];null!==a.shipPlaced&&!0===a.hit?o.style.backgroundColor="red":null!==a.shipPlaced&&!1===a.hit&&r?o.style.backgroundColor="grey":null===a.shipPlaced&&!0===a.hit?o.style.backgroundColor="blue":o.style.backgroundColor="white"}}}function v(e,t,r,n){const i=document.getElementById(`${e}-${t}-${r}`);"Hit!"===n||"Ship Sunk!"===n?i.style.backgroundColor="red":"Miss!"===n&&(i.style.backgroundColor="blue")}function y(e){const t=document.querySelector(".status-ship");let r=e;switch(e){case 0:r="Place Carrier";break;case 1:r="Place Battleship";break;case 2:r="Place Cruiser";break;case 3:r="Place Submarine";break;case 4:r="Place Destroyer"}t.textContent=r}function g(e){document.querySelector(".status").textContent=e}function b(e){const t=document.querySelector(".status");document.querySelector(".reset").visibility="visible",t.textContent=e?"You won!":"Computer won!"}f.styleTagTransform=d(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;class x{constructor(e,t){this.row=e,this.col=t,this.shipPlaced=null,this.hit=!1}}class M{constructor(e){this.length=e,this.numHits=0,this.sunk=!1}hit(){this.numHits+=1}isSunk(){return this.length===this.numHits&&(this.sunk=!0,!0)}}class S{constructor(){const e=[];for(let t=9;t>=0;t-=1){const r=[];for(let e=0;e<10;e+=1){const n=new x(t,e);r.push(n)}e.unshift(r)}this.squareArray=e;let t=5;const r=[];for(let e=0;e<4;e+=1){const e=new M(t);r.push(e),t-=1}const n=new M(3);r.splice(2,0,n),this.shipArray=r}checkValidMove(e,t,r,n){if(e+(n-1)*r[0]>9||e+(n-1)*r[0]<0||t+(n-1)*r[1]>9||t+(n-1)*r[1]<0)return!1;if(1===r[0])for(let r=e;r<n+e;r+=1)if(null!==this.squareArray[r][t].shipPlaced)return!1;if(-1===r[0])for(let r=e;r>e-n;r-=1)if(null!==this.squareArray[r][t].shipPlaced)return!1;if(1===r[1])for(let r=t;r<n+t;r+=1)if(null!==this.squareArray[e][r].shipPlaced)return!1;if(-1===r[1])for(let r=t;r>t-n;r-=1)if(null!==this.squareArray[e][r].shipPlaced)return!1;return!0}placeShip(e,t,r,n){let i=e,s=t;if(!this.checkValidMove(e,t,r,n.length))return!1;for(let e=0;e<n.length;e+=1)this.squareArray[i][s].shipPlaced=n,i+=r[0],s+=r[1];return!0}receiveAttack(e,t){const r=this.squareArray[e][t];return!0===r.hit?"Invalid!":(r.hit=!0,null!==r.shipPlaced?(r.shipPlaced.hit(),r.shipPlaced.isSunk()?"Ship Sunk!":"Hit!"):(this.missedAttacks+=1,"Miss!"))}checkResults(){let e=!0;return this.shipArray.forEach((t=>{!1===t.sunk&&(e=!1)})),!!e}}class A extends S{constructor(){super(),this.possibleDir=[[0,1],[1,0],[0,-1],[-1,0]];const e=[];for(let t=9;t>=0;t-=1)for(let r=0;r<10;r+=1)e.push([t,r]);this.possibleMovesArray=e,this.previousHits=[],this.currentDir=null,this.nextMove=null}buildComputerGameBoard(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e>this.shipArray.length-1)return;const t=this.shipArray[e];let r=!1;for(;!r;){const e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());let i=Math.floor(4*Math.random());i=this.possibleDir[i],r=this.placeShip(e,n,i,t)}this.buildComputerGameBoard(e+1)}getComputersTurn(){const e=e=>{const t=e[0],r=e[1];return this.nextMove[0]===t&&this.nextMove[1]===r};if(null!==this.nextMove){const t=this.possibleMovesArray.findIndex(e),[r]=this.possibleMovesArray.splice(t,1);return r}const t=Math.floor(Math.random()*this.possibleMovesArray.length),[r]=this.possibleMovesArray.splice(t,1);return r}computerAdjacentSquare(e,t,r){const n=e=>{const t=e[0],r=e[1];return this.nextMove[0]===t&&this.nextMove[1]===r};if("Ship Sunk!"===r)return this.nextMove=null,this.previousHits=[],void(this.currentDir=null);if("Hit!"===r&&this.previousHits.length>1){this.previousHits.push([e,t]);let r=e+this.currentDir[0],i=t+this.currentDir[1];if(this.nextMove=[r,i],r>9||r<0||i>9||i<0||!this.possibleMovesArray.some(n)){const e=this.previousHits[0];return r=e[0]-this.currentDir[0],i=e[1]-this.currentDir[1],void(this.nextMove=[r,i])}}else if("Miss!"===r&&this.previousHits.length>1||"Invalid!"===r&&this.previousHits.length>1){const e=this.previousHits[0],t=e[0]-this.currentDir[0],r=e[1]-this.currentDir[1];if(this.nextMove=[t,r],t>9||t<0||r>9||r<0||!this.possibleMovesArray.some(n)){let e=!1;for(;!e;){let t=Math.floor(Math.random()*this.previousHits.length);const r=this.previousHits[t],i=[];for(let e=0;e<4;e+=1){const t=r[0]+this.possibleDir[e][0],s=r[1]+this.possibleDir[e][0];this.nextMove=[t,s],this.possibleMovesArray.some(n)&&i.push(this.nextMove)}if(0===i.length){const e=this.previousHits.findIndex(n);this.previousHits.splice(e,1)}else t=Math.floor(Math.random()*this.possibleMoves.length),this.nextMove=this.possibleMoves[t],e=!0}return}this.currentDir=[-this.currentDir[0],-this.currentDir[1]]}else if(1===this.previousHits.length){for(let e=0;e<40;e+=1){const e=this.previousHits[0],t=Math.floor(4*Math.random()),r=this.possibleDir[t],i=e[0]+r[0],s=e[1]+r[1];if(this.nextMove=[i,s],r!==this.currentDir&&i<=9&&i>=0&&s<=9&&s>=0&&this.possibleMovesArray.some(n))return void(this.currentDir=r)}this.nextMove=null,this.previousHits=[],this.currentDir=null}}}(new class{constructor(){this.gameBoard=new S,this.shipArray=this.gameBoard.shipArray,this.currentShipIndex=0,this.currentShip=this.shipArray[this.currentShipIndex],this.boundedPlaceShipListener=this.placeShipListener.bind(this),this.boundedShiftDir=this.shiftDirListener.bind(this),this.possibleDir=[[0,1],[1,0],[0,-1],[-1,0]],this.currentDirIndex=0,this.currentDir=this.possibleDir[this.currentDirIndex]}placeShipListener(e){const t=e.target.id.split("-"),r=+t[1],n=+t[2];if(this.gameBoard.placeShip(r,n,this.currentDir,this.currentShip)){if(this.currentShipIndex+=1,this.currentShipIndex>this.shipArray.length-1)return document.querySelector("body").removeEventListener("keydown",this.boundedShiftDir),function(e){const t=new A;t.buildComputerGameBoard(),m("large",t.squareArray,!1),m("small",e.squareArray);let r=!1,n=!0;document.querySelectorAll(".square").forEach((i=>{i.addEventListener("click",(i=>{if(r)return;const s=i.target.id.split("-"),o=+s[1],a=+s[2];let l=t.receiveAttack(o,a);if("Invalid!"===l)return void g(l);if(v("large",o,a,l),g(l),r=t.checkResults(),r)return void b(n);n=!1;const c=t.getComputersTurn();l=e.receiveAttack(...c),("Hit!"===l||t.previousHits.length>0)&&t.computerAdjacentSquare(...c,l),v("small",...c,l),r=e.checkResults(),r?b(n):n=!0}))}))}(this.gameBoard),void y("");y(this.currentShipIndex),this.currentShip=this.shipArray[this.currentShipIndex],this.buildGameBoard()}}shiftDirListener(e){const{keyCode:t}=e;if(37===t)this.currentDirIndex-=1,this.currentDirIndex<0&&(this.currentDirIndex=3);else{if(39!==t)return;this.currentDirIndex+=1,this.currentDirIndex>3&&(this.currentDirIndex=0)}this.currentDir=this.possibleDir[this.currentDirIndex],this.buildGameBoard()}buildGameBoard(){const{squareArray:e}=this.gameBoard;m("large",e),function(e,t,r){const n=document.querySelectorAll(".square");let i=[];n.forEach((n=>{n.addEventListener("mouseover",(n=>{let s=e,o="lightgrey";const a=n.target.id.split("-"),l=+a[1],c=+a[2];if(null===t.squareArray[l][c].shipPlaced){if(!t.checkValidMove(l,c,r,s)){o="red";let e=!1;for(;!e;)s-=1,e=t.checkValidMove(l,c,r,s)}if(1===r[0])for(let e=l;e<s+l;e+=1){const t=document.getElementById(`large-${e}-${c}`);t.style.backgroundColor=o,i.push(t)}if(-1===r[0])for(let e=l;e>l-s;e-=1){const t=document.getElementById(`large-${e}-${c}`);t.style.backgroundColor=o,i.push(t)}if(1===r[1])for(let e=c;e<s+c;e+=1){const t=document.getElementById(`large-${l}-${e}`);t.style.backgroundColor=o,i.push(t)}if(-1===r[1])for(let e=c;e>c-s;e-=1){const t=document.getElementById(`large-${l}-${e}`);t.style.backgroundColor=o,i.push(t)}}})),n.addEventListener("mouseleave",(()=>{i.length>0&&i.forEach((e=>{e.style.backgroundColor="white"})),i=[]}))}))}(this.currentShip.length,this.gameBoard,this.currentDir),y(this.currentShipIndex),document.querySelector("body").addEventListener("keydown",this.boundedShiftDir),document.querySelectorAll(".square").forEach((e=>{e.removeEventListener("click",this.boundedPlaceShipListener),e.addEventListener("click",this.boundedPlaceShipListener)}))}}).buildGameBoard()})()})();