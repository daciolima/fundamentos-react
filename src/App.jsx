import React from "react";

import "./App.css";

import Primeiro from "./components/base/Primeiro.component";
import ComParametro from "./components/base/ComParametro.component";
import Fragmento from "./components/base/Fragmento.component";
import Aleatorio from "./components/base/Aleatorio.component";
import Card from "./components/layout/Card";
import Familia from "./components/base/Familia";
import FamiliaMembro from "./components/base/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"

export default () => {
	return (
		<div className="App">
			<h1>Fundamentos do React</h1>
			<div className="Cards">
				<Card titulo="#11 - Componente Controlado" color="#777473">
					<Input> </Input>
				</Card>
				<Card titulo="#10 - Comunicação Indireta" color="#f3572f">
					<IndiretaPai></IndiretaPai>
				</Card>
				<Card titulo="#9 - Comunicação Direta" color="#f18b4f">
					<DiretaPai></DiretaPai>
				</Card>
				<Card titulo="#8 - Renderização Condicional" color="#c9c14f">
					<ParOuImpar numero={7} />
					<UsuarioInfo usuario={{nome: 'Dacio'}} />
					<UsuarioInfo usuario={{email: 'dacio@email.com'}} />
				</Card>
                <Card titulo="#7 - Repetição produto" color="#5ee0c4">
					<TabelaProduto />
				</Card>
				<Card titulo="#6 - Repetição alunos" color="#FF4C65">
					<ListaAlunos />
				</Card>
				<Card
					titulo="#5 - Componente Familia com Filhos"
					color="#00C8F8"
				>
					<Familia sobrenome="Lima">
						<FamiliaMembro nome="Dácio" />
						<FamiliaMembro nome="Samuel" />
						<FamiliaMembro nome="Jadiael" />
						<FamiliaMembro nome="Júnior" />
					</Familia>
				</Card>
				<Card titulo="#4 - Desafio Números Aleatórios" color="#D85C5C">
					<Aleatorio min={1} max={25} />
				</Card>
				<Card titulo="#3 - Fragment" color="#246732">
					<Fragmento />
				</Card>
				<Card titulo="#2 - Com Parâmetro" color="#886A2F">
					<ComParametro titulo="Nota" nome="Pedro" nota={9.5} />
				</Card>
				<Card titulo="#1 - Primeiro" color="#4D215A">
					<Primeiro></Primeiro>
				</Card>
			</div>
		</div>
	);
};
