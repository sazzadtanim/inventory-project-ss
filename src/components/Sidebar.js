import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	const sideBarOptions = [
		{ name: 'Dashboard', url: '/dashboard' },
		{ name: 'All Products', url: '/all-products' },
		{ name: 'Orders', url: '/orders' },
		{ name: 'Money Collection', url: '/money-collection' },
		{ name: 'Cost', url: '/cost' },
		{ name: 'Capital', url: '/capital' },
		{ name: 'Invoice', url: '/invoice' },
		{ name: 'Account Overview', url: '/acount-overview' },
		{ name: 'Investment', url: '/investment' },
		{ name: 'Vendors', url: '/vendors' },
		{ name: 'SazzadInvoice', url: '/sazzad_invoice' },
	]

	return (
		<div className='flex'>
			<div className='flex flex-col shadow bg-cyan-900 w-60'>
				<div className='space-y-3'>
					<div className='flex items-center p-3 mt-2 text-center'>
						<img
							className='w-20 mr-3 rounded-full'
							src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
							alt=''
						/>
						<h2 className='text-xl font-bold text-white '>User Name</h2>
					</div>
					<div className='flex-1'>
						<ul className='pt-2 pb-4 space-y-1 text-sm font-medium text-white'>
							{sideBarOptions.map((bar, index) => (
								<li
									className='p-1 transition duration-200 rounded-sm hover:bg-cyan-700'
									key={index}
								>
									<Link
										to={bar.url}
										className='flex items-center p-2 space-x-3 rounded-md'
									>
										<span>{bar.name}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
