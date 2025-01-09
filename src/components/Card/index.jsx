import './Card.css'
import WppBtn from '../Buttons/wppBtn';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';


function ImgCarousel(props) {
	if (typeof props.img !== "string") {
		return (
			<Swiper 
				autoplay={{delay:props.delay, disableOnInteraction: false}}
				loop={true}
				modules={[Autoplay]}
				style={{width:"100%", height:"100%", borderRadius:"50px"}}>
				{props.img.map(i => {
					return (
						<SwiperSlide key={"slideImgCard--" + props.img}>
							<div style={{ position: "relative"}}><p className="discount">-{props.discount} %</p>
							<img class="card__image__custom" key={"imgCollection--" + props.img} src={i} />
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		)
	} else {
		return <div style={{ position: "relative"}}><p className="discount">-{props.discount}%</p><img class="card__image__custom" src={props.img} /></div>
	}
}


function Card(props) {
	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let times = 1
	while (props.preco/times > 60 || times == 12) {
		times++
	}
	while (props.preco/times < 60) {
		times--
	}

	let precoFormatado = formater.format(props.preco/times)
	let price_option1 = times == 1 ? precoFormatado + " à vista" : times + "x de " + precoFormatado + " sem juros"
	let price_option2 =  times == 1 ? "" : "ou " + formater.format(props.preco) + " à vista"

  return (
		<div className="card__custom" style={{...props.propsStyle, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
			<ImgCarousel img={props.img} frameColor={props.frameColor} delay={props.delay} discount={props.discount}/>
			<div className="card--description">
	  			<div className="card__description-model">
				<h2 >{props.description}</h2>
				<h2>{props.modelo}</h2>
	  			</div>
		<div className="card__description_price_container">
				<h3><span className="compare">De: </span><span className="preco_antigo">{formater.format(props.preco_antigo)}</span></h3>
			  <h3 className="card--description--price"> <span className="compare">Por: </span>{price_option1}</h3>
   	                  <p className="card--description--price"> {price_option2}</p>
		</div>
				<WppBtn
					icone={true}
					mensagem= {props.btnMensagemPrefixo + props.modelo + "."}
					texto="Comprar"
					btnStyle={{...props.btnStyle, width:"80%"}}
					iconeSize={props.iconeSize}
				/>
			</div>
    </div>
  );
}

export default Card;


				// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
				// 	<button className="card--desciption--button">
				// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
			// </div>
//
//
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
//
//
//
					// <img loading="lazy" className="card--image" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
