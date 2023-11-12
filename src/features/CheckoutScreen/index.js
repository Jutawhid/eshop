import { Link, redirect, useSubmit } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { db, auth  } from '@services/firebase';
import { useState, useEffect } from "react";
import CartTotal from '@components/Cart/CartTotal';
import CheckoutForm from '@components/Form/CheckoutForm';
import PaymentMethod from '@components/Form/PaymentForm';
import { CheckoutSchema } from '@components/Form/ValidationSchema';
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { toastMessage } from '@utils/toastMessage';
import { useDispatch } from 'react-redux';
import { cartActions } from '@store/cart/cartSlice';
import { useNavigate  } from 'react-router-dom';
import Loader from '@components/UI/Loader';

export default function CheckoutScreen() {
	const submit = useSubmit();
	const [user, setUser] = useState(null);
	const [loader, setLoader] = useState(false);

	const cartItems = useSelector((state) => state.cart.items);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	let navigate = useNavigate();
	const initialValues = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		selectOption: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		createaccount: '',
		notes: '',
		paymentmethod: '',
	};
	const dispatch = useDispatch();
	useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log("user");
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

	const handleCheckout = async(values, actions) => {
		if(cartItems.length != 0) {
			submit(values, { method: 'post', action: '/checkout' });
		try {
			setLoader(true)
      // Create a new order document in Firestore
      const orderRef = await addDoc(collection(db, 'orders'), {
        ...values,
        cart: cartItems,
				totalAmount:totalAmount,
        timestamp: serverTimestamp(),
				user: user.email
      });

			dispatch(
				cartActions.clearCart()
			);

      console.log('Order placed successfully! Order ID:', orderRef.id);
			toastMessage('Order placed successfully! Order ID:', orderRef.id);
			setLoader(false)
			setTimeout(()=>{
				if(orderRef.id != null){
					navigate('/user-profile')
				}
			},500)
      // Additional actions after successful order submission
    } catch (error) {
			setLoader(false)
      console.error('Error placing order:', error);
    }
		actions.resetForm();
		} else {
			toastMessage('cart empty')
		}

	}

	return (
		<div className="container my-28">
			<section>
				{/* <p className="bg-sectionBg py-4 px-7 text-lg font-bold">
					<span className="">Returning customer ? </span>
					<Link
						to="/login"
						className="text-greenBtn"
					>
						Click here to login
					</Link>
				</p> */}
				{/* <p className="bg-sectionBg py-4 px-7 mt-7 text-lg font-bold">
					<span className="">Have a coupon ? </span>
					<button className="text-greenBtn">
						Click here to enter your code
					</button>
				</p> */}
			</section>
			<Formik
				initialValues={initialValues}
				validationSchema={CheckoutSchema}
				onSubmit={handleCheckout}
			>
				<Form>
					<section className="mt-14">
						<h4 className="font-bold md:text-2xl text-xl mb-8">
							Billing Details
						</h4>
						<CheckoutForm />
					</section>
					<section className="grid lg:grid-cols-12 grid-cols-1 gap-8 mt-20 ">
						<div className="lg:col-span-7 lg:pr-28">
							<h4 className="font-bold md:text-2xl text-xl mb-8">
								Payment Method
							</h4>
							<PaymentMethod />
						</div>
						<div className="lg:col-span-5 lg:w-full md:w-8/12 w-full ml-auto">
							<h4 className="font-bold md:text-2xl text-xl mb-8">
								Cart Totals
							</h4>
							<CartTotal
								items={cartItems}
								totalAmount={totalAmount}
							/>
						</div>
						{loader && <Loader type="section" />}
					</section>
				</Form>
			</Formik>
		</div>
	);
}

export const action = async ({ request }) => {
	const formData = Object.fromEntries(await request.formData());
	console.log('formData', formData);
	console.log('cartData', formData);
	return { checkout: 'ok' };
};
