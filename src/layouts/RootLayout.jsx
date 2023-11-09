import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getData } from '../services/api';
function RootLayout() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
export const loader = () => {
	return getData();
};
