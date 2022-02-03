import React, {useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {Draggable} from "react-beautiful-dnd";

export default function DraggableNumber(props) {
	const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);

	return (
		<div>
			{" "}
			<Draggable key={props.id} draggableId={props.id} index={props.id}>
				{(provided) => (
					<li
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<div>
							<Container
								style={{
									width: 100,
									height: 100,
									backgroundColor: "powderblue"
								}}
							>
								{number}
							</Container>
						</div>
					</li>
				)}
			</Draggable>
		</div>
	);
}
