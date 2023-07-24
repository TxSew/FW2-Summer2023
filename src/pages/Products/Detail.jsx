import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductApi from "../../api/components/ProductApi";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/Counter/CounterReducer";

import { Link } from "react-router-dom";
import { addToCart } from "../../redux/Card/CardReducer";

function DetailProduct() {
	const count = useSelector((state) => state.counter.value);

	const dispatch = useDispatch();
	const [detail, setDetail] = useState({});
	const { slug } = useParams();
	useEffect(() => {
		console.log(slug);
		ProductApi.get(slug).then((detail) => {
			console.log(detail);
			setDetail(detail);
		});
	}, [slug]);
	function handleAddToCart(product) {
		dispatch(addToCart(product));
	}
	return (
		<div className="wapper_detail">
			<div className="nav_detail bg-[#eee]">
				<div className="container">
					<ul className="flex gap-[7px] text-[16px] py-[15px]">
						<li>
							<Link>Trang Chủ</Link>
						</li>
						{">"}
						<li>
							<Link>ALL ITEMS</Link>
						</li>
						{">"}
						<li className="uppercase">
							<Link>{detail.name}</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="product_detail container">
				{/* Product detail */}
				<div className="box_deatil flex mt-4 gap-[30px]">
					<div className="items_detail-img">
						<img style={{ width: "470px", height: "470px" }} src={detail.imageUrl} alt="" />
					</div>
					<div className="items_detail-content">
						<h2 className="text-[35px] uppercase">{detail.name}</h2>
						<div className="local-detail flex gap-[5px]">
							<p>
								Thương hiệu : <a href="">NEEDS OF WINDOM</a>
							</p>
							|
							<p>
								Tình trạng : <a href="">Còn hàng</a>
							</p>
						</div>
						<div className="price_detail">
							<p className="text-[30px] py-6 text-[#363636] font-bold">{detail.price}đ</p>
						</div>
						<div className="descriptin_detail text-[#333]">
							NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made in Vietnam
						</div>
						<div className="size_detail mt-5 ">
							<label htmlFor="">Kích thước</label>
							<div className="size_detail-btn flex gap-4 pt-2">
								<button className="px-3 py-2  border-[1px] border-[#ccc] border-solid ">M</button>
								<button className="px-3 py-2 border-[1px] border-[#ccc] border-solid ">L</button>
								<button className="px-3 py-2 border-[1px] border-[#ccc] border-solid   ">S</button>
							</div>
						</div>
						<div className="quality_detail mt-3">
							<label htmlFor="">Số lượng</label>
							<div className="formBtn_detail flex mt-2">
								<input
									className="py-2 px-3 text-center border-[1px] border-[#ccc] border-solid  inline-block"
									type="text"
									value={count}
								/>
								<div className="btn_quality flex flex-col  border-[1px] border-[#ccc] border-solid ">
									<button className="nextBtn px-2" onClick={() => dispatch(increment())}>
										+
									</button>
									<button className="preBtn px-2" onClick={() => dispatch(decrement())}>
										-
									</button>
								</div>
								<button
									className="order px-7 ml-3 bg-red-600  rounded-sm text-white"
									onClick={() => handleAddToCart(detail)}
								>
									THÊM GIỎ HÀNG
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailProduct;
