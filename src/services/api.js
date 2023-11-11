import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import axios from "axios";
import generateProducts from './faker/products';
import getslideHeader from './faker/sliders';
import getPromotion from './faker/promotion';


export const getDocumentById = async (id, col) => {
	const docRef = doc(db, col, id);
	const docSnap = await getDoc(docRef);
	const obj = docSnap.data();
	obj.id = id;
	return obj ?? null;
};



export const getData = async() => {
	const products = await generateProducts(50);
	const promotions = await getPromotion();
	const slideHeader = await getslideHeader();

	return {
		products,
		promotions,
		slideHeader,
	};
};
