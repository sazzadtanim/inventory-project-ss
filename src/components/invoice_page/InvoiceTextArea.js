import React from 'react';

const InvoiceTextArea = ({type,name,id,placeholder,value,setValue}) => {
    return (
        <div>
            <textarea className='border border-solid border-gray-300' type={type} value={value}  name={name} id={id} placeholder={placeholder} onChange={setValue} cols="30" rows="5"></textarea>
            
        </div>
    );
};

export default InvoiceTextArea;