import React, { useState } from "react";
import "./Input.css";

export default (props) => {
	const [valor, setValor] = useState("Inicial");

	function queroMudar(e) {
		setValor(e.target.value);
	}

	return (
		<div className="Input">
			<h2>{valor}</h2>
			<div style={{ display: "flex", flexDirection: "column" }}>
                <input value={valor} onChange={queroMudar} />
                <input value={valor} readOnly />             
                <input value={undefined} />
            </div>
		</div>
	);
};
