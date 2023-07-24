import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Component = styled.ul`
	& > li {
		list-style: none;
	    list-style-type	: none;
		font-weight: 500;
	}
`;

function Menu() {
	return (
		<div className="menu flex ml-[60px]">
			<Component className="flex items-center gap-[40px]">
				<li>
					<Link to={"/"}>TRANG CHỦ</Link>
				</li>
				<li>
					<Link to={"/todo"} className="text-[#ff0000]  font-bold ">
						Mua 1 tặng 1
					</Link>
				</li>
				<li>
					<Link to={"/"}>ORIGINAL</Link>
				</li>
				<li>
					<Link to={"/"}>SIGNATURE</Link>
				</li>
				<li>
					<Link to={"/"}>FABRIC</Link>
				</li>
				<li>
					<Link to={"/"}>SHOP</Link>
				</li>
				<li>
					<Link to={"/"}>GIỚI THIỆU</Link>
				</li>
			</Component>
		</div>
	);
}

export default Menu;
