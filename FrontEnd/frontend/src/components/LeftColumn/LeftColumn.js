import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./LeftColumn.css";

export default function LeftColumn() {
	const list = [
		{
			nombreCategoria: "Música",
			link: "/musica",
		},
		{
			nombreCategoria: "Lugares",
			link: "/lugares",
		},
		{
			nombreCategoria: "Humor",
			link: "/humor",
		},
		{
			nombreCategoria: "Animales",
			link: "/animales",
		},
		{
			nombreCategoria: "Deportes",
			link: "/deportes",
		},
		{
			nombreCategoria: "Juegos",
			link: "/juegos",
		},
		{
			nombreCategoria: "Cartoon",
			link: "/cartoon",
		},
	];

	const ComplexList = () => (
		<div className="categorias-container">
			<h3>Sumergirse</h3>
			<ul className="categorias">
				{list.map((item) => (
					<li className={item.nombreCategoria}>
						<a href={item.link}>
							<span>{item.nombreCategoria}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);

	const Footer = () => (
		<div sticky="bottom" fixed="bottom" className="footer col col-sm-2">
			<a href="https://github.com/nicocastillo95/Trabajo-Final---Diplomatura-JS---Neptuno">
				Contactanos
			</a>
			<a href="https://github.com/nicocastillo95/Trabajo-Final---Diplomatura-JS---Neptuno">
				Términos y condiciones
			</a>
			<span>© 2020 Copyright:</span>
			<a href="https://github.com/nicocastillo95/Trabajo-Final---Diplomatura-JS---Neptuno">
				{" "}
				Neptuno{" "}
			</a>
		</div>
	);

	return (
		<React.Fragment>
			<React.Fragment>
				<ReactBootstrap.CardColumns className="left-column-content d-flex">
					<ComplexList />
					<Footer />
				</ReactBootstrap.CardColumns>
			</React.Fragment>
		</React.Fragment>
	);
}
