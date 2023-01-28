interface I_Product {
	item_group_id: string
	id: string
	title: string
	image_link: string
	description: string
	availability: string
	condition: string
	price: string
	link: string
	brand: string
	google_product_category: string
	fb_product_category: string
	sale_price: string
	sale_price_effective_date: string
	gender: string
	color: string
	size: string
	age_group: string
	material: string
	pattern: string
	shipping: string
	shipping_weight: string
	style: string
	custom_label_1: string
	PurchaseDate: string
	ProductName: string
	SKU: string
	ProductQuantity: string
	BuyingPricePerUnit: string
	ShippingOtherCostPerUnit: string
	TotalCostPerUnit: string
	TotalCost: string
	AvailableProducts: string
	RetailPrice: string
	Available_Products: string
}

interface I_ProductInputField {
	name: string
	type: string
	required: boolean
	placeholder: string
}
interface I_Order {
	customer: string
	orderedProuducts: {
		products: I_Product
		size: string
		discount: number
	}
}

interface I_Customer {
	name: string
	email: string
	password: string
	cart: string
	address: string
	phone: string
	products?: I_Product[]
	paymentDetail: string
	orders: I_Order[]
}

interface I_Cost {
	date: string
	type: string
	cost: number
	costSharedBy: string
}

interface I_MoneyCollection {
	date: string
	collectedBy: string
	merchent: string
	TotalAmount: number
	account: 'Bank' | 'Cash' | 'Bkash' | 'Rocket' | 'Others'
	remarks: string
}

interface I_Capital {
	investmentDate: string
	investmentBy: string
	investmentAmount: number
	remarks: string
	name: string
	totalAMountInvested: number
}

interface I_Invoice {
	invoiceNumber: string
	customer: I_Customer
	OrderedProducts: I_Product[]
	deliveryCharge: number
	advancePaid: number
	date: string
}

interface I_Sales {
	order_date: string
	ordered_products: [
		{
			product: I_Product[]
			size: string
			sku: string
			price: number
		}
	]
	customer: I_Customer
	invoice: I_Invoice
	shippingAgent: string
	deliveyDate: string
	MoneyReceived: number
	deliveryCharge: number
	total_due: number
	remarks: string
}

interface I_ShippingPartners {
	name: string
	address: string
	deliveryMens: string
	totalParcelGiven: number
	totalPercelDelivered: number
	totalBillPaid: number
	returnedParcelCOunt: number
	returnedParcelDate: string
}

interface I_Vendor {
	name: string
	address: string
}

export {
	I_Capital,
	I_Cost,
	I_Customer,
	I_Invoice,
	I_MoneyCollection,
	I_Order,
	I_Product,
	I_ProductInputField,
	I_Sales,
	I_ShippingPartners,
}
