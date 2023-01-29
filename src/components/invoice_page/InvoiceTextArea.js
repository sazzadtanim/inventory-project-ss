import React from 'react';

const InvoiceTextArea = ({type,name,id,placeholder}) => {
    return (
        <div>
            <textarea className='border border-solid border-gray-300' type={type}  name={name} id={id} placeholder={placeholder} cols="30" rows="5"></textarea>
            
        </div>
    );
};

export default InvoiceTextArea;