import './Header.css'
import WppButton from '../Buttons/wppBtn'
import ScrollToBtn from '../Buttons/ScrollToBtn'

function Header(props) {
	const queryParameters = new URLSearchParams(window.location.search)
	const phone = queryParameters.get("wpp") ? queryParameters.get("wpp") : "98652571"
	return (
	<div className="header">
		<div className='header__nav'>
			<img src="./assets/assis/Logotipo-Ótica-Assis-1.png" alt="Ótica Assis logo"></img>
			<div className='header__nav--menu'>
				<ScrollToBtn nome="Feminino" categoria="FEMININO--OCULOS_DE_GRAU"/>
				<ScrollToBtn nome="Masculino" categoria="MASCULINO--OCULOS_DE_GRAU"/>
				<a href={"https://api.whatsapp.com/send/?phone=5535" + phone + "&type=phone_number&app_absent=0"}><button>Fale conosco</button></a>
			</div>
		</div>
		<div className="header-banner" style={{...props.headerStyle, backgroundRepeat: "no-repeat"}}>
		</div>
	</div>
  );
}

export default Header;

			// <img loading="lazy" src="./assets/capa.png" alt="" style={props.imgStyle}/>
