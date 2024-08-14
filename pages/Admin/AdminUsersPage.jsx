import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8088/users/all');
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    const pageStyle = {
        fontFamily: '"Arial", sans-serif',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        color: '#333'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '0 auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
    };

    const tableHeaderStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        textAlign: 'left'
    };

    const tableRowStyle = {
        borderBottom: '1px solid #ddd'
    };

    const tableDataStyle = {
        padding: '10px'
    };

    const noUsersStyle = {
        textAlign: 'center',
        color: '#666',
        fontSize: '1.2em'
    };

    if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>User Accounts</h1>
            {users.length > 0 ? (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>User ID</th>
                            <th style={tableHeaderStyle}>Username</th>
                            <th style={tableHeaderStyle}>Email</th>
                            <th style={tableHeaderStyle}>Phone Number</th>
                            <th style={tableHeaderStyle}>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.userId} style={tableRowStyle}>
                                <td style={tableDataStyle}>{user.userId}</td>
                                <td style={tableDataStyle}>{user.userName}</td>
                                <td style={tableDataStyle}>{user.email}</td>
                                <td style={tableDataStyle}>{user.phoneNumber}</td>
                                <td style={tableDataStyle}>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={noUsersStyle}>No users found</p>
            )}
        </div>
    );
};

export default AdminUsers;
