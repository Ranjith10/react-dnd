import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './Item.css'

const Item = ({index, item}) => {
    return (
        <Draggable 
            draggableId = {item}
            index = {index}        
        >   
            {
                (provided) => {
                    return (
                        <div 
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref = {provided.innerRef}
                            className = 'item-container'
                        >
                            {item}
                        </div>
                    )
                }
            }
        </Draggable>
        
    )
}

export default Item
