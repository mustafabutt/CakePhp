(function (ngHttp, app) { 
                                 app.teacherService = ng.Class({
                                 constructor: [ngHttp.Http, function (http) { 
                                 this.http = http;  
                                 this.baseUrl = "http://localhost/CakePHP/index.php/teacher/"; 
                                 this.httpHelper = function(url,method,data,next){ 
                                 return window.fetch(url, { 
                                     method: method,
                                     headers: { 
                                     "Accept": "application/json",
                                     "Content-Type": "application/json" 
                                     }, 
                                     body: JSON.stringify(data)
                                     }); 
                                     } 
                                     }], 
                                     getList: function () { 
                                     return this.http.get(this.baseUrl).toRx().map(function (res) {
                                     return res.json(); 
                                     }); 
                                     }, 
                                     getOne: function (id) { 
                                     	return this.http.get(this.baseUrl+id).toRx().map(function (res) { 
                                     		return res.json(); 
                                     	}); 
                                     }, 
                                     save: function(item){ 
                                     	return this.httpHelper(this.baseUrl+item.id,"PUT",item); 
                                     }, 
                                     add: function(item){ 
                                     	return this.httpHelper(this.baseUrl,"POST",item); 
                                     }, 
                                     delete: function(item){ 
                                     	return this.httpHelper(this.baseUrl+item.id,"DELETE"); 
                                     }, 
                                 }); 
                             })(window.ngHttp, this.app); 