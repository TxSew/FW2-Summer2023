import React from "react";
import { Images } from "../../../assets";
import Image from "../../../components/Image";
import Auth from "./components/Auth";
import Menu from "./components/Menu";

function Header() {
	return (
		<header className=" bg-white block  py-[10px]  z-10 shadow-[0px_0px_3px_0px_#ccc] ">
			<div className="container">
				<nav className="flex">
					<div className="logo w-[185px] h-[80.66px]">
						<Image src={Images.logo} />
					</div>
					{/* menu */}
					<Menu />
					{/* auth */}
					<Auth />
				</nav>
			</div>
		</header>
	);
}

export default Header;
