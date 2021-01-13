(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),l=(a(0),a(138)),b={subject:"PSI"},o={unversionedId:"bi-spol-24/bi-spol-24",id:"bi-spol-24/bi-spol-24",isDocsHomePage:!1,title:"bi-spol-24",description:"Protokolov\xe1 rodina TCP/IP {protokolovuxe1-rodina-tcpip}",source:"@site/topics/bi-spol-24/bi-spol-24.mdx",slug:"/bi-spol-24/bi-spol-24",permalink:"/szz-bootcamp/topics/bi-spol-24/bi-spol-24",version:"current",lastUpdatedBy:"Tomas Vosicky",sidebar:"someSidebar",previous:{title:"bi-spol-23",permalink:"/szz-bootcamp/topics/bi-spol-23/bi-spol-23"},next:{title:"bi-spol-27",permalink:"/szz-bootcamp/topics/bi-spol-27/bi-spol-27"}},p=[{value:"IPv4",id:"ipv4",children:[]},{value:"IPv6",id:"ipv6",children:[]},{value:"TCP (Transmission Control Protocol)",id:"tcp-transmission-control-protocol",children:[]},{value:"UDP (User Datagram Protocol)",id:"udp-user-datagram-protocol",children:[]},{value:"Aplika\u010dn\xed protokoly (slu\u017eby) {#aplikaux10dnuxed-protokoly-sluux17eby}",id:"aplika\u010dn\xed-protokoly-slu\u017eby-aplikaux10dnuxed-protokoly-sluux17eby",children:[]},{value:"Mail",id:"mail",children:[]},{value:"\u0158\xedzen\xed datov\xe9ho toku - flow control",id:"\u0159\xedzen\xed-datov\xe9ho-toku---flow-control",children:[]},{value:"Kontrola zahlcen\xed (congestion control)",id:"kontrola-zahlcen\xed-congestion-control",children:[]},{value:"Typy server\u016f {#typy-serverux16f}",id:"typy-server\u016f-typy-serverux16f",children:[]}],i={toc:p};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"protokolov\xe1-rodina-tcpip-protokolovuxe1-rodina-tcpip"},"Protokolov\xe1 rodina TCP/IP {#protokolovuxe1-rodina-tcpip}"),Object(l.b)("p",null,"::: {#ipv4}"),Object(l.b)("h2",{id:"ipv4"},"IPv4"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"32bit adresy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"priv\xe1tn\xed rozsahy adres (neroutuj\xed se do internetu):"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"10.0.0.0/8")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"172.16.0.0/12")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"192.168.0.0/16")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"MTU (Maximum Transmission Unit) - maxim\xe1ln\xed d\xe9lka r\xe1mce"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"definov\xe1no linkovou vrstvou")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"typicky 1500 byt\u016f (vy\u0161\u0161\xed redukuje overhead, ni\u017e\u0161\xed transportn\xed\nzpo\u017ed\u011bn\xed)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ka\u017ed\xfd router m\u016f\u017ee fragmentovat paket - sestaven\xed a\u017e v c\xedlov\xe9m\nza\u0159\xedzen\xed"))))),Object(l.b)("p",null,"::: {#ipv6}"),Object(l.b)("h2",{id:"ipv6"},"IPv6"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"128bit adresy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Hop limit - obdoba TTL u IPv4")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"minim\xe1ln\xed MTU je 1280 byt\u016f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"pokud je paket moc dlouh\xfd, tak ho router zahod\xed a ode\u0161le ICMP zpr\xe1vu\ns informac\xed o MTU")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"typy adres:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"unicast (individu\xe1ln\xed)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"multicast (skupinov\xe9)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"anycast (v\xfdb\u011brov\xe9)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"adresn\xed prostor:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"::1/128 loopback")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"fc00::/7 individu\xe1ln\xed lok\xe1ln\xed adresy (obdoba priv\xe1tn\xedch u IPv4)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"fe80::/10 lok\xe1ln\xed linkov\xe9 adresy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ff00::/8 skupinov\xe9 adresy (multicast)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"2001:db8::/32 dokumenta\u010dn\xed p\u0159\xedklady")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"s\xed\u0165ov\xe1 rozhran\xed maj\xed v\xedce adres"))),Object(l.b)("p",null,"::: {#tcp-transmission-control-protocol}"),Object(l.b)("h2",{id:"tcp-transmission-control-protocol"},"TCP (Transmission Control Protocol)"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"slu\u017eba v transportn\xed vrstv\u011b (ISO/OSI)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"spojov\u011b orientovan\xe1, duplexn\xed, v jedn\xe9 relaci lze p\u0159en\xe1\u0161et neomezen\u011b\ndat")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"zabezpe\u010den\xed"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"kontroln\xed sou\u010dty")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"detekce duplicitn\xedch paket\u016f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"spr\xe1vn\xe9 se\u0159azen\xed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"opakovan\xe9 odesl\xe1n\xed a timeout")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"zah\xe1jen\xed spojen\xed - t\u0159\xedcestn\xfd handshake (SYN, SYN+ACK, ACK)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ukon\u010den\xed spojen\xed - (FIN, ACK, FIN, ACK)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"nevhodn\xe9 pro real-time aplikace (streaming, ...), vestavn\xe9 syst\xe9my\n(p\u0159\xedli\u0161 komplexn\xed), ..."))),Object(l.b)("p",null,"::: {#udp-user-datagram-protocol}"),Object(l.b)("h2",{id:"udp-user-datagram-protocol"},"UDP (User Datagram Protocol)"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"slu\u017eba v transportn\xed vrstv\u011b (ISO/OSI)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"nespojov\xe1, nezabezpe\u010den\xe1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"v\xfdhodn\xe9 kde vad\xed re\u017eie TCP - mal\xe9 bloky dat, nevad\xed ztr\xe1ta,\nreal-time aplikace"))),Object(l.b)("p",null,"::: {#aplikaux10dnuxed-protokoly-sluux17eby}"),Object(l.b)("h2",{id:"aplika\u010dn\xed-protokoly-slu\u017eby-aplikaux10dnuxed-protokoly-sluux17eby"},"Aplika\u010dn\xed protokoly (slu\u017eby) {#aplikaux10dnuxed-protokoly-sluux17eby}"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"vyu\u017e\xedvaj\xed slu\u017eeb transportn\xed vrstvy (TCP/IP model), nebo prezenta\u010dn\xed\nvrstvy (ISO/OSI)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"server nab\xedz\xed slu\u017ebu, klient se p\u0159ipoj\xed a slu\u017ebu vyu\u017e\xedv\xe1\n(alternativa P2P, kde se strany nerozli\u0161uj\xed)"))),Object(l.b)("p",null,"::: {#dns}"),Object(l.b)("h4",{id:"dns"},"DNS"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"rozeb\xedr\xe1n v dal\u0161\xed \u010d\xe1sti ot\xe1zky")),Object(l.b)("p",null,"::: {#ftp}"),Object(l.b)("h4",{id:"ftp"},"FTP"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"p\u0159\xedkazov\xfd kan\xe1l port 21/TCP")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"datov\xfd kan\xe1l dynamicky p\u0159id\u011blen\xfd port (tak\xe9 TCP) - aktivn\xed/pasivn\xed"))),Object(l.b)("p",null,"::: {#telnet}"),Object(l.b)("h4",{id:"telnet"},"Telnet"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"interaktivn\xed p\u0159\xedkazov\xfd termin\xe1l")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"port 23/TCP")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"nepodporuje \u0161ifrov\xe1n\xed (NEBEZPE\u010cN\xc9!)"))),Object(l.b)("p",null,"::: {#ssh}"),Object(l.b)("h4",{id:"ssh"},"SSH"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"port 22/TCP")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"n\xe1hrada Telnetu s \u0161ifrov\xe1n\xedm"))),Object(l.b)("p",null,"::: {#mail}"),Object(l.b)("h2",{id:"mail"},"Mail"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"skupina protokol\u016f: SMTP, IMAP4, POP3")),Object(l.b)("p",null,"::: {#https}"),Object(l.b)("h4",{id:"https"},"HTTP(S)"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"80(443)/TCP")),Object(l.b)("p",null,"::: {#dhcp---dynamic-host-configuration-protocol}"),Object(l.b)("h4",{id:"dhcp---dynamic-host-configuration-protocol"},"DHCP - Dynamic Host Configuration Protocol"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"umo\u017en\xed klientovy z\xedskat konfiguraci (adresu, GW, ...)")),Object(l.b)("h1",{id:"\u0159\xedzen\xed-datov\xe9ho-toku-ux159uxedzenuxed-datovuxe9ho-toku"},"\u0158\xedzen\xed datov\xe9ho toku {#ux159uxedzenuxed-datovuxe9ho-toku}"),Object(l.b)("h2",{id:"\u0159\xedzen\xed-datov\xe9ho-toku---flow-control"},"\u0158\xedzen\xed datov\xe9ho toku - flow control"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"kontroluje se mezi jedn\xedm senderem a reciverem")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'\\"plovouc\xed ok\xe9nko\\" (slinding window)')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"stop-and-wait (ACK)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"m\u016f\u017ee se p\u0159\xedmo \u0159\xedct odes\xedlateli rychlost kterou by m\u011bl odes\xedlat"))),Object(l.b)("h2",{id:"kontrola-zahlcen\xed-congestion-control"},"Kontrola zahlcen\xed (congestion control)"),Object(l.b)("p",null,"Detekce pomoc\xed packet loss nebo zv\u011bt\u0161en\xed zpo\u017ed\u011bn\xed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"traffic shaping (Token bucket, Leaky bucket)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"rezervace p\xe1sma pro ur\u010dit\u011b spoje"))),Object(l.b)("h1",{id:"princip-a-vyu\u017eit\xed-nat-network-adress-translation-princip-a-vyuux17eituxed-nat-network-adress-translation"},"Princip a vyu\u017eit\xed NAT (Network Adress Translation) {#princip-a-vyuux17eituxed-nat-network-adress-translation}"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"p\u0159eklad s\xed\u0165ov\xfdch adres")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"umo\u017e\u0148uje p\u0159ipojit v\xedce po\u010d\xedta\u010d\u016f na jednu ve\u0159ejnou IP (obch\xe1z\xed\nprobl\xe9m s nedostatkem IPv4 adres)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"p\u0159episuje port, adresu nebo jinou hodnotu v paketu")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"striktn\u011b odd\u011bluje LAN od WAN")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"funguje jako sm\u011brova\u010d (router)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"druhy:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Source - zm\u011bna zdrojov\xe9ho portu nebo adresy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Destination - zm\u011bna c\xedlov\xe9ho portu nebo adresy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Ma\u0161kar\xe1da")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"1:1"))))),Object(l.b)("p",null,"#","#",'\xa0Syst\xe9m DNS - "Domain Name System" - prim\xe1rn\u011b ur\u010den pro p\u0159eklad:\njm\xe9no \\<-',">"," adresa - n\u011bkolik typ\u016f z\xe1znam\u016f: - ",Object(l.b)("strong",{parentName:"p"},"A")," - 32bit IP adresa -\n",Object(l.b)("strong",{parentName:"p"},"AAAA")," - 128bit IP adresa - ",Object(l.b)("strong",{parentName:"p"},"MX")," - preference a jm\xe9no mail serveru -\n",Object(l.b)("strong",{parentName:"p"},"TXT")," - textov\xfd \u0159et\u011bzec - komponenty DNS: - jmenn\xfd prostor a zdrojov\xe9\nz\xe1znamy - stromov\xe1 struktura - jmenn\xe9 servery - vytv\xe1\u0159\xed jmennou\ndatab\xe1zi, odpov\xeddaj\xed na dotazy - resolvery - komunikace - port 53 UDP\n(do 512B) i TCP (m\u016f\u017ee i ",">"," 512B) - pokud server nezn\xe1 odpov\u011b\u010f: -\nrekurzivn\xed chov\xe1n\xed - s\xe1m najde odpov\u011b\u010f a odpov\xed - nerekurzivn\xed chov\xe1n\xed -\nodpov\xed adresu DNS serveru kde se m\xe1 klient pt\xe1t - klient m\u016f\u017ee po\u017eadovat\nrekurzivn\xed chov\xe1n\xed, server ale m\u016f\u017ee odm\xedtnout"),Object(l.b)("p",null,"::: {#typy-serverux16f}"),Object(l.b)("h2",{id:"typy-server\u016f-typy-serverux16f"},"Typy server\u016f {#typy-serverux16f}"),Object(l.b)("p",null,":::"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"prim\xe1rn\xed - udr\u017euj\xed data o z\xf3n\u011b, je autoritativn\xed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"sekund\xe1rn\xed - kop\xedruj\xed data z prim\xe1rn\xedho serveru, je autoritativn\xed")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"caching only - nen\xed autoritativn\xed pro \u017e\xe1dnou z\xf3nu")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"root - udr\u017euje z\xe1znamy root dom\xe9ny")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"forwarding - p\u0159ed\xe1v\xe1 rekurzivn\xed dotaz (odleh\u010den\xed linky), m\u016f\u017ee s\xe1m\nresolvovat"))))}c.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(a),j=n,s=u["".concat(b,".").concat(j)]||u[j]||m[j]||l;return a?r.a.createElement(s,o(o({ref:t},i),{},{components:a})):r.a.createElement(s,o({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);