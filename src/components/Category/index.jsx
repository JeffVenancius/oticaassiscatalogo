import Card from "../Card";
import "./Category.css";
import "bootstrap/dist/css/bootstrap.css";
// import Carousel from "react-bootstrap/Carousel";
// import Slider from '../Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import React, { useLayoutEffect, useState } from "react";

function Version(props) {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (size[0] < 620) {
    return (
      <Swiper
        slidesPerView={1}
				spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
				style={{height:"100%"
}}
      >
        {props.cards.map((e) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
						className="card--slide"
							key={e.description + e.modelo + "--slider"}
          >
            <Card
							propsStyle={{...props.cardStyle}}
              frameColor={props.frameColor}
              description={e.description}
              modelo={e.modelo}
              preco={e.preco}
              img={e.img}
              btnStyle={props.btnStyle}
              btnMensagemPrefixo={props.btnMensagemPrefixo}
							id={e.id}
							key={e.description + e.modelo}
							iconeSize={props.iconeSize}
							delay={props.delay}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <div style={{ display: "flex", marginBottom: "64px"}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "auto",
					...props.categoryStyle,
					columnGap: "5vw",
						rowGap: "64px",
					...props.gridStyle
        }}
      >
        {props.cards.map((e) => (
          <Card
            propsStyle={{ ...props.cardStyle }}
            logo={e.logo}
            frameColor={props.frameColor}
            description={e.description}
            modelo={e.modelo}
            preco={e.preco}
						id={e.id}
						img={e.img}
            btnStyle={props.btnStyle}
            btnMensagemPrefixo={props.btnMensagemPrefixo}
						key={e.description + e.modelo}
						iconeSize={props.iconeSize}
						delay={props.delay}
          />
        ))}
      </div>
    </div>
  );
}

function Category(props) {
	if (!props.cards) return <></>
  return (
    <div
      id={props.titulo.replaceAll(" ", "_").replaceAll("//","--").replaceAll("Ó","O",)}
      className="category"
      style={{ backgroundColor: props.bg}}
    >
      <h1 className="category--title" >{props.titulo.toUpperCase().split("//")[1]}</h1>
			<h2 className="category--subtitle" >{props.titulo.toLowerCase().split("//")[0]}</h2>
      <Version {...props} />
      {props.banner}
    </div>
  );
}

export default Category;
// <Card
// 	imagem="../temp_Luciano/1.jpg"
// 	card_estilo={props.cards_estilo}
// 	btnStyle={props.btnStyle}
// />
