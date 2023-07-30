import React from "react";
import styled from "styled-components";
import { Heart } from "../Icons/Icons";
import Image from "../Image";
import { Link } from "react-router-dom";
const ProductItem = styled.div`
	position: relative;
	& > .price_discount {
		position: absolute;
		top: 0;
		left: 0;
		width: 36px;
		height: 27px;
		margin-left: 15px;
		background-color: red;
		font-size: 12px;
		color: #ffff;
		font-weight: bold;
		line-height: 30px;

		&:before {
			content: "";
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			border-left: 18px solid transparent;
			border-right: 18px solid transparent;
			border-top: 10px solid #ff0000;
		}
	}
	& > .heart_item {
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
	}
`;
function ItemProduct({ name, price, params, images }) {
  return (
    <ProductItem className="items-product w-[25%] pl-[15px] pb-[15px] cursor-pointer">
      <div className="price_discount">
        <span className="text-[12px]">-45%</span>
      </div>
      <div className="heart_item w-[25px]">
        <Heart width="20px" height="20px" />
      </div>
      <div className="img-product  w-[100%] h-[306px]">
        <Link to={`/products/${params}`}>
        <img className="h-[290px] w-[100%]"   src={images} alt="ss" /> 
        </Link>
      </div>
      <div className="content-product">
        <div className="name_product text-left pt-[10px]">
          <a className="text-left uppercase text-[14px] font-bold" href="/">
            {name}
 </a>
        </div>
        <div className="price_product text-left flex">
          <div className="price_new text-[14px] text-[#e70303] font-bold">
            <span>{price}</span>
          </div>
          <div className="price_void text-[14px] ml-[15px] line-through text-[#888888]">
            <span>300.000đ</span>
          </div>
        </div>
      </div>
    </ProductItem>
  );
}

export default ItemProduct;
