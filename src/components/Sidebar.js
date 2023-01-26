import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

                            <li className="rounded-sm">
                                <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li className="rounded-sm">
                                <Link to="/all-products" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>All Products</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/orders" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Orders</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/money-collection" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Money Collection</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/cost" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Cost</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/capital" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Capital</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/invoice" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Invoice</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/acount-overview" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Account Overview</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/investment" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Investment</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/vendors" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Vendors</span>
                                </Link>
                            </li>




                        </ul>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Sidebar;