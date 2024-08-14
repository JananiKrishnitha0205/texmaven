import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart = [], removeFromCart, clearCart } = useCart();
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0); 
    const [quantities, setQuantities] = useState(
        cart.reduce((acc, product) => {
            acc[product.name] = 1; 
            return acc;
        }, {})
    );
    const [paymentMethod, setPaymentMethod] = useState('');
    const [address, setAddress] = useState({ name: '', street: '', city: '', state: '', zip: '', country: 'United States', phone: '' });

    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const navigate = useNavigate(); 

    const calculateTotal = () => {
        const subtotal = cart.reduce((total, product) => {
            const quantity = quantities[product.name] || 1;
            const price = typeof product.price === 'string' 
                ? parseInt(product.price.replace(/[^0-9]/g, '')) 
                : product.price;
            return total + price * quantity;
        }, 0);
        return subtotal - discount; 
    };

    const handleQuantityChange = (index, event) => {
        const quantity = parseInt(event.target.value);
        if (quantity > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [cart[index].name]: quantity
            }));
        }
    };

    const handleApplyPromoCode = () => {
        if (promoCode === '5555') {
            setDiscount(100); 
        } else {
            setDiscount(0); 
        }
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevAddress => ({
            ...prevAddress,
            [name]: value
        }));
    };

    const originalTotal = cart.reduce((total, product) => {
        const quantity = quantities[product.name] || 1;
        const price = typeof product.price === 'string' 
            ? parseInt(product.price.replace(/[^0-9]/g, '')) 
            : product.price;
        return total + price * quantity;
    }, 0);

    const handleProceedToCheckout = () => {
        setShowModal(true); // Show the modal

        // Optionally, hide the modal after 3 seconds and navigate to another page
        setTimeout(() => {
            setShowModal(false);
            navigate('/checkout'); // Navigate to the checkout page
        }, 3000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', gap: '20px', flexDirection: 'row' }}>
                {/* Shopping Cart Section */}
                <div style={{ flex: '1 1 60%', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#343a40', marginBottom: '20px', textAlign: 'center' }}>Shopping Cart</h1>
                    {cart.length === 0 ? (
                        <p style={{ fontSize: '16px', color: '#6c757d', textAlign: 'center' }}>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cart.map((product, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #e9ecef', padding: '10px 0', transition: 'background-color 0.2s ease' }}>
                                    <img 
                                        src={`data:image/jpeg;base64,${product.productImage}`} 
                                        alt={product.name} 
                                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }} 
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 5px', color: '#343a40' }}>{product.name}</h2>
                                        <p style={{ fontSize: '16px', margin: '0', color: '#28a745' }}>₹{(typeof product.price === 'string' 
                                                ? parseInt(product.price.replace(/[^0-9]/g, '')) 
                                                : product.price) * (quantities[product.name] || 1)}</p>
                                        <p style={{ fontSize: '14px', margin: '5px 0', color: '#6c757d' }}>Quantity:</p>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            value={quantities[product.name] || 1} 
                                            onChange={(event) => handleQuantityChange(index, event)} 
                                            style={{ width: '50px', padding: '5px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', color: '#495057' }} 
                                        />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <button 
                                            onClick={() => removeFromCart(product)} 
                                            style={{ backgroundColor: '#dc3545', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', transition: 'background-color 0.3s ease' }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button 
                                onClick={clearCart} 
                                style={{ marginTop: '15px', backgroundColor: '#dc3545', border: 'none', color: '#fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', transition: 'background-color 0.3s ease', display: 'block', width: 'fit-content', marginLeft: 'auto' }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                            >
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Order Summary Section */}
                <div style={{ flex: '1 1 40%', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#343a40', textAlign: 'center' }}>Cart Summary</h2>
                    <div style={{ marginBottom: '10px' }}>
                        <p style={{ fontSize: '16px', margin: '0 0 5px', color: '#6c757d' }}>Original Total:</p>
                        <p style={{ fontSize: '20px', fontWeight: '700', margin: '0', color: '#343a40' }}>₹{originalTotal}</p>
                    </div>
                    {discount > 0 && (
                        <div style={{ marginBottom: '10px' }}>
                            <p style={{ fontSize: '16px', margin: '0 0 5px', color: '#6c757d' }}>Discount:</p>
                            <p style={{ fontSize: '20px', fontWeight: '700', margin: '0', color: '#dc3545' }}>₹{discount}</p>
                        </div>
                    )}
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '16px', margin: '0 0 5px', color: '#6c757d' }}>Final Total:</p>
                        <p style={{ fontSize: '24px', fontWeight: '700', margin: '0', color: '#343a40' }}>₹{calculateTotal()}</p>
                    </div>
                    
                    {/* Promo Code Section */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#343a40' }}>Apply Promo Code</h3>
                        <input 
                            type="text" 
                            value={promoCode} 
                            onChange={(e) => setPromoCode(e.target.value)} 
                            placeholder="Enter Promo Code" 
                            style={{ width: 'calc(100% - 130px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da', marginRight: '10px' }} 
                        />
                        <button 
                            onClick={handleApplyPromoCode} 
                            style={{ backgroundColor: '#28a745', border: 'none', color: '#fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', transition: 'background-color 0.3s ease' }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                        >
                            Apply
                        </button>
                    </div>

                    {/* Address Section */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#343a40' }}>Shipping Address</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <input type="text" name="name" placeholder="Name" value={address.name} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="street" placeholder="Street" value={address.street} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="zip" placeholder="Zip" value={address.zip} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="country" placeholder="Country" value={address.country} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                            <input type="text" name="phone" placeholder="Phone" value={address.phone} onChange={handleAddressChange} style={{ width: 'calc(50% - 5px)', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
                        </div>
                    </div>

                    {/* Payment Method Section */}
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#343a40' }}>Payment Method</h3>
                        <select 
                            value={paymentMethod} 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da', fontSize: '14px', color: '#495057' }}
                        >
                            <option value="">Select a payment method</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    {/* Proceed to Checkout Button */}
                    <button 
                        onClick={handleProceedToCheckout} 
                        style={{ backgroundColor: '#007bff', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', transition: 'background-color 0.3s ease', width: '100%' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>

            {/* Modal Component */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#28a745' }}>Order Successful!</h2>
                        <p style={{ fontSize: '16px', color: '#343a40' }}>Thank you for your purchase.</p>
                        <button 
                            onClick={handleCloseModal} 
                            style={{ marginTop: '15px', backgroundColor: '#007bff', border: 'none', color: '#fff', padding: '8px 14px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', transition: 'background-color 0.3s ease' }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
