import React from 'react'

import {Droppable} from 'react-beautiful-dnd'
import Item from './Item'
import './List.css'

const List = ({data}) => {
    return (
        <div className = 'list-wrapper'>
            <Droppable
                droppableId = 'TodoList'            
            >
                {
                    (provided) => {
                        return (
                        <div
                            ref = {provided.innerRef}
                            {...provided.droppableProps}
                            className = 'list-container'
                        >
                            {
                                data.map((item, index) => {
                                    return <Item key = {index} index = {index} item = {item}/>
                                })
                            }
                            {
                                provided.placeholder
                            }
                        </div>
                    )}
                }
            </Droppable>
        </div>
    )
}

export default List
