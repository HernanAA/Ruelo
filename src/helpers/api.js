import Utils from './../helpers/utils'
var api = {
	baseAddress: "http://www.ruelo.com.ar/api/api/",
	
	//filterAddress:"http://www.ruelo.com.ar/api/api/producto/0?Id=10048&Descripcion=0&Codigo=0&IdMarca=0&IdRubro=0&IdSubrubro=0",
	filterAddress:"http://www.ruelo.com.ar/api/api/producto/0",
	filterId:"?Id=10048",
	filterDescription:"&Descripcion=0",
	filterCode: "&Codigo=0",
	filterBrandId: "&IdMarca=0",
	filterCategoryId: "&IdRubro=0",
	filterSubcategoryId: "&IdSubrubro=0",
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getProductListlUrl:  function(){
		return this.baseAddress + "producto/"
		//return this.filterAddress 
	},

	getFilterProductListlUrl:  function(){
		return this.filterAddress + this.filterId + this.filterDescription + this.filterCode +
		this.filterBrandId + this.filterCategoryId + this.filterSubcategoryId
		//return this.filterAddress 
	},

	getFilterId(){
		return this.filterId;
	},

	getFilterDescription(){
		return this.filterDescription;
	},

	getfilterCode(){
		return this.filterCode;
	},

	getFilterBrandId(){
		return this.filterBrandId;
	},

	getFilterCategoryId(){
		return this.filterCategoryId;
	},

	getFilterSubcategoryId(){
		return this.filterSubcategoryId;
	},


	getBrandListlUrl: function(){
		return this.baseAddress + "marcas/"
	},
}

module.exports = api;