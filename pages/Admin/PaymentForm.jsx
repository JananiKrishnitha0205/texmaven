import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, MenuItem, Button, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

const PaymentForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart, subtotal } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [formData, setFormData] = useState({
        email: '',
        cardType: '',
        nameOnCard: '',
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: '',
        bankName: '',
        accountNumber: '',
        ifscCode: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Update formData based on payment method
        if (paymentMethod === 'Credit Card') {
            setFormData(prevData => ({
                ...prevData,
                cardType: '',
                nameOnCard: '',
                cardNumber: '',
                cvv: '',
                expiryMonth: '',
                expiryYear: '',
                bankName: '',
                accountNumber: '',
                ifscCode: ''
            }));
        } else if (paymentMethod === 'Bank Transfer') {
            setFormData(prevData => ({
                ...prevData,
                cardType: '',
                nameOnCard: '',
                cardNumber: '',
                cvv: '',
                expiryMonth: '',
                expiryYear: '',
                bankName: '',
                accountNumber: '',
                ifscCode: ''
            }));
        }
    }, [paymentMethod]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Calculate the amount
            const amount = subtotal; // Remove discount from calculation

            // Construct payment request payload
            const paymentData = {
                email: formData.email,
                paymentMethod,
                cardType: paymentMethod === 'Credit Card' ? formData.cardType : '',
                nameOnCard: paymentMethod === 'Credit Card' ? formData.nameOnCard : '',
                cardNumber: paymentMethod === 'Credit Card' ? formData.cardNumber : '',
                cvv: paymentMethod === 'Credit Card' ? formData.cvv : '',
                expiryMonth: paymentMethod === 'Credit Card' ? formData.expiryMonth : '',
                expiryYear: paymentMethod === 'Credit Card' ? formData.expiryYear : '',
                bankName: paymentMethod === 'Bank Transfer' ? formData.bankName : '',
                accountNumber: paymentMethod === 'Bank Transfer' ? formData.accountNumber : '',
                ifscCode: paymentMethod === 'Bank Transfer' ? formData.ifscCode : '',
                cart,
                subtotal,
                amount
            };

            // Log the payment data before sending the request
            console.log(paymentData);

            // Send payment request to the backend
            const response = await axios.post('http://localhost:8088/api/payments', paymentData);

            // Handle successful payment submission
            alert('Payment Submitted Successfully!');
            navigate('/confirmation'); // Navigate to a confirmation page
        } catch (err) {
            console.error('Error submitting payment:', err);
            setError('An error occurred while submitting the payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Container maxWidth="md" style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h4" gutterBottom>Payment Details</Typography>
                    </motion.div>

                    <Divider sx={{ margin: '20px 0' }} />

                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <Typography variant="h6" gutterBottom>Email Address</Typography>
                        <TextField 
                            fullWidth 
                            variant="outlined" 
                            label="Email" 
                            name="email"
                            value={formData.email} 
                            onChange={handleInputChange} 
                            sx={{ marginBottom: '20px' }}
                            required
                            type="email"
                        />

                        <Typography variant="h6" gutterBottom>Payment Method</Typography>
                        <TextField 
                            select 
                            fullWidth 
                            variant="outlined" 
                            value={paymentMethod} 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                            sx={{ marginBottom: '20px' }}
                        >
                            <MenuItem value="Credit Card">Credit Card</MenuItem>
                            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                        </TextField>

                        {paymentMethod === 'Credit Card' && (
                            <>
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="Card Type" 
                                    name="cardType"
                                    value={formData.cardType} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="Name on Card" 
                                    name="nameOnCard"
                                    value={formData.nameOnCard} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="Card Number" 
                                    name="cardNumber"
                                    value={formData.cardNumber} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="CVV" 
                                    name="cvv"
                                    value={formData.cvv} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <TextField 
                                        fullWidth 
                                        variant="outlined" 
                                        label="Expiry Month" 
                                        name="expiryMonth"
                                        value={formData.expiryMonth} 
                                        onChange={handleInputChange} 
                                        sx={{ marginBottom: '20px' }}
                                        required
                                    />
                                    <TextField 
                                        fullWidth 
                                        variant="outlined" 
                                        label="Expiry Year" 
                                        name="expiryYear"
                                        value={formData.expiryYear} 
                                        onChange={handleInputChange} 
                                        sx={{ marginBottom: '20px' }}
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {paymentMethod === 'Bank Transfer' && (
                            <>
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="Bank Name" 
                                    name="bankName"
                                    value={formData.bankName} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="Account Number" 
                                    name="accountNumber"
                                    value={formData.accountNumber} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                                <TextField 
                                    fullWidth 
                                    variant="outlined" 
                                    label="IFSC Code" 
                                    name="ifscCode"
                                    value={formData.ifscCode} 
                                    onChange={handleInputChange} 
                                    sx={{ marginBottom: '20px' }}
                                    required
                                />
                            </>
                        )}

                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth 
                            sx={{ padding: '14px', fontSize: '16px' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Submit Payment'}
                        </Button>
                        {error && <Typography color="error" sx={{ marginTop: '20px' }}>{error}</Typography>}
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PaymentForm;
