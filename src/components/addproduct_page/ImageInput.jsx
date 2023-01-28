import React from 'react'

function ImageInput() {
	return (
		<div className='product-img'>
			<label
				htmlFor='product-img'
				className='form-label inline-block text-gray-700'
			>
				Product Image
			</label>
			<input
				name='productImage'
				type='file'
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
				id='product-img'
			/>
		</div>
	)
}

export default ImageInput
