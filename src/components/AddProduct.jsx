import React from 'react'
import { inputList } from '../lib/inputList'

function AddProduct() {
	return (
		<div className='bg-green-400 w-screen h-screen font-poppins'>
			<section className='grid gap-2 grid-cols-3'>
				{inputList.map((item, index) => (
					<div className='grid max-w-sm mx-2 gap-1' key={index}>
						<label>{item.name}</label>
						<input
							type={'text'}
							placeholder={item.placeholder}
							className='rounded-md px-2'
							onChange={(e) => e.target.value}
						/>
					</div>
				))}
			</section>
		</div>
	)
}

export default AddProduct
