!function(n){function e(e){for(var o,a,l=e[0],p=e[1],d=e[2],s=0,x=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&x.push(i[a][0]),i[a]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(n[o]=p[o]);for(c&&c(e);x.length;)x.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,l=1;l<t.length;l++){var p=t[l];0!==i[p]&&(o=!1)}o&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},i={2:0},r=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=p;r.push([40,0]),t()}([function(n,e,t){"use strict";e.a=t.p+"dist/image/colon.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/1.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/2.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/3.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/4.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/5.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/6.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/7.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/8.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/9.gif"},function(n,e,t){"use strict";e.a=t.p+"dist/image/0.gif"},,,function(n,e,t){var o=t(20),i=t(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);n.exports=i.locals||{}},function(n,e,t){"use strict";t.r(e);var o=t(11),i=t.n(o)()(!1);i.push([n.i,"\n*{\n    box-sizing:border-box;\n    \n }\n \n@media screen and (max-width: 700px) {\n\n  *{\n    box-sizing:border-box;\n    \n }\n    main,#content,aside,article,.greeting{\n    display: flex;   \n    flex-direction: column;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    clear:both;\n  }\n\n  .content{\n    width:95%;\n  }\n\n  aside{\n    min-width:98%;\n    max-width:100%;\n   }\n\n  #pesan,.messege{\n  margin: 1px;\n  padding:1px;\n   }\n\n   article-list {\n     bottom: 5px;\n     position: absolute;\n     display: flex;\n     flex-grow: 1;\n     flex-direction:column;\n     clear:both;\n     overflow: hidden;\n     display:none; \n   }\n\n   \n.profile,.product,.sosmed {\n    display: none;\n  }\n\n  #buscard,#pesan{\n    min-width:98%;\n    max-width:300px;\n    font-size: 10px;\n   }\n\n}\n\n  @media screen and (max-width: 950px) {\n\n      \n    *{\n      box-sizing:border-box;\n    }\n\n      main,#content,aside,article,.greeting{\n      display: flex;   \n      flex-direction: column;\n      flex-grow: 1;\n      flex-wrap: wrap;\n      clear:both;\n    }\n\n    aside{\n      min-width:98%;\n      max-width:950px;\n    }\n\n    \n    article-list{\n      \n      display: none;\n    }   \n\n\n    .profile,.product {\n      display: none;\n    }\n    \n  }\n\n\n\n  @media screen and (max-width: 1000px) {\n  \n    article-list{\n      z-index: -1\n    }\n\n   .cover{\n      font-size: 20px;\n   }\n    #gambar{\n\n      max-width: 80%;\n      max-height:400px;\n      object-fit: cover;\n      object-position: center;\n    }\n\n  }\n   \n  @media screen and (min-width: 1000px) {\n   \n    aside{\n      \n     min-width: 20.313em;\n     max-width: 20.3125em;\n     overflow:hidden;\n     display: flex;   \n      flex-grow: 1;\n      flex-wrap: wrap;\n      clear:both;\n    }\n    \n    \n   }\n    \n    \n    body {\n           display: flex;\n           flex-direction: column;\n           flex-grow: 1;\n           color:#FFFFFF; \n           width: auto;\n           height: auto;\n           padding: 5px 15px 10px 15px;\n           margin: 0 auto;\n           border: 2px  #F2F2F2;\n           border-radius: 5px;\n           background-color: #ABF2F2;\n           font-family:Tahoma,verdana,sans-serif;          \n       }\n\n    html {\n      scroll-behavior: smooth;\n    }\n             \n        .header {\n           display: flex;\n           flex-direction: column;\n           flex-grow: 1;\n           clear:both;  \n           padding: 5px 15px 5px 15px;\n           margin: 5px 0px 10px 0px;\n           border: 2px ;\n           border-radius: 5px;\n           background-color:#000040;\n           height:150px;\n          }\n\n        .judul{\n          padding: 1px 1px 25px 1px;\n          margin: 1px 1px 15px 1px;\n         }\n          \n          nav{\n             flex-grow: 1;\n             display:flex;\n             padding: 10px 15px 10px 1px;\n             margin: 5px 5px 1px 1px;\n             text-decoration:none;\n             position:fixed;\n             top:6.25em;\n             background-color:#000040;\n             text-align:left;\n             border-radius: 20px;\n             opacity:80%;\n             left:auto;\n          }\n \n          ul{ \n           display:inline;\n           text-decoration:none;\n           margin: 1px 10px 5px 10px;\n          }\n          \n           li {\n           display:inline;\n           font-family:sans-serif;\n           font-weight:300;\n           padding:10px 10px 10px 10px;\n        }\n        \n         .bawah {\n           display:inline;\n           font-family:sans-serif;\n           padding:10px 10px 10px 8px;\n        }\n\n         a  { \n          font-size:0.75em;\n          color:#FFFFFF; \n          text-decoration:none;\n          opacity:100%;\n          }\n         \n          a:hover { \n          color:#FF6600; \n          font-size: 1em;\n          font-weight:bold;\n          text-decoration:none;\n          }\n        \n          main {\n           display: flex;\n           flex-direction: row;\n           flex-grow: 1;\n           clear:both;  \n           background-color:#000040;\n           border-radius: 5px;\n         } \n       \n          .pendahuluan{\n            margin: 5em 1.25em 1.875em 1.25em;\n            font-size: 1.25em;\n            line-height:1.5;\n           }\n\n           .WA{\n           margin-right:3.125em;\n           margin-bottom: 3.125em;\n           width:1.875em;\n            }\n     \n          footer {\n           display: flex;\n           flex-grow: 1;\n           flex-direction: column;\n           align-content: center;\n           \n           text-align: center;\n           padding:5px 5px 5px 5px;\n          \n           margin: 10px 0px 10px 0px;\n           border-radius: 5px ;\n           background-color:#000040;\n          }\n        \n       h1 {\n          color:#FFFFFF;\n          text-align:center;\n          font-size: 2.25em;\n          font-weight:400; \n          margin-top: 1px;  \n          }\n\n          b{\n           font-weight:900;\n           text-shadow: 1px 1px 2px #00FFFF, 0 0 25px #B9FFFF, 0 0 5px #FFFFFF;\n           }\n          \n           h2 {\n          color:#FFFFFF;\n          text-align:left;\n          font-size: 1.875em;\n          }\n\n          h3 {\n            color:#FFFFFF;\n            text-align:center;\n            font-size: 1em;\n            }\n          \n          h4 {\n            color:#FFFFFF;\n            text-align:center;\n            font-size: 0.875em;\n            }\n    \n          h5 {\n          color:#FFFFFF;\n          text-align:center;\n          font-size: 0.625em;\n          }          \n          \n           tr { \n           text-align:left; \n           }\n           \n           .biodata{\n           width:percentage;\n           font-family:sans-serif;\n           font-size:0.75em;\n          }\n    \n        .nol{\n          display: flex;\n           flex-direction:column;\n           flex-grow: 2;\n           font-size: 1em;\n         }\n         \n        .pakaian {\n             display:block;\n             font-family:sans-serif;\n             padding:1px 1px 1px 1px;\n             list-style-type:circle;\n             text-decoration:inherit;\n             \n          }\n      \n       \n      #content {\n           \n           display: flex;\n           flex-direction:column;\n           flex-grow: 2;\n           padding:10px 15px 10px 15px;\n           margin: 5px;\n           clear:both;\n           \n           border-radius: 5px;\n           background-color: #0080FF;\n           font-family:sans-serif;\n           font-size: 1.125em;\n       }\n       \n       article{\n           display: flex;\n           clear:both;\n           flex-direction:row;\n           flex-grow: 1;\n       }\n       \n       .pusat, .cabang{\n          font-size: 1em;\n        }\n        \n        .pesan{\n         display: flex;\n         flex-direction:column;\n         flex-grow: 1;\n         clear:both;\n       }\n         \n       \n      aside {\n           display: flex;\n           clear:both;\n           flex-grow: 1;\n           flex-direction:column;\n           padding:10px 15px 10px 15px;\n           margin: 5px;\n           border: 2px ;\n           border-radius: 5px;\n           background-color: #0080FF;\n          \n           overflow:hidden;\n           flex-wrap: wrap;\n          \n       }\n\n          \n         .biodata {\n            background-color: #0080FF;\n            font-size: 1em;   \n            clear:both;\n            color: white;\n            \n          }\n\n          #biodata{\n            color:white;\n          }\n\n         .riwayat{\n           font-size: 0.75em;\n           clear:both;\n           margin:5px ;\n           padding:5px;\n           color:white;\n          }\n          \n        .pictures {\n           display: flex;\n           flex-grow: 1;\n           clear:both;\n           padding:5px 5px 5px 5px;\n           margin: 5px;\n        }\n\n        small{\n          font-size: 0.75em;\n        }\n\n        .kotak {\n           display: flex;\n           flex-grow: 1;\n           clear:both;\n           \n           padding:10px 10px 10px 10px;\n           margin: 5px;\n           border-width:thick; \n           border-radius: 10px;\n           border-color: yellow;\n           border-style:solid;\n           background-color:#f69977;\n           box-shadow: 10px 10px 15px #000;\n           -webkit-box-shadow: 10px 10px 15px #000;\n           -moz-box-shadow: 10px 10px 15px #000;\n        }\n               \n        .logo{\n           display: flex;\n           flex-grow: 1;\n           clear:both;\n           \n           padding:1px 1px 1px 15px;\n           margin:1px;\n           max-width: 18.75em;\n        }\n         \n         .greeting {\n           display: flex;\n           flex-grow: 2;\n           clear:both;\n           padding:5px 5px 5px 5px;\n           margin: 5px;\n           flex-wrap:wrap;\n         }\n         \n        .description {\n           clear:both;\n           flex-grow: 2;\n           padding:5px 25px 5px 25px;\n           margin: 5px;       \n         }\n         \n       .images{\n           display: flex;\n           flex-grow:1;\n           min-width:6.25em;\n           width: 18.75em;\n           border-radius:10px ;\n           clear:both;\n        }\n        \n        .images:hover{\n          width:21.875em;\n         }\n         \n        .fotos{\n           width: 6.5em;\n          }\n             \n        .messege{\n            display: flex;\n            flex-grow: 1;\n            clear:both;\n            color:white;\n            padding:10px 10px 10px 10px;\n            margin: 10px 10px 10px 10px;\n            border-width:thick; \n            border-radius: 10px;\n            border-color: #00FFFF;\n            border-style:solid;\n            background-color:#0000FF;\n            box-shadow: 10px 10px 15px #000;\n            -webkit-box-shadow: 10px 10px 15px #000;\n            -moz-box-shadow: 10px 10px 15px #000;\n            background-image: linear-gradient(to bottom right,#0000FF,#007BFF);\n         }\n\n        .bawah{\n         padding:10px 10px 10px 10px;\n        }\n     \n        #satu,#dua,#tiga,#empat,#lima,#enam{\n          width:20px;\n           }\n\n        #colon{\n        width:6px;\n        }\n\n       .icon{\n          padding:5px 25px 5px 25px; \n        }\n\n       article-list {\n        display: flex;\n        flex-grow: 1;\n        flex-direction:column;\n        clear:both;\n        \n        position:absolute;\n        \n        \n        overflow-y:scroll;\n        overflow-x:hidden;\n        -webkit-overflow-scrolling: vertical;\n       \n        font-size: 0.75em;\n        text-align: justify;\n        padding: 3px 4px 3px 4px;\n        border-color: #4377bc;\n        border-style:solid;\n        border-width: thin;\n      }\n     \n      ::-webkit-scrollbar {\n        width: 10px;\n      }\n      ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 2px rgb(182, 179, 179); \n        border-radius: 10px;\n        background:transparent; \n      }\n\n      ::-webkit-scrollbar-thumb {\n        background:#000040; \n        border-radius: 10px;\n      }\n          \n      article-item{\n        width:100%;\n        display: flex;\n        flex-grow: 1;\n        flex-direction:column;\n        margin-bottom:10px;\n        box-shadow: 2px 5px 8px 2px rgba(0, 0, 0, 0.2);\n        border-radius: 10px;    \n      }\n\n      .article-desc{\n        width:100%;\n      }\n\n      .article-info{\n        width: 100%;\n        padding: 5px 5px 5px 5px;\n        line-height:1;\n      }\n\n      .search-container {\n        width: 18.75em;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        padding: 7px;\n        border-radius: 5px;\n        display: flex;\n        position: sticky;\n        top: 10px;  \n      }\n\n      .search-container > input {\n        width: 75%;\n        height: 40px;\n        padding: 10px;\n        border: 0px;\n        border: 5px;\n        border-style: solid;\n        border-color: white;       \n        font-weight: bold;\n      }\n\n    .search-container > button {\n          width: 25%;\n          height: 40px;\n          cursor: pointer;\n          margin:2px;\n          padding: 0px;\n          background-color: #000040;\n          color: white;\n          border: 5px;\n          border-style: solid;\n          border-color: #000040;\n          text-transform: capitalize;\n          text-justify: auto;\n        }\n\n          .search-container >  input::placeholder {\n            color: cornflowerblue;\n            font-weight: normal;\n          }\n\n        .clubList{\n          width: 95%;\n          max-height:43.75em;\n          overflow-y:scroll;\n          overflow-x:hidden;\n          -webkit-overflow-scrolling: vertical;\n          font-size: 12px;\n          margin-top: 10px;\n        }\n\n        .club-info{\n          width: 18.75em;\n          margin:5px 7px 5px 7px;\n        }\n\n       \n        .home {\n          max-width:25em;\n          max-height:57em;\n          overflow:hidden;\n        }\n     \n        .Clock {\n          position:absolute;\n          top:71em;\n          right: 97px;\n        }  \n\n        .Jam{\n          position:absolute;\n          top:48.75em;\n          right: 97px;\n        }\n\n        .featured-image {\n          width: 95%;\n          max-height: 300px;\n          object-fit: cover;\n          object-position: center;\n          border-radius: 3px;\n        }\n\n        .Cuaca {\n          margin-top: 0 ;\n          padding-top: 1px;\n          line-height: 1.5;\n          font-size: 14px;\n          line-height: 1.5;\n          padding-left: 20px;\n        }\n\n        #covid{\n          font-size: 14px;\n          width: 100%;\n          line-height: 1.5;\n          padding-left: 20px;\n        }\n\n        .modal{\n          display:none;\n         }\n\n        .popupModal:target{\n          display: block;    \n        }\n\n        #loading {\n          display: none;\n          position: absolute;\n          top: 10px;\n          right: 10px;\n        }\n\n        #calendar {\n           font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n           font-size: 14px;\n        }\n      \n            \n        .icon-bar {\n          position: fixed;\n          top: 50%;\n          left:0px;\n          -webkit-transform: translateY(-50%);\n          -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n          \n        }\n\n        .icon-bar a {\n          display: block;\n          text-align: center;\n          padding: 5px;\n          transition: all 0.3s ease;\n          color: white;\n          font-size: 18px;\n        }\n\n        .icon-bar a:hover {\n          background-color: #000;\n        }\n\n        .facebook {\n          background: #3B5998;\n          color: white;\n        }\n\n        .twitter {\n          background: #55ACEE;\n          color: white;\n        }\n\n        .instagram {\n          background: #dd4b39;\n          color: white;\n        }\n\n        .linkedin {\n          background: #007bb5;\n          color: white;\n        }\n\n        .youtube {\n          background: #bb0000;\n          color: white;\n        }\n\n        .content {\n          margin-left: 75px;\n          font-size: 30px;\n        }  \n        #tombol{\n\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n        }",""]),e.default=i},function(n,e){window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("navbar").style.top="-1px",document.getElementById("navbar").style.left="-35px"):(document.getElementById("navbar").style.top="100px",document.getElementById("navbar").style.left="30px")}},function(n,e){setInterval((function(){var n=(new Date).toLocaleTimeString();1===n.split(":")[0].length&&(n="0".concat(n));var e=n.substring(0,1),t=n.substring(1,2),o=n.substring(3,4),i=n.substring(4,5),r=n.substring(6,7),a=n.substring(7,8);document.images.namedItem("satu").src="./image/"+e+".gif",document.images.namedItem("dua").src="./image/"+t+".gif",document.images.namedItem("tiga").src="./image/"+o+".gif",document.images.namedItem("empat").src="./image/"+i+".gif",document.images.namedItem("lima").src="./image/"+r+".gif",document.images.namedItem("enam").src="./image/"+a+".gif"}),1e3)},function(n,e){setInterval((function(){var n=(new Date).toLocaleTimeString(),e=n.substring(0,2),t=n.substring(3,5),o=n.substring(6,8);document.getElementById("jam").innerHTML=e,document.getElementById("menit").innerHTML=t,document.getElementById("detik").innerHTML=o}),1e3)},function(n,e){var t,o,i=new Date,r=i.getDate(),a=i.getFullYear(),l=i.getHours(),p=i.getMinutes(),d=i.getSeconds(),c=i.getDay();"0"==c?t="Minggu":"1"==c?t="Senin":"2"==c?t="Selasa":"3"==c?t="Rabu":"4"==c?t="Kamis":"5"==c?t="Jumat":"6"==c&&(t="Sabtu");var s=i.getMonth()+1;"1"==s?o="Januari":"2"==s?o="Februari":"3"==s?o="Maret":"4"==s&&(o="April"),"5"==s?o="Mei":6==s?o="Juni":7==s?o="Juli":8==s?o="Agustus":9==s?o="September":10==s?o="Oktober":11==s?o="Nopember":12==s&&(o="Desember"),l>12&&("PM",l-=12),0==l&&("AM",l=12),p<=9&&(p="0"+p),d<=9&&(d="0"+d),document.write(t+", "+r+" "+o+" "+a)},,,function(n,e){var t;t=(new Date).getFullYear(),document.querySelector("#myName").innerHTML="Created by Woro Retnoningsih. Copyright &copy ".concat(t)},,,,function(n,e){fetch("https://covid19.mathdro.id/api/countries/Indonesia").then((function(n){return n.json()})).then((function(n){console.log(n),document.getElementById("covid").innerHTML="\n      <br>Terkonfirmasi: ".concat(n.confirmed.value,"\n      <br>Sembuh: ").concat(n.recovered.value,"\n      <br>Meninggal: ").concat(n.deaths.value,"\n      <br>Tgl. Update : ").concat(n.lastUpdate,"\n     ")}))},function(n,e){var t=document.getElementById("cuaca");navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+n.coords.latitude+"&lon="+n.coords.longitude+"&appid=b2c336bb5abf01acc0bbb8947211fbc6").then((function(n){return n.json()})).then((function(n){console.log(n),document.getElementById("cuaca").innerHTML="\n      <br>Lon: ".concat(n.coord.lon," \n      <br>Lat: ").concat(n.coord.lat," \n      <br>Negara: ").concat(n.sys.country," \n      <br>Wilayah: ").concat(n.name,"\n      <br>Berawan: ").concat(n.clouds.all,"\n      <br>Tekanan: ").concat(n.main.pressure,"\n      <br>Kecepatan Angin: ").concat(n.wind.speed,"\n      <br>Kelembaban: ").concat(n.main.humidity,"\n      <br>Temprature: ").concat(n.main.temp," \n\n      ")}))})):t.innerHTML="Geolocation is not supported by this browser."},,,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e);t(19),t(13),t.p,t(15),t(16),t(17),t(18),t(21),t(25),t(26);var o=t.p+"dist/image/kenzo.jpg",i=t.p+"dist/image/WA.gif",r=t(0),a=t(1),l=t(2),p=t(3),d=t(4),c=t(5),s=t(6),x=t(7),u=t(8),g=t(9),m=t(10);document.querySelectorAll("img").src=o,document.querySelectorAll(".wa").src=i,document.querySelectorAll("#colon").src=r.a,document.querySelectorAll("#satu").src=a.a,document.querySelectorAll("#satu").src=l.a,document.querySelectorAll("#satu").src=p.a,document.querySelectorAll("#satu").src=d.a,document.querySelectorAll("#satu").src=c.a,document.querySelectorAll("#satu").src=s.a,document.querySelectorAll("#satu").src=x.a,document.querySelectorAll("#satu").src=u.a,document.querySelectorAll("#satu").src=g.a,document.querySelectorAll("#satu").src=m.a}]);