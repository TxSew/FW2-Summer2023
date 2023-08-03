import React from "react";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "../../../../components/Icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {FiUserX} from 'react-icons/fi'

function Auth() {
	const thum = useSelector((state) => state.cart.cartItem);
	const bien = thum.reduce((total, item) => (total += item.cartQuantity), 0);
	const [auth, setAuth] = useState(false);
	const [isChecked, setIschecked] = useState("");
	useEffect(() => {
		const isChecked = JSON.parse(localStorage.getItem("isChecked"));
		if (isChecked) {
			setIschecked(isChecked.lastName);
		}
	}, []);

	return (
		<div className="auth  flex items-center ml-[100px] gap-[20px]">
			{!isChecked ? (
				<>
					<div className="search w-[20px]">
						<Link>
							<Search height="20px" width={"20px"} />
						</Link>
					</div>
					<div className="user w-[20px]">
						<Link to="/account/login">
							<User with="20px" height="20px" />
						</Link>
					</div>
					<div className="heart w-[20px]">
						<Link>
							<Heart with="20px" height="20px" />
						</Link>
					</div>
				</>
			) : (
				<>
					<div className="user flex gap-2">
							<FiUserX className="w-[20px] h-[20px] cursor-pointer" onClick={()=> {
								localStorage.clear()
								window.location.reload()
							}}/>
					<span>{isChecked}</span>
					</div>
				</>
			)}
			<div className="cart w-[20px]">
				<Link className="relative" to={"/cart"}>
					<ShoppingCart with="20px" height="20px" />
					<span className="absolute top-[-12px] right-[-10px]">{bien || ""}</span>
				</Link>
			</div>
		</div>
	);
}

export default Auth;
