import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend
        axios.get('http://localhost:8088/product/get')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    const handleRemove = (productId) => {
        // Handle remove functionality
        axios.delete(`http://localhost:8088/product/delete/${productId}`)
            .then(response => {
                console.log("Product removed:", response.data);
                // Update the products state to reflect the removal
                setProducts(products.filter(product => product.productId !== productId));
                // Show success toast
                toast.success("Product removed successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                console.error("There was an error removing the product!", error);
                // Show error toast
                toast.error("Failed to remove product.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#f8f9fa' }}>
            <ToastContainer />
            <table style={{ width: '90%', maxWidth: '1200px', margin: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Product Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Description</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Location</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mobile Number</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Image</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{product.productTitle}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{product.productDesc}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{product.location}</td>
                            <td style={{ padding: '10px', color: 'green', fontWeight: 'bold' }}>{product.price}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{product.mobileNumber}</td>
                            <td style={{ padding: '10px', textAlign: 'center' }}>
                                <img src={`data:image/jpeg;base64,${product.productImage}`} alt={product.productTitle} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </td>
                            <td style={{ padding: '10px', textAlign: 'center' }}>
                                <button onClick={() => handleRemove(product.productId)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserPage;
