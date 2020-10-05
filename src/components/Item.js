import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './Item.css'

const Item = ({index, item}) => {
    return (
        <Draggable 
            draggableId = {item.id}
            index = {index}   
            key = {item.id}     
        >   
            {
                (provided, snapshot) => {
                    return (
                        <div 
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref = {provided.innerRef}
                            className = {snapshot.isDragging ? 'item-container dragging' : 'item-container'}
                        >
                            {item.todo}
                        </div>
                    )
                }
            }
        </Draggable>
        
    )
}

export default Item
