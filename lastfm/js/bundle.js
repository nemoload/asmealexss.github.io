!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(){$("body").prepend('<div class="alert alert-danger" role="alert"><span style="font-weight:bold;">Ad Blocker detected! </span>this app needs to do some calls to Last.fm server and the adblocker, obviously, is blocking it so in order to make it runs properly, you have to <span style="font-weight:bold;">disable your adblocker.</span></div>')}function a(e){var t=[];return e.match(/\d+\*\d+/)?t=e.split("*"):e.match(/\d+x\d+/)&&(t=e.split("x")),{rows:t[0],columns:t[1]}}var i=r(1),s=o(i),u=r(5).drawCollage,l=r(4);"undefined"==typeof fuckAdBlock?n():fuckAdBlock.onDetected(n),$("input[type=button]").bind("click",function(){window.loading=l.showLoading(),window.setTimeout(function(){loading.updateLoadingHtml('<p style="color:white;">We are working on your collage. You\'ve got a good taste by the way. ;-)</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>')},2100);var e=$("form").serializeArray(),t=e[0].value,r=e[1].value,o=a(e[2].value),n=new s["default"](t);"weeklyalbumchart"==r?n.getWeeklyAlbums(o.rows,o.columns,function(e,t,r){try{u(e,t,r)}catch(o){window.loading.finish()}}):n.getTopAlbums(o.rows,o.columns,r,function(e,t,r){try{u(e,t,r)}catch(o){window.loading.finish()}})})},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(2),s=o(i),u=r(3),l=r(4),c=function(){function e(t){n(this,e),this.username=t,this.UserAlbumsArray=[]}return a(e,[{key:"getTopAlbums",value:function(e,t,r,o){var n=this,a="https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+this.username+"&api_key="+u.api_key+"&period="+r+"&limit="+e*t+"&format=json";try{$.getJSON(a,function(a){try{if(a.error)throw new Error("Wrong username.");var i=n,u=[];if(e*t>a.topalbums.album.length)throw new Error("You have "+a.topalbums.album.length+" albums which is fewer than the size your requested "+e+"x"+t);for(var c=0;c<e*t;c++){var m=new s["default"](a.topalbums.album[c].artist.name,a.topalbums.album[c].name);n.UserAlbumsArray.push(m),u.push(m.getAlbumImage(a.topalbums.album[c].image[3]["#text"]))}$.when.apply($,u).done(function(){o(e,t,i.UserAlbumsArray)}).fail(function(){try{throw new Error("Somg images/image didn't load.")}catch(n){i.getTopAlbums(e,t,r,o),l.showError(n)}})}catch(d){l.showError(d)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){l.showError(e)}})}catch(i){l.showError(i)}}},{key:"getWeeklyAlbums",value:function(e,t,r){var o=this,n="https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user="+this.username+"&api_key="+u.api_key+"&format=json";this.size=e*u.image_size*(t*u.image_size);try{$.getJSON(n,function(n){try{if(n.error)throw new Error("Wrong username.");var a=o,i=[];if(e*t>n.weeklyalbumchart.album.length)throw new Error("You have "+n.weeklyalbumchart.album.length+" album which is fewer than the size you requested "+e+"x"+t);for(var u=0;u<e*t;u++){var c=new s["default"](n.weeklyalbumchart.album[u].artist["#text"],n.weeklyalbumchart.album[u].name);o.UserAlbumsArray.push(c),i.push(c.getAlbumImage())}$.when.apply($,i).done(function(){r(e,t,a.UserAlbumsArray)}).fail(function(){try{throw new Error("Some images/image didn't load")}catch(o){a.getWeeklyAlbums(e,t,r),l.showError(o)}})}catch(m){l.showError(m)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){l.showError(e)}})}catch(a){l.showError(a)}}},{key:"username",get:function(){return this._username},set:function(e){this._username=e}}]),e}();t["default"]=c},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(3),s=function(){function e(t,r,n){o(this,e),this.artist=t,this.name=r,n&&(this.image=n)}return a(e,[{key:"getAlbumImage",value:function(e){var t=this,r=new Image;if(e){var o=this;return $.Deferred(function(t){r.onload=function(){o._image=r,t.resolve(o._image)},r.onerror=function(){t.reject()},r.src=e}).promise()}var o,a=function(){var e="https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="+i.api_key+"&artist="+window.encodeURIComponent(t.artist)+"&album="+window.encodeURIComponent(t.name)+"&format=json";return o=t,{v:$.Deferred(function(t){$.getJSON(e,function(e){if(e.album.image[3]["#text"].length<=0){var n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEX///+nxBvIAAAAIklEQVRo3u3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAeBkttAAB/+kJawAAAABJRU5ErkJggg==";r.src=n,o._image=r,t.resolve(o._image)}else r.onload=function(){o._image=r,t.resolve(o._image)},r.onerror=function(){t.reject()},r.src=e.album.image[3]["#text"]})}).promise()}}();if("object"===("undefined"==typeof a?"undefined":n(a)))return a.v}},{key:"artist",get:function(){return this._artist},set:function(e){this._artist=e}},{key:"image",get:function(){return this._image},set:function(e){if("string"==typeof e){var t=new Image;t.src=e,this._image=t}else this._image=e}},{key:"name",set:function(e){this._name=e},get:function(){return this._name}}]),e}();t["default"]=s},function(e,t){"use strict";var r={api_key:"926f6ac421e0a673d09735dd68918d2c",image_size:300};e.exports=r},function(e,t){"use strict";var r={showError:function(e){window.loading.finish(),$("body").prepend('<div class="alert alert-danger" role="alert"><span style="font-weight:bold;">'+e+"</span></div>")},showLoading:function(){return pleaseWait({backgroundColor:"#DC4037",loadingHtml:'<p style="color:white;">We are working on your collage.</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'})}};e.exports=r},function(e,t,r){"use strict";var o=r(3),n={drawCollage:function(e,t,r){var n=document.querySelector("canvas"),a=n.getContext("2d");n.width=t*o.image_size,n.height=e*o.image_size,a.clearRect(0,0,n.width,n.height);var i=0,s=0,u=0,l=e*o.image_size*(t*o.image_size),c=parseInt(n.width),m=18,d="px Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New";for(a.font=m+d,a.strokeStyle="black",a.fillStyle="white";l;){if(c>=o.image_size){var f=parseInt(a.measureText(r[u].name).width),h=parseInt(a.measureText(r[u].artist).width);for(a.drawImage(r[u].image,i,s);f>o.image_size;){a.font=m--+d;var f=parseInt(a.measureText(r[u].name).width)}for(a.strokeText(r[u].name,i,s+20),a.fillText(r[u].name,i,s+20),a.font=m+d;h>o.image_size;){a.font=m--+d;var h=parseInt(a.measureText(r[u].artist).width)}a.strokeText(r[u].artist,i,s+40),a.fillText(r[u].artist,i,s+40),i+=o.image_size,c-=o.image_size,u++}else s+=o.image_size,i=0,c=parseInt(n.width);m=18,a.font=m+d,l-=o.image_size}}};e.exports=n}]);