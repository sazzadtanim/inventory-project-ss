import React from 'react'
import ProductInputFeild from './addproduct_page/ProductInputField'
import { InputList } from '../jsonData/List'
import InputFieldWithOption from './addproduct_page/InputFieldWithOption'

const AddProduct = () => {
	return (
		<form action='' className='ml-4 font-poppins'>
			<div className='flex justify-center'>
				<div className='mb-3 xl:w-96'>
					{/* inputs */}

					{InputList.map((item, index) =>
						item.options ? (
							<InputFieldWithOption key={index}/>
						) : (
							<ProductInputFeild
								key={index}
								name={item.name}
								label={item.label}
								type={item.type}
								placeholder={''}
							/>
						)
					).slice(0, 10)}

					{/* button */}

					<button
						className='bg-cyan-900 hover:bg-cyan-700
					 text-white font-bold py-2 px-2 w-full rounded'
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}

export default AddProduct
