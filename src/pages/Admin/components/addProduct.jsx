/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ProductApi from "../../../api/components/ProductApi";
function addProduct() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required("Vui lòng nhập tên sản phẩm của bạn!"),
				quality: Yup.string().required("Vui lòng nhập số lượng sản phẩm của bạn!"),
				description: Yup.string().required("description của bạn không hợp lệ !"),
				price: Yup.string().trim().required(" Vui lòng nhập giá của bạn !"),
				imageUrl: Yup.string().required("Hình ảnh của bạn không hợp lệ!"),
			})
		),
	});

	const onSubmit = (val) => {
		console.log(val);
         function AddProduct () {
             ProductApi.add(val)
             .then((data) => {
                 console.log(data);
             }) 
             .catch((err) => {
                console.log(err);
             })
         } 
          AddProduct()
          
	};
     

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-[25px]">Thêm mới sản phẩm</h1>
				<div className="form-group">
					<label for="name">name</label>
					<input
						type="text"
						className="form-control border rounded-lg h-10 px-2"
						id="name"
						name="name"
						{...register("name")}
					/>
					{errors.name && errors.name.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.name?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label for="">image Url</label>
					<input
						type="text"
						className="form-control"
						id="imageUrl"
						name="imageUrl"
						{...register("imageUrl")}
					/>
					{errors.imageUrl && errors.imageUrl.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.imageUrl?.message}
						</div>
					)}

					{/* <img className="mt-2" width="100px" height="100px" alt="" /> */}
				</div>
				<div className="form-group">
					<label for="price">price</label>
					<input
						type="text"
						className="form-control border rounded-lg h-10 px-2"
						name="price"
						{...register("price")}
					/>
					{errors.price && errors.price.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.price?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label for="quantity">quantity</label>
					<input
						type="text"
						className="form-control border rounded-lg h-10 px-2"
						id="actor"
						name="quality"
						{...register("quality")}
					/>
					{errors.quality && errors.quality.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.quality?.message}
						</div>
					)}
				</div>
				<div className="form-group">
					<label for="description">description</label>
					<textarea
						type="text"
						cols="50"
						rows="15"
						className="form-control border rounded-lg  px-2"
						id="description"
						name="description"
						{...register("description")}
					></textarea>
					{errors.description && errors.description.message && (
						<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
							{errors.description?.message}
						</div>
					)}
				</div>
				<button type="submit" className="btn btn-primary bg-[#007bff] mt-2 px-5">
					Thêm sản phẩm!
				</button>
			</form>
		</div>
	);
}

export default addProduct;
