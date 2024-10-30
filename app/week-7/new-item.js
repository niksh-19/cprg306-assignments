'use client';
import { useState } from 'react';

export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { id: Math.random().toString(36).substr(2, 9), name, quantity, category };
        onAddItem(item);
        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Item Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <p className="block text-gray-700 font-bold mb-2">Quantity: {quantity}</p>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-700"
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={increment}
                        disabled={quantity >= 20}
                        className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-700"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option disabled value="">-- Select a Category --</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
}
