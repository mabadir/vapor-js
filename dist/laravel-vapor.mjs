var e=require("axios"),n=e.CancelToken,t=function(){};t.prototype.store=function(t,o){void 0===o&&(o={});try{var r=this;return Promise.resolve(e.post("/vapor/signed-storage-url",{bucket:o.bucket||"",content_type:o.contentType||t.type,expires:o.expires||"",visibility:o.visibility||""},{baseURL:o.baseURL||null,headers:o.headers||{}})).then(function(s){var a=s.data.headers;return"Host"in a&&delete a.Host,void 0===o.progress&&(o.progress=function(){}),r.cancelToken=n.source(),Promise.resolve(e.put(s.data.url,t,{cancelToken:cancelToken,headers:a,onUploadProgress:function(e){o.progress(e.loaded/e.total)}})).then(function(){return r.cancelToken=null,s.data.extension=t.name.split(".").pop(),s.data})})}catch(e){return Promise.reject(e)}},t.prototype.cancel=function(){this.cancelToken&&(this.cancelToken.cancel(),this.cancelToken=null)},module.exports=new t;
//# sourceMappingURL=laravel-vapor.mjs.map
