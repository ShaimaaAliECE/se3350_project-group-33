import React from "react";
import "./Popup.css";

function Popup(props){ 
    console.log("trigger");
    console.log(props.trigger);
    return(props.trigger) ? (
    <div className="popup">
        <div className="inner-popup">  
                <button className="close-button" onclick= {() => props.setTrigger(false)}> close </button>
                {props.children}
        </div>
    </div>
    ) : "";

}

export default Popup;
