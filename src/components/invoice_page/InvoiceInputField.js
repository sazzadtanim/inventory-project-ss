import React from 'react';

const InvoiceInputField = ({type,name,id, placeholder}) => {
  
    return (
        <div>
            <input className='border border-solid border-gray-300' type={type} name={name} id={id}  placeholder={placeholder}/>
        </div>
     
    );
};

export default InvoiceInputField;