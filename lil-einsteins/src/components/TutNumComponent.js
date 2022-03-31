import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";


export default function TutNumComponent(props){

    const [number, setNumber] = useState(props.inumber);
    const [showNumber, setShowNumber] =  useState ({show:true});
    const [tempClassName, setTempClassname] = useState (props.itempClassName);
    const [idCounter, setIdCounter] = useState (props.iidCounter);
    
    useEffect(() => {
        setTempClassname(props.itempClassName);
        setIdCounter(props.iidCounter);
        setNumber(props.inumber)
    },[props.itempClassName,props.iidCounter,props.inumber,tempClassName,number,idCounter]);

    //setNumber(tempNumber)
    return(
        <CSSTransition

        in={showNumber}
        timeout={400}
        
        classNames = {tempClassName}
        id = {tempClassName}
        //transitionDelay = {delayTime}
        unmountOnExit /*when the element disappears, it’s actually going to leave the DOM*/
        appear
        enter = {true}
        >
           <li>
                <Container
                    style={{
                        className: {tempClassName},
                        width: 50,
                        height: 50,
                        backgroundColor: "powderblue",
                        border: '1px solid'
                    }}
                >
                {number}
                </Container>           
            </li> 
        </CSSTransition> 
    );


}