require("es6-promise/auto");

import { sayHello } from "./greet";

import pnp from "sp-pnp-js";

console.log("ps-site-dev");

console.log(sayHello("Typescript!"));

// the @types/sharepoint typings allow us to get intellisense at dev time
console.log(_spPageContextInfo.webAbsoluteUrl);

// uses the PnP-Core-JS library to get the current web and return the Title
pnp.sp.web.get().then(w => { console.log(w.Title); });