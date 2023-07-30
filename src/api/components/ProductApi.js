import AxiosClient from "../AxiosClient";
class ProductApi {
	//axios getAll
	getAll(params) {
		const url = "/products";
		return AxiosClient.get(url, { params });
	}
	// axios getOne
	get(id) {
		const url = `products/${id}`;
		return AxiosClient.get(url);
	}
	getSortPage(id) {
		const url = `/collections?page=${id}`;
		return AxiosClient.get(url);
	}
	//axios add
	add(data) {
		const url = `/products/store`;
		return AxiosClient.post(url, data);
	}
	 search(data) {
		 const url = `/products/search?name=${data}`;
         return AxiosClient.get(url);
	 }
	 //remove items
	  remove(id) {
        const url = `/products/delete/${id}`;
        return AxiosClient.delete(url );}
}
export default new ProductApi();
