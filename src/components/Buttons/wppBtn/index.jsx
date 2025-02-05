import './wppBtn.css'

function WppBtn(props) {
	const queryParameters = new URLSearchParams(window.location.search)
	const phone = queryParameters.get("wpp") ? queryParameters.get("wpp") : "98652571"
	const wppIcon = <img src="./assets/assis/icone4.svg" style={{height:"70%", marginRight: "2%"}}/>
	return (
				<a href={"https://wa.me/5535" + phone + "?text=" + encodeURIComponent(props.mensagem)} target="_blank" rel="noreferrer" style={{textDecoration: "none", width:props.btnStyle.width, display:"flex", justifyContent:"center", alignItems: "center"}}>
			<button style={{...props.btnStyle, width:"100%"}} className="wppButton">{props.icone && wppIcon}{props.texto}</button>
		</a>
	)
}

export default WppBtn;
