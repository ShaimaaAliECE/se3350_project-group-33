import react from "react";
import React, { useState } from 'react';
import {Container} from "react-bootstrap";
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import NumberContainer from "./components/NumberContainer";

function Tutorial () {

    // state = {
    //     layer1 : {tutorialText: null},
    //     layer2 : {tutorialText: "This algorithm works by dividing the full list of values into two equally sized sublists."},
    //     layer3 : {tutorialText: null},
    //     layer4 : {tutorialText: null},
    //     layer5 : {tutorialText: null},
    // };

    const[layer,  setLayer] = useState(1);
    const[tutorialText, setTutorialText] = useState("This algorithm works by dividing the full list of values into two equally sized sublists.") 


    
        return(
            <div className="container">
            
            <button className="prevBtn" onClick={}>
                Prev
            </button>
            <button className="nextBtn" onClick={}>
                Next
            </button>
    
            </div>
        );
    
}

export default Tutorial; 