import React from "react";

function Popup(){ 
    return(props.trigger) ? (
    <div className="popup">
        <div className="inner-popup">  
        <Popup>
        <h1>Oops!</h1>
                <p> You have made 3 mistakes!</p> 
                <p>Would you like to return to the previous level?</p>
                <button type = "button" className="return-button" onclick="close"> return </button>
                <button type = "button" className="close-button"> close </button>
                {props.children}
        </Popup>
        </div>
    </div>
    ) : "";

}

export default Popup;
