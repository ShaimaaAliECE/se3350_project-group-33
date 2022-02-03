import React from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DraggableNumber from "./DraggableNumber";

import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export default function NumberContainer() {
	const numberHolders = [];

	for (var i = 0; i < 3; i++) {
		numberHolders.push(<DraggableNumber id={i}></DraggableNumber>);
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
