(()=>{"use strict";var e=function(){return e=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},e.apply(this,arguments)},t={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},o=function(){function o(o){void 0===o&&(o={}),this.opts=e(e({},t),o)}return o.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),n(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var o=Math.round(t.corners*t.width*500)/1e3+"px",s="none";!0===t.shadow?s="0 2px 4px #000":"string"==typeof t.shadow&&(s=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,o=[],n=0,a=e.split(",");n<a.length;n++){var i=a[n].match(t);if(null!==i){var s=+i[2],r=+i[5],l=i[4],p=i[7];0!==s||l||(l=p),0!==r||p||(p=l),l===p&&o.push({prefix:i[1]||"",x:s,y:r,xUnits:l,yUnits:p,end:i[8]})}}return o}(s),l=0;l<t.lines;l++){var p=~~(360/t.lines*l+t.rotate),d=n(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:a(t.fadeColor,l),borderRadius:o,transformOrigin:"left",transform:"rotate("+p+"deg) translateX("+t.radius+"px)"}),c=l*t.direction/t.lines/t.speed;c-=1/t.speed;var u=n(document.createElement("div"),{width:"100%",height:"100%",background:a(t.color,l),borderRadius:o,boxShadow:i(r,p),animation:1/t.speed+"s linear "+c+"s infinite "+t.animation});d.appendChild(u),e.appendChild(d)}}(this.el,this.opts),this},o.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},o}();function n(e,t){for(var o in t)e.style[o]=t[o];return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function i(e,t){for(var o=[],n=0,a=e;n<a.length;n++){var i=a[n],r=s(i.x,i.y,t);o.push(i.prefix+r[0]+i.xUnits+" "+r[1]+i.yUnits+i.end)}return o.join(", ")}function s(e,t,o){var n=o*Math.PI/180,a=Math.sin(n),i=Math.cos(n);return[Math.round(1e3*(e*i+t*a))/1e3,Math.round(1e3*(-e*a+t*i))/1e3]}const r={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},l=document.getElementById("button-to-select-another-destination"),p="https://regional-model-api-aemlm.ondigitalocean.app/api/regional-model",d=p+"/zone-geoms";const c={"zones-geojson":{type:"geojson",data:d},"rr-lines-src":{type:"geojson",data:"https://opendata.arcgis.com/datasets/48b0b600abaa4ca1a1bacf917a31c29a_0.geojson"},"rr-stops-src":{type:"geojson",data:"https://opendata.arcgis.com/datasets/64eaa4539cf4429095c2c7bf25c629a2_0.geojson"}};mapboxgl.accessToken="pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";const u={"taz-fill":{id:"taz-fill",type:"fill",source:"taz-geojson",layout:{},paint:{"fill-opacity":.8,"fill-color":{property:"trip_density",default:"white",stops:[[0,"#edf8fb"],[3e-10,"#b3cde3"],[3e-9,"#8c96c6"],[3.003e-7,"#88419d"],[1e-5,"black"]]}}},"taz-line":{id:"taz-line",type:"line",source:"taz-geojson",layout:{},paint:{"line-opacity":1,"line-color":"black"}},"zones-fill":{id:"zones-fill",type:"fill",source:"zones-geojson",layout:{},paint:{"fill-opacity":.1,"fill-color":"red"}},zones:{id:"zones",type:"line",source:"zones-geojson",layout:{},paint:{"line-opacity":.7,"line-color":"red","line-width":4}},"rr-lines":{id:"rr-lines",type:"line",source:"rr-lines-src",layout:{},paint:{"line-width":2,"line-opacity":1,"line-color":"black"}},"rr-stops":{id:"rr-stops",type:"circle",source:"rr-stops-src",layout:{},paint:{"circle-radius":4,"circle-opacity":.7,"circle-color":"black"}}},h=(e,t,o)=>{new mapboxgl.Popup({closeButton:!1,className:"i-am-a-popup"}).setLngLat(o.lngLat).setHTML(t).addTo(e)},f=()=>{var e=document.getElementsByClassName("mapboxgl-popup");e.length&&e[0].remove()},m=e=>{(e=>{e.on("mousemove","taz-fill",(t=>{f();let o="<p>"+t.features[0].properties.total_trips+" began here and ended in the destination zone</p>";h(e,o,t)})),e.on("mouseleave","taz-fill",(()=>{f()}))})(e)},g=e=>{l.onclick=()=>{window.location="./index.html"}},y=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v10",center:[-75.16362,39.95238],zoom:9.5});y.on("load",(function(){let e=(()=>{let e=new URLSearchParams(window.location).get("search");if(""==e)return null;{let t={};return e.split("&").forEach((e=>{let o=(e=e.replace("?","")).split("=");t[o[0]]=o[1]})),t}})();console.log(e);let t=decodeURI(e.zone_name);document.getElementById("zone-name").innerText="Flow Analysis: "+t;for(const e in c)y.addSource(e,c[e]);let n=(a=document.getElementById("spinner"),new o(r).spin(a));var a;y.addSource("taz-geojson",{type:"geojson",data:"https://regional-model-api-aemlm.ondigitalocean.app/api/regional-model/flows/?dest_name="+t}),n.stop();for(const e in u)y.addLayer(u[e]);m(y),g(),y.setFilter("zones",["==","zone_name",decodeURI(e.zone_name)]),y.setFilter("zones-fill",["==","zone_name",decodeURI(e.zone_name)])}))})();