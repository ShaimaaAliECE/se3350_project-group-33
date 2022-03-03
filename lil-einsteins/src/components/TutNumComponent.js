import React, {useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";


export default function TutNumComponent(){
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [numberContainer, setNumberContainer] =  useState ({show:true});
    const renderline =  (user, key) => (<li key={key}><b>{key}</b>:{user}</li>); 
    
    //setNumber(tempNumber)
    return(
 
            
                <Container
                    style={{
                        className: "test",
                        width: 50,
                        height: 50,
                        backgroundColor: "powderblue",
                        border: '1px solid'
                    }}
                >
                {number}
                </Container>           
            
        
    );

}