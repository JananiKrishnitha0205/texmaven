import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminPayments = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('/api/admin/payments')
            .then(response => response.json())
            .then(data => setPayments(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <Container maxWidth="lg" style={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
            <Typography variant="h4" gutterBottom>All Payments</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>Payment Method</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Card Type</TableCell>
                            <TableCell>Name on Card</TableCell>
                            <TableCell>Card Number</TableCell>
                            <TableCell>CVV</TableCell>
                            <TableCell>Expiry Month</TableCell>
                            <TableCell>Expiry Year</TableCell>
                            <TableCell>Bank Name</TableCell>
                            <TableCell>Account Number</TableCell>
                            <TableCell>IFSC Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map(payment => (
                            <TableRow key={payment.id}>
                                <TableCell>{payment.email}</TableCell>
                                <TableCell>{payment.paymentMethod}</TableCell>
                                <TableCell>₹{payment.amount}</TableCell>
                                <TableCell>{payment.cardType}</TableCell>
                                <TableCell>{payment.nameOnCard}</TableCell>
                                <TableCell>{payment.cardNumber}</TableCell>
                                <TableCell>{payment.cvv}</TableCell>
                                <TableCell>{payment.expiryMonth}</TableCell>
                                <TableCell>{payment.expiryYear}</TableCell>
                                <TableCell>{payment.bankName}</TableCell>
                                <TableCell>{payment.accountNumber}</TableCell>
                                <TableCell>{payment.ifscCode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AdminPayments;
