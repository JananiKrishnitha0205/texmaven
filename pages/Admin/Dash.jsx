// Dash.js
import React from 'react';
import SideNav from './SideNav'; // Ensure the correct path
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, Briefcase, FileText, CheckSquare } from 'lucide-react';

const Dash = () => {
    return (
        <div className="flex">
            <SideNav />
            <div className="flex flex-row flex-wrap p-4 gap-4 ml-[200px]">
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10000</div>
                        <CardDescription>
                            All registered users on the platform.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated daily
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">9999</div>
                        <CardDescription>
                            Users who logged in within the last 24 hours.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated hourly
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Orders
                        </CardTitle>
                        <ShoppingBag className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10,000</div>
                        <CardDescription>
                            Total number of orders placed on the platform.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated daily
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Revenue
                        </CardTitle>
                        <DollarSign className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,000,000</div>
                        <CardDescription>
                            Total revenue generated so far.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated monthly
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Orders Delivered
                        </CardTitle>
                        <Briefcase className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5000</div>
                        <CardDescription>
                            Total number of orders delivered on the platform.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated daily
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Products in Add To Cart
                        </CardTitle>
                        <Briefcase className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-xl font-bold">7500</div>
                        <CardDescription>
                            Total number of products added to cart.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated hourly
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Products
                        </CardTitle>
                        <FileText className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">50000</div>
                        <CardDescription>
                            Total number of products in the platform.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated daily
                    </CardFooter>
                </Card>
                <Card className='w-1/4 border'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Way to Deliver
                        </CardTitle>
                        <CheckSquare className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2000</div>
                        <CardDescription>
                            Products waiting to be delivered.
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500">
                        Updated monthly
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Dash;
