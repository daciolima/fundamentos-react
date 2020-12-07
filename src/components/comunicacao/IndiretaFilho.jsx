import React from "react";

export default (props) => {

    const min = 50;
    const max = 70;

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    // Alterna entre 0 e 1
    const gerarNerd = () => Math.random() > 0.5
    

	return (
		<div>
			<div>Filho</div>
			<button
				onClick={function (e) {
					props.quandoClicar("Painho", gerarIdade(), gerarNerd());
				}}>
				Fornecer Informações
			</button>
		</div>
	);
};
