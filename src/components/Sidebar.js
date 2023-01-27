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
	]

	return (
		<div className="flex">
			<div className="flex flex-col h-screen bg-cyan-900	 shadow w-60">
				<div className="space-y-3">
					<div className="flex items-center text-center">
						<img src="https://unsplash.com/photos/iEEBWgY_6lA" alt="" />
						<h2 className="text-xl font-bold text-white ">User Name</h2>
					</div>
					<div className="flex-1">
						<ul className="pt-2 pb-4 space-y-1 text-sm text-white font-medium">

							{
								sideBarOptions.map((bar, index) =>

									<li className="rounded-sm hover:bg-cyan-700 transition duration-200 p-1" key={index}>
										<Link to={bar.url} className="flex items-center p-2 space-x-3 rounded-md">
											<span>{bar.name}</span>
										</Link>
									</li>
								)
							}


						</ul>
					</div>
				</div>
			</div>

		</div >
	)
}

export default Sidebar
