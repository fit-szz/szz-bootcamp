(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),r=(n(0),n(138)),i={subject:"DBS"},o={unversionedId:"bi-spol-11/bi-spol-11",id:"bi-spol-11/bi-spol-11",isDocsHomePage:!1,title:"bi-spol-11",description:"3 \xfarovn\u011b pohledu na data",source:"@site/topics/bi-spol-11/bi-spol-11.mdx",slug:"/bi-spol-11/bi-spol-11",permalink:"/szz-bootcamp/topics/bi-spol-11/bi-spol-11",version:"current",lastUpdatedBy:"Tomas Vosicky",sidebar:"someSidebar",previous:{title:"bi-spol-10",permalink:"/szz-bootcamp/topics/bi-spol-10/bi-spol-10"},next:{title:"bi-spol-12",permalink:"/szz-bootcamp/topics/bi-spol-12/bi-spol-12"}},p=[{value:"Struktury pro ukl\xe1d\xe1n\xed dat v rela\u010dn\xedch DB s ohledem na rychl\xfd p\u0159\xedstup k nim (speci\xe1ln\xed zp\u016fsoby ulo\u017een\xed, indexy apod.)",id:"struktury-pro-ukl\xe1d\xe1n\xed-dat-v-rela\u010dn\xedch-db-s-ohledem-na-rychl\xfd-p\u0159\xedstup-k-nim-speci\xe1ln\xed-zp\u016fsoby-ulo\u017een\xed-indexy-apod",children:[{value:"Heap",id:"heap",children:[]},{value:"Heap s indexy",id:"heap-s-indexy",children:[]},{value:"Cluster index",id:"cluster-index",children:[]},{value:"Noncluster index",id:"noncluster-index",children:[]},{value:"Bitmapov\xe9 indexy",id:"bitmapov\xe9-indexy",children:[]},{value:"Shluk",id:"shluk",children:[]},{value:"Index typu B*-Tree",id:"index-typu-b-tree",children:[]}]}],b={toc:p};function c(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"3-\xfarovn\u011b-pohledu-na-data"},"3 \xfarovn\u011b pohledu na data"),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:n(268).default}),'{width="',"\\",'textwidth"}'),Object(r.b)("p",null,"Konceptu\xe1ln\xed"),Object(r.b)("p",null,":   Modelov\xe1n\xed reality (Obvykle se zachycuje se UML diagramem nebo ER\nmodelem). Sna\u017e\xed se neb\xfdt ovlivn\u011bna prost\u0159edky \u0159e\u0161en\xed."),Object(r.b)("p",null,"Implementa\u010dn\xed"),Object(r.b)("p",null,":   Konkr\xe9tn\xed datab\xe1zov\xfd model, konstruk\u010dn\xed dotazovac\xed a manipula\u010dn\xed\nprost\u0159edky (rela\u010dn\xed, objektov\xe1, s\xed\u0165ov\xe1, hierarchick\xe1, XML, ...)"),Object(r.b)("p",null,"Fyzick\xe1"),Object(r.b)("p",null,":   Sekven\u010dn\xed soubory, indexy, clustery apod."),Object(r.b)("h1",{id:"konceptu\xe1ln\xed-modelov\xe1n\xed-datab\xe1z\xed"},"Konceptu\xe1ln\xed modelov\xe1n\xed datab\xe1z\xed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"spole\u010dn\xe9 ch\xe1p\xe1n\xed objektu aplikace u\u017eivateli a projektanty")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"integrace n\u011bkolika u\u017eivatelsk\xfdch pohled\u016f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"v\xfdsledek je vstupem do realizace DB")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"slou\u017e\xed jako dokumentace"))),Object(r.b)("h1",{id:"implementa\u010dn\xed"},"Implementa\u010dn\xed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"nejni\u017e\u0161\xed m\xedra abstrakce")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"v t\xe9to f\xe1zi prob\xedh\xe1 realizace datov\xe9 struktury, popsan\xe9 v\nkonceptu\xe1ln\xedm modelu")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"model je zde transformov\xe1n do modelu odpov\xeddaj\xedc\xed konkr\xe9tn\xed\ntechnologii")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"mus\xed zohled\u0148ovat v\u0161echny dostupn\xe9 prost\u0159edky a mo\u017enosti")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"popisuje, \u010d\xedm je datov\xfd obsah syst\xe9mu, popsan\xfd konceptu\xe1ln\xedm a\nstruktur\xe1ln\xedm modelem, realizov\xe1n"))),Object(r.b)("h1",{id:"fyzick\xfd-pohled"},"Fyzick\xfd pohled"),Object(r.b)("h2",{id:"struktury-pro-ukl\xe1d\xe1n\xed-dat-v-rela\u010dn\xedch-db-s-ohledem-na-rychl\xfd-p\u0159\xedstup-k-nim-speci\xe1ln\xed-zp\u016fsoby-ulo\u017een\xed-indexy-apod"},"Struktury pro ukl\xe1d\xe1n\xed dat v rela\u010dn\xedch DB s ohledem na rychl\xfd p\u0159\xedstup k nim (speci\xe1ln\xed zp\u016fsoby ulo\u017een\xed, indexy apod.)"),Object(r.b)("h3",{id:"heap"},"Heap"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"nov\xe9 z\xe1znamy p\u0159id\xe1ny do libovoln\xe9ho pr\xe1zdn\xe9ho m\xedsta")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u017e\xe1dn\xe9 uspo\u0159\xe1d\xe1n\xed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"hled\xe1n\xed je O(n)"))),Object(r.b)("h3",{id:"heap-s-indexy"},"Heap s indexy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"z\xe1znamy jsou uspo\u0159\xe1d\xe1ny")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"v\xedme, kdy\u017e u\u017e m\u016f\u017eeme ukon\u010dit hled\xe1n\xed"))),Object(r.b)("h3",{id:"cluster-index"},"Cluster index"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"index pages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"struktura u\u017e obsahuje samotn\xe9 z\xe1znamy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"m\u016f\u017eeme m\xedt jenom jeden clustered index nad stejn\xfdmi daty"))),Object(r.b)("h3",{id:"noncluster-index"},"Noncluster index"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ukazatele do samotn\xfdch z\xe1znam\u016f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"libovoln\xe1 organizace indexu (ROW ID)"))),Object(r.b)("h3",{id:"bitmapov\xe9-indexy"},"Bitmapov\xe9 indexy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"bin\xe1rn\xed matice")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"p\u0159edem vypo\u010d\xedtan\xe9 odpov\u011bdi na jednoduch\xe9 ot\xe1zky (true/false), a to\npro ka\u017ed\xfd z\xe1znam")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"DLM operace velmi drah\xe9")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"sp\xed\u0161 pro DSS (ne OLTP)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"vhodn\xe9 pro z\xe1znamy s velmi neunik\xe1tn\xedmi polo\u017ekami"))),Object(r.b)("p",null,"DSS = decission support system - velk\xe1 rozhodnut\xed, zalo\u017eena na\nhistorick\xfdch datech OLTP = online transaction processing - aktu\xe1ln\xed\ndata, ka\u017edodenn\xed transakce"),Object(r.b)("h3",{id:"shluk"},"Shluk"),Object(r.b)("p",null,"Tabulky dan\xe9 do jednoho shluku."),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:n(269).default}),'{width="',"\\",'textwidth"}'),Object(r.b)("h3",{id:"index-typu-b-tree"},"Index typu B","*","-Tree"),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:n(270).default}),'{width="',"\\",'textwidth"}'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ko\u0159en m\xe1 nejm\xe9n\u011b 2 potomky, pokud nen\xed listem")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ka\u017ed\xfd uzel krom\u011b ko\u017eene a listu m\xe1 nejm\xe9n\u011b ","[","m/2","]"," a nejv\xfd\u0161e m\npotomk\u016f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ka\u017ed\xfd uzel m\xe1 nejm\xe9n\u011b ","[","m/2","]"," - 1 a nejv\xedce m - 1 datov\xfdch z\xe1znam\u016f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"v\u0161echny cesty ve strom\u011b jsou stejn\u011b dlouh\xe9")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"data v nelistov\xe9m uzlu jsou organizov\xe1na")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"listy obsahuj\xed \xfaplnou mno\u017einu kl\xed\u010du a mohou se li\u0161it strukturou"))),Object(r.b)("h1",{id:"d\u016fle\u017eit\xe9-poznatky"},"D\u016fle\u017eit\xe9 poznatky"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(rela\u010dn\xed) datab\xe1ze bez indexu nefunguj\xed rozumn\u011b - indexy jsou nutn\xe9\n(pro v\u011bt\u0161\xed data)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"DB stroj \u010dasto n\u011bkter\xe9 indexy vytv\xe1\u0159\xed automaticky kv\u016fli kontrole IO\n(integritn\xed omezen\xed)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"v OLTP se nej\u010dast\u011bji pou\u017e\xedvaj\xed indexy na b\xe1zi B-strom\u016f (tam kde jsou\ndata unik\xe1tn\xed)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"kde jsou data velmi neunik\xe1tn\xed a pot\u0159ebuj\xed se indexovat, tam se\npou\u017e\xedvaj\xed bitmapov\xe9 indexy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"indexy je t\u0159eba udr\u017eovat (zjednodu\u0161en\u011b - u\u0161et\u0159\xedm na dotazech, plat\xedm\nv\xedce p\u0159i DML)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"kli\u010d indexu (indexovan\xe9 atributy) m\u016f\u017ee b\xfdt slo\u017een\xfd")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"index m\u016f\u017ee b\xfdt unik\xe1tn\xed/neunik\xe1tn\xed"))))}c.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),c=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?l.a.createElement(s,o(o({ref:t},b),{},{components:n})):l.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<r;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},268:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/views-6a340ca3cf02574e719012ebf9c5c455.png"},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cluster-f62ffdcfb0f6b4e3802fdef1115bf222.png"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bTree-5607cf5aa4ee827d06346be268142f88.png"}}]);