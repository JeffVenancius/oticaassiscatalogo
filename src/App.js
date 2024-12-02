import './App.css';
import Category from './components/Category'
import Header from './components/Header'
import Banner from './components/Banner'
import Banner1 from './components/Banner/Banner1'
import Banner2 from './components/Banner/Banner2'
import Banner3 from './components/Banner/Banner3'
import Footer from './components/Footer'
import ScrolltoBtn from './components/Buttons/ScrollToBtn'
import CategoriesBanner from './components/CategoriesBanner';
import BrandsCarousel from './components/BrandsCarousel'
import DividerLine from './components/DividerLine'
import CardCarousel from './components/CardCarousel'
import Ruler from './components/ruler'
import React, { useLayoutEffect, useState, useEffect } from "react";
import cardsData from './data/cards.json'


function App() {
	const [size, setSize] = useState([0, 0]);
	const minWidth = 1170
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const paleta = {
		colorido: "#ead8ca",
		branco: "#FFFFFF",
		cinza: "#F4F4F4",
		escrita: "#444040",
		verde: "#009947"

	}
	const cardsEstilos = {
		comBordas:
		{
			border: "4px solid" + paleta.colorido,
			backgroundColor: paleta.branco,
			aspectRatio: size[0] < size[1] ? "7/9" : "7/9",
		},
		semBordas:
		{
			border: "none",
			backgroundColor: paleta.colorido,
			aspectRatio: size[0] < size[1] ? "7/9" : "6/9",
		},
		transparente:
		{
			border: "none",
			backgroundColor: "none",
		}
	}

	const estilosBotao = {
		bannerBtn: {
			backgroundColor: "white",
			color: "black",
			// marginTop: "32px",
			// width: size[0] < size[1] ? "120px":"200px",
			// width: "100%",
			// height: "40px",
			borderRadius: "50px",
			fontSize: size[0] < size[1] ? minWidth > size[0] ? size[0]/42 + "px" : "32px" : Math.min(size[0]/110, 32) + "px",
			aspectRatio: size[0] < size[1] ? "4/1" : "5/1",
			width: size[0] < size[1] ? "30%" : size[0] > (minWidth + 350) ? "10%" : "180px",
			// flexShrink: "0",
			paddingLeft: "2%",
			paddingRight: "2%",
			display: "flex",
			justifyContent: "center",
			alignContent:"center",
			alignItems: "center",
			textDecoration: "none"
		},
		produtoBtn: {
			backgroundColor: "black",
			color: "white",
			marginTop: "16px",
			// width: "280px",
			// height: "64px",
			//borderRadius: "8px",
		}
	}

	const [categoriesData, setCategoriesData] = useState([
		{
			titulo: "Feminino//Óculos de Grau",
			bgCategoria: "#FFF",
			imagemCatergoria: "Esportiva.png",
			banner: "",
			cards: [],
			cardStyle: cardsEstilos.transparente,
			btnBg: "#009947",
			btnFg: paleta.branco,
			frameColor: paleta.branco,
		},
		{
			titulo: "Feminino//Óculos de Sol",
			imagemCatergoria: "Elegante.png",
			bgCategoria: "#FFF",
			cardStyle: cardsEstilos.transparente,
			btnBg: "#009947",
			btnFg: paleta.branco,
			frameColor: paleta.branco,
			cards: [],
			banner: <Banner3/>
		},
		{
			titulo: "Masculino//Óculos de Grau",
			imagemCatergoria: "Classica.png",
			bgCategoria: "#FFF",
			banner: "",
			cardStyle: cardsEstilos.transparente,
			btnBg: "#009947",
			btnFg: paleta.branco,
			frameColor: paleta.branco,
			cards: []
		},
		{
			titulo: "Masculino//Óculos de Sol",
			imagemCatergoria: "Moderna.png",
			bgCategoria: "#FFF",
			cardStyle: cardsEstilos.transparente,
			btnBg: "#009947",
			btnFg: paleta.branco,
			frameColor: paleta.branco,
		}
	])

	useEffect(() => {
		let tempCategoriesData = categoriesData
		let idCounter = 0
		tempCategoriesData.forEach(i => {
			i.cards = cardsData[i.titulo].sort((a, b) => a.discount <= b.discount && a.price >= b.price)
		})
		setCategoriesData(tempCategoriesData)
}, [])



  return (
    <div className="App">
		<Header
				headerStyle={size[0] > 1149 ? {backgroundImage: "url(\"./assets/assis/banner 1 landing page 1000x300.png\")", backgroundSize: "contain",aspectRatio: 10/3} : {backgroundImage: "url(\"./assets/assis/banner 1 landing page assis (1000 x 600 px).png\")", backgroundSize: "contain", aspectRatio: 1150/690}}
		headerIcon= {size[0] > 1149 ? true : false}
		/>
		<Ruler
			items={[
				{"icon":"./assets/assis/icone1.svg", "iconName": "envio para todo o Brasil", "title": "ENVIO RÁPIDO", "desc": "para todo Brasil"},
				{"icon":"./assets/assis/icone2.svg", "iconName": "12x no cartão", "title": "EM ATÉ 12x SEM JUROS", "desc": "no cartão"},
				{"icon":"./assets/assis/icone3.svg", "iconName": "garantia", "title": "GARANTIA", "desc": "de todas as peças"}
			]}
		/>
		{categoriesData.map((e) => (
			<Category
				categoryStyle={ size[0] < minWidth ? {marginRight:"2%", marginLeft:"2%"} : {marginLeft:"auto", marginRight:"auto"}}
				bg={e.bgCategoria}
				iconeSize={size[0] < size[1] ? Math.min(size[0] / 16, 32) + "px" : size[0] < minWidth ? size[0] / 45 + "px" : "32px"}
				btnStyle={{...estilosBotao.produtoBtn, backgroundColor: e.btnBg, color: e.btnFg, WebkitTextFillColor: e.btnFg}}
				btnTexto="COMPRE AGORA"
				btnMensagemPrefixo="Olá! Me interessei pelo "
				titulo={e.titulo.toUpperCase()}
				cardStyle={{...e.cardStyle }}
				cards={e.cards}
				banner={e.banner}
				frameColor={e.frameColor}
				key={"categoria--" + e.titulo}
				delay={1000}
			/>
		))}
		<Footer/>
    </div>
  );
}


export default App;

// <Banner 
// 								bannerStyle={{height: "571px", backgroundPosition: "right", backgroundColor:"white"}}
// 								bannerImg="./assets/capa site - orçamento de lentes.png"
// 								contentWidth="25%"					
// 			>
// 				<h2 style={{fontSize:"20px", fontWeight: "700", marginBottom: "8px", color:"black"}}>Atendimento Personalizado</h2>
// 			<DividerLine width="62px" height="3px" color="black" />
// 			<h1 style={{fontWeight: 700, width:"268px", marginTop: "8px", color:"black"}}>COMPRE SEM SAIR DE CASA</h1>
// 			<p style={{width: "300px", paddingTop: "8px",color:"black"}}>
// Confira nossos modelos disponíveis, compre e receba no conforto da sua casa seus óculos e relógios das melhores e mais renomadas marcas do mundo.
// </p>
// 									</Banner>
// 			,
