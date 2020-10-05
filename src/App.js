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
        const { source, destination} = result 

        //* return un-modified array if the destination is undefined
        if(!destination) {
            return
        }
        //* return un-modified array if the sorce and destination is same
        if( source.droppableId === destination.droppableId && destination.index === source.index) {
            return
        }
        //* Else re-order the array and return
        let reorderedData = Array.from(data)
        let [removedItem] = reorderedData.splice(source.index, 1)
        reorderedData.splice(destination.index, 0, removedItem)
        setData(reorderedData)
        console.log({reorderedData})
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
