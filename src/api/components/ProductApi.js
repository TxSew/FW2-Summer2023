import AxiosClient from "../AxiosClient";
class ProductApi  {
  //axios getAll
  getAll(params) {
    const url = '/products';
    return  AxiosClient.get(url, { params })
  }
   // axios getOne
  get(id) {
    const url = `products/${id}`
    return AxiosClient.get(url)
  }
  //axios add
  add(data) {
    const url = `/products`
    return AxiosClient.post(url, data)
  }
}
export default new ProductApi()
