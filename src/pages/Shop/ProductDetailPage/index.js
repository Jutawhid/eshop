import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import ProductDetail from '@features/ProductScreen/ProductDetail';
import { getDocumentById } from '@services/api';
import generateProducts from '@services/faker/products';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
export default function ProductDetailPage() {
	const products = useSelector((state) => state.products?.products);
	const params = useParams()

	// const { products } = useRouteLoaderData('root');
	// const product = generateProducts(1)[0];
	console.log('productId', params.productId);
	console.log('productId', products.filter(f=> f.id == params.productId));
	// const productById = products.filter(f=> f.id == params.productId);
	const dataObj = products.filter(f=> f.id == params.productId)
	const productById = dataObj[0]
	// const productById = products[0];
	return <ProductDetail product={productById} />;
}

export function loader({ params }) {

	const productId = params.productId;
	if (!productId) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Found',
		});
	}
	return productId;
}
