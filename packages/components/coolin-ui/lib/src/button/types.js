"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=["primary","success","info","warning","danger","text"],e=["midium","small","mini"],o={type:{type:String,validator(t){return n.includes(t)}},plain:Boolean,round:Boolean,disabled:Boolean,icon:String,iconPosition:String,size:{type:String,validator(t){return e.includes(t)}}};exports.ButtonSize=e;exports.ButtonType=n;exports.buttonProps=o;
