import React from 'react'

function ProductInputField({
	name = 'need to change',
	label = 'need to change',
	type = 'text',
	placeholder = '',
}) {
	return (
		<div className='product-title'>
			<label
				htmlFor={name}
				className='form-label inline-block text-gray-700 capitalize'
			>
				{label}
			</label>
			<input
				placeholder={placeholder}
				name={name}
				type={type}
				className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
				id={name}
			/>
		</div>
	)
}

export default ProductInputField
