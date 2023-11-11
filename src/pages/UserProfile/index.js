import { useState, useEffect } from "react";
import Button from "@components/UI/Button";
import { auth } from "@services/firebase";
import { signOut } from "firebase/auth";
import * as cs from "@utils/constants";
import { db } from "@services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfileData] = useState([]);
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
  useEffect(() => {
    getUsersData();
    auth.onAuthStateChanged((user) => {
      // console.log("user");
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const authUser =  userProfile.filter((i) => i.uid == user?.uid)[0]
  // console.log("authUser", authUser);
  // console.log("UserData", userProfile.filter((i) => i.uid == user?.uid)[0]);
  return (
    <div className="container my-28">
      <div className="flex max-md:flex-col max-md:justify-center items-center gap-8">
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
    </div>
  );
}
