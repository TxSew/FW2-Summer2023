import React, { useState } from "react";
import Button from "./../../components/Button";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/Card/CardReducer";
import { useEffect } from "react";
function CartDetail() {
	const [Cart, setCart] = useState([]);
	const dispatch = useDispatch();
	function handleDelete(id) {
		const remove = Cart.filter((cart) => cart.productID !== id.productID);
		dispatch(removeItem(id));
		setCart(remove);
	}
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("CartItems")) || [];
		setCart(data);
	}, []);

	return (
		<div className="cart">
			<div className="navbar bg-[#eee]">
				<div className="container">
					<ul className="flex gap-[7px] text-[16px] py-[15px]">
						<li>
							<Link>Trang Chủ</Link>
						</li>{" "}
						<span>{">"}</span>
						<li>
							<Link>Giỏ hàng</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<div className="thumnail_cart">
					{Cart.length > 0 ? (
						<div className="flex ml-5 justify-between">
							<div className="max-w-[60%] w-[100%] py-[20px]  border-gray-400 border-b-[1px] border-solid">
								<h1 className=" text-[25px]">Giỏ hàng của bạn</h1>
								{Cart.map((e, i) => (
									<div key={e.productID} className="flex mt-5">
										<div className="w-[15%]">
											<img className="w-[150px] h-[110px]" src={e.imageUrl} alt="err" />
										</div>
										<div className="w-[85%] pl-[20px]">
											<div className="title_cart mb-[3px] flex justify-between">
												<p className="font-bold uppercase">{e.name}</p>
												<div className="delete_cart">
													<span className="cursor-pointer" onClick={() => handleDelete(e)}>
														Xoá sản phẩm
													</span>
												</div>
											</div>
											<div className="size mb-[3px]">
												<span>L</span>
											</div>
											<div className="price">
												<p>
													{e.price} <span className="line-through">(30,000d)</span>
												</p>
											</div>
											<div className="flex justify-between">
												<div className="btn_cart border-gray-500 border-solid border-[1px] max-w-max">
													<button className="next qty-btn px-[5px] ">+</button>
													<input
														type="text"
														className="w-[30px] inline-block text-center"
														value={e.cartQuantity}
													/>
													<button className=" qty-btn px-[5px]">-</button>
												</div>

												<div className="check_total float-right clear-both inline">
													<p>{e.price * e.cartQuantity}</p>
												</div>
											</div>
										</div>
									</div>
								))}
								<div className="order_product-more mt-[30px]">
									<Button backXL>Tiếp tục mua sản phẩm khác</Button>
								</div>
								<div className="note_order mt-3">
									<p className="text-[17px] text-[#666] font-bold mb-3">Ghi chú đơn hàng</p>
									<textarea
										className="min-h-[130px] bg-[#ededed] w-[100%] outline-none p-[20px]"
										id="notee"
										rows="4"
										placeholder="Ghi chú"
									></textarea>
								</div>
							</div>
							{/* total */}
							<div className="max-w-[35%] w-[100%] pt-[20px]">
								<h2 className="text-[25px]">Đơn hàng</h2>
								<div className="total_cart mt-5 p-[20px] border-solid border-[#ccc] border-[1px]">
									<div className="flex justify-between">
										<h1 className="font-bold ">Tổng tiền</h1>
										<div className="price_total">
											<span className="text-[#e32124] font-bold">89.000</span>
										</div>
									</div>
									<div className="btn_checkout">
										<Button sizeXL>Thanh toán</Button>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="flex ml-5 justify-between">
							<div className="max-w-[60%] w-[100%] py-[20px]  border-gray-400 border-b-[1px] border-solid text-center">
								<img
								 className="mx-auto"
									width={"100px"}
									height={"100px"}
									src="https://theme.hstatic.net/200000031420/1000981224/14/cart-empty.png?v=1558"
									alt=""
								/>
								<h1 className="text-[25px]">Giỏ hàng của bạn đang trống!</h1>
							</div>
							{/* total */}
							<div className="max-w-[35%] w-[100%] pt-[20px]">
								<h2 className="text-[25px]">Đơn hàng</h2>
								<div className="total_cart mt-5 p-[20px] border-solid border-[#ccc] border-[1px]">
									<div className="flex justify-between"></div>
									<div className="btn_checkout">

										<Button sizeXL>
											<NavLink to={'/'}>Tiếp tục mua hàng</NavLink>
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CartDetail;
