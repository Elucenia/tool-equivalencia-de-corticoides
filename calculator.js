/* tool-equivalencia-de-corticoides · Elucenia · https://github.com/Elucenia/tool-equivalencia-de-corticoides
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"equivalencia-de-corticoides","title":"Equivalência de corticoides","fields":[["droga","Corticoide em uso","sel",{"opts":{"hc":"Hidrocortisona","cort":"Cortisona","pred":"Prednisona","predl":"Prednisolona","metil":"Metilprednisolona","tri":"Triancinolona","dexa":"Dexametasona","beta":"Betametasona"}}],["dose","Dose diária","num",{"min":0.1,"max":2000,"step":0.1,"unit":"mg","ph":"20"}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
