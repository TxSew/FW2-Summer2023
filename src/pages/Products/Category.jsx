import { Link } from "react-router-dom";
import "./style.scss";
import ItemProduct from "../../components/itemsProduct/ItemProduct";
const Category = () => {
	return (
		<div className="wapper_category">
			<div className="navbar bg-[#eee]">
				<div className="container">
					<ul className="flex gap-[7px] text-[16px] py-[15px]">
						<li>
							<Link>Trang Chủ</Link>
						</li>
						{">"}
						<li>
							<Link>All items</Link>
						</li>{" "}
						{">"}
						<li>
							<Link>Product</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container">
				<div className="box_category mt-5 flex w-[100%] justify-between ">
					<div className="navbar_category w-[20%] bg-[#eee]">
						<h2 className="px-[20px] py-[10px] text-[#2d2c2c] text-[20px] border-b-[1px] border-solid border-[#ccc]">
							Danh mục nhóm
						</h2>
						<ul className="items-categories pt-[15px] pb-[30px]">
							<li>
								<Link>All ITEMS</Link>
							</li>
							<li>
								<Link>T-SHIRTS</Link>
							</li>
							<li>
								<Link>SHIRTS</Link>
							</li>
							<li>
								<Link>SWEATERS</Link>
							</li>
							<li>
								<Link>HOODIES</Link>
							</li>
						</ul>
					</div>
					<div className="product_Category w-[78%]">
						<div className="flex  justify-between items-center py-[10px] block w-[100%] px-[20px]  border-solid border-b-[1px] border-[#ccc] bg-[#eee]">
							<p className="title_product-category    text-[20px]">HOODIES</p>
							<div className="sort-product flex gap-[6px]">
								<span>Sắp xếp theo: </span>
								<select
									name=""
									id=""
									className="outline-none border-[1px] border-solid border-[#e7e7e7] px-[4px]"
								>
									<option value="banchay">Bán chạy nhất</option>
									<option value="news">Mới nhất</option>
									<option value="az">Tên : A-Z</option>
									<option value="za">Tên : Z-A</option>
								</select>
							</div>
						</div>
						{/* product Category List */}
						<div className="listProductCategory mt-5 flex flex-wrap">
								<ItemProduct name="helo" price={"390.0"} images={"hello"} />
								<ItemProduct name="helo" price={"390.0"} images={"hello"} />
								<ItemProduct name="helo" price={"390.0"} images={"hello"} />
								<ItemProduct name="helo" price={"390.0"} images={"hello"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
