import Utils from './../helpers/utils'
var api = {
	baseAddress: "http://www.ruelo.com.ar/api/api/",
	
	filterAddress:"http://www.ruelo.com.ar/api/api/producto/0?Id=10048&Descripcion=0&Codigo=0&IdMarca=0&IdRubro=0&IdSubrubro=0",
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getProductListlUrl:  function(){
		return this.baseAddress + "producto/"
		//return this.filterAddress 
	},

	getBrandListlUrl: function(){
		return this.baseAddress + "marcas/"
	},
}

module.exports = api;