import Banner from '../index.jsx'
import React, { useLayoutEffect, useState } from "react";
import './Banner3.css'

function Banner3() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const img = size[0] < 750 ? "./assets/assis/banner2.png" : size[0] < 1250 ? "./assets/assis/banner2.png" : "./assets/assis/banner2.png"

	let text = (
		<div>
		<h2 className="banner__title">Coleção nova</h2>
		<h2 className='banner__subtitle'>Óculos masculinos</h2>
		</div>
	)
  return (
		<a href="https://wa.me/553598652571"><Banner className="banner__3"
							>
							</Banner></a>
  );
}

export default Banner3;
