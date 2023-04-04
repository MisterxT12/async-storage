"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[567],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7107:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"where_data_stored",title:"Where your data is stored",sidebar_label:"Where data is stored"},s=void 0,d={unversionedId:"advanced/where_data_stored",id:"advanced/where_data_stored",title:"Where your data is stored",description:"Android* - SQLite",source:"@site/docs/advanced/Where-data-stored.md",sourceDirName:"advanced",slug:"/advanced/where_data_stored",permalink:"/async-storage/docs/advanced/where_data_stored",draft:!1,editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/Where-data-stored.md",tags:[],version:"current",frontMatter:{id:"where_data_stored",title:"Where your data is stored",sidebar_label:"Where data is stored"},sidebar:"docs",previous:{title:"Storage space increase",permalink:"/async-storage/docs/advanced/db_size"},next:{title:"Community Packages",permalink:"/async-storage/docs/debugging/communityPackages"}},l={},u=[],p={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Android")," - SQLite"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iOS")," - small values (not exceeding 1024 characters) are serialized and stored in a common ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")," file, while larger values are stored in individual, dedicated files (named as MD5 hashed ",(0,o.kt)("inlineCode",{parentName:"li"},"key"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"macOS")," - Same as iOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Web")," - window.localStorage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows")," - SQLite")))}f.isMDXComponent=!0}}]);