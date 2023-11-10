import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import axios from "axios";

export const getDocuments = async (col) => {
	const docsSnap = await getDocs(collection(db, col));
	let document = [];
	docsSnap.forEach((doc) => {
		document.push({ ...doc.data(), id: doc.id });
	});
	return document;
};

export const getDocumentById = async (id, col) => {
	const docRef = doc(db, col, id);
	const docSnap = await getDoc(docRef);
	const obj = docSnap.data();
	obj.id = id;
	return obj ?? null;
};
// async function loadProducts() {
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     const resData = await response.data;
//     return resData;
//   } catch (error) {
//     throw new Error("Could not fetch products");
//   }
// }
// async function loadCategories() {
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products/categories");
//     const resData = await response.data;
//     return resData;
//   } catch (error) {
//     throw new Error("Could not fetch products");
//   }
// }

export const getData = async () => {
  // const slideHeader = await getDocuments('slide-header');
  const slideHeader = [
    {
      subtitle: "100% genuine Products",
      "image-slide":
        "https://demo.themefreesia.com/idyllic-fashion/wp-content/uploads/sites/23/2017/08/slider-image-1.jpg",
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      id: "1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      subtitle: "100% genuine Products",
      "image-slide": "https://www.jssor.com/premium/fashion/img/plaza.jpg",
      desc: "You should eat at least 5 serves of vegetables and 2 serves of fruit each day. Choose different colours and varieties.",
      id: "2",
    },
    {
      desc: "We produce high quality, organically certified vegetables, herbs, eggs, fruit and pedigree pork at competitive prices.",
      "image-slide":
        "https://lalunafashion.gr/wp-content/uploads/2021/11/LaLUNA-Website_SLIDER-1-1-1920x870.jpg",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "100% genuine Products",
      id: "3",
    },
  ];
  const promotions = [
    {
      subtitle: "Shoe & Shoe",
      type: "hot sales",
      title: "Big sale",
      image:
        "https://freepngimg.com/thumb/shoes/27695-7-sneaker-transparent.png",
      id: "1",
    },
    {
      type: "DSLR Camera",
      image:
        "https://freepngimg.com/thumb/photo%20camera/2-photo-camera-png-image.png",
      title: "save 20%",
      subtitle: "every order",
      id: "2",
    },
    {
      title: "Big sale",
      subtitle: "Mobile",
      image:
        "https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png",
      type: "hot sales",
      id: "3",
    },
  ];

  const products = await getDocuments('products');
  // const categories = await loadCategories();
  return {
    slideHeader,
    promotions,
    products,
    // categories
  };
};
