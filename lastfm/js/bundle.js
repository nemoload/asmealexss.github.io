!function(e){function t(o){if(r[o])return r[o].exports;var a=r[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(){$("body").prepend('<div class="alert alert-danger" role="alert"><span style="font-weight:bold;">Ad Blocker detected! </span>this app needs to do some calls to Last.fm server and the adblocker, obviously, is blocking it so in order to make it runs properly, you have to <span style="font-weight:bold;">disable your adblocker.</span></div>')}function n(e){var t=[];return e.match(/\d+\*\d+/)?t=e.split("*"):e.match(/\d+x\d+/)&&(t=e.split("x")),{rows:t[0],columns:t[1]}}var i=r(1),s=o(i),u=r(5).drawCollage,c=r(4);"undefined"==typeof fuckAdBlock?a():fuckAdBlock.onDetected(a),$("input[type=button]").bind("click",function(){var e=c.showLoading();window.setTimeout(function(){e.updateLoadingHtml('<p style="color:white;">We are working on your collage. You\'ve got a good taste by the way. ;-)</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>')},1800);var t=$("form").serializeArray(),r=t[0].value,o=t[1].value,a=n(t[2].value),i=new s["default"](r);"weeklyalbumchart"==o?i.getWeeklyAlbums(a.rows,a.columns,function(t,r,o){try{u(t,r,o)}catch(a){e.finish()}}):i.getTopAlbums(a.rows,a.columns,o,function(t,r,o){try{u(t,r,o)}catch(a){e.finish()}})})},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(2),s=o(i),u=r(3),c=r(4),l=function(){function e(t){a(this,e),this.username=t,this.UserAlbumsArray=[]}return n(e,[{key:"getTopAlbums",value:function(e,t,r,o){var a=this,n="https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+this.username+"&api_key="+u.api_key+"&period="+r+"&limit="+e*t+"&format=json";try{$.getJSON(n,function(n){try{if(n.error)throw new Error("Wrong username.");var i=a,u=[];if(e*t>n.topalbums.album.length)throw new Error("You have "+n.topalbums.album.length+" albums which is fewer than the size your requested "+e+"x"+t);for(var l=0;l<e*t;l++){var m=new s["default"](n.topalbums.album[l].artist.name,n.topalbums.album[l].name);a.UserAlbumsArray.push(m),u.push(m.getAlbumImage(n.topalbums.album[l].image[3]["#text"]))}$.when.apply($,u).done(function(){o(e,t,i.UserAlbumsArray)}).fail(function(){try{throw new Error("Somg images/image didn't load.")}catch(a){i.getTopAlbums(e,t,r,o),c.showError(a)}})}catch(f){c.showError(f)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){c.showError(e)}})}catch(i){c.showError(i)}}},{key:"getWeeklyAlbums",value:function(e,t,r){var o=this,a="https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user="+this.username+"&api_key="+u.api_key+"&format=json";this.size=e*u.image_size*(t*u.image_size);try{$.getJSON(a,function(a){try{var n=o,i=[];if(e*t>a.weeklyalbumchart.album.length)throw new Error("You have "+a.weeklyalbumchart.album.length+" album which is fewer than the size you requested "+e+"x"+t);for(var u=0;u<e*t;u++){var l=new s["default"](a.weeklyalbumchart.album[u].artist["#text"],a.weeklyalbumchart.album[u].name);o.UserAlbumsArray.push(l),i.push(l.getAlbumImage())}$.when.apply($,i).done(function(){r(e,t,n.UserAlbumsArray)}).fail(function(){try{throw new Error("Some images/image didn't load")}catch(o){n.getWeeklyAlbums(e,t,r),c.showError(o)}})}catch(m){c.showError(m)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){c.showError(e)}})}catch(n){c.showError(n)}}},{key:"username",get:function(){return this._username},set:function(e){this._username=e}}]),e}();t["default"]=l},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=r(3),s=function(){function e(t,r,a){o(this,e),this.artist=t,this.name=r,a&&(this.image=a)}return n(e,[{key:"getAlbumImage",value:function(e){var t=this,r=new Image;if(e){var o=this;return $.Deferred(function(t){r.onload=function(){o._image=r,t.resolve(o._image)},r.onerror=function(){t.reject()},r.src=e}).promise()}var o,n=function(){var e="https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="+i.api_key+"&artist="+window.encodeURIComponent(t.artist)+"&album="+window.encodeURIComponent(t.name)+"&format=json";return o=t,{v:$.Deferred(function(t){$.getJSON(e,function(e){if(e.album.image[3]["#text"].length<=0){var a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEX///+nxBvIAAAAIklEQVRo3u3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAeBkttAAB/+kJawAAAABJRU5ErkJggg==";r.src=a,o._image=r,t.resolve(o._image)}else r.onload=function(){o._image=r,t.resolve(o._image)},r.onerror=function(){t.reject()},r.src=e.album.image[3]["#text"]})}).promise()}}();if("object"===("undefined"==typeof n?"undefined":a(n)))return n.v}},{key:"artist",get:function(){return this._artist},set:function(e){this._artist=e}},{key:"image",get:function(){return this._image},set:function(e){if("string"==typeof e){var t=new Image;t.src=e,this._image=t}else this._image=e}},{key:"name",set:function(e){this._name=e},get:function(){return this._name}}]),e}();t["default"]=s},function(e,t){"use strict";var r={api_key:"926f6ac421e0a673d09735dd68918d2c",image_size:300};e.exports=r},function(e,t){"use strict";var r={showError:function(e){$("<p class='error'>"+e+". <span class='bold'>Please click on generate button again.<span></p>").insertAfter("form")},showLoading:function(){return pleaseWait({backgroundColor:"#DC4037",loadingHtml:'<p style="color:white;">We are working on your collage.</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'})}};e.exports=r},function(e,t,r){"use strict";var o=r(3),a={drawCollage:function(e,t,r){var a=document.querySelector("canvas"),n=a.getContext("2d");a.width=t*o.image_size,a.height=e*o.image_size,n.clearRect(0,0,a.width,a.height);var i=0,s=0,u=0,c=e*o.image_size*(t*o.image_size),l=parseInt(a.width),m=18,f="px Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New";for(n.font=m+f,n.strokeStyle="black",n.fillStyle="white";c;){if(l>=o.image_size){var d=parseInt(n.measureText(r[u].name).width),h=parseInt(n.measureText(r[u].artist).width);for(n.drawImage(r[u].image,i,s);d>o.image_size;){n.font=m--+f;var d=parseInt(n.measureText(r[u].name).width)}for(n.strokeText(r[u].name,i,s+20),n.fillText(r[u].name,i,s+20),n.font=m+f;h>o.image_size;){n.font=m--+f;var h=parseInt(n.measureText(r[u].artist).width)}n.strokeText(r[u].artist,i,s+40),n.fillText(r[u].artist,i,s+40),i+=o.image_size,l-=o.image_size,u++}else s+=o.image_size,i=0,l=parseInt(a.width);m=18,n.font=m+f,c-=o.image_size}}};e.exports=a}]);