import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductApi from "../../api/components/ProductApi";
import "./styles.scss";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { set } from "react-hook-form";

function Dashboard() {
	const [search, setSearch] = useState("");
	const [data, setdata] = useState([]);


  //fetch data
  useEffect(() => {
	  function fetchCategory(count) {
		  ProductApi.getSortPage(1).then((res) => {
			  console.log(res);
			  if (res) {
				   console.log(res);
				  setdata(res.rows);
			  } else {
			  }
		  });
	  }
	  fetchCategory(1);

	  
  }, []);
  const handlePageClick = (e) => {
	console.log(e.selected); 
	 const pageNumber = e.selected + 1
	  ProductApi.getSortPage(pageNumber).then((res) => {
		   console.log(res.rows);
		   const pageSize = res.rows
		   setdata(pageSize)
	  })
};
	useEffect(() => {}, []);
	function handelSearch(e) {
		const newValue = e.target.value;
		console.log(newValue);
		setSearch(newValue);
	
			  ProductApi.search(newValue).then((res) => {
				  console.log(res);
				  
				  setdata(res);
			  });
	}
	function handelRemove(id) {
		console.log(id);
		ProductApi.remove(id).then((err, res) => {
			if (!err) {
				// eslint-disable-next-line no-restricted-globals
				if (confirm("Are you sure you want to remove this product")) {
					toast.success("Product removed successfully", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					return window.location.reload();
				}
			} else {
				toast.error("Product removed Error", {
					position: "top-center",
				});
			}
		});
	}
	return (
		<div className="">
			<div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
				<div className="flex items-center flex-1 space-x-4">
					<input
						name="search"
						type="text"
						className="border-[1px]"
						placeholder="Tìm kiếm..."
						onChange={handelSearch}
						value={search}
					/>
					<h5>
						<span className="text-gray-500">Số sản phẩm:</span>
						<span className="dark:text-white font-bold"> 5 </span>
					</h5>
					<input type="text" />
				</div>
				<a
					href="/admins/addProduct"
					className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3"
				>
					<button
						type="button"
						className="flex bg-[green] text-[#fff] items-center justify-center px-4 py-2 text-sm font-media rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
					>
						Thêm sản phẩm
					</button>
				</a>
			</div>
			<table className="min-w-max w-full table-auto">
				<thead>
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						<th className="py-3 px-6 text-left">#</th>
						<th className="py-3 px-6 text-left">Name</th>
						<th className="py-3 px-6 text-left">Image</th>
						<th className="py-3 px-6 text-center">price</th>
						<th className="py-3 px-6 text-center">quality</th>
						<th className="py-3 px-6 text-center">Description</th>
						<th className="py-3 px-6 text-center">Actions</th>
					</tr>
				</thead>
				<tbody className="text-gray-600 text-sm font-light">
					{data.map((e, i) => {
						return (
							<tr key={i} className="border-b bg-white hover:bg-gray-100 admin-list">
								<td className="py-3 px-6 text-left whitespace-nowrap">
									<div className="flex items-center">
										<span className="text-[13px]"></span>
									</div>
								</td>
								<td className="py-3 px-6 text-left whitespace-nowrap">
									<div className="flex items-center">
										<span className="font-medium text-[13px]">{e.name}</span>
									</div>
								</td>
								<td className="py-3 px-6 text-left">
									<div className="flex items-center">
										<div className="mr-2">
											<img className="w-[100px] h-[133px]" src={e.imageUrl} alt="" />
										</div>
									</div>
								</td>
								<td className="py-3 px-6 text-center">
									<div className="flex items-center justify-center">
										<span className="font-medium text-[13px]">{e.price} $</span>
									</div>
								</td>
								<td className="py-3 px-6 text-center">
									<div className="flex items-center justify-center">
										<span className="font-medium text-[13px]">{e.quality} </span>
									</div>
								</td>

								<td className="py-3 px-6 text-center w-96 overflow-hidden ">
									<span className="py-1 px-3 rounded-full line-clamp-4"> {e.description}</span>
								</td>
								<td className="py-3 px-6 text-center">
									<div className="flex item-center justify-center">
										<Link
											to={`/admins/updateProduct/${e.productID}`}
											className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
												></path>
											</svg>
										</Link>
										<div
											className="w-4 jr-2 transform hover:text-purple-500 hover:scale-110"
											onClick={() => handelRemove(e.productID)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												></path>
											</svg>
										</div>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="btn-paginate mt-2">
				<ReactPaginate
					previousLabel={"←"}
					nextLabel={"→"}
					pageCount={10}
					onPageChange={handlePageClick}
					containerClassName={"pagination"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active"}
				/>
			</div>
		</div>
	);
}

export default Dashboard;
