import React from 'react';
import AddProduct from './AddProduct';

const Dashboard = () => {
    return (
        <div>
            <h1>This is dashboard</h1>
            {
                <AddProduct></AddProduct>
            }
        </div>
        
    );
};

export default Dashboard;