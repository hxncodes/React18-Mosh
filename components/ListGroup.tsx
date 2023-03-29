import React, { useState } from 'react'
import Like from './Like';

interface Props {
    items: String[];
    heading: String;
    onSelectItem: (item: String) => void
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {


    let [selectedIndex, setselectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setselectedIndex(index);
                            onSelectItem(item)
                        }}
                    >
                        {item}
                        <Like />
                    </li>
                ))}
            </ul >
        </>
    )
}

export default ListGroup