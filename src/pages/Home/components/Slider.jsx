import React from "react";
import { Images } from "../../../assets";
import Image from "./../../../components/Image";

export default function SimpleSlider() {
	return (
		<section className="banner">
			<Image src={Images.banner} />
		</section>
	);
}
