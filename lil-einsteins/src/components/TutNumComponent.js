import React, {useState} from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {CSSTransition} from "react-transition-group";


export default function TutNumComponent(){
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);

    return(

            <div>
                <Container
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "powderblue",
                        border: '1px solid'
                    }}
                >
                    {number}
                </Container>            
            </div>
    );

}