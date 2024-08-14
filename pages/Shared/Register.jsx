import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate, Link } from 'react-router-dom';
import loginbg from '@/assets/videos/loginbg.mp4'; // Import the video file
import axios from 'axios'; // Import axios for making HTTP requests

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    if (!name || !phoneNo || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Log form data
    console.log('Form Data:', {
      userName: name,
      phoneNumber: phoneNo,
      email: email,
      password: password,
    });

    setError('');

    try {
      // Make a POST request to the backend API
      await axios.post('http://localhost:8088/users/add', {
        userName: name,
        phoneNumber: phoneNo,
        email: email,
        password: password,
      });
      navigate('/login');
    } catch (err) {
      setError('An error occurred while creating your account.');
    }
  };

  return (
    <div className='relative min-h-screen flex items-center justify-center'>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={loginbg} // Use the imported video file
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 w-full max-w-md p-4'>
        <Card className="shadow-2xl rounded-xl overflow-hidden bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <CardHeader className="p-6 text-center bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <CardTitle className="text-4xl font-semibold text-white">Create an Account</CardTitle>
            <CardDescription className="mt-1 text-base text-white">
              Enter your details below to create your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm text-white">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="phone-no" className="block text-sm text-white">Phone Number</Label>
                <Input
                  id="phone-no"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <Button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-105"
              >
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="p-6 text-center bg-opacity-30 backdrop-filter backdrop-blur-lg border-t border-white border-opacity-30">
            <div className="text-sm text-white">
              <span>Already have an account? </span>
              <Link to="/login" className="font-bold hover:underline">
                Login here.
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
