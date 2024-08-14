// Orders.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Table , Button } from 'lucide-react'; // Replace with your actual component library

const OrdersContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const OrdersTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders data from API or data source
    fetch('/api/orders') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <OrdersContainer>
      <h2>Orders</h2>
      <OrdersTable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>
                <Button onClick={() => console.log(`Viewing order ${order.id}`)}>View</Button>
                <Button onClick={() => console.log(`Updating order ${order.id}`)}>Update</Button>
                <Button onClick={() => console.log(`Deleting order ${order.id}`)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </OrdersTable>
    </OrdersContainer>
  );
};

export default Orders;
