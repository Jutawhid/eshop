import ProductList from '@features/ProductScreen/ProductList';
import { useSelector } from 'react-redux';
export default function ProductSection() {
	const products = useSelector((state) => state.products?.products);
	return (
		<div className="container my-28">
			<ProductList products={products} />
		</div>
	);
}
