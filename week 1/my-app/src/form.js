import React, { useState } from 'react';

function Form() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [itemList, setItemList] = useState([]);

    const handleAddItem = () => {
        if (itemName && price && description) {
            const newItem = {
                itemName,
                price,
                description
            };
            setItemList([...itemList, newItem]);
            setItemName('');
            setPrice('');
            setDescription('');
        }
    };

    const handleRemoveItem = (index) => {
        const updatedList = [...itemList];
        updatedList.splice(index, 1);
        setItemList(updatedList);
    };

    return (
        <div>
            <h2>Add Item</h2>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddItem}>Add</button>

            <h2>Item List</h2>
            {itemList.map((item, index) => (
                <div key={index}>
                    <h3>{item.itemName}</h3>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Form;