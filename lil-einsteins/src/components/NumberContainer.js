import React from "react";
import {Container} from "react-bootstrap";
import "./Components.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export default function NumberContainer() {
    return (
        <div style={{
            position: 'center', left: '25%', top: '35%',
        }}>
        <DragDropContext>
            <Droppable droppableId="numberList">
                {(provided) => (
                <ul className="numbersList" {...provided.droppableProps} ref={provided.innerRef}>
                    <Draggable key='1' draggableId='1' index='1'>
                        {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                <Container style={{
                                    width: 100, height: 100, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>      
            
                        </li>
                        )}
                    </Draggable>
                    <Draggable key='2' draggableId='2' index='2'>
                        {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                <Container style={{
                                    width: 100, height: 100, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        )}
                    </Draggable>
                    <Draggable key='3' draggableId='3' index='3'>
                        {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                <Container style={{
                                    width: 100, height: 100, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        )}
                    </Draggable>
                    <Draggable key='4' draggableId='4' index='4'>
                        {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                <Container style={{
                                    width: 100, height: 100, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        )}
                    </Draggable>
                    <Draggable key='5' draggableId='5' index='5'>
                        {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                <Container style={{
                                    width: 100, height: 100, backgroundColor: 'powderblue'}}>
                                    {Math.floor(Math.random() * 10)+1}
                                </Container>
                            </div>
                        </li>
                        )}
                    </Draggable>
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>
        </DragDropContext>
        </div>
    );
}