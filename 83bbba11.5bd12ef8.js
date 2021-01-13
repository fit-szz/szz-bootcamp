(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return v}));var a=n(3),r=n(7),o=(n(0),n(138)),i={subject:"TJV"},s={unversionedId:"bi-wsi-si-27/bi-wsi-si-27",id:"bi-wsi-si-27/bi-wsi-si-27",isDocsHomePage:!1,title:"bi-wsi-si-27",description:"Architektura podnikov\xfdch aplikac\xed",source:"@site/topics/bi-wsi-si-27/bi-wsi-si-27.mdx",slug:"/bi-wsi-si-27/bi-wsi-si-27",permalink:"/szz-bootcamp/topics/bi-wsi-si-27/bi-wsi-si-27",version:"current",lastUpdatedBy:"Tomas Vosicky",sidebar:"someSidebar",previous:{title:"bi-wsi-si-26",permalink:"/szz-bootcamp/topics/bi-wsi-si-26/bi-wsi-si-26"},next:{title:"bi-wsi-si-28",permalink:"/szz-bootcamp/topics/bi-wsi-si-28/bi-wsi-si-28"}},p=[{value:"Klientsk\xe1 vrstva",id:"klientsk\xe1-vrstva",children:[]},{value:"Webov\xe1 vrstva",id:"webov\xe1-vrstva",children:[]},{value:"Obchodn\xed (business) vrstva",id:"obchodn\xed-business-vrstva",children:[]},{value:"EIS vrstva",id:"eis-vrstva",children:[]}],c={toc:p};function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"architektura-podnikov\xfdch-aplikac\xed"},"Architektura podnikov\xfdch aplikac\xed"),Object(o.b)("p",null,"Java Enterprise Edition (JEE) definuje 4 vrstvy architektury. Ka\u017ed\xe1\nvyu\u017e\xedv\xe1 zdroje vrstvy, kter\xe1 je hierarchicky pod n\xed a poskytuje rozhran\xed\nvrstv\u011b nad n\xed."),Object(o.b)("p",null,"Tato architektura se ob\u010das naz\xfdv\xe1 3vrstv\xe1 - business a aplika\u010dn\xed\n(webov\xe1) vrstva toti\u017e v\u011bt\u0161inou b\u011b\u017e\xed na jednom stroji a spojuje se do\njedn\xe9."),Object(o.b)("h2",{id:"klientsk\xe1-vrstva"},"Klientsk\xe1 vrstva"),Object(o.b)("p",null,"Nemus\xed b\xfdt nutn\u011b v Jav\u011b. M\u016f\u017ee to b\xfdt t\u0159eba webov\xe1 aplikace. Komunikuje\nse st\u0159edn\xed vrstvou (odes\xedl\xe1 ji a p\u0159ij\xedm\xe1 od n\xed data). B\u011b\u017en\xe1 forma\nkomunikace je p\u0159es HTTPS protokol s vyu\u017eit\xedm nap\u0159\xedklad RESTu. Dr\u017eet se\nm\u016f\u017ee i session."),Object(o.b)("p",null,"Klientsk\xe1 aplikace m\u016f\u017ee komunikovat s webem nebo p\u0159\xedmo s EJB\nkomponentami v business vrstv\u011b."),Object(o.b)("h2",{id:"webov\xe1-vrstva"},"Webov\xe1 vrstva"),Object(o.b)("p",null,"Webov\xe1 vrstva je tvo\u0159ena servlety, JSP a JSF soubory a p\u0159\xedpadn\u011b tak\xe9\nJavaBeans komponentami. Tyto komponenty zpracov\xe1vaj\xed klientsk\xe9 po\u017eadavky\na generuj\xed odpov\u011b\u010f, kter\xe1 je n\xe1sledn\u011b zasl\xe1na do webov\xe9ho prohl\xed\u017ee\u010de\nklienta."),Object(o.b)("p",null,"P\u0159i zpracov\xe1v\xe1n\xed odpov\u011bdi m\u016f\u017ee webov\xe1 vrstva komunikovat s vrstvou\nobchodn\xed logiky (business vrstvou) a z\xedsk\xe1vat od n\xed ur\u010dit\xe9 informace."),Object(o.b)("p",null,"Servlet d\u011bd\xed od t\u0159\xeddy HttpServlet a m\xe1 nap\u0159\xedklad metody:\n",Object(o.b)("inlineCode",{parentName:"p"},"HttpServlet#doGet(HttpServletRequest, HttpServletResponse)"),"{.java}\n",Object(o.b)("inlineCode",{parentName:"p"},"HttpServlet#doPost(HttpServletRequest, HttpServletResponse)"),"{.java}"),Object(o.b)("p",null,"Um\xed tak reagovat na GET, POST, PUT, DELETE, PATCH, ... po\u017eadavky, kter\xe9\nmohou p\u0159ij\xedt. Do HttpServletResponse vypisuje odpov\u011b\u010f t\u0159eba v HTML k\xf3du."),Object(o.b)("p",null,"Java Server Pages alias JSP jsou textov\xe9 soubory s p\u0159\xedponou .jsp,\num\xedst\u011bn\xe9 ve webov\xe9 aplikaci, kter\xe9 jsou p\u0159i prvn\xedm po\u017eadavku na\nzobrazen\xed automaticky p\u0159evedeny servletov\xfdm kontejnerem na servlet\n(.java) a p\u0159elo\u017eeny do Java t\u0159\xeddy (.class). Servlety vznikl\xe9 z JSP\nstr\xe1nek jsou tedy mapov\xe1ny na URL p\u016fvodn\xedho textov\xe9ho souboru."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.jsp",metastring:'breaklines=""}',breaklines:'""}'}),'<body>\n <%  //k\xf3d uvnit\u0159 metody service()\n     if(request.getMethod().equals("GET")) {\n %>\n  <form method="post">\n      Zadejte \u010d\xedslo: <input name="cislo" value="">\n      <input type="submit" >\n  </form>\n  <%\n      } else if (request.getMethod().equals("POST")) {\n          String cislo = request.getParameter("cislo");\n          String plusjedna = prictiJedna(cislo);\n  %>\n      V\xfdsledek <%out.println(cislo);%> + 1 je <%=plusjedna%> \n  <%\n      }\n  %>\n</body>\n')),Object(o.b)("p",null,"JSF potom taky slou\u017e\xed k jednodu\u0161\u0161\xedmu generov\xe1n\xed webovek."),Object(o.b)("h2",{id:"obchodn\xed-business-vrstva"},"Obchodn\xed (business) vrstva"),Object(o.b)("p",null,"Cel\xe1 logika aplikace. EJB komponenty p\u0159ij\xedmaj\xed po\u017eadavky z webov\xe9 nebo\nklientsk\xe9 vrstvy, zpracov\xe1vaj\xed je a n\xe1sledn\u011b vygeneruj\xed odpov\u011b\u010f.\nObsahuje nap\u0159\xedklad mapov\xe1n\xed entit DB na objekty (\\@Entity). Po\u010d\xedt\xe1\nn\u011bjak\xe9 \u0161\xedlen\xe9 v\u011bci, d\u011bl\xe1 validace dat, ...O EJB v\xedce v dal\u0161\xed ot\xe1zce."),Object(o.b)("h2",{id:"eis-vrstva"},"EIS vrstva"),Object(o.b)("p",null,"Enterprise Information system (= podnikov\xfd informa\u010dn\xed syst\xe9m)"),Object(o.b)("p",null,"Tato vrstva p\u0159edstavuje ve\u0161ker\xe9 extern\xed syst\xe9my, jejich\u017e funkcionalitu\n\u010di data enterprise aplikace vyu\u017e\xedv\xe1. M\u016f\u017ee se jednat nap\u0159\xedklad o ERP\nsyst\xe9m, datab\xe1zov\xfd syst\xe9m atp. Komunikaci s EIS zpravidla zaji\u0161\u0165uje\nbusiness vrstva."),Object(o.b)("h1",{id:"zdroje"},"Zdroje"),Object(o.b)("p",null,"Cel\xfd p\u0159evzato z\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/document/d/1OU75LDsImR4cEsQoyfGNyibG5ECJhGRKCfJqrUlpl1Q/edit#"}),"https://docs.google.com/document/d/1OU75LDsImR4cEsQoyfGNyibG5ECJhGRKCfJqrUlpl1Q/edit#")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"JSP - MUNI -\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kore.fi.muni.cz/wiki/index.php/Java_Server_Pages"}),"https://kore.fi.muni.cz/wiki/index.php/Java_Server_Pages "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"4vrstv\xe1 architektura - V\u0160E -\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://java.vse.cz/jsf/chunks/ch02s03.html"}),"https://java.vse.cz/jsf/chunks/ch02s03.html"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"BI-TJV 4. P\u0159edn\xe1\u0161ka -\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/12jr7jnWbx_S4sIwLd0v9HmUyX1uuAP3-z6HOdIDp7WA/edit#"}),"https://docs.google.com/presentation/d/12jr7jnWbx_S4sIwLd0v9HmUyX1uuAP3-z6HOdIDp7WA/edit#")))))}v.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),v=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=v(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=v(n),u=a,d=l["".concat(i,".").concat(u)]||l[u]||b[u]||o;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);