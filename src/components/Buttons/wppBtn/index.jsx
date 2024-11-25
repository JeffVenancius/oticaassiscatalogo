import './wppBtn.css'

function WppBtn(props) {
	const wppIcon = <img src="./assets/assis/icone4.svg" style={{height:"70%", marginRight: "2%"}}/>
	return (
				<a href={"https://wa.me/553598652571?text=" + encodeURIComponent(props.mensagem)} target="_blank" rel="noreferrer" style={{textDecoration: "none", width:props.btnStyle.width, display:"flex", justifyContent:"center", alignItems: "center"}}>
			<button style={{...props.btnStyle, width:"100%"}} className="wppButton">{props.icone && wppIcon}{props.texto}</button>
		</a>
	)
}

export default WppBtn;
