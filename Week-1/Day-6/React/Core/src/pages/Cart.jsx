import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    // Sample cart items data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Premium Leather Jacket",
            price: 199.99,
            quantity: 1,
            image: "/images/jacket.jpg"
        },
        {
            id: 2,
            name: "Classic Denim Jeans",
            price: 89.99,
            quantity: 1,
            image: "/images/jacket.jpg"
        }
    ]);

    // Calculate total price
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    // Remove item
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 text-xl">Your cart is empty</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="md:col-span-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center border-b py-4 space-x-4">
                                {/* Product Image */}
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded"
                                />
                                
                                {/* Product Details */}
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    
                                    {/* Quantity Controls */}
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Item Total & Remove Button */}
                                <div className="text-right">
                                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 mt-2"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Order Summary */}
                    <div className="bg-gray-50 p-6 rounded-lg h-fit">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;