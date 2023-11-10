import logoHeader01 from '../assets/logo.png';
import logoHeader02 from '../assets/logo01.png';



export const logo01 = logoHeader01;
export const logo02 = logoHeader02;
export const labelProduct = [
	{ id: 1, label: 'food & drinks' },
	{ id: 2, label: 'vegetables' },
	{ id: 3, label: 'dried food' },
	{ id: 4, label: 'bread & cake' },
	{ id: 5, label: 'fish & meat' },
	{ id: 6, label: 'fruits' },
];
// Navbar
export const navbarList = [
	{
		id: 1,
		title: 'home',
		url: '/',
		parent_id: null,
	},

	{
		id: 2,
		title: 'about',
		url: '/about',
		parent_id: 1,
	},
	{
		id: 3,
		title: 'shop',
		url: '/shop',
		parent_id: 1,
	},
	{
		id: 4,
		title: 'contact',
		url: '/contact',
		parent_id: 1,
	}
];
export const linkList = [
	{ id: 1, title: 'About', url: '/about' },
	{ id: 2, title: 'shop', url: '/shop' },
	{ id: 3, title: 'Contact-us', url: '/contact' },
];

export const linkFooter = [
	{ id: 1, title: 'Order tracking', url: '/user-profile' },
	{ id: 2, title: 'Promotional Offers', url: '/shop' },
];

export const userList = [
	{
		id: 1,
		title: 'Sign in',
		url: '/login',
	},
	{
		id: 2,
		title: 'Register',

		url: '/register',
	},
	{
		id: 3,
		title: 'My Account',
		url: '/user-profile',
	},
	{
		id: 4,
		title: 'Wishlist',
		url: '/coming-soon',
	},
];

export const countryOption = [
	{ key: 'Select country', value: '' },
	{ key: 'Australia', value: 'Australia' },
	{ key: 'Bangladesh', value: 'Bangladesh' },
	{ key: 'France', value: 'France' },
	{ key: 'United Kingdom (UK)', value: 'United Kingdom (UK)' },
	{ key: 'China', value: 'China' },
	{ key: 'Saudi Arabia', value: 'Saudi Arabia' },
	{ key: 'Morocco', value: 'Morocco' },
	{ key: 'United States (US)', value: 'United States (US)' },
];
export const createaccount = [
	{
		key: 'Create an account ?',
		value: '0',
	},
];

export const saveinfocomment = [
	{
		key: 'Save my name, email, and website in this browser for the next time I comment.',
		value: '0',
	},
];

export const servicetype = [
	{
		key: 'Select Service Type',
		value: '',
	},
	{
		key: 'Gardening',
		value: 'Gardening',
	},
	{
		key: 'Landscaping',
		value: 'Landscaping',
	},
	{
		key: 'Vegetables Growing',
		value: 'Vegetables Growing',
	},
	{
		key: 'Land Preparation',
		value: 'Land Preparation',
	},
];

export const paymentmethods = [
	{
		id: 1,
		value: 'Check payments',
		key: 'Check payments',
		img: false,
		note: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
	},
	{
		id: 2,
		value: 'Cash on delivery',
		key: 'Cash on delivery',
		img: false,
		note: 'Pay with cash upon delivery.',
	},
	{
		id: 3,
		value: 'Paypal',
		key: 'Paypal',
		img: 'https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/payment-3.png',
		note: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
	},
];