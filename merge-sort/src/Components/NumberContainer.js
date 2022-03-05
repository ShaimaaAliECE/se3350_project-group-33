import React from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DraggableNumber from "./DraggableNumber";

import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export default function NumberContainer() {
	const numberHolders = [];

	for (let index = 0; index < 7; index++) {
		numberHolders.push(
			<li>
				<DraggableNumber id={index}></DraggableNumber>
			</li>
		);
	}

	return (
		<div
			style={{
				position: "center",
				left: "25%",
				top: "35%"
			}}
		>
			<DragDropContext>
				<Droppable droppableId="numberList">
					{(provided) => (
						<ul
							className="numbersList"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{numberHolders}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}
