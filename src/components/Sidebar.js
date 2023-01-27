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
		<nav className='bg-green-500 h-screen w-60'>
			<h2 className='text-xl font-bold'>Dashboard</h2>
			<ul>
				{sideBarOptions.map((item, index) => (
					<li key={index}>
						<Link to={item.url}>
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Sidebar
