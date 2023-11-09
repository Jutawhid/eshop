import logoHeader01 from '../assets/logo.png';
import logoHeader02 from '../assets/logo01.png';



export const logo01 = logoHeader01;
export const logo02 = logoHeader02;
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