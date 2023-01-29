import React from 'react';

const InvoiceHeader = () => {
  
    return (
        <div className='flex'>
        <h1>Company Logo Here</h1>
        <ul className='flex'>
            <li><button>Print</button></li>
            <li><button>Download</button></li>
            <li><button>Send</button></li>
        </ul>   
        </div>
    );
};

export default InvoiceHeader;