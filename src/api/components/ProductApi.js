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
	getUpdate(id) {
		const url = `products/getUpdate/${id}`;
		return AxiosClient.get(url);
	}
	getSortPage(id, search = "") {
		const url = `/collections?page=${id}&&q=${search}`;
		return AxiosClient.get(url);
	}
	//axios add
	add(data) {
		const url = `/products/store`;
		return AxiosClient.post(url, data);
	}
	update(data, id) {
		const url = `/products/update?productID=${id}`;
		return AxiosClient.post(url, data);
	}
	search(data) {
		const url = `/products/search?name=${data}`;
		return AxiosClient.get(url);
	}
	//remove items
	remove(id) {
		const url = `/products/delete/${id}`;
		return AxiosClient.delete(url);
	}
}
export default new ProductApi();
