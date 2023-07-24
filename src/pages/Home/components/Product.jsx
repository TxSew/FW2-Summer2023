import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import ItemProduct from "../../../components/itemsProduct/ItemProduct";

import { ExampleQuery } from "../../../api/graphql/schemas/Schame";
import { useQuery } from "@apollo/client";

const Category = styled.ul`
	.active {
		color: #d94444;
		font-weight: bold;
	}
	& > li {
		padding: 10px;
		color: #636363;
	}
`;
function Product() {
	const { data, loading, error } = useQuery(ExampleQuery);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<section className="product text-center pt-[30px]">
			<h2 className="text-[20px] uppercase font-[700]">Cửa Hàng</h2>
			<div className="category mt-[25px] pb-[20px]">
				<Category className="flex gap-[15px] justify-center">
					<li>
						<NavLink to="category">TEE</NavLink>
					</li>
					<li>
						<NavLink to="polo">POLO</NavLink>
					</li>
					<li>
						<NavLink to="shirt">SHIRT</NavLink>
					</li>
					<li>
						<NavLink to="cardigan">CARDIGAN</NavLink>
					</li>
					<li>
						<NavLink to="jacket">JACKET</NavLink>
					</li>
					<li>
						<NavLink to="hoodie">HOODIE</NavLink>
					</li>
					<li>
						<NavLink to="varsity">VARSITY</NavLink>
					</li>
					<li>
						<NavLink to="accessories">ACCESSORIES</NavLink>
					</li>
					<li>
						<NavLink to="short">SHORT</NavLink>
					</li>
				</Category>
			</div>
			<div className="product">
				<div className="container">
					<div className="product-box flex flex-wrap w-[100%]">
						{data.getClothes.slice(0, 6).map((items, index) => {
              console.log(items.imageUrl);
							return (
								<ItemProduct
									key={index}
									images={items.imageUrl}
									params={items.slug}
									name={items.name}
									price={items.price}
								></ItemProduct>
							);
						})}
					</div>
				</div>
			</div>
			<div className="more mt-[10px] cursor-pointer">
				<Button primary>XEM THÊM </Button>
			</div>
		</section>
	);
}

export default Product;
