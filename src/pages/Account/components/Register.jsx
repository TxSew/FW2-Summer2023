import React, { memo } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import "./style.scss";
import AccountApi from "../../../api/components/AccountApi.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
	const redirect = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		resolver: yupResolver(
			Yup.object({
				fistName: Yup.string()
					.required("Vui lòng nhập Họ của bạn!")
					.trim()
					.max(20, "Vui lòng nhập dưới 20 kí tự !"),
				lastName: Yup.string()
					.required("Vui lòng nhập Tên của bạn!")
					.trim()
					.max(20, "Vui lòng nhập dưới 20 kí tự !"),
				Email: Yup.string().email("Email của bạn không hợp lệ !").required("Vui lòng nhập email của bạn!"),
				Password: Yup.string()
					.trim()
					.required(" Vui lòng nhập password của bạn !")
					.min(6, "Vui lòng nhập trên 5 kí tự")
					.max(15, "Vui lòng nhập dưới 15 kí tự"),
				Number: Yup.number()
					.typeError("Số điện thoại của bạn không hợp lệ !")
					.required("error")
					.integer("Số điện thoại của bạn không hợp lệ"),
			})
		),
	});
	const onSubmit = (val) => {
		const fecthAccount = async () => {
			const data = await AccountApi.add(val);
      console.log(data);
			try {
				if (data === 'Email already exists') {
					toast.error("Email already exists", {
            position: "bottom-right",
					});
        }
        else {
          localStorage.setItem("isChecked", JSON.stringify(data));
					toast.success("register successfully", {
            position: "bottom-right",
					});
          redirect("/");
           setTimeout(()=> {

             window.location.reload();
           },500)
         }
        
			} catch (err) {
				toast.error("register error", {
					position: "bottom-right",
				});
			}
		};
		fecthAccount();
	};
	return (
		<section className="login py-[50px] bg-[#f8f8f8 ] ">
			<div className="container flex justify-center">
				<form action="" className="w-[404px]" onSubmit={handleSubmit(onSubmit)}>
					<h3 className="text-[24px] text-center mb-[13px]">Tạo Tài Khoản</h3>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Họ"
							name="fistName"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("fistName")}
						/>
						{errors.fistName && errors.fistName.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.fistName?.message}
							</div>
						)}
					</div>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Tên"
							name="lastName"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("lastName")}
						/>
						{/* error lastName */}
						{errors.lastName && errors.lastName.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.lastName?.message}
							</div>
						)}
					</div>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Email"
							name="Email"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("Email")}
						/>
						{/* Email errors */}
						{errors.Email && errors.Email.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Email?.message}
							</div>
						)}
					</div>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="số điện thoại"
							name="Number"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("Number")}
						/>
						{errors.Number && errors.Number.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Number?.message}
							</div>
						)}
					</div>
					<div className="form-control">
						<input
							type="password"
							name="Password"
							placeholder="Mật khẩu"
							className="px-[10px] outline-none py-[8px] w-[100%] bg-[#ffff] "
							{...register("Password")}
						/>
						{errors.Password && errors.Password.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] bg-[#fff6f6] border-[1px] font-light border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Password?.message}
							</div>
						)}
					</div>
					<div className=" mx-auto text-center mt-[10px]">
						<Button primary bold type="submit" className="w-[126px]">
							{isSubmitting && isValid ? (
								<div className="w-5 h-5 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"></div>
							) : (
								"Đăng ký"
							)}
						</Button>
					</div>
					<div className="pt-1 text-center more">
						<span>
							Quên mật khẩu? hoặc
							<br />
						</span>
					</div>
				</form>
			</div>
		</section>
	);
}

export default memo(Register);
