import Utils from './../helpers/utils'
var api = {
	baseAddress: "http://www.ruelo.com.ar/api/api/",
	
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getProductListlUrl:  function(){
		return this.baseAddress + "producto/" 
	},
}

module.exports = api;