import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginbg from '@/assets/videos/loginbg.mp4';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        setError('');
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8088/users/login/${email}/${password}`);
            const user = response.data;
            localStorage.setItem("users",JSON.stringify(user));

            if (user) {
                if (user.role === 'admin') {
                    navigate('/dash'); 
                } else {
                    navigate('/home'); 
                }
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError(error.response?.data || 'Error logging in. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='relative min-h-screen flex items-center justify-center'>
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={loginbg}
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 w-full max-w-sm'>
                <Card className="shadow-2xl rounded-xl overflow-hidden bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
                    <CardHeader className="p-8 text-center bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <CardTitle className="text-4xl font-bold text-white">Login</CardTitle>
                        <CardDescription className="mt-2 text-sm text-white">
                            Please enter your credentials to access your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="email" className="block text-sm text-white">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password" className="block text-sm text-white">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                                    />
                                </div>
                                <div className="text-right">
                                    <Link to="/forgot-password" className="text-white hover:underline text-sm">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full mt-6 py-3 ${isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-500 to-indigo-500'} text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-105`}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="p-4 text-center bg-opacity-30 backdrop-filter backdrop-blur-lg border-t border-white border-opacity-30">
                        <div className="text-sm text-white">
                            <span>Don't have an account? </span>
                            <Link to="/register" className="font-bold hover:underline">
                                Create one here.
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Login;

