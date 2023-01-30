// make a json file for every data on this page
const invoiceData = {
	invoiceInfo: [
		{
			name: 'invoiceNumber',
			placeholder: '000562',
			type: 'text',
		},
		{ name: 'invoiceDate', placeholder: '11/05/2023', type: 'date' },
		{
			name: 'ApproximateDeliveryDate',
			placeholder: '11/05/2023',
			type: 'date',
		},
	],
	customerInfo: [
		{ name: 'name', type: 'text', placeholder: 'Sazzad Hossain' },
		{
			name: 'Address',
			type: 'text',
			placeholder: 'Ka-176/1, bottola, Khilkhet',
		},
		{ name: 'phone', type: 'tel', placeholder: '01515621167' },
		{ name: 'email', type: 'email', placeholder: 'tanimsazzad@gmail.com' },
	],
	products: [
		{
			productName: '',
			productQuantity: '',
			unitProce: '',
			size: '',
			ammount: '',
		},
		{
			productName: '',
			productQuantity: '',
			unitProce: '',
			size: '',
			ammount: '',
		},
	],
	balance: {
		subTotal: '',
		discount: '',
		shippingCharge: '',
		total: '',
	},
}

export { invoiceData }
