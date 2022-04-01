import React from "react";
import "./Popup.css";

function Popup(props){ 
    
    return(props.trigger) ? (
    <div className="popup">
        <div className="inner-popup">       
        <button type = "button" className="close-button" onclick= {() => props.setTrigger(false)}> close </button>
        {props.children}
        </div>
    </div>
    ) : "";

}

export default Popup;
