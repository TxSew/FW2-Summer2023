/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import ProductApi from "../../../api/components/ProductApi";
import { useNavigate, useParams } from "react-router-dom";
function updateProduct() {
	const redirect =  useNavigate()
	const Params = useParams();
	const { id } = Params;
	const [dataUpdate, setDataUpdate] = useState("");
	useEffect(() => {
		ProductApi.getUpdate(id).then((response) => {
			if (response) {
				setDataUpdate(response);
			}
		});
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required("Vui lòng nhập tên sản phẩm của bạn!"),
				quality: Yup.string().required("Vui lòng nhập số lượng sản phẩm của bạn!"),
				description: Yup.string().required("description của bạn không hợp lệ !"),
				imageUrl: Yup.mixed()
					.required("File is required.")
					.test({
						name: "fileType",
						message: "Only JPG/PNG files are allowed.",
						test: (value) => value && ["image/jpeg", "image/png"].includes(value[0]?.type),
					}),
				price: Yup.string().trim().required(" Vui lòng nhập giá của bạn !"),
				category: Yup.string().trim().required("Vui lòng chọn danh mục !"),
			})
		),
	});
	const [File, setFile] = useState(null);
	function handleChange(event) {
		const file = event.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = function (e) {
			const base64 = reader.result;
			setFile(base64);
			// Here, you can access the base64 representation of the file.
		};
		reader.readAsDataURL(file);
		console.log(reader);
	}
	const onSubmit = (val) => {
		const files = watch("file");

		function AddProduct() {
			ProductApi.add({
				name: val.name,
				imageUrl: File,
				categoryID: val.category,
				description: val.description,
				price: val.price,
				quality: val.quality,
			})
				.then((data) => {
					console.log(data);
					if (data) {
						toast.success("Product added successfully", {
							position: "bottom-right",
						});
				     redirect('/admins')	
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error("Product name uniques failed", {
						position: "bottom-right",
					});
				});
		}
		AddProduct();
		//   dispatch(updateProduct(val))
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-[25px]">
					Cập nhật sản phẩm <span className="text-[#000] font-bold">{dataUpdate.productID}</span>{" "}
				</h1>
				<div className="form-group">
					<label htmlFor="name">name</label>
					<input
						type="text"
						className="form-control h-10 px-2"
						id="name"
						name="name"
						placeholder={dataUpdate.name}
						{...register("name")}
					/>
					{errors.name && errors.name.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.name?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="">image Url</label>
					<input
						type="file"
						className="form-control"
						id="file"
						name="imageUrl"
						ref={register} // Register the 'file' input field with react-hook-form
						{...register("imageUrl")}
						// eslint-disable-next-line no-restricted-globals
						onChange={(event) => handleChange(event)}
					/>
					{errors.imageUrl && errors.imageUrl.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.imageUrl?.message}
						</div>
					)}

					{/* <img className="mt-2" width="100px" height="100px" alt="" /> */}
				</div>
				<div className="form-group">
					<label htmlFor="price">price</label>
					<input type="number" className="form-control   h-10 px-2" placeholder={dataUpdate.price+ '$'} name="price" {...register("price")} />
					{errors.price && errors.price.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.price?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="quantity">quantity</label>
					<input
						type="number"
						className="form-control   h-10 px-2"
						id="actor"
						name="quality"
						 placeholder={dataUpdate.quality}
						{...register("quality")}
					/>
					{errors.quality && errors.quality.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.quality?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="Categories">Categories</label>
					<select className="form-control   h-10 px-2" name="category" {...register("category")}>
						<option value="">Chọn danh mục</option>
						<option value="1">Hoodie</option>
						<option value="2">T-shirt</option>
					</select>

					{errors.category && errors.category.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.category?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="description">description</label>
					<textarea
						type="text"
						cols="50"
						rows="15"
						className="form-control    px-2"
						id="description"
						name="description"
						placeholder={dataUpdate.description} 
						{...register("description")}
					></textarea>
					{errors.description && errors.description.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] -[1px] font-light bg-[#fff6f6] -red-500 -t-red-500 rounded-[3px] mt-[10px] ">
							{errors.description?.message}
						</div>
					)}
				</div>
				<button type="submit" className="btn btn-primary bg-[#007bff] mt-2 px-5">
					Lưu sản phẩm!
				</button>
			</form>
		</div>
	);
}

export default updateProduct;
