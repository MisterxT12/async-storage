"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[500],{2247:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(4041);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(9575),r=(n(4041),n(2247));const l={id:"install",title:"Installation",sidebar_label:"Installation"},i=void 0,o={unversionedId:"install",id:"install",title:"Installation",description:"Install",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/install",permalink:"/async-storage/docs/install",draft:!1,editUrl:"https://github.com/react-native-async-storage/async-storage/edit/main/website/docs/Installation.md",tags:[],version:"current",frontMatter:{id:"install",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",next:{title:"Usage",permalink:"/async-storage/docs/usage"}},s={},c=[{value:"Install",id:"install",level:3},{value:"Link",id:"link",level:3},{value:"Android &amp; iOS",id:"android--ios",level:4},{value:"Windows",id:"windows",level:4},{value:"macOS",id:"macos",level:4}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"install"},"Install"),(0,r.yg)("p",null,"With npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-async-storage/async-storage\n")),(0,r.yg)("p",null,"With Yarn:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-async-storage/async-storage\n")),(0,r.yg)("p",null,"With Expo CLI:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx expo install @react-native-async-storage/async-storage\n")),(0,r.yg)("h3",{id:"link"},"Link"),(0,r.yg)("h4",{id:"android--ios"},"Android & iOS"),(0,r.yg)("p",null,"Requires ",(0,r.yg)("strong",{parentName:"p"},"React Native 0.60+")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"CLI autolink feature"),"\nlinks the module while building the app."),(0,r.yg)("p",null,"On iOS, use CocoaPods to add the native ",(0,r.yg)("inlineCode",{parentName:"p"},"RNAsyncStorage")," to your project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),(0,r.yg)("h4",{id:"windows"},"Windows"),(0,r.yg)("p",null,"Requires ",(0,r.yg)("strong",{parentName:"p"},"React Native Windows 0.63+")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://microsoft.github.io/react-native-windows/docs/native-modules-autolinking"},"CLI autolink feature"),"\nlinks the module while building the app."),(0,r.yg)("h4",{id:"macos"},"macOS"),(0,r.yg)("p",null,"Requires ",(0,r.yg)("strong",{parentName:"p"},"React Native macOS 0.63+")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set ",(0,r.yg)("inlineCode",{parentName:"li"},"platform :macos, '10.14'")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"macos/Podfile")),(0,r.yg)("li",{parentName:"ol"},"Install the pods"),(0,r.yg)("li",{parentName:"ol"},"From now on\n",(0,r.yg)("a",{parentName:"li",href:"https://microsoft.github.io/react-native-windows/docs/native-modules-autolinking"},"CLI autolink feature"),"\nwill link the module while building the app.")))}g.isMDXComponent=!0}}]);