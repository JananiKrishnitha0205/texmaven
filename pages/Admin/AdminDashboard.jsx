import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: #f8f9fa;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${({ show }) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.5s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Modal = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    z-index: 1001;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    animation: scaleUp 0.5s ease;

    @keyframes scaleUp {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const ModalIcon = styled.div`
    font-size: 40px;
    color: #28a745;
    margin-bottom: 10px;
`;

const ModalTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const ModalButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    gap: 16px;
    flex-grow: 1;
    justify-content: center;
`;

const ProductCard = styled.div`
    width: 250px;
    height: 360px;
    border: 1px solid #ddd;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    background: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    &:hover {
        transform: scale(1.03);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
    transition: opacity 0.3s ease;
`;

const ProductDetails = styled.div`
    padding: 8px 16px;
    text-align: center;
    flex-grow: 1;
`;

const ProductTitle = styled.div`
    font-size: 1em;
    margin-bottom: 10px;
`;

const ProductPrice = styled.div`
    color: green;
    font-weight: bold;
`;

const ProductLocation = styled.div`
    color: gray;
`;

const AddToCartButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    align-self: center;
    margin-bottom: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }
`;

const Pagination = styled.div`
    padding: 16px;
    display: flex;
    justify-content: center;
`;

const PageButton = styled.button`
    margin: 0 4px;
    padding: 8px 16px;
    background-color: ${({ active }) => (active ? '#007bff' : '#ddd')};
    color: ${({ active }) => (active ? 'white' : 'black')};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ active }) => (active ? '#0056b3' : '#ccc')};
        transform: translateY(-2px);
    }
`;

const AdminDashboard = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const itemsPerPage = 8;

    useEffect(() => {
        axios.get('http://localhost:8088/product/get') // Adjust the endpoint according to your API
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setSearchParams({ page: pageNumber });
    };

    const handleAddToCartClick = (product) => {
        addToCart(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <ModalBackground show={showModal}>
                <Modal>
                    <ModalIcon>✔️</ModalIcon>
                    <ModalTitle>Added to Cart Successfully!</ModalTitle>
                    <p>Your product has been added to the cart.</p>
                    <ModalButton onClick={handleCloseModal}>Okay</ModalButton>
                </Modal>
            </ModalBackground>

            <ProductGrid>
                {currentProducts.map((product, index) => (
                    <ProductCard key={index}>
                        <ProductImage
                            src={`data:image/jpeg;base64,${product.productImage}`}
                            alt={product.productTitle}
                        />
                        <ProductDetails>
                            <ProductTitle>{product.productTitle}</ProductTitle>
                            <ProductPrice>{`₹${product.price}`}</ProductPrice>
                            <ProductLocation>{product.location}</ProductLocation>
                        </ProductDetails>
                        <AddToCartButton onClick={() => handleAddToCartClick(product)}>
                            Add to cart
                        </AddToCartButton>
                    </ProductCard>
                ))}
            </ProductGrid>

            <Pagination>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                        key={i}
                        active={currentPage === i + 1}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </PageButton>
                ))}
            </Pagination>
        </Container>
    );
};

export default AdminDashboard;
