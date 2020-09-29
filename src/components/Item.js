import React from 'react'

import './Item.css'

const Item = ({key, item}) => {
    return (
        <div className = 'item-container'>
            {item.todo}
        </div>
    )
}

export default Item
