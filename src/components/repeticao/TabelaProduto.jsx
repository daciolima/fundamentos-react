import React from "react";
import produtos from "../../data/produtos";
import './StyleTabelaProduto.css'

export default (props) => {
	const tds = produtos.map((produto, i) => {
		return (
			<tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
				<td>{produto.id}</td>
				<td>{produto.nome}</td>
				<td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
			</tr>
		);
	});

	return (
		<div className="tabelaProduto">
			<h2>HTML Table</h2>

			<table style={{width: '100%'}}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
					{tds}
				</tbody>
				
			</table>
		</div>
	);
};
