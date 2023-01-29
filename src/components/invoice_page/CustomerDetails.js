import React from 'react';
import InvoiceInputField from './InvoiceInputField';
import InvoiceTextArea from './InvoiceTextArea';

const CustomerDetails = () => {
    return (
        <div>
            <label htmlFor="clientsName">Clients Name: </label>
            <InvoiceInputField type='text' name='clientsName' id='clientsName' placeholder='Enter clients name'/>

            <label htmlFor="clientsAddress">Clients Address: </label>
            <InvoiceTextArea type='text' name='clientsAddress' id='clientsAddress' placeholder='Enter clients address' />

            <label htmlFor="clientsEmail">Clients Email: </label>
            <InvoiceInputField type='email' name='clientsEmail' id='clientsEmail' placeholder='Enter clients email'/>

            <label htmlFor="clientsPhone">Clients Phone: </label>
            <InvoiceInputField type='text' name='clientsPhone' id='clientsPhone' placeholder='Enter clients phone number'/>      
           
        </div>
    );
};

export default CustomerDetails;