import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useRouteLoaderData } from 'react-router-dom';

import CommonSection from '@components/CommonSection';
import Header from './Header';
import Footer from './Footer';
import { fetchCartData, sendCartData } from '@store/cart/cart-actions';
import { productActions } from '@store/products/productSlice';
import { getData } from '../services/api';
import ScrollToTop from '@components/ScrollToTop';

let isInitial = true;

function RootLayout() {
	const cart = useSelector((state) => state.cart);

	const { products } = useRouteLoaderData('root');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCartData());
		dispatch(productActions.setProductList({products: products}));
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<>
			{isHomePage ? (
				<Header />
			) : (
				<CommonSection title={location.pathname.substring(1)}>
					<Header />
				</CommonSection>
			)}
			<main>
				<Outlet />
			</main>
			<ScrollToTop />

			<Toaster
				position="top-right"
				reverseOrder={false}
				toastOptions={{
					duration: 1500,
				}}
			/>
			<Footer />
		</>
	);
}

export default RootLayout;
export const loader = () => {
	return getData();
};
