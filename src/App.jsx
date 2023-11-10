import { lazy, Suspense, useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';
import Home from './pages/Home'
import ShopLayout from './layouts/ShopLayout';
import { loader as productLoader } from './pages/Shop/ProductDetailPage';

const ProductGridPage = lazy(() => import('./pages/Shop/ProductGridPage'));
const ProductDetailPage = lazy(() => import('./pages/Shop/ProductDetailPage'));
const SearchProductsPage = lazy(() => import('./pages/Shop/ProductSearch'));
function App() {
  const router = createBrowserRouter(
		createRoutesFromElements(
			<Route id="root" loader={rootLoader}>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<ShopLayout />}>
						<Route index element={<ProductGridPage />} />
						<Route
							path=":productId"
							element={<ProductDetailPage />}
							loader={productLoader}
						/>
						<Route path="search" element={<SearchProductsPage />} />
					</Route>
				</Route>
			</Route>
		)
	);

  return (
    <>
      <RouterProvider
				router={router}
			/>
    </>
  )
}

export default App
