import AxiosClient from "../AxiosClient";
const AccountApi = {
	getAll(params) {
		const url = "/accounts";
		return AxiosClient.get(url, { params });
	},
	add(data) {
		const url = "/accounts/store";
		return AxiosClient.post(url, data);
	},
	checkUser(data) {
		const url = "/accounts/checkUser";
		return AxiosClient.post(url, data);
	},
	remove(id) {
		const url = "/accounts/remove";
		return AxiosClient.delete(url, id);
	},
};
export default AccountApi;
