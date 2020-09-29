import React from 'react'

// import Container from './components/Components'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

import { DragDropContext } from 'react-beautiful-dnd'
import {Data} from './Data.js'
import List from './components/List'

const App = () => {

    const dragEnd = () => {
        //TODO handle reorder of list 
    }

    return (
        <div className='App'>
            {/* <DndProvider backend={HTML5Backend}>
                <Container />
            </DndProvider> */}
            <DragDropContext onDragEnd = {dragEnd}>
                <List data = {Data}/>
            </DragDropContext>
        </div>
    )
}

export default App
