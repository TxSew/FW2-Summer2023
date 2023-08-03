import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { Images } from "./../../../assets/index";
import "./style.scss";
import { Link } from "react-router-dom";
import MyInput from "../../../components/myInput/myInput";
import AccountApi from "./../../../api/components/AccountApi.js";
import { useNavigate } from "react-router-dom";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
	const redirect = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		resolver: yupResolver(
			Yup.object({
				Email: Yup.string()
					.email("Email của bạn không hợp lệ")
					.required("Vui lòng nhập email của bạn!")
					.max(30, "Vui lòng nhập dưới 30 kí tự !"),
				Password: Yup.string()
					.required(" Vui lòng nhập password của bạn !")
					.min(6, "Vui lòng nhập trên 5 kí tự")
					.max(15, "Vui lòng nhập dưới 15 kí tự"),
			})
		),
	});
	const onSubmit = (values) => {
		console.log(values);
		const fetchUser = async () => {
			const data = await AccountApi.checkUser(values);
			console.log(data);
			localStorage.setItem('token', JSON.stringify(data));
			  if(data.message === "error") {

				 toast.error('Email not default',{
					position:"bottom-right"
				 })
			  }
			  else if(data.message=== "Password is not define") {
                  
				 toast.error('Password is not define',{
					position:"bottom-right"
				 })
			  }
			  else {
				 
				 toast.success('Success Login',{
					position:"bottom-right"
				 })
				  localStorage.setItem('isChecked', JSON.stringify(data.user))
				
					  redirect('/')
					  window.location.reload()
					
				
			  }
		};
		fetchUser();
	};
	return (
		<section className="login py-[50px] bg-[#f8f8f8]">
			<div className="container flex justify-center">
				<form className="w-[404px]" onSubmit={handleSubmit(onSubmit)}>
					<h3 className="text-[24px] text-center mb-[13px]">Đăng nhập</h3>
					<MyInput labe={"Email"} placeholder="Email" register={register} errors={errors.Email?.message} />
					<MyInput
						labe={"Password"}
						placeholder="Password"
						type="password"
						register={register}
						errors={errors.Password?.message}
					/>
					<div className=" mx-auto text-center mt-[10px]">
						<Button primary bold type="submit" className="w-[126px]">
							{isSubmitting && isValid ? (
								<div className="w-5 h-5 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"></div>
							) : (
								"Đăng Nhập"
							)}
						</Button>
					</div>
					<div className="login_more flex justify-center gap-1 pt-[10px]">
						<div className="google-login">
							<Image src={Images.google} /> <Button google>Đăng nhập Google </Button>
						</div>
						<div className="facebook-login">
							<Image src={Images.facebookLogin} /> <Button facebook>Đăng nhập Facebook </Button>
						</div>
					</div>
					<div className="pt-1 text-center more">
						<span>
							Quên mật khẩu?
							<div className="">
								hoặc
								<span className="underline text-blue">
									<Link to={"/account/register"}> Đăng ký</Link>
								</span>
							</div>
						</span>
					</div>
				</form>
			</div>
		</section>
	);
}
export default Login;
