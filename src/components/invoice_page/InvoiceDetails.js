import React from 'react';
import CurrentDate from '../current_date_time/CurrentDate';
import CurrentTime from '../current_date_time/CurrentTime';
import InvoiceInputField from './InvoiceInputField';

const InvoiceDetails = () => {
    
    return (
        <div>
            <label htmlFor="invoiceNumber">Invoice Number:</label>
            <InvoiceInputField type='text' name='invoiceNumber' id='invoiceNumber' placeholder='Enter invoice Number'/>

            <label htmlFor="">Invoice Date:</label>
            <CurrentDate/>

            <label htmlFor="">Invoice Time:</label>
            <CurrentTime />
            
        </div>
    );
};

export default InvoiceDetails;