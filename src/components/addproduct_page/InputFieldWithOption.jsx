import React from 'react'

function InputFieldWithOption({
	name = 'categories',
	label = 'Categories',
	type = 'text',
	options = [{ name: 'Bag' }, { name: 'Computer' }, { name: 'Watch' }],
}) {
	return (
		<div className={name}>
			<label htmlFor={name} className='form-label inline-block text-gray-700'>
				{label}
			</label>
			<div className='relative'>
				<input
					name={name}
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
					type={type}
					id={name}
					readOnly
				/>
				<select
					className='absolute top-0 left-0 w-full h-full font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                    px-3 py-1.5'
				>
					{options.map((category) => (
						<option>{category.name}</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default InputFieldWithOption
