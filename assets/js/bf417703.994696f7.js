"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,v=g["".concat(l,".").concat(p)]||g[p]||d[p]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"usage",title:"Usage",sidebar_label:"Usage"},l=void 0,c={unversionedId:"usage",id:"usage",title:"Usage",description:"Async Storage can only store string data, so in order to store object data you need to serialize it first.",source:"@site/docs/Usage.md",sourceDirName:".",slug:"/usage",permalink:"/async-storage/docs/usage",draft:!1,editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/Usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/async-storage/docs/install"},next:{title:"API",permalink:"/async-storage/docs/api"}},u={},g=[{value:"Importing",id:"importing",level:3},{value:"Storing data",id:"storing-data",level:3},{value:"Storing string value",id:"storing-string-value",level:4},{value:"Storing object value",id:"storing-object-value",level:4},{value:"Reading data",id:"reading-data",level:3},{value:"Reading string value",id:"reading-string-value",level:4},{value:"Reading object value",id:"reading-object-value",level:4},{value:"More",id:"more",level:3}],d={toc:g},p="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Async Storage")," can only store ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," data, so in order to store object data you need to serialize it first.\nFor data that can be serialized to JSON you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," when saving the data and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," when loading the data."),(0,o.kt)("h3",{id:"importing"},"Importing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import AsyncStorage from '@react-native-async-storage/async-storage';\n")),(0,o.kt)("h3",{id:"storing-data"},"Storing data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setItem()")," is used both to add new data item (when no data for given key exists), and to modify existing item (when previous data for given key exists)."),(0,o.kt)("h4",{id:"storing-string-value"},"Storing string value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const storeData = async (value) => {\n  try {\n    await AsyncStorage.setItem('@storage_Key', value)\n  } catch (e) {\n    // saving error\n  }\n}\n")),(0,o.kt)("h4",{id:"storing-object-value"},"Storing object value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const storeData = async (value) => {\n  try {\n    const jsonValue = JSON.stringify(value)\n    await AsyncStorage.setItem('@storage_Key', jsonValue)\n  } catch (e) {\n    // saving error\n  }\n}\n")),(0,o.kt)("h3",{id:"reading-data"},"Reading data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," returns a promise that either resolves to stored value when data is found for given key, or returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," otherwise.  "),(0,o.kt)("h4",{id:"reading-string-value"},"Reading string value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"\nconst getData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('@storage_Key')\n    if(value !== null) {\n      // value previously stored\n    }\n  } catch(e) {\n    // error reading value\n  }\n}\n\n")),(0,o.kt)("h4",{id:"reading-object-value"},"Reading object value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"\nconst getData = async () => {\n  try {\n    const jsonValue = await AsyncStorage.getItem('@storage_Key')\n    return jsonValue != null ? JSON.parse(jsonValue) : null;\n  } catch(e) {\n    // error reading value\n  }\n}\n\n")),(0,o.kt)("h3",{id:"more"},"More"),(0,o.kt)("p",null,"For more examples, ",(0,o.kt)("a",{parentName:"p",href:"/async-storage/docs/api"},"head over to API section.")))}v.isMDXComponent=!0}}]);