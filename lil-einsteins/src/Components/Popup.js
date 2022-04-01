import React from "react";
import "./Popup.css";
import {Button} from "react-bootstrap";
import {useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";

function Popup(props) {
	const navigate = useNavigate();
	const handleLevelChange = useCallback(
		() => navigate("/Level3", {replace: true}),
		[navigate]
	);

	return props.trigger ? (
		<div className="popup">
			<div className="inner-popup">
				<button
					type="button"
					className="close-button"
					onclick={() => props.setTrigger(false)}
				>
					{" "}
					close{" "}
				</button>
				{props.children}
			</div>
		</div>
	) : (
		""
	);
}

export default Popup;
