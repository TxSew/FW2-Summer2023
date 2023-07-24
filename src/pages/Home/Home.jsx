import React from "react";
import Follow from "./components/Follow";
import Product from "./components/Product";
import SimpleSlider from "./components/Slider";
function Home() {
	return (
		<main className="">
			<section className="slider">
				<SimpleSlider />
				<Product />
				<Follow />
			</section>
		</main>
	);
}

export default Home;
