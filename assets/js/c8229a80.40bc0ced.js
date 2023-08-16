"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[298],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),k=a,g=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},990:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=["components"],s={id:"api",title:"API",sidebar_label:"API"},i=void 0,p={unversionedId:"api",id:"api",title:"API",description:"getItem",source:"@site/docs/API.md",sourceDirName:".",slug:"/api",permalink:"/async-storage/docs/api",draft:!1,editUrl:"https://github.com/react-native-async-storage/async-storage/edit/main/website/docs/API.md",tags:[],version:"current",frontMatter:{id:"api",title:"API",sidebar_label:"API"},sidebar:"docs",previous:{title:"Usage",permalink:"/async-storage/docs/usage"},next:{title:"Known limits",permalink:"/async-storage/docs/limits"}},u={},c=[{value:"<code>getItem</code>",id:"getitem",level:2},{value:"<code>setItem</code>",id:"setitem",level:2},{value:"<code>mergeItem</code>",id:"mergeitem",level:2},{value:"<code>removeItem</code>",id:"removeitem",level:2},{value:"<code>getAllKeys</code>",id:"getallkeys",level:2},{value:"<code>multiGet</code>",id:"multiget",level:2},{value:"<code>multiSet</code>",id:"multiset",level:2},{value:"<code>multiMerge</code>",id:"multimerge",level:2},{value:"<code>multiRemove</code>",id:"multiremove",level:2},{value:"<code>clear</code>",id:"clear",level:2},{value:"<code>useAsyncStorage</code>",id:"useasyncstorage",level:2}],m={toc:c},k="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)(k,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getitem"},(0,l.kt)("inlineCode",{parentName:"h2"},"getItem")),(0,l.kt)("p",null,"Gets a string value for given ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),". This function can either return a string value for existing ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," or return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," otherwise."),(0,l.kt)("p",null,"In order to store object value, you need to deserialize it, e.g. using ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note (legacy)"),": you can use optional callback as an alternative for returned promise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," resolving with a string value, if entry exists for given ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," otherwise."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," can also be rejected in case of underlying storage error."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getMyStringValue = async () => {\n  try {\n    return await AsyncStorage.getItem('@key')\n  } catch(e) {\n    // read error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getMyObject = async () => {\n  try {\n    const jsonValue = await AsyncStorage.getItem('@key')\n    return jsonValue != null ? JSON.parse(jsonValue) : null\n  } catch(e) {\n    // read error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"setitem"},(0,l.kt)("inlineCode",{parentName:"h2"},"setItem")),(0,l.kt)("p",null,"Sets a string ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," for given ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),". This operation can either modify an existing entry, if it did exist for given ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", or add new one otherwise."),(0,l.kt)("p",null,"In order to store object value, you need to serialize it, e.g. using ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note (legacy)"),": you can use optional callback as an alternative for returned promise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," resolving when the set operation is completed."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," can also be rejected in case of underlying storage error."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setStringValue = async (value) => {\n  try {\n    await AsyncStorage.setItem('key', value)\n  } catch(e) {\n    // save error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setObjectValue = async (value) => {\n  try {\n    const jsonValue = JSON.stringify(value)\n    await AsyncStorage.setItem('key', jsonValue)\n  } catch(e) {\n    // save error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"mergeitem"},(0,l.kt)("inlineCode",{parentName:"h2"},"mergeItem")),(0,l.kt)("p",null,"Merges an existing value stored under ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", with new ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", assuming both values are ",(0,l.kt)("strong",{parentName:"p"},"stringified JSON"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," with merged data, if exists, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," otherwise."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const USER_1 = {\n  name: 'Tom',\n  age: 20,\n  traits: {\n    hair: 'black',\n    eyes: 'blue'\n  }\n}\n\nconst USER_2 = {\n  name: 'Sarah',\n  age: 21,\n  hobby: 'cars',\n  traits: {\n    eyes: 'green',\n  }\n}\n\n\nmergeUsers = async () => {\n  try {\n    //save first user\n    await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1))\n\n    // merge USER_2 into saved USER_1\n    await AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(USER_2))\n\n    // read merged item\n    const currentUser = await AsyncStorage.getItem('@MyApp_user')\n\n    console.log(currentUser)\n\n    // console.log result:\n    // {\n    //   name: 'Sarah',\n    //   age: 21,\n    //   hobby: 'cars',\n    //   traits: {\n    //     eyes: 'green',\n    //     hair: 'black'\n    //   }\n    // }\n  }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"removeitem"},(0,l.kt)("inlineCode",{parentName:"h2"},"removeItem")),(0,l.kt)("p",null,"Removes item for a ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),", invokes (optional) callback once completed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static removeItem(key: string, [callback]: ?(error: ?Error) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeValue = async () => {\n  try {\n    await AsyncStorage.removeItem('@MyApp_key')\n  } catch(e) {\n    // remove error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"getallkeys"},(0,l.kt)("inlineCode",{parentName:"h2"},"getAllKeys")),(0,l.kt)("p",null,"Returns all keys known to your App, for all callers, libraries, etc. Once completed, invokes ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," with errors (if any) and array of keys."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getAllKeys = async () => {\n  let keys = []\n  try {\n    keys = await AsyncStorage.getAllKeys()\n  } catch(e) {\n    // read key error\n  }\n\n  console.log(keys)\n  // example console.log result:\n  // ['@MyApp_user', '@MyApp_key']\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"multiget"},(0,l.kt)("inlineCode",{parentName:"h2"},"multiGet")),(0,l.kt)("p",null,"Fetches multiple key-value pairs for given array of ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," in a batch. Once completed, invokes ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," with errors (if any) and results."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," of array with coresponding key-value pairs found, stored as ",(0,l.kt)("inlineCode",{parentName:"p"},"[key, value]")," array."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getMultiple = async () => {\n\n  let values\n  try {\n    values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key'])\n  } catch(e) {\n    // read error\n  }\n  console.log(values)\n\n  // example console.log output:\n  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"multiset"},(0,l.kt)("inlineCode",{parentName:"h2"},"multiSet")),(0,l.kt)("p",null,"Stores multiple key-value pairs in a batch. Once completed, ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," with any errors will be called."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static multiSet(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'multiSet = async () => {\n  const firstPair = ["@MyApp_user", "value_1"]\n  const secondPair = ["@MyApp_key", "value_2"]\n  try {\n    await AsyncStorage.multiSet([firstPair, secondPair])\n  } catch(e) {\n    //save error\n  }\n\n  console.log("Done.")\n}\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"multimerge"},(0,l.kt)("inlineCode",{parentName:"h2"},"multiMerge")),(0,l.kt)("p",null,"Multiple merging of existing and new values in a batch. Assumes that values are ",(0,l.kt)("em",{parentName:"p"},"stringified JSON"),". Once completed, invokes ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," with errors (if any)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static multiMerge(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const USER_1 = {\n  name: 'Tom',\n  age: 30,\n  traits: {hair: 'brown'},\n};\n\nconst USER_1_DELTA = {\n  age: 31,\n  traits: {eyes: 'blue'},\n};\n\nconst USER_2 = {\n  name: 'Sarah',\n  age: 25,\n  traits: {hair: 'black'},\n};\n\nconst USER_2_DELTA = {\n  age: 26,\n  traits: {hair: 'green'},\n};\n\n\nconst multiSet = [\n  [\"@MyApp_USER_1\", JSON.stringify(USER_1)],\n  [\"@MyApp_USER_2\", JSON.stringify(USER_2)]\n]\n\nconst multiMerge = [\n  [\"@MyApp_USER_1\", JSON.stringify(USER_1_DELTA)],\n  [\"@MyApp_USER_2\", JSON.stringify(USER_2_DELTA)]\n]\n\n\nmergeMultiple = async () => {\n  let currentlyMerged\n\n  try {\n    await AsyncStorage.multiSet(multiSet)\n    await AsyncStorage.multiMerge(multiMerge)\n    currentlyMerged = await AsyncStorage.multiGet(['@MyApp_USER_1', '@MyApp_USER_2'])\n  } catch(e) {\n    // error\n  }\n\n  console.log(currentlyMerged)\n  // console.log output:\n  // [\n  //   [\n  //     'USER_1',\n  //     {\n  //       name:\"Tom\",\n  //       age:30,\n  //       traits: {\n  //         hair: 'brown'\n  //         eyes: 'blue'\n  //       }\n  //     }\n  //   ],\n  //   [\n  //     'USER_2',\n  //     {\n  //       name:'Sarah',\n  //       age:26,\n  //       traits: {\n  //         hair: 'green'\n  //       }\n  //     }\n  //   ]\n  // ]\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"multiremove"},(0,l.kt)("inlineCode",{parentName:"h2"},"multiRemove")),(0,l.kt)("p",null,"Clears multiple key-value entries for given array of ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," in a batch. Once completed, invokes a ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," with errors (if any)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeFew = async () => {\n  const keys = ['@MyApp_USER_1', '@MyApp_USER_2']\n  try {\n    await AsyncStorage.multiRemove(keys)\n  } catch(e) {\n    // remove error\n  }\n\n  console.log('Done')\n}\n\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"clear"},(0,l.kt)("inlineCode",{parentName:"h2"},"clear")),(0,l.kt)("p",null,"Removes ",(0,l.kt)("strong",{parentName:"p"},"whole")," ",(0,l.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," data, for all clients, libraries, etc. You probably want to use ",(0,l.kt)("a",{parentName:"p",href:"#removeItem"},"removeItem")," or ",(0,l.kt)("a",{parentName:"p",href:"#multiRemove"},"multiRemove")," to clear only your App's keys."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static clear([callback]: ?(error: ?Error) => void): Promise\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"clearAll = async () => {\n  try {\n    await AsyncStorage.clear()\n  } catch(e) {\n    // clear error\n  }\n\n  console.log('Done.')\n}\n")),(0,l.kt)("h2",{id:"useasyncstorage"},(0,l.kt)("inlineCode",{parentName:"h2"},"useAsyncStorage")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": A hooks-like interface that we're experimenting with. This will change in the nearest future to fully leverage Hooks API, so feel free to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-async-storage/issues/32"},"follow this discussion to learn more"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"useAsyncStorage")," returns an object that exposes all methods that allow you to interact with the stored value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"static useAsyncStorage(key: string): {\n  getItem: (\n    callback?: ?(error: ?Error, result: string | null) => void,\n  ) => Promise<string | null>,\n  setItem: (\n    value: string,\n    callback?: ?(error: ?Error) => void,\n  ) => Promise<null>,\n  mergeItem: (\n    value: string,\n    callback?: ?(error: ?Error) => void,\n  ) => Promise<null>,\n  removeItem: (callback?: ?(error: ?Error) => void) => Promise<null>,\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Specific Example"),":"),(0,l.kt)("p",null,"You can replace your ",(0,l.kt)("inlineCode",{parentName:"p"},"App.js")," with the following to see it in action."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react';\nimport { View, Text, TouchableOpacity } from 'react-native';\nimport { useAsyncStorage } from '@react-native-async-storage/async-storage';\n\nexport default function App() {\n  const [value, setValue] = useState('value');\n  const { getItem, setItem } = useAsyncStorage('@storage_key');\n\n  const readItemFromStorage = async () => {\n    const item = await getItem();\n    setValue(item);\n  };\n\n  const writeItemToStorage = async newValue => {\n    await setItem(newValue);\n    setValue(newValue);\n  };\n\n  useEffect(() => {\n    readItemFromStorage();\n  }, []);\n\n  return (\n    <View style={{ margin: 40 }}>\n      <Text>Current value: {value}</Text>\n      <TouchableOpacity\n        onPress={() =>\n          writeItemToStorage(\n            Math.random()\n              .toString(36)\n              .substr(2, 5)\n          )\n        }\n      >\n        <Text>Update value</Text>\n      </TouchableOpacity>\n    </View>\n  );\n}\n")),(0,l.kt)("p",null,"In this example:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On mount, we read the value at ",(0,l.kt)("inlineCode",{parentName:"li"},"@storage_key")," and save it to the state under ",(0,l.kt)("inlineCode",{parentName:"li"},"value")),(0,l.kt)("li",{parentName:"ol"},'When pressing on "update value", a new string gets generated, saved to async storage, and to the component state'),(0,l.kt)("li",{parentName:"ol"},"Try to reload your app - you'll see that the last value is still being read from async storage")))}g.isMDXComponent=!0}}]);