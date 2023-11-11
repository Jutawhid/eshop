import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import ProductDetail from '@features/ProductScreen/ProductDetail';
import { getDocumentById } from '@services/api';
import generateProducts from '@services/faker/products';
export default function ProductDetailPage() {
	const { products } = useRouteLoaderData('root');
	const product = generateProducts(1)[0];
	const productById = products[0];
	console.log('products', products[0].id);
	console.log('product', product);
	// const productById = useLoaderData();
	return <ProductDetail product={productById} />;
}

// export function loader({ params }) {
// 	const productbyId = getDocumentById(params.productId, 'products');
// 	if (!productbyId) {
// 		throw new Response('', {
// 			status: 404,
// 			statusText: 'Not Found',
// 		});
// 	}
// 	return productbyId;
// }
