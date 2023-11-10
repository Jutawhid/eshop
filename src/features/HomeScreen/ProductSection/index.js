import { useRouteLoaderData } from 'react-router-dom';
import ProductList from '@features/ProductScreen/ProductList';


export default function ProductSection() {
	const { products } = useRouteLoaderData('root');
	console.log('products', products);
	return (
		<div className="container my-28">
			<ProductList products={products} />
		</div>
	);
}
