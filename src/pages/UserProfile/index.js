import { useState, useEffect, useRef } from "react";
import Button from "@components/UI/Button";
import { auth } from "@services/firebase";
import { signOut } from "firebase/auth";
import * as cs from "@utils/constants";
import { db } from "@services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Title from "@components/Title";
export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfileData] = useState([]);
  const [userOrder, setOrdersData] = useState([]);
  const [userOrderList, setOrdersListData] = useState([]);
  let orderRef = useRef(true);
  const getUsersData = async () => {
    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);

      const usersData = [];
      usersSnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUserProfileData(usersData);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  const getOudersData = async () => {
    try {
      const ordersCollection = collection(db, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);

      const ordersData = [];
      ordersSnapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() });
      });
      setOrdersData(ordersData);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  useEffect(() => {
    getUsersData();
    getOudersData();
    auth.onAuthStateChanged((user) => {
      // console.log("user");
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  useEffect(() => {
    if (orderRef.current == true) {
      setOrdersListData(userOrder?.filter((i) => i?.user == authUser?.email));
      orderRef.current = false;
    }
  }, [userOrder]);

  const authUser = userProfile.filter((i) => i.uid == user?.uid)[0];
  // console.log("authUser", authUser);
  console.log("orderRef.current", orderRef.current);
  console.log(
    "userOrder",
    userOrder.map((i) => i)
  );
  console.log(
    "userOrderList",
    userOrderList.map((i) => i)
  );
  // console.log("UserData", userProfile.filter((i) => i.uid == user?.uid)[0]);
  return (
    <div className="container">
      <div className="flex max-md:flex-col max-md:justify-center items-center gap-8 mt-10">
        <img alt="avatar_default" src={cs.user} className="h-36 w-36" />
        <div className="max-md:basis-full">
          <div className="flex items-center mb-1 max-md:justify-center">
            <h3 className="md:text-2xl text-xl font-bold">User Name:</h3>
            <span className="ml-2 md:text-xl text-lg relative md:top-[2px]">
              {authUser?.displayName}
            </span>
          </div>
          <div className="flex items-center max-md:justify-center">
            <h3 className="md:text-2xl text-xl font-bold">Email:</h3>
            <span className="ml-2 md:text-xl text-lg relative md:top-[2px]">
              {authUser?.email}
            </span>
          </div>
        </div>
      </div>
      <Button
        className="btn-animated max-md:w-full mt-10"
        onClick={() => {
          signOut(auth)
            .then(() => {
              console.log("user signed out");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }}
      >
        <span className="btn-animated-text">Log out</span>
      </Button>
      <Title title="My Orders" />
      <div className="flex flex-col mb-5">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Order Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Tracking
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {userOrder.map((item, index) =>
                    item.user == authUser.email ? (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item?.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">

                            {item?.cart?.map((cartItem, index) => {
                              return (
                                <>
                                  <img src={cartItem?.image} width="30" height="30" className="px-1 py-1"/>
                                </>
                              );
                            })}

                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <ul>
                            {item?.cart?.map((cartItem, index) => {
                              return (
                                <>
                                  <li>{cartItem?.title}</li>
                                </>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <ul>
                            {item?.cart?.map((cartItem, index) => {
                              return (
                                <>
                                  <li>{cartItem?.quantity}</li>
                                </>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          <ul>
                            {item?.cart?.map((cartItem, index) => {
                              return (
                                <>
                                  <li>{cartItem?.totalPrice} $</li>
                                </>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item?.totalAmount} $
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                            Order processing
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Track order
                          </a>
                        </td>
                      </tr>
                    ) : (
                      <></>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
