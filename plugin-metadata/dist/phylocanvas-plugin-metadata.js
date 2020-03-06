!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@cgps/phylocanvas")):"function"==typeof define&&define.amd?define(["@cgps/phylocanvas"],e):"object"==typeof exports?exports.PhylocanvasPluginMetadata=e(require("@cgps/phylocanvas")):t.PhylocanvasPluginMetadata=e(t["@cgps/phylocanvas"])}(window,(function(t){return function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/",a(a.s=1)}([function(e,a){e.exports=t},function(t,e,a){"use strict";a.r(e);var r=a(0),n={blockFontSize:null,blockLength:16,blockSize:null,blockPadding:0,columns:[],fillStyle:"black",headerFontWeight:"bold",showLabels:!0,showHeaders:!0,textPadding:4,values:{}};function l(t){return function(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!e||a.length!==e);r=!0);}catch(t){n=!0,l=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw l}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=r.utils.mapScalar,u=r.constants.Angles,f=r.constants.TreeTypes;function b(t,e){for(var a={},r=0,n=Object.keys(e);r<n.length;r++){var l=n[r];a[l]=e[l]/t.state.scale}return a}e.default=function(t,e){e("getInitialState",(function(t,e){var a=s(e,1)[0].metadata,r=void 0===a?{}:a;return i({},t.apply(void 0,l(e)),{metadata:i({},n,{},r)})})),e("layout",(function(e,a){var r=t.state,n=e.apply(void 0,l(a));if(n.metadata||(n.metadata={}),n.metadata.values!==r.metadata.values||n.metadata.columns!==r.metadata.columns||n.metadata.blockPadding!==r.metadata.blockPadding||n.metadata.blockLength!==r.metadata.blockLength||n.metadata.fontSize!==r.fontSize){n.metadata.columnWidths={},n.metadata.headerWidths={};var o=!0,i=!1,c=void 0;try{for(var s,d=r.metadata.columns[Symbol.iterator]();!(o=(s=d.next()).done);o=!0){var u=s.value,f="",b=!0,m=!1,y=void 0;try{for(var g,h=n.leafNodes[Symbol.iterator]();!(b=(g=h.next()).done);b=!0){var p=g.value;if(p.id in r.metadata.values){var v=r.metadata.values[p.id][u];v&&("string"==typeof v.label?v.label.length>f.length&&(f=v.label):console.error("Invalid metadata label for node ",p.id," column ",u))}}}catch(t){m=!0,y=t}finally{try{b||null==h.return||h.return()}finally{if(m)throw y}}f.length?n.metadata.columnWidths[u]=t.measureTextWidth(f):n.metadata.columnWidths[u]=0,n.metadata.headerWidths[u]=2*r.fontSize+t.measureTextWidth(u,r.metadata.headerFontWeight)}}catch(t){i=!0,c=t}finally{try{o||null==d.return||d.return()}finally{if(i)throw c}}}return n.metadata.blockLength=r.metadata.blockLength,n.metadata.blockPadding=r.metadata.blockPadding,n.metadata.columns=r.metadata.columns,n.metadata.values=r.metadata.values,n.metadata.fontSize=r.fontSize,n})),e("postRender",(function(e,a){var n=t.ctx,o=t.state,i=s(a,1)[0],c=d(t,o.metadata.blockLength),m=d(t,o.metadata.blockPadding),y=b(t,i.metadata.headerWidths),g=b(t,i.metadata.columnWidths),h=d(t,o.metadata.textPadding),p=new Set(Object.keys(o.metadata.values)),v=r.types[o.type],S=o.metadata.showHeaders&&v.mainAxis&&(!v.alignableLabels||v.alignableLabels&&t.state.alignLabels),x=o.metadata.showLabels,L=o.metadata.columns||[];n.save(),n.fillStyle=o.metadata.fillStyle;var w=h;if(o.showNodes&&(w+=t._.actualNodeSize),o.renderLeafLabels&&(w+=t._.actualMaxLabelWidth),S){n.textAlign="left",n.textBaseline="middle",n.font="".concat(o.metadata.headerFontWeight," ").concat(t._.actualFontSize,"px ").concat(o.fontFamily);var O=i.leafNodes[0];O.angle;o.metadata.showLabels||u.Degrees90,n.translate(O.x,O.y),n.rotate(O.angle);var j=w;v.alignableLabels&&(j+=t.state.branchScale*(i.rootNode.longestLeaf-O.distanceFromRoot));for(var P=-.5*o.stepScale,k=0;k<L.length;k++){var W=L[k],_=m;_+=x?Math.max(y[W],m+c+g[W]):c;var z=x?j+m+c+h:j+m+c/2,A=x?P-t._.actualFontSize/2:P-h;n.translate(z,A),x||n.rotate(-u.Degrees90),n.fillText(W,0,0),x||n.rotate(u.Degrees90),n.translate(-1*z,-1*A),j+=_}n.rotate(-O.angle),n.translate(-O.x,-O.y)}var D=o.stepScale,M=0;if(o.type===f.Circular&&t.state.alignLabels){var F=u.Degrees360/i.rootNode.totalLeaves;D=F*(i.rootNode.totalLeafLength*t.state.branchScale+t._.actualNodeSize+t._.actualMaxLabelWidth),M=F*(c+m)}else o.type===f.Radial&&(D=t._.actualNodeSize);var N=Math.min(D,o.blockSize||D);n.font="".concat(t._.actualFontSize,"px ").concat(o.fontFamily);var T=!0,R=!1,H=void 0;try{for(var E,I=i.leafNodes[Symbol.iterator]();!(T=(E=I.next()).done);T=!0){var q=E.value;if(p.has(q.id)){var B=o.metadata.values[q.id];n.translate(q.x,q.y),n.rotate(q.angle),n.beginPath();var C=w;v.alignableLabels&&t.state.alignLabels&&(C+=t.state.branchScale*(i.rootNode.longestLeaf-q.distanceFromRoot));for(var G=0;G<L.length;G++){var J=L[G];if(void 0!==B[J]&&!q.isHidden&&(n.fillStyle=B[J].colour||B[J],n.fillRect(C+m,0-N/2,c,N+G*M),n.fillStyle=o.metadata.fillStyle,t._.renderLabels&&x&&"string"==typeof B[J].label)){var K=q.angle>u.Degrees90&&q.angle<u.Degrees270;K&&n.rotate(u.Degrees180),n.textAlign=K?"right":"left",n.textBaseline="middle",n.fillText(B[J].label,(K?-1:1)*(C+m+c+h),0),K&&n.rotate(-u.Degrees180)}C+=m+Math.max(S&&x?y[J]:0,x?m+c+g[J]:c)}n.closePath(),n.rotate(-q.angle),n.translate(-q.x,-q.y)}}}catch(t){R=!0,H=t}finally{try{T||null==I.return||I.return()}finally{if(R)throw H}}n.restore(),e.apply(void 0,l(a))})),e("getDrawingArea",(function(e,a){var n=e.apply(void 0,l(a)),o=r.types[t.state.type],i=t.layout(),c=t.state.metadata.blockLength,s=t.state.metadata.blockPadding,d=i.metadata.headerWidths,u=i.metadata.columnWidths,b=t.state.metadata.showLabels,m=t.state.metadata.showHeaders&&o.mainAxis&&(!o.alignableLabels||o.alignableLabels&&t.state.alignLabels),y=0;t.state.renderLeafLabels&&(y+=i.maxLabelWidth);var g=!0,h=!1,p=void 0;try{for(var v,S=t.state.metadata.columns[Symbol.iterator]();!(g=(v=S.next()).done);g=!0){var x=v.value;y+=s+Math.max(m&&b?d[x]:0,b?s+c+u[x]:c)}}catch(t){h=!0,p=t}finally{try{g||null==S.return||S.return()}finally{if(h)throw p}}var L=0,w=0,O=0,j=0;switch(t.state.type){case f.Rectangular:case f.Diagonal:O=m?t.state.stepScale:0,w=y;break;case f.Hierarchical:L=m?t.state.stepScale:0,j=y;break;case f.Circular:case f.Radial:L=y,O=y,w=y,j=y}return{width:n.width,height:n.height,left:n.left+L,top:n.top+O,right:n.right-w,bottom:n.bottom-j}}))}}])}));
//# sourceMappingURL=phylocanvas-plugin-metadata.js.map