import React, { useState } from 'react'

// import Container from './components/Components'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

import { DragDropContext } from 'react-beautiful-dnd'
import {Data} from './Data.js'
import List from './components/List'

const App = () => {
    const [data, setData] = useState(Data)
    const dragEnd = (result) => {
        const { source, destination, draggableId} = result 

        //* return un-modified array if the destination is undefined
        if(!destination) {
            return
        }
        //* return un-modified array if the sorce and destination is same
        if( source.droppableId === destination.droppableId && destination.index === source.index) {
            return
        }
        //* Else re-order the array and return
        let reorderedData = [...data]
        //* Capture the dragged item
        let movedItem = reorderedData.find((item, index) => item.todo === draggableId)
        //* Remove the dragged item from list 
        reorderedData = reorderedData.filter(item => item.todo !== draggableId)
        //* Add the dragged item at destination index
        reorderedData.splice(destination.index, 0, movedItem)
        setData(reorderedData)
    }

    return (
        <div className='App'>
            {/* <DndProvider backend={HTML5Backend}>
                <Container />
            </DndProvider> */}
            <DragDropContext onDragEnd = {dragEnd}>
                <List data = {data}/>
            </DragDropContext>
        </div>
    )
}

export default App
